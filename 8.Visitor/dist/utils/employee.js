"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMultpleSalary = exports.setTwiceSalary = void 0;
exports.setTwiceSalary = (employeeService) => employeeService.setSalary(employeeService.getSalary() * 2);
exports.setMultpleSalary = (employeeService, amount) => employeeService.setSalary(employeeService.getSalary() * amount);
//# sourceMappingURL=employee.js.map