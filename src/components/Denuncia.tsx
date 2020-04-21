import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Red } from '../styles/Body'

type Props = {
  hora: string
  endereco: string
  categoria: string
  onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}

const Denuncia: React.FC<Props> = ({ hora, endereco, categoria, onClick }) => {
  return (
    <Box onClick={onClick}>
      <div>
        <p>
          Endereço: <span>{endereco}</span>
        </p>
        <p>
          Categoria: <Red>{categoria}</Red>
        </p>
        <Hora>Enviada às {hora}</Hora>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </Box>
  )
}

export default Denuncia

const Box = styled.div`
  background: #f8f8f8;
  box-shadow: -4px -4px 7px #ffffff, 4px 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;

  p {
    margin: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  span {
    font-weight: normal;
  }
`

const Hora = styled.p`
  color: rgba(0, 0, 0, 0.28);
  font-weight: normal !important;
`
