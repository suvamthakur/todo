export type LinkedAccountType = {
  _id: string
  clientId: string
  brandId: string
  platform: 'FACEBOOK' | 'INSTAGRAM' | 'YOUTUBE' | 'LINKEDIN' | 'GOOGLEMYBUSINESS' | 'X'
  accountId?: string
  accounts: AccountDataType[]
  status: 'connected' | 'disconnected'
  createdAt: Date
  updatedAt: Date
  isDeleted: boolean
}

export type AccountDataType = {
  id: string
  name: string
  profile_image: string
  is_integrated: boolean
  connected_profile_id: number
}
