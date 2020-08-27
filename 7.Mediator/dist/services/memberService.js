"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemberService {
    constructor(member) {
        this.member = member;
    }
    send(message, toMember, chatroomService) {
        chatroomService.send(message, this, toMember);
    }
    recive(message, fromMember) {
        console.log(`Message from ${fromMember.member.name} to ${this.member.name} - ${message}`);
    }
}
exports.default = MemberService;
//# sourceMappingURL=memberService.js.map