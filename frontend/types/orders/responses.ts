export interface ResponsesType {
  _id?: string
  orderID: string
  status?: 'pending' | 'in_progress' | 'completed' | 'failed'
  generationNumber: number
  response?: string
  selected?: boolean
  createdAt?: Date
  updatedAt?: Date
}
