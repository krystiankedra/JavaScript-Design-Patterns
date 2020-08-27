"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memberService_1 = __importDefault(require("./services/memberService"));
const chatroomService_1 = __importDefault(require("./services/chatroomService"));
const chatroomService = new chatroomService_1.default();
const member1 = new memberService_1.default({ name: 'Krystian' });
const member2 = new memberService_1.default({ name: 'Pawel' });
const member3 = new memberService_1.default({ name: 'Mateusz' });
chatroomService.addMember(member1);
chatroomService.addMember(member2);
chatroomService.addMember(member3);
member1.send('Hello Pawelo', member2, chatroomService);
member2.send('Hello Krystian', member1, chatroomService);
member3.send('Hello Krystiano', member1, chatroomService);
member1.send('Hello Mateo', member3, chatroomService);
//# sourceMappingURL=app.js.map