import React from "react";
import NavBar from "../components/NavBar";
import { Body } from "../components/Body";
import { Topico } from "../components/Topico";
import styled from "styled-components";
import Denuncia from "../components/Denuncia";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  let history = useHistory();

  function denunciar() {
    setTimeout(() => {
      history.push("/denunciar");
    }, 500);
  }
  function navigate(url) {
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
          />
          <Denuncia
            hora="12:43 PM"
            endereco="Rua dos Bobos - 789"
            categoria="Festa"
          />
        </Denuncias>
      </Display>

      <Fab onClick={denunciar} id="fab" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
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
