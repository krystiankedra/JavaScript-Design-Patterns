import { IUser } from './user';

export interface IUsersService {
  fetch(): void
  remove(user: IUser): void
}
