import { ICompanyService } from '../interface/companyService'
import { IProduct } from '../interface/product'
import { axios } from '../utils/axios'

class DHLService implements ICompanyService {

  private baseURL: string = 'https://dhl.api/'
  private price: number = 2.50

  calculate(product: IProduct) {
    return product.price * this.price
  }

  buy(product: IProduct) {
    return axios(this.baseURL, product)
  }
}

export default DHLService
