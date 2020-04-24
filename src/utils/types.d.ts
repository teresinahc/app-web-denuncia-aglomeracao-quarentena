export interface Complaint {
  id: number
  description: string
  date_time: string
  address: string
  lat: string
  long: string
  completed: boolean
  category: string
  createdAt: string
  title: string
}

export interface StateInterface {
  denuncias: Complaint[]
  setDenuncias(array: Complaint[]): void

  modal: boolean
  toggleModal(): void
}
