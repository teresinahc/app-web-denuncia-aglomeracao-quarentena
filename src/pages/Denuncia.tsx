import React from 'react'
import { Body, Red } from '../components/Body'
import styled, { css } from 'styled-components'
import Mapa from '../components/Map'

export default function DenunciaPage() {
  return (
    <Body>
      <h1>Título | Sem título</h1>
      <Descricao>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet
      </Descricao>

      <Images>
        <Image src={process.env.PUBLIC_URL + '/favicon.ico'} />
        <Image src={process.env.PUBLIC_URL + '/logo192.png'} />
        <Image src={process.env.PUBLIC_URL + '/logo192.png'} />
      </Images>

      <Info>
        <p>
          Endereço: <span>Rua do Bobo - 789</span>
        </p>
        <p>
          Categoria: <Red>Festa</Red>
        </p>
        <p>
          Horário: <span>12:43 - 15/04/2020</span>
        </p>
      </Info>

      <Mapa />
    </Body>
  )
}

const Descricao = styled.p`
  width: 90%;
  font-size: 20px;
  color: #3e3e3e;
`

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`

type ImageProps = {
  src: string
}
const Image = styled.div`
  height: 78px;
  width: 78px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props: ImageProps) =>
    props.src &&
    css`
      background-image: url(${props.src});
    `}
`

const Info = styled.div`
  width: 95%;
  margin-top: 20px;

  p {
    font-weight: bold;
    margin: 5px 0;
  }

  span {
    font-weight: normal;
  }
`
