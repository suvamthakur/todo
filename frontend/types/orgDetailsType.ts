import { SubscriptionType } from './subscriptionType'

export interface OrgBasicDetailsType {
  _id: string
  name: string
  address_building?: string
  address_street?: string
  address_city: string
  address_state: string
  address_pin?: string
  address_country?: string
  org_superadmin_firstName: string
  org_superadmin_middleName?: string
  org_superadmin_lastName?: string
  org_superadmin_email: string
  org_superadmin_phone?: string
  orgType: string
  websiteURL: string
  GSTIN?: string
  subscription: string | SubscriptionType
  maxUsers: number
  maxClients: number
  maxClientPOC: number
  isActive: boolean
  isDeleted: boolean
}
export interface OrgServiceDetailsType {
  imageCredits: number
  brandGuidelinesAI: {
    isActive: boolean
    orderCreated: number
    orderLimit: number
    defaultOption: number
    regenerateOption: number
  }
  monthlyPostsAI: {
    isActive: boolean
    orderCreated: number
    orderLimit: number
    defaultOption: number
    regenerateOption: number
    selectionPerOrder: number
  }
  specialPostsAI: {
    isActive: boolean
    orderCreated: number
    orderLimit: number
    defaultOption: number
    regenerateOption: number
    selectionPerOrder: number
  }
  metaAdsAI: {
    isActive: boolean
    orderCreated: number
    orderLimit: number
    defaultOption: number
    regenerateOption: number
    selectionPerOrder: number
  }
  responsesAI: {
    isActive: boolean
    orderCreated: number
    orderLimit: number
    defaultOption: number
    regenerateOption: number
    selectionPerOrder: number
  }
  emailsAI: {
    isActive: boolean
    orderCreated: number
    orderLimit: number
    defaultOption: number
    regenerateOption: number
    selectionPerOrder: number
  }
  websiteAI: {
    isActive: boolean
    orderCreated: number
    orderLimit: number
    defaultOption: number
    regenerateOption: number
    maxPagesPerOrder: number
  }
  // per client per comment
  replyPerCommentCredits: number
}
export interface OrgUserType {
  _id: string
  organizationId: string
  userType: 'superadmin' | 'admin' | 'manager' | 'user' | 'approver'
  firstName: string
  middleName?: string
  lastName?: string
  userEmail: string
  userPhone?: string
  userPhotoURL?: string
  isDeleted: boolean
  isActive: boolean
  isOrgActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface OrganizationDataType extends OrgBasicDetailsType {
  serviceSettings: OrgServiceDetailsType
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}
