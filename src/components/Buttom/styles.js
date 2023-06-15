import styled from "styled-components";

export const ButtomContainer = styled.button`
  background-color: #fafafa;
  border-radius: 20px;
  border: 2px solid #fff;

  font-weight: bold;
  font-size: 16px;
  padding: 10px;

  height: 62px;
  width: 82vw;
  max-width: 400px;

  margin: 20px auto;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 1px #ffffff80;
    transition: 0.2s ease-in-out;
  }
`;
