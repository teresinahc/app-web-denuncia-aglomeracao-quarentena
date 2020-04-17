import styled, { css } from "styled-components";

export const SplashBody = styled.div`
  background-color: #ef3535;
  height: 100vh;
  width: 100vw;

  background-image: url("./images/splash1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

type ScreenProps = {
  bg: string;
};
export const Screen = styled.div`
  background-color: #ef3535;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-position: center;
  background-size: 100% 50%;
  background-repeat: no-repeat;
  ${(props: ScreenProps) =>
    props.bg &&
    css`
      background-image: url(${props.bg});
    `}

  h2 {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: normal;
    color: white;

    text-align: center;
    max-width: 400px;
    margin: 20px;
    margin-top: 50px;
  }
`;
