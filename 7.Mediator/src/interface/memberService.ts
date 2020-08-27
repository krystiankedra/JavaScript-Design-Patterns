import { IMember } from '../interface/member'
import { IChatroomService } from './chatroomService';

export interface IMemberService {
  member: IMember
  send(message: string, toMember: IMemberService, chatroomService: IChatroomService): void
  recive(message: string, fromMember: IMemberService): void
}