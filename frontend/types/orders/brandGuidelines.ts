export interface BrandGuidelinesType {
  _id?: string
  orderID: string
  status: 'pending' | 'in_progress' | 'completed' | 'failed'
  generationNumber: number
  businessIntroduction?: string
  businessOverview?: string
  missionStatement?: string
  visionStatement?: string
  coreValues: {
    keyword: string
    description: string
  }[]
  taglines: string[]
  brandPersonalityTraits: string[]
  keyAreas: string[]
  uniqueValueProposition?: string
  hashtags: string[]
  supportingMessages: string[]
  contentThemes: {
    title: string
    description: string
    examples: string[]
  }[]
  positioningStatements: string[]
  pov?: string
  povGuidelines: string[]
  logoGuidelines: {
    primaryLogoIdeas: string[]
    primaryLogoUsageGuidelines: string[]
    iconOnlyLogoUsageGuidelines: string[]
  }
  targetAudienceSegments: {
    _id?: string
    segmentName: string
    demographics: string
    psychographics: string
    behavioralTraits: string
  }[]
  contentTypesDefinitions: {
    socialMedia: string[]
    websites: string[]
    emails: string[]
  }
  brandVoiceAndTone: {
    brandTone: string
    primaryVoice: string
    secondaryVoice: string
    usageGuidelines: string[]
  }
  callToAction: {
    socialMedia: string[]
    website: string[]
    emails: string[]
    abTestingStrategies: string[]
  }
  typography: {
    primaryFontName: string
    secondaryFontName: string
    primaryFontAlternative: string
    secondaryFontAlternative: string
    fontUsageHierarchy: string[]
    fontUsageGuidelines: string[]
  }
  colorPalette: {
    primaryColorName: string
    primaryColorHex: string
    primaryColorReason: string
    secondaryColorName: string
    secondaryColorHex: string
    secondaryColorReason: string
    accentColor1Name: string
    accentColor1Hex: string
    accentColor2Name: string
    accentColor2Hex: string
    accentColor3Name: string
    accentColor3Hex: string
    colorUsageGuidelines: string[]
  }
  imageryAndIconography: {
    photographyGuidelines: string[]
    dosAndDontsForPhotography: string[]
    iconGuidelines: string[]
    dosAndDontsForIcons: string[]
  }
  keyMessages: string[]
  boilerplates: {
    boilerplateShort: string
    boilerplateMedium: string
    boilerplateLong: string
  }
  createdAt?: Date
  updatedAt?: Date
}

export interface BrandGuidelinesSelectionType {
  _id?: string
  orderID: string

  businessIntroduction: number
  businessOverview: number
  missionStatement: number
  visionStatement: number
  coreValues: number
  taglines: number
  brandPersonalityTraits: number
  keyAreas: number
  uniqueValueProposition: number
  hashtags: number
  supportingMessages: number
  contentThemes: number
  positioningStatements: number
  pov: number
  povGuidelines: number
  logoGuidelines: number
  targetAudienceSegments: number
  contentTypesDefinitions: number
  brandVoiceAndTone: number
  callToAction: number
  typography: number
  colorPalette: number
  imageryAndIconography: number
  keyMessages: number
  boilerplates: number

  createdAt?: Date
  updatedAt?: Date
}
