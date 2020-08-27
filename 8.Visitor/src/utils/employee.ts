import { IEmployeeService } from '../interface/employeeService'

export const setTwiceSalary = (employeeService: IEmployeeService) =>
  employeeService.setSalary(employeeService.getSalary() * 2)

export const setMultipleSalary = (employeeService: IEmployeeService, amount: number) =>
  employeeService.setSalary(employeeService.getSalary() * amount)