import MemberService from './services/memberService'
import ChatroomService from './services/chatroomService'

const chatroomService = new ChatroomService()

const member1 = new MemberService({ name: 'Krystian' })
const member2 = new MemberService({ name: 'Pawel' })
const member3 = new MemberService({ name: 'Mateusz' })

chatroomService.addMember(member1)
chatroomService.addMember(member2)
chatroomService.addMember(member3)

member1.send('Hello Pawelo', member2, chatroomService)
member2.send('Hello Krystian', member1, chatroomService)
member3.send('Hello Krystiano', member1, chatroomService)
member1.send('Hello Mateo', member3, chatroomService)
