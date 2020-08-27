import { IUser } from '../interface'

export const mapperName = (users: IUser[]) => users.map(user => {
  user.name = `My name is - ${user.name}`
  return user
})

export const mapperAge = (users: IUser[]) => users.map(user => {
  user.age = user.name.length
  return user
})

export const pluck = (key: string) => (users: IUser[]) => users.map((user) => user[key])
