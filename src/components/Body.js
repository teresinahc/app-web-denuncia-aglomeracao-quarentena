import styled from "styled-components";

export const Body = styled.div`
  height: 100vh;
  width: 100vw;

  font-family: "Roboto";

  background: #f8f8f8;
  background-image: url("./images/nuvem.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;

  display: flex;
  flex-direction: column;
  align-items: center;

  #fab {
    position: absolute;
    right: 30px;
    bottom: 30px;
    background-color: #ef3535;

    &:hover {
      background-color: #ca3333;
    }
  }
`;

export const Red = styled.b`
  color: #ef3535;
`;
