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
        <p>Enviada às {hora}</p>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </Box>
  )
}

export default Denuncia

const Box = styled.div`
  background: #ffffff;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25);
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
