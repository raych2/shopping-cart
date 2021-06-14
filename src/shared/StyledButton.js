import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 3px;
  padding: 10px;
  font-size: 1em;
  text-align: center;
  width: 20vw;
  color: #fff;
  background-color: #000;
  border-color: #000;
  @media (max-width: 450px) {
    width: 40vw;
  }
`;

export default StyledButton;
