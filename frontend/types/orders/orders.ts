import { ClientType } from '../clientsType'
import { BrandGuidelinesSelectionType, BrandGuidelinesType } from './brandGuidelines'
import { MetaAd } from './metaAd'
import { MonthlyPostType } from './monthlyPost'
import { ResponsesType } from './responses'

export const orderTypes: (keyof ClientOrders)[] = [
  'brandGuidelinesOrders',
  'monthlyPostsOrders',
  'specialPostsOrders',
  'responsesOrders',
  'metaAdsOrders',
  'emailsOrders',
  'websiteOrders'
]

// Types for individual order objects
export interface BrandGuidelinesOrder {
  _id: string
  organizationId: string
  clientId: string
  orderStatus: 'pending' | 'in_progress' | 'failed' | 'open' | 'closed' | 'suspended'
  orderStage?: 'content'
  retrytimestamps?: Date[]
  approvalStatus: 'pending' | 'sent' | 'approved' | 'rejected'
  approvedBy?: string
  approvedAt?: Date
  approverComment?: string
  maxRetryCount: number
  assignees: {
    content: string
    manager: string
  }
  input: {
    client: string
    clientOnboarding?: string
    clientWebsiteSummary?: string
  }
  AIOutputsGenerated: number
  AIoutput: string[]
  finalOutput: BrandGuidelinesType[]
  totalTokens: string[]
  selectedOutput: BrandGuidelinesSelectionType
  createdAt: string
  updatedAt: string
}

export interface MonthlyPostOrder {
  _id: string
  organizationId: string
  clientId: ClientType
  orderStatus: 'pending' | 'in_progress' | 'failed' | 'open' | 'closed' | 'suspended'
  regenerationStatus: 'not_started' | 'pending' | 'in_progress' | 'completed' | 'failed'
  orderStage: 'content' | 'design'
  orderState: 1 | 2 | 3 | 4
  oldPostId?: string
  newPostId?: string
  retrytimestamps?: Date[]
  approvalStatus: 'pending' | 'sent' | 'approved' | 'rejected'
  approvedBy?: string
  approvedAt?: Date
  approverComment?: string
  maxRetryCount: number
  assignees: {
    content?: string
    design?: string
    manager: string
  }
  input: {
    clientOnboardingId?: string
    ClientWebsiteSummaryId?: string
    brandGuidelinesId?: string
    postLength: number
    requirement?: string
    additionalRequirements?: string
  }
  AIOutputsGenerated: number
  AIoutput: AIoutputType[]
  finalOutput: MonthlyPostType[]
  totalTokens: string[]
  variantsStatus: 'pending' | 'in_progress' | 'completed' | 'failed'
  sqsId?: string[]
  createdAt: string
  updatedAt: string
}

export interface SpecialPostsOrder {
  _id: string
  organizationId: string
  clientId: ClientType
  orderStatus: 'pending' | 'in_progress' | 'failed' | 'open' | 'closed' | 'suspended'
  regenerationStatus: 'not_started' | 'pending' | 'in_progress' | 'completed' | 'failed'
  orderStage: 'content' | 'design'
  orderState: 1 | 2 | 3 | 4
  oldPostId?: string
  newPostId?: string
  variantsStatus: 'not_started' | 'pending' | 'in_progress' | 'completed' | 'failed'
  retrytimestamps?: Date[]
  approvalStatus: 'pending' | 'sent' | 'approved' | 'rejected'
  approvedBy?: string
  approvedAt?: Date
  approverComment?: string
  maxRetryCount: number
  assignees: {
    content?: string
    design?: string
    manager: string
  }
  input: {
    clientOnboardingId?: string
    ClientWebsiteSummaryId?: string
    brandGuidelinesId?: string
    postLength: number
    postType: 'product' | 'general' | 'custom'
    productUrl?: string
    requirement?: string
    additionalRequirements?: string
    targetAudience: string
    product?: string
  }
  AIOutputsGenerated: number
  AIoutput: AIoutputType[]
  finalOutput: MonthlyPostType[]
  totalTokens: string[]
  sqsId?: string[]
  createdAt: string
  updatedAt: string
}

export interface MetaAdsOrder {
  _id: string
  organizationId: string
  clientId: ClientType
  orderStatus: 'pending' | 'in_progress' | 'failed' | 'open' | 'closed' | 'suspended'
  regenerationStatus: 'not_started' | 'pending' | 'in_progress' | 'completed' | 'failed'
  orderStage: 'content' | 'design'
  orderState: 1 | 2
  retrytimestamps?: Date[]
  approvalStatus: 'pending' | 'sent' | 'approved' | 'rejected'
  approvedBy?: string
  approvedAt?: Date
  approverComment?: string
  maxRetryCount: number
  assignees: {
    content?: string
    design?: string
    manager: string
  }
  input: {
    clientOnboardingId?: string
    ClientWebsiteSummaryId?: string
    clientBrandGuidelinesId?: string
    requirement?: string
    additionalRequirements?: string
    targetAudience: string
    productId?: string
    postType: 'general' | 'product' | 'custom'
  }
  adSettings?: MetaAdSettings
  // metaAdSettings?: string
  AIOutputsGenerated: number
  AIoutput: AIoutputType[]
  finalOutput: MetaAd[]
  totalTokens: string[]
  sqsId?: string[]
  createdAt: string
  updatedAt: string
}

export interface MetaAdSettings {
  clientId: string
  orderId: string
  platforms: 'all' | 'instagram' | 'facebook'
  goal: 'calls' | 'website' | 'directions' | 'leads'
  adCategory: 'none' | 'political' | 'housing' | 'employment' | 'financial'
  gender: 'male' | 'female' | 'all'
  minAge: number
  maxAge: number
  locations: Array<{
    street?: string
    city?: string
    state?: string
    country?: string
    zipcode?: number
    longitude?: number
    latitude?: number
    radius: number
  }>
  startDate: Date
  duration: number
  budget: number
}

export interface ResponsesOrder {
  _id: string
  organizationId: string
  clientId: ClientType
  orderStatus: 'pending' | 'in_progress' | 'failed' | 'open' | 'closed' | 'suspended'
  orderStage: 'content'
  retryCount: number
  retrytimestamps?: Date[]
  approvalStatus: 'pending' | 'sent' | 'approved' | 'rejected'
  approvedBy?: string
  approvedAt?: Date
  approverComment?: string
  maxRetryCount: number
  assignees: {
    content: string
    manager: string
  }
  input: {
    clientOnboardingId?: string
    clientWebsiteSummary?: string
    brandguide?: string
  }
  review?: string
  rating?: 1 | 2 | 3 | 4 | 5
  platform: 'Facebook' | 'Google' | 'Trip Advisor' | 'Amazon' | 'Yelp' | 'Others'
  reviewer?: string
  date: Date
  length?: string
  hippa: boolean
  AIOutputsGenerated: number
  AIoutput: string[]
  finalOutput: ResponsesType[]
  totalTokens: string[]
  sqsId?: string[]
  createdAt: string
  updatedAt: string
}

export interface EmailsOrder {
  [key: string]: any
}

export interface WebsiteOrder {
  [key: string]: any
}

export interface ImageMatching {
  _id: string
  postId: string
  status: 'pending' | 'in_progress' | 'completed' | 'failed'
  image1?: string
  image2?: string
  image3?: string
  createdAt: string
  updatedAt: string
}

export interface AIoutputType {
  _id: string
  clientId: string
  orderId: string
  generationNumber: number
  output: string
  createdAt: string
  updatedAt: string
}

// Type for each client
export interface ClientOrders {
  brandGuidelinesOrders: BrandGuidelinesOrder[]
  monthlyPostsOrders: MonthlyPostOrder[]
  specialPostsOrders: SpecialPostsOrder[]
  metaAdsOrders: MetaAdsOrder[]
  responsesOrders: ResponsesOrder[]
  emailsOrders: EmailsOrder[]
  websiteOrders: WebsiteOrder[]
}

export type OrderType =
  | BrandGuidelinesOrder
  | MonthlyPostOrder
  | SpecialPostsOrder
  | MetaAdsOrder
  | ResponsesOrder
  | EmailsOrder
  | WebsiteOrder
