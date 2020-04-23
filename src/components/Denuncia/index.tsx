import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Box, Hora } from './styles'
import { Red } from '../../styles/Body'

type Props = {
  hora: string
  endereco: string
  categoria: string
  onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}

const Denuncia: React.FC<Props> = ({ hora, endereco, categoria, onClick }) => (
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

export default Denuncia
