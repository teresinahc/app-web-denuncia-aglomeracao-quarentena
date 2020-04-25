import React, { useState } from 'react'
import { Container, ModalBox } from './styles'
// eslint-disable-next-line no-unused-vars
import { StateInterface } from '../../utils/types'
import { observer } from 'mobx-react'
import Input, { Select } from '../Input'
import Button from '../Button'
import api from '../../utils/api'

type Props = {
  state: StateInterface
}
const Modal: React.FC<Props> = ({ state }) => {
  const [onModal, setOnModal] = useState(false)

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('tipo')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')

  function closeModal() {
    if (!onModal) state.toggleModal()
  }
  function adicionar() {
    if (category !== 'tipo' && address !== '' && date !== '') {
      api
        .post('/complaints', {
          title: title || null,
          description: desc || null,
          category,
          address,
          lat: '-5.08921',
          long: '-42.8016',
          date_time: '2020-04-23T16:25:10.000Z',
          completed: false
        })
        .then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        })
    }
  }

  return (
    <Container onClick={closeModal} hidden={!state.modal}>
      <ModalBox
        onPointerEnter={() => setOnModal(true)}
        onPointerLeave={() => setOnModal(false)}
      >
        <h2>Fazer denúncia</h2>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título (opcional)"
        />
        <Input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Descrição (opcional)"
        />
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          defaultValue="tipo"
        >
          <option disabled value="tipo">
            Categoria
          </option>
          <option value="Fila">Fila</option>
          <option value="Festa">Festa</option>
          <option value="Reunião">Reunião</option>
          <option value="Tumulto">Tumulto</option>
        </Select>
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Endereço"
        />
        <Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Horário"
        />
        <hr />
        <Button onClick={adicionar}>ADICIONAR</Button>
      </ModalBox>
    </Container>
  )
}

export default observer(Modal)
