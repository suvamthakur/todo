import { MediaType } from '../mediaType'

export interface MonthlyPostType {
  _id: string
  orderId: string
  generationNumber: number
  number: number
  caption: string
  imageRecommendation: Array<{
    _id?: string
    description: string
  }>
  imageGenerationStatus: 'not_started' | 'pending' | 'in_progress' | 'completed' | 'failed'
  type: string
  selected: boolean
  finalSelected: boolean
  variantStatus?: 'pending' | 'completed'
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
  facebookContent: VariantsType
  instagramContent: VariantsType
  gmbContent: VariantsType
  xContent: VariantsType
  linkedinContent: VariantsType
  createdAt: Date
  updatedAt: Date
}

export interface VariantsType {
  _id: string
  postId: string
  status: 'pending' | 'in_progress' | 'completed' | 'failed'
  content: string
  selected: boolean
  images: MediaType[]
  selectedImage: MediaType
  imageSelected: boolean
  scheduling: Date
  variantGenerateCount: number
  createdAt: Date
  updatedAt: Date
}
