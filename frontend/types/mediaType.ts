export interface MediaType {
  _id: string
  organizationId: string
  clientId: string
  uploadStatus: 'in_progress' | 'completed' | 'failed'
  uploadType: 'stock' | 'uploaded' | 'generated' | 'edited'
  uploadedBy?: string
  s3path: string
  mediaType: 'image' | 'video'
  width: number
  height: number
  isDeleted: boolean
  lastUsed?: string
  aiDescriptionStatus: 'pending' | 'in_progress' | 'completed' | 'failed'
  aiOutput?: string
  tags?: string[]
  description?: string
  createdAt: string
}
