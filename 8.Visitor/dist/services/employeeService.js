"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeService {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(value) {
        this.salary = value;
    }
    accept(fnVisitor) {
        fnVisitor(this);
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=employeeService.js.map