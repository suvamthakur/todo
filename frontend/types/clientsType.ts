import type { OrgUserType } from "./orgDetailsType";

export interface ClientOnboardingDetailsType {
  _id: string;
  clientId: string;
  businessRelatedKeywords: string[];
  businessOverview: string;
  businessCommencementDate: string;
  listofProducts: string[];
  listofServices: string[];
  salesChannels: string[];
  compliance: string;
  competitiveStandout: string;
  targetAudience: string;
  targetAudienceInterests: string;
  serviceAreas: string;
  newCustomerDemographics: string;
  hashtags: string[];
  missionStatement: string;
  visionStatement: string;
  brandCharacteristics: string;
  brandVoice: string;
}

export interface ClientServiceSettingsType {
  _id: string;
  clientId: string;
  imageCreditsUsed: number;
  brandGuidelinesAI: {
    isActive: boolean;
    assignees: {
      content?: OrgUserType | string; // string for _id
    };
  };
  websiteAI: {
    isActive: boolean;
    assignees: {
      content?: OrgUserType | string;
    };
  };
  responsesAI: {
    isActive: boolean;
    assignees: {
      content?: OrgUserType | string;
    };
  };
  monthlyPostsAI: {
    isActive: boolean;
    assignees: {
      content?: OrgUserType | string;
      design?: OrgUserType | string;
    };
  };
  specialPostsAI: {
    isActive: boolean;
    assignees: {
      content?: OrgUserType | string;
      design?: OrgUserType | string;
    };
  };
  metaAdsAI: {
    isActive: boolean;
    assignees: {
      content?: OrgUserType | string;
      design?: OrgUserType | string;
    };
  };
  emailsAI: {
    isActive: boolean;
    assignees: {
      content?: OrgUserType | string;
      design?: OrgUserType | string;
    };
  };
}

export interface ClientType {
  _id: string;
  organizationId: string;
  onboardingStatus: "not_started" | "in_progress" | "completed" | "failed";
  websiteStatus:
    | "missing"
    | "crawling"
    | "invalid"
    | "in_progress"
    | "completed"
    | "failed";
  approvers: OrgUserType[];
  isDeleted: boolean;
  isActive: boolean;
  businessName: string;
  primaryCategory: string;
  secondaryCategory?: string;
  websiteURL?: string;
  building?: string;
  streetName?: string;
  city?: string;
  state?: string;
  country?: string;
  pin?: string;
  contentGuidelines?: string;
  imageGuidelines?: string;
  reviewsGuidelines?: string;
  facebookPage?: string;
  instagramPage?: string;
  gmbPage?: string;
  youtubePage?: string;
  linkedInPage?: string;
  xPage?: string;
  yelpPage?: string;
  serviceSettings: ClientServiceSettingsType;
  manager: OrgUserType;
  onboardingRetryCount: number;
  onboardingRetryTimestamps: Date[];
  onboardingMaxRetryCount: number;
  onboardingAIOutputsGenerated: number;
  monthlyOnboardingGenerationLimit: number;
  onboardingAIOutput?: string;
  onboardingDetails: ClientOnboardingDetailsType;
  createdAt: Date;
  updatedAt: Date;
  planStartDate: Date;
  brandId: number;

  brandGuidelinesAI?: OrderStats[];
  monthlyPostsAI?: OrderStats[];
  specialPostsAI?: OrderStats[];
  metaAdsAI?: OrderStats[];
  responsesAI?: OrderStats[];
  emailsAI?: OrderStats[];
  websiteAI?: OrderStats[];

  totalOrders?: number;
  openOrders?: number;
  closedOrders?: number;
  suspendedOrders?: number;
}

interface OrderStats {
  total: number;
  open: number;
  closed: number;
  suspended: number;
}

export interface ClientWebsiteType {
  _id: string;
  organizationId: string;
  clientId: string;
  websiteURL?: string;
  crawlRetryTimestamps: Date[];
  retryCount: number;
  retryTimestamps: Date[];
  maxRetryCount: number;
  AIOutputsGenerated: number;
  monthlyGenerationLimit: number;
  rawCrawlerText?: string;
  AIOutput?: string;
  finalOutput: ClientWebsiteSummary;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClientWebsiteSummary {
  _id: string;
  clientId: string;
  clientWebsiteId: string;
  businessIntroduction?: string;
  businessOverview?: string;
  missionAndVision?: string;
  listofProducts?: string[];
  listofServices?: string[];
  targetAudience?: string;
  serviceAreas?: string;
  community?: string;
  competitiveAdvantages?: string;
  newCustomerDemographics?: string;
  uniqueSellingPoints?: string;
  createdAt: Date;
  updatedAt: Date;
}
