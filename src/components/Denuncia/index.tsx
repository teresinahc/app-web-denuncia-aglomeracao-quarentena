import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Box, Hora } from './styles'
import { Red } from '../../styles/Body'

type Props = {
  horario: string
  endereco: string
  categoria: string
  onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}

const Denuncia: React.FC<Props> = ({
  horario,
  endereco,
  categoria,
  onClick
}) => {
  const date = new Date(horario)
  const hora = date.getHours() + ':' + date.getMinutes()
  const dia = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

  return (
    <Box onClick={onClick}>
      <div>
        <p>
          Endereço: <span>{endereco}</span>
        </p>
        <p>
          Categoria: <Red>{categoria}</Red>
        </p>
        <Hora>
          Enviada às {hora}h do dia {dia}
        </Hora>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </Box>
  )
}

export default Denuncia
