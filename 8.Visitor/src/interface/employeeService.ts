export interface IEmployeeService {
  getSalary(): number
  setSalary(value: number): void
  accept(fnVisitor: Function): void
}
