import { IEmployeeService } from '../interface/employeeService'

class EmployeeService implements IEmployeeService {
  private name: string
  private salary: number

  constructor(name: string, salary: number) {
    this.name = name
    this.salary = salary
  }

  getSalary() {
    return this.salary
  }

  setSalary(value: number) {
    this.salary = value
  }

  accept(fnVisitor: Function) {
    fnVisitor(this)
  }

}

export default EmployeeService
