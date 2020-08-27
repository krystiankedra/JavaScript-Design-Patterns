import { ICompanyService } from './companyService'
import { IProduct } from './product'

export interface IShippingService {
  calculate(company: ICompanyService, product: IProduct): number,
  buy(company: ICompanyService, product: IProduct): string
}
