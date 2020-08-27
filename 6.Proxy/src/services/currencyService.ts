import { ICurrencyService } from '../interface/currencyService'

class CurrencyService implements ICurrencyService {
  getValue(currency: string): number {
    console.log('External Api call')
    switch (currency) {
      case 'PLN': {
        return 4.25
      }
      case 'EUR': {
        return 5.50
      }
      case 'USD': {
        return 10.00
      }
    }
  }
}

export default CurrencyService
