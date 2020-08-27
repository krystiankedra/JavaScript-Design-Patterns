import { ICompanyService } from '../interface/companyService'
import { IProduct } from '../interface/product'
import { axios } from '../utils/axios'

class FedexService implements ICompanyService {

  private baseURL: string = 'https://fedex.api/'
  private price: number = 5.00

  calculate(product: IProduct) {
    return product.price * this.price
  }

  buy(product: IProduct) {
    return axios(this.baseURL, product)
  }
}

export default FedexService
