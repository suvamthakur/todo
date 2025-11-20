import { ClientType } from '../clientsType'
import { MediaType } from '../mediaType'

export interface ProductType {
  _id: string
  clientId: ClientType['_id'] | ClientType
  productUrl?: string
  scrapingStatus: 'in_progress' | 'completed' | 'failed'
  AIoutput?: string
  generateStatus: 'pending' | 'in_progress' | 'completed' | 'failed'
  addedBy?: string
  name?: string
  description?: string
  category?: string
  subCategory?: string
  isDeleted: boolean
  USPs?: string[]
  actualPrice?: string
  discountedPrice?: string
  imageUrls?: string[]
  imageIds?: MediaType[]
  tokens?: string
  createdAt?: Date
  updatedAt?: Date
}
