import React from 'react'
import { AppBar, AddButton, NavRouter } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faInfo } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line no-unused-vars
import { StateInterface } from '../../utils/types'

type Props = {
  toggleTheme(): void
  state: StateInterface
}
const NavBar: React.FC<Props> = ({ toggleTheme, state }) => {
  return (
    <AppBar>
      <NavRouter activeClassName="active" exact to="/">
        <FontAwesomeIcon icon={faHome} />
      </NavRouter>

      <AddButton onClick={() => state.toggleModal()}>
        <FontAwesomeIcon icon={faPlus} />
      </AddButton>

      <NavRouter activeClassName="active" exact to="/sobre">
        <FontAwesomeIcon icon={faInfo} />
      </NavRouter>
    </AppBar>
  )
}

export default NavBar
