import { IUser } from '../interface/user'

class UserFactory {

  private user: IUser

  constructor(user: IUser) {
    this.user = user
  }

  getUser() {
    return this.user
  }

}

export default UserFactory