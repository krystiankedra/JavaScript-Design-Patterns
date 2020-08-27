"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersService_1 = __importDefault(require("./services/usersService"));
const usersService1 = usersService_1.default.getInstance();
const usersService2 = usersService_1.default.getInstance();
console.log(usersService1 === usersService2);
console.log(usersService1);
console.log(usersService2);
usersService2.fetch();
console.log(usersService1);
console.log(usersService2);
const exampleUser = { id: 2, name: 'Paweł', age: 30 };
usersService1.remove(exampleUser);
console.log(usersService1);
console.log(usersService2);
//# sourceMappingURL=app.js.map