import { IShippingService } from '../interface/shippingService'
import { IProduct } from '../interface/product'
import { ICompanyService } from '../interface/companyService'

class ShippingService implements IShippingService {

  calculate(company: ICompanyService, product: IProduct) {
    return company.calculate(product)
  }

  buy(company: ICompanyService, product: IProduct) {
    return company.buy(product)
  }
}

export default ShippingService
