import { IMemberService } from '../interface/memberService'

export interface IChatroomService {
  addMember(memberService: IMemberService): void
  send(message: string, fromMember: IMemberService, toMember: IMemberService): void
}
