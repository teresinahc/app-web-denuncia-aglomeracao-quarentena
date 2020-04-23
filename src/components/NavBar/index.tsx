import React from 'react'
import { AppBar, AddButton, NavRouter } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faInfo } from '@fortawesome/free-solid-svg-icons'

type Props = {
  toggleTheme(): void
}
const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <AppBar>
      <NavRouter activeClassName="active" exact to="/">
        <FontAwesomeIcon icon={faHome} />
      </NavRouter>

      <AddButton>
        <FontAwesomeIcon icon={faPlus} />
      </AddButton>

      <NavRouter activeClassName="active" exact to="/sobre">
        <FontAwesomeIcon icon={faInfo} />
      </NavRouter>
    </AppBar>
  )
}

export default NavBar
