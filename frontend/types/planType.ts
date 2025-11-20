export type PlanType = {
  _id: string
  planName: string
  orgType: 'agency' | 'multi' | 'single'
  isTrial: boolean
  planType: 'starter' | 'growth' | 'professional' | 'custom'
  planDurationType: 1 | 6 | 12
  duration: number
  price: number
  currency: 'USD' | 'INR'
  maxUsers: number
  maxClients: number
  maxClientPOC: number
  monthlyPostsAI: number
  specialPostsAI: number
  metaAdsAI: number
  responsesAI: number
  brandGuidelinesAI: number
  replyPerCommentCredits: number
  imageCredits: number
  monthlyOnboardingGenerationLimit?: number
  monthlyGenerationLimit?: number
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
}
