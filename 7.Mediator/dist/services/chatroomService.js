"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatroomService {
    constructor() {
        this.members = {};
    }
    addMember(memberService) {
        this.members[memberService.member.name] = memberService;
    }
    send(message, fromMember, toMember) {
        toMember.recive(message, fromMember);
    }
}
exports.default = ChatroomService;
//# sourceMappingURL=chatroomService.js.map