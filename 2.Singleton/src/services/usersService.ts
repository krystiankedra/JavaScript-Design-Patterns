import { IUser } from '../interface/user'
import { IUsersService } from '../interface/usersService'

class UsersService implements IUsersService {

  private users: IUser[] = []

  private constructor() {}

  private static instance: UsersService | null = null

  static getInstance(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService()
    }
    return UsersService.instance
  }

  fetch() {
    this.users = [
      { id: 1, name: 'Krystian', age: 25 },
      { id: 2, name: 'Paweł', age: 30 },
      { id: 3, name: 'Mateusz', age: 28 }
    ]
  }

  remove(user: IUser) {
    const { id } = user
    this.users = this.users.filter(user => user.id !== id)
  }

}

export default UsersService
