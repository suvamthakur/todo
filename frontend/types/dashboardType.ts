export type overallSummaryType = {
  clientSummary: {
    Total: number
    Active: number
    Suspended: number
    Deleted: number
  }
  orderSummary: {
    Total: number
    Open: number
    Completed: number
    Suspended: number
  }
  userSummary: {
    Total: number
    Active: number
    Inactive: number
    Deleted: number
  }
  ordersAssigned: number
  monthlyOrderUsage: {
    [clientId: string]: {
      [serviceName: string]: {
        'Total Quota': number
        Used: number
        Remaining: number
      }
    }
  }
  ordersPipelineSummary: {
    [clientId: string]: {
      [serviceName: string]: {
        Total: number
        Open: number
        Closed: number
        Suspended: number
      }
    }
  }
}

export type chartsDataType = {
  ordersByProduct: {
    'All Time': {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    'This Year': {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    'This Month': {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    'This Week': {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    Today: {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    total?: {
      'All Time': number
      'This Year': number
      'This Month': number
      'This Week': number
      Today: number
    }
  }
  clientProductUsage: {
    'All Time': {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    'This Year': {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    'This Month': {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    'This Week': {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    Today: {
      Brandguide: number
      'Monthly Social Posts': number
      'Special Posts': number
      'Meta Ads': number
      Responses: number
      Emails: number
      Website: number
    }
    total?: {
      'All Time': number
      'This Year': number
      'This Month': number
      'This Week': number
      Today: number
    }
  }
}

export type orderDetails = {
  allUsers: Array<{
    userId: string
    firstName: string
    lastName: string
    userType: string
    email: string
    totalOrders: number
    openOrders: number
    closedOrders: number
    suspendedOrders: number
    services: {
      [key: string]: {
        total: number
        open: number
        closed: number
        suspended: number
      }
    }
  }>
  managerUsers: Array<{
    userId: string
    firstName: string
    lastName: string
    email: string
    totalOrders: number
    openOrders: number
    closedOrders: number
    suspendedOrders: number
    services: {
      [key: string]: {
        total: number
        open: number
        closed: number
        suspended: number
      }
    }
  }>
}
