import React from 'react'
import styled from 'styled-components'
import Denuncia from '../components/Denuncia'
import { useHistory } from 'react-router-dom'

const HomePage: React.FC = () => {
  const history = useHistory()
  function navigate(url: string) {
    history.push(url)
  }

  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  return (
    <Display>
      <h2>#ficaemcasa - Denúncias</h2>
      {arr.map((i, j) => {
        return (
          <Denuncia
            key={j}
            hora="12:43 PM"
            endereco="Rua dos Bobos - 789"
            categoria="Festa"
            onClick={() => navigate('/denuncia/' + 1478)}
          />
        )
      })}
    </Display>
  )
}

export default HomePage

const Display = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 18px;
    margin-bottom: 6px;
    width: 90%;
    font-weight: normal;
    color: ${(props) => props.theme.colors.primary};
  }
`
