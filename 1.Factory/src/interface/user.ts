export interface IHobby {
  name: string
  category: string
}

export interface IUser {
  name: string
  age: number
  hobbies: IHobby[]
}
