import React from "react";
import NavBar from "../components/NavBar";
import { Body } from "../components/Body";
import { Topico } from "../components/Topico";
import styled from "styled-components";
import Denuncia from "../components/Denuncia";
import { useHistory } from "react-router-dom";
import FAB from "../components/FAB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  let history = useHistory();

  function denunciar() {
    setTimeout(() => {
      history.push("/denunciar");
    }, 500);
  }
  function navigate(url: string) {
    history.push(url);
  }

  return (
    <Body>
      <NavBar title="Denúncias" />
      <Topico>HOJE</Topico>
      <Display>
        <hr />
        <Denuncias>
          <Denuncia
            hora="12:43 PM"
            endereco="Rua dos Bobos - 789"
            categoria="Festa"
            onClick={() => navigate("/denuncia/" + 1478)}
          />
          <Denuncia
            hora="12:43 PM"
            endereco="Rua dos Bobos - 789"
            categoria="Festa"
            onClick={() => navigate("/denuncia/" + 1478)}
          />
        </Denuncias>
      </Display>

      <Topico>ONTEM</Topico>
      <Display>
        <hr />
        <Denuncias>
          <Denuncia
            hora="12:43 PM"
            endereco="Rua dos Bobos - 789"
            categoria="Festa"
            onClick={() => navigate("/denuncia/" + 1478)}
          />
          <Denuncia
            hora="12:43 PM"
            endereco="Rua dos Bobos - 789"
            categoria="Festa"
            onClick={() => navigate("/denuncia/" + 1478)}
          />
          <Denuncia
            hora="12:43 PM"
            endereco="Rua dos Bobos - 789"
            categoria="Festa"
            onClick={() => navigate("/denuncia/" + 1478)}
          />
        </Denuncias>
      </Display>

      <FAB onClick={denunciar}>
        <FontAwesomeIcon icon={faPlus} />
      </FAB>
    </Body>
  );
}

const Display = styled.div`
  width: 90%;
  display: flex;
`;

const Denuncias = styled.div`
  width: 99%;
`;
