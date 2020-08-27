import { IChatroomService } from '../interface/chatroomService'
import { IMemberService } from '../interface/memberService'

class ChatroomService implements IChatroomService {

  private members: Object = {}

  addMember(memberService: IMemberService) {
    this.members[memberService.member.name] = memberService
  }

  send(message: string, fromMember: IMemberService, toMember: IMemberService) {
    toMember.recive(message, fromMember)
  }

}

export default ChatroomService
