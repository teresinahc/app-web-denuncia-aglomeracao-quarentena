import React from 'react'
import { AppBar, NavButton, AddButton } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faInfo } from '@fortawesome/free-solid-svg-icons'

type Props = {
  toggleTheme(): void
}

const path = window.location.pathname.replace(
  '/app-web-denuncia-aglomeracao-quarentena',
  ''
)

function checkRoute(route: string) {
  if (route === path) {
    return true
  } else {
    return false
  }
}

const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  const home = checkRoute('/')
  const sobre = checkRoute('/sobre')

  return (
    <AppBar>
      <NavButton active={home}>
        <FontAwesomeIcon icon={faHome} />
      </NavButton>

      <AddButton>
        <FontAwesomeIcon icon={faPlus} />
      </AddButton>

      <NavButton active={sobre}>
        <FontAwesomeIcon icon={faInfo} />
      </NavButton>
    </AppBar>
  )
}

export default NavBar
