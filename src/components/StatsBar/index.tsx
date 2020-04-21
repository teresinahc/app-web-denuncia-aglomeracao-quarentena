import React, { useState } from 'react'
import {
  Curtain,
  DownButton,
  Stats,
  DisplayStats,
  Title,
  Info,
  Details
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faFileContract
} from '@fortawesome/free-solid-svg-icons'

const StatsBar: React.FC = () => {
  const [state, setState] = useState(false)

  return (
    <Curtain state={state}>
      <h2>Estatísticas do Brasil</h2>

      <DisplayStats>
        <Stats>
          <Title>
            <FontAwesomeIcon icon={faFileContract} /> Denúncias
          </Title>
          <Info>150235</Info>
          <Details>Hoje: 120</Details>
        </Stats>
        <Stats>
          <Title>
            <FontAwesomeIcon icon={faFileContract} /> Denúncias
          </Title>
          <Info>150235</Info>
          <Details>Hoje: 120</Details>
        </Stats>
        <Stats>
          <Title>
            <FontAwesomeIcon icon={faFileContract} /> Denúncias
          </Title>
          <Info>150235</Info>
          <Details>Hoje: 120</Details>
        </Stats>
        <Stats>
          <Title>
            <FontAwesomeIcon icon={faFileContract} /> Denúncias
          </Title>
          <Info>150235</Info>
          <Details>Hoje: 120</Details>
        </Stats>
      </DisplayStats>

      <DownButton onClick={() => setState(!state)}>
        <FontAwesomeIcon icon={faChevronDown} />
      </DownButton>
    </Curtain>
  )
}

export default StatsBar
