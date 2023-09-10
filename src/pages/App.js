import { useState } from "react";
import { api } from "../services/api";
import gitLogo from "../assets/gitHub.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import Buttom from "../components/Buttom";
import axios from "axios";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);
        if (!isExist) {
          const { data: languagesData } = await axios.get(data.languages_url);
          const languages = Object.keys(languagesData);
          const repoWithLanguages = { ...data, languages };
          setRepos((prev) => [...prev, repoWithLanguages]);
          setCurrentRepo("");
          return;
        }
      }
    } catch (error) {
      alert(
        "Ocorreu um erro ao buscar as informações do repositório, Verifique!"
      );
    }
  };

  const handleRemoveRepo = (id) => {
    if (id) {
      setRepos((prev) => prev.filter((repo) => repo.id !== id));
      return;
    }
  };

  return (
    <Container>
      <img src={gitLogo} alt="Github logo" width={72} height={72} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Buttom onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
