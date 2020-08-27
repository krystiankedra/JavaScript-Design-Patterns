import { IMemberService } from '../interface/memberService'
import { IChatroomService } from '../interface/chatroomService'
import { IMember } from '../interface/member'

class MemberService implements IMemberService {

  member: IMember

  constructor(member: IMember) {
    this.member = member
  }

  send(message: string, toMember: IMemberService, chatroomService: IChatroomService) {
    chatroomService.send(message, this, toMember)
  }

  recive(message: string, fromMember: IMemberService) {
    console.log(`Message from ${fromMember.member.name} to ${this.member.name} - ${message}`)
  }

}

export default MemberService
