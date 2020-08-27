import { ICurrencyService } from '../interface/currencyService'

class CurrencyServiceProxy implements ICurrencyService {
  private currencyService: any = null
  private cache: any = {}

  constructor(currencyService: ICurrencyService) {
    this.currencyService = currencyService
  }

  getValue(currency: string): number {
    if (!this.cache[currency]) {
      this.cache[currency] = this.currencyService.getValue(currency)
    }
    return this.cache[currency]
  }
}

export default CurrencyServiceProxy
