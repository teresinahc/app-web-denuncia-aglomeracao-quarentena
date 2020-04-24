import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Denuncia from '../components/Denuncia'
import { useHistory } from 'react-router-dom'
import api from '../utils/api'
// eslint-disable-next-line no-unused-vars
import { Complaint } from '../utils/types'

const HomePage: React.FC = () => {
  const [state, setState] = useState<Complaint[]>([])
  const history = useHistory()

  useEffect(() => {
    api.get('/complaints').then((res) => {
      const complaints: Complaint[] = res.data
      setState(complaints)
    })
  }, [])

  return (
    <Display>
      <h2>#ficaemcasa - Denúncias</h2>
      {state &&
        state.map((complaint, index) => {
          return (
            <Denuncia
              key={index}
              horario={complaint.date_time}
              endereco={complaint.address}
              categoria={complaint.category}
              onClick={() => history.push('/denuncia/' + complaint.id)}
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
