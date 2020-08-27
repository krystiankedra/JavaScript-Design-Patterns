import CurrencyService from './services/currencyService'
import CurrencyServiceProxy from './services/CurrencyServiceProxy'

const currencyService = new CurrencyService()
const currencyServiceProxy = new CurrencyServiceProxy(currencyService)

console.log(currencyServiceProxy.getValue('PLN'))
console.log(currencyServiceProxy.getValue('EUR'))
console.log(currencyServiceProxy.getValue('USD'))
console.log(currencyServiceProxy.getValue('PLN'))
console.log(currencyServiceProxy.getValue('EUR'))
console.log(currencyServiceProxy.getValue('USD'))
console.log(currencyServiceProxy.getValue('PLN'))
console.log(currencyServiceProxy.getValue('EUR'))
console.log(currencyServiceProxy.getValue('USD'))
