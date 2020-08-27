export const axios = (url: string, data: any): string => {
 switch (url) {
    case 'https://fedex.api/': {
      return `Thank you for ordering a product from Fedex ${data.name} for the amount ${data.price}`
    }
    case 'https://dhl.api/' : {
      return `Thank you for ordering a product from DHL ${data.name} for the amount ${data.price}`
    }
    case 'https://ups.api/': {
      return `Thank you for ordering a product from UPS ${data.name} for the amount ${data.price}`
    }
    default: {
      return 'The system does not support the selected company'
    }
  }
}
