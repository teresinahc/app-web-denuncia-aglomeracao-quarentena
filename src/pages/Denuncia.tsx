import React from 'react'
import styled, { css } from 'styled-components'
import Mapa from '../components/Map'
import { Red } from '../styles/Body'

const DenunciaPage: React.FC = () => (
  <>
    <Title>Título | Sem título</Title>
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
  </>
)

export default DenunciaPage

const Title = styled.h1`
  margin-top: 20px;
  font-size: 25px;
`

const Descricao = styled.p`
  width: 90%;
  font-size: 16px;
  color: #3e3e3e;
  margin: 10px 0;
`

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  background-color: #f2f2f2;
  width: 90%;
  height: 100px;
  align-items: center;
  border-radius: 15px;
`

type ImageProps = {
  src: string
}
const Image = styled.div`
  height: 70px;
  width: 70px;
  justify-self: center;
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
