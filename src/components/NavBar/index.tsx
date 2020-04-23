import React from 'react'
import { AppBar, NavButton, AddButton } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faInfo } from '@fortawesome/free-solid-svg-icons'

type Props = {
  toggleTheme(): void
}

const NavBar: React.FC<Props> = ({ toggleTheme }) => (
  <AppBar>
    <NavButton active>
      <FontAwesomeIcon icon={faHome} />
    </NavButton>

    <AddButton>
      <FontAwesomeIcon icon={faPlus} />
    </AddButton>

    <NavButton>
      <FontAwesomeIcon icon={faInfo} />
    </NavButton>
  </AppBar>
)

export default NavBar
