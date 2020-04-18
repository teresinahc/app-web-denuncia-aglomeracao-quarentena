import React from "react";
import styled from "styled-components";
import { Red } from "./Body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  hora: string;
  endereco: string;
  categoria: string;
  onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
};

const Denuncia: React.FC<Props> = ({ hora, endereco, categoria, onClick }) => {
  return (
    <Body onClick={onClick}>
      <Hora>{hora}</Hora>
      <Box>
        <div>
          <p>
            Endereço: <span>{endereco}</span>
          </p>
          <p>
            Categoria: <Red>{categoria}</Red>
          </p>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
      </Box>
    </Body>
  );
};

export default Denuncia;

const Body = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const Hora = styled.p`
  color: #c63737;
  font-size: 12px;
  margin-right: 7px;
`;

const Box = styled.div`
  background: #ffffff;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 78%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  span {
    font-weight: normal;
  }
`;
