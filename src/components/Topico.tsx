import React from "react";
import styled from "styled-components";

const Titulo = styled.h2`
  width: 85%;
  color: black;

  font-family: "Roboto";
  font-weight: 500;
  font-size: 19px;

  margin-bottom: 0;
  margin-top: 0;

  letter-spacing: 1.25px;
`;

const Bola = styled.div`
  background: #ef3535;

  height: 20px;
  width: 20px;
  border-radius: 50%;

  margin-right: 10px;
  margin-left: -6px;
`;

const Context = styled.div`
  display: flex;

  align-items: center;
  width: 90%;
`;

type TopicoProps = {
  children: React.ReactChild;
};
export const Topico: React.FC<TopicoProps> = ({ children }) => {
  return (
    <Context>
      <Bola />
      <Titulo>{children}</Titulo>
    </Context>
  );
};
