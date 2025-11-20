import { VariantsType } from './monthlyPost'
import { SpecialPostsOrder } from './orders'

export interface MonthlyPostType {
  _id: string
  orderId: SpecialPostsOrder['_id'] | SpecialPostsOrder
  generationNumber: number
  number: number
  caption: string
  type: string
  imageRecommendation: Array<{
    _id?: string
    description: string
  }>
  selected: boolean
  finalSelected: boolean
  variantStatus: 'pending' | 'completed'
  variantRecomposeStatus: {
    facebook: 'pending' | 'completed' | 'failed'
    instagram: 'pending' | 'completed' | 'failed'
    gmb: 'pending' | 'completed' | 'failed'
    x: 'pending' | 'completed' | 'failed'
    linkedin: 'pending' | 'completed' | 'failed'
  }
  variantCount: {
    facebook: number
    instagram: number
    gmb: number
    x: number
    linkedin: number
  }
  imageGenerationStatus: 'pending' | 'completed' | 'failed'
  facebookContent: VariantsType
  instagramContent: VariantsType
  gmbContent: VariantsType
  xContent: VariantsType
  linkedinContent: VariantsType
  createdAt: Date
  updatedAt: Date
}
