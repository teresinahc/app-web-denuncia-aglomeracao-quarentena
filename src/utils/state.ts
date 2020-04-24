import { observable, action } from 'mobx'
// eslint-disable-next-line no-unused-vars
import { Complaint, StateInterface } from './types'

class State implements StateInterface {
  @observable denuncias: Complaint[] = []

  @action setDenuncias(array: Complaint[]) {
    this.denuncias = array
  }
}

export default State
