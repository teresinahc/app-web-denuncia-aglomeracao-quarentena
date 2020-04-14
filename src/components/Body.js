import styled from "styled-components";

export const Body = styled.div`
  height: 100vh;
  width: 100vw;

  background: #f8f8f8;
  background-image: url("./images/nuvem.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 500px;

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
