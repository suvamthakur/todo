import { MetaAdsOrder, ImageMatching } from './orders'
import { MediaType } from '../mediaType'

export interface MetaAd {
  _id: string
  orderId: MetaAdsOrder['_id'] | MetaAdsOrder
  generationNumber: number
  number: number
  headline: string
  description: string
  buttonLabel:
    | 'none'
    | 'Apply Now'
    | 'Sign Up'
    | 'Get Quote'
    | 'Learn More'
    | 'Subscribe'
    | 'Book Now'
    | 'Contact Us'
    | 'Download'
    | 'Request Time'
    | 'See Menu'
    | 'Shop Now'
    | 'Watch More'
    | 'Donate Now'
  buttonUrl?: string
  phoneNumber?: string
  imageRecommendation: Array<{
    _id?: string
    description: string
  }>
  imageMatch?: ImageMatching['_id']
  selected: boolean
  images: MediaType[]
  imageGenerationStatus: 'not_started' | 'pending' | 'completed' | 'failed'
  selectedImage: MediaType
  imageSelected: boolean
  createdAt: Date
  updatedAt: Date
}
