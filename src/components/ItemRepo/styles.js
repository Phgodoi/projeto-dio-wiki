import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  h3::first-letter {
    text-transform: uppercase;
  }

  span {
    font-size: 18px;
    color: #fafafa60;
    margin: 5px;
  }

  p {
    color: #fff;
    font-size: 20px;
    margin: 15px 5px;
  }

  p::first-letter {
    text-transform: uppercase;
  }

  ul {
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
  }
  li {
    padding: 5px;
    list-style: none;
  }

  a {
    display: flex;
    text-decoration: none;
    font-size: 16px;
    max-width: 110px;
    padding: 5px;
    font-weight: 600;
    color: #fafa;
  }

  button {
    color: #ff0000;
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid #ff0000;

    font-weight: bold;
    font-size: 12px;
    padding: 5px;

    width: 5vw;
    min-width: 100px;
    margin: 5px auto;
    box-sizing: border-box;
  }

  button:hover {
    cursor: pointer;
    background-color: #ff0000;
    color: #fff;
    box-shadow: 0px 0px 10px 4px #ff000080;
    transition: 0.2s ease-in-out;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }

`;
