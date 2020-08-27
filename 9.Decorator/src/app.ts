import { createProduct } from './factory/createProduct'
import { withUniqueId } from './utils/helpers'

console.log(createProduct())

console.log(withUniqueId(createProduct))
