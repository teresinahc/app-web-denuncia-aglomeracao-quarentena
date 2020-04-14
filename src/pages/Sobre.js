import React from "react";
import { Topico } from "../components/Topico";
import { Body } from "../components/Body";
import NavBar from "../components/NavBar";
import styled from "styled-components";

export default function SobrePage() {
  return (
    <Body>
      <NavBar title="Sobre" />

      <Topico>Sobre o app</Topico>
      <Descricao>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
        ipsum dolor sit amet
      </Descricao>

      <Topico>Quem somos</Topico>
      <Descricao>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
        ipsum dolor sit amet
      </Descricao>

      <Topico>Contribuidores</Topico>
      <Descricao>
        Ana Paula Mendes - Idealizadora
        <br />
        Sampaio Leal - Front/UI
        <br />
        Max Lima - Mobile/Back
      </Descricao>
    </Body>
  );
}

const Descricao = styled.p`
  width: 90%;
`;
