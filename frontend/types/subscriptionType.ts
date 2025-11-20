import { OrganizationDataType } from './orgDetailsType'
import { PlanType } from './planType'

export type SubscriptionType = {
  _id: string
  orgId: string | OrganizationDataType
  planId: string | PlanType
  startDate: Date
  endDate: Date
  status: 'pending' | 'success' | 'failed'
  createdAt: Date
  updatedAt: Date
}
