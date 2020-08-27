import { createProduct } from './factory/createProduct'
import UserFactory from './factory/createUser'

console.log(createProduct())
console.log(new UserFactory({
  name: 'Krystian',
  age: 25,
  hobbies: [{ name: 'Football', category: 'sport' }]
}))