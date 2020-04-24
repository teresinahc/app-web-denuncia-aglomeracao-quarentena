import { observable, action } from 'mobx'
// eslint-disable-next-line no-unused-vars
import { Complaint, StateInterface } from './types'

class State implements StateInterface {
  @observable denuncias: Complaint[] = []
  @observable modal: boolean = false

  @action setDenuncias(array: Complaint[]) {
    this.denuncias = array
  }

  @action toggleModal() {
    this.modal = !this.modal
  }
}

export default State
