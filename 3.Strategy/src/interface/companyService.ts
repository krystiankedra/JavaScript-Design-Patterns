import {IProduct} from '../interface/product'

export interface ICompanyService {
  calculate(product: IProduct): number
  buy(product: IProduct): string
}