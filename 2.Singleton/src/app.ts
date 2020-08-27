import UsersService from './services/usersService'
import { IUser } from './interface/user'

const usersService1 = UsersService.getInstance()
const usersService2 = UsersService.getInstance()

console.log(usersService1 === usersService2)
console.log(usersService1)
console.log(usersService2)

usersService2.fetch()

console.log(usersService1)
console.log(usersService2)

const exampleUser: IUser = { id: 2, name: 'Paweł', age: 30 }

usersService1.remove(exampleUser)

console.log(usersService1)
console.log(usersService2)
