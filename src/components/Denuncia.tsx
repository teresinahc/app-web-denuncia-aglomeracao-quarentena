import React from 'react'
import styled from 'styled-components'
import { Red } from './Body'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
  box-shadow: -4px -4px 9px #ffffff, 4px 4px 9px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 15px 0;

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
  font-weight: normal!important;
`
