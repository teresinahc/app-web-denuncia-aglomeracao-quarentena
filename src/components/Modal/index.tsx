import React, { useState } from 'react'
import { Container, ModalBox } from './styles'
// eslint-disable-next-line no-unused-vars
import { StateInterface } from '../../utils/types'
import { observer } from 'mobx-react'

type Props = {
  state: StateInterface
}
const Modal: React.FC<Props> = ({ state }) => {
  const [onModal, setOnModal] = useState(false)
  function closeModal() {
    if (!onModal) state.toggleModal()
  }

  return (
    <Container onClick={closeModal} hidden={!state.modal}>
      <ModalBox
        onPointerEnter={() => setOnModal(true)}
        onPointerLeave={() => setOnModal(false)}
      >
        oi
      </ModalBox>
    </Container>
  )
}

export default observer(Modal)
