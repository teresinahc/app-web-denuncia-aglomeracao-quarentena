import React from 'react'
import { Context, Bola, Titulo } from './styles'

interface TopicoProps {
  children: React.ReactChild
}

const Topico: React.FC<TopicoProps> = ({ children }) => {
  return (
    <Context>
      <Bola />
      <Titulo>{children}</Titulo>
    </Context>
  )
}

export default Topico
