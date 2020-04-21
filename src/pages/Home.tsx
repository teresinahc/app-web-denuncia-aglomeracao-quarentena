import React from 'react'
import { Body } from '../components/Body'
import styled from 'styled-components'
import Denuncia from '../components/Denuncia'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
  const history = useHistory()
  function navigate(url: string) {
    history.push(url)
  }

  return (
    <Body>
      <Display>
        <Denuncia
          hora="12:43 PM"
          endereco="Rua dos Bobos - 789"
          categoria="Festa"
          onClick={() => navigate('/denuncia/' + 1478)}
        />
        <Denuncia
          hora="12:43 PM"
          endereco="Rua dos Bobos - 789"
          categoria="Festa"
          onClick={() => navigate('/denuncia/' + 1478)}
        />
        <Denuncia
          hora="12:43 PM"
          endereco="Rua dos Bobos - 789"
          categoria="Festa"
          onClick={() => navigate('/denuncia/' + 1478)}
        />
        <Denuncia
          hora="12:43 PM"
          endereco="Rua dos Bobos - 789"
          categoria="Festa"
          onClick={() => navigate('/denuncia/' + 1478)}
        />
        <Denuncia
          hora="12:43 PM"
          endereco="Rua dos Bobos - 789"
          categoria="Festa"
          onClick={() => navigate('/denuncia/' + 1478)}
        />
      </Display>
    </Body>
  )
}

const Display = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`
