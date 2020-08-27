"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createProduct_1 = require("./factory/createProduct");
const createUser_1 = __importDefault(require("./factory/createUser"));
console.log(createProduct_1.createProduct());
console.log(new createUser_1.default({
    name: 'Krystian',
    age: 25,
    hobbies: [{ name: 'Football', category: 'sport' }]
}));
//# sourceMappingURL=app.js.map