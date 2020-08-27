"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employeeService_1 = __importDefault(require("./services/employeeService"));
const employee_1 = require("./utils/employee");
const employee1 = new employeeService_1.default('Krystian', 25000);
console.log(employee1);
employee1.setSalary(30000);
console.log(employee1);
employee1.accept(employee_1.setTwiceSalary);
console.log(employee1);
employee1.accept((employeeService) => employee_1.setMultpleSalary(employeeService, 5));
console.log(employee1);
//# sourceMappingURL=app.js.map