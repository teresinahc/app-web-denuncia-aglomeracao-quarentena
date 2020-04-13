import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function SplashScreen() {
  function removeSplash() {
    localStorage.setItem("splash_screen", true);
    window.location.reload();
  }

  return (
    <Body>
      <Title>#FIQUEEMCASA</Title>
      <Text>
        A OMS (Organização Mundial de Saúde) declarou que o surto do novo
        coronavírus constitui uma Emergência de Saúde Pública de Importância
        Internacional.
      </Text>

      <Houses>
        <img src="./images/house.png" alt="Casa" />
      </Houses>

      <Text>
        Ajude e denuncie aglomerações durante a quarentena devido ao COVID-19.
      </Text>

      <Fab onClick={removeSplash} color="primary" aria-label="add">
        <ArrowForwardIosIcon />
      </Fab>
    </Body>
  );
}

const Body = styled.div`
  height: 100vh;
  width: 100%;

  background: #fff5f5;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 500px;

  button {
    margin-bottom: 50px;
    background-color: #ef3535;

    &:hover {
      background-color: #ca3333;
    }
  }
`;

const Title = styled.h1`
  font-family: "Maven Pro";
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;

  color: #ff0000;

  &::before {
    content: "#FIQUEEMCASA";
    position: absolute;

    font-size: 40px;
    color: rgba(255, 0, 0, 0.06);
    filter: blur(2px);

    top: 15px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

const Text = styled.p`
  width: 80%;

  @media (max-width: 425px) {
    width: 90%;
  }

  font-family: Maven Pro;
  font-weight: 300;
  font-size: 18px;

  text-align: center;
  letter-spacing: 2.25px;

  color: #000000;
`;

const Houses = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url("./images/houses.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
