import React, { useEffect } from 'react'
import styled from 'styled-components'
import Denuncia from '../components/Denuncia'
import { useHistory } from 'react-router-dom'
import api from '../utils/api'
// eslint-disable-next-line no-unused-vars
import { Complaint, StateInterface } from '../utils/types'
import { observer } from 'mobx-react'

type Props = {
  state: StateInterface
}

const HomePage: React.FC<Props> = ({ state }) => {
  const history = useHistory()

  useEffect(() => {
    api.get('/complaints').then((res) => {
      const complaints: Complaint[] = res.data
      state.setDenuncias(complaints)
    })
  }, [])

  return (
    <Display>
      <h2>#ficaemcasa - Denúncias</h2>
      {state &&
        state.denuncias.map((complaint: Complaint, index: number) => {
          return (
            <Denuncia
              key={index}
              horario={complaint.createdAt}
              endereco={complaint.address}
              categoria={complaint.category}
              onClick={() => history.push('/denuncia/' + complaint.id)}
            />
          )
        })}
    </Display>
  )
}

export default observer(HomePage)

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
