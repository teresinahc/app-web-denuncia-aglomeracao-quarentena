import React from 'react'
import styled from 'styled-components'
import Denuncia from '../components/Denuncia'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
  const history = useHistory()
  function navigate(url: string) {
    history.push(url)
  }

  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  return (
    <Display>
      {arr.map((i, j) => {
        console.log('oi')
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

const Display = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`
