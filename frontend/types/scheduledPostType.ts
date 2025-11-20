import { ClientType } from './clientsType'
import { LinkedAccountType } from './LinkedAccount'
import { MediaType } from './mediaType'
import { MonthlyPostType, VariantsType } from './orders/monthlyPost'
import { MonthlyPostOrder, SpecialPostsOrder } from './orders/orders'

export interface ScheduledPost {
  _id: string
  organizationId: string
  clientId: string | ClientType
  extPostId: string
  linkedAccount: string | LinkedAccountType
  orderId: string | MonthlyPostOrder | SpecialPostsOrder
  postId: string | MonthlyPostType
  variantId: string | VariantsType
  number: number
  created: Date
  completed?: Date
  platform: 'FACEBOOK' | 'INSTAGRAM' | 'YOUTUBE' | 'LINKEDIN' | 'GOOGLEMYBUSINESS' | 'X'
  scheduledTime: Date
  content?: string
  caption?: string
  extMediaId?: string
  mediaId?: string | MediaType
  orderType: 'monthly' | 'special'
  status: 'scheduled' | 'posted' | 'deleted' | 'failed'
  link?: string
  likes?: number
  shares?: number
  comments?: number
  autoReply: boolean
  commentData: CommentType[]
  reviewData: GMBReviewType[]
  averageRating?: number
  reviewCount?: number
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CommentType {
  _id: string
  scheduledPostId: string
  replyStatus: 'pending' | 'completed' | 'failed'
  userName?: string
  comment?: string
  extCommentId?: string
  profilePicture?: string
  time?: Date
  likeCount?: number
  replyCount?: number
  isReplied: boolean
  replyCreditsUsed: number
  isDeleted: boolean
  reply: ReplyType[]
  createdAt: Date
  updatedAt: Date
}

export interface ReplyType {
  _id: string
  scheduledPostId: string
  postCommentId: string
  replyStatus: 'pending' | 'completed' | 'failed'
  reply: string
  extReplyId?: string
  replyType: 'ai' | 'manual'
  userName?: string
  profilePicture?: string
  time?: Date
  likeCount?: number
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

export interface GMBReviewType {
  scheduledPostId: string
  reviewStatus: 'pending' | 'completed' | 'failed'
  extReviewId?: string
  reviewTitle?: string
  reviewText?: string
  reviewerName?: string
  profilePicture?: string
  profileUrl?: string
  rating?: number
  time?: Date
  reviewReply?: {
    reply?: string
    time?: Date
  }
  createdAt: Date
  updatedAt: Date
}
