import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, onRemove}) {
const handleRemove = () => {
  onRemove(repo.id)
}

  return (
    <ItemContainer  >
      <h3>{repo.name}</h3>
      <span>{repo.full_name}</span>
      <p>{repo.description}</p>
      <p className="listName">Linguagens:</p>
      <ul>
        {repo.languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Ver repositório
      </a>
      <button href="#"  onClick={handleRemove}>
        Remover
      </button>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
