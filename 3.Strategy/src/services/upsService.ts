import { ICompanyService } from '../interface/companyService'
import { IProduct } from '../interface/product'
import { axios } from '../utils/axios'

class UPSService implements ICompanyService {

  private baseURL: string = 'https://ups.api/'
  private price: number = 10.00

  calculate(product: IProduct) {
    return product.price * this.price
  }

  buy(product: IProduct) {
    return axios(this.baseURL, product)
  }
}

export default UPSService
