import EmployeeService from './services/employeeService'
import { setTwiceSalary, setMultipleSalary } from './utils/employee'
import { IEmployeeService } from './interface/employeeService'

const employee1 = new EmployeeService('Krystian', 25000)

console.log(employee1)
employee1.setSalary(30000)
console.log(employee1)
employee1.accept(setTwiceSalary)
console.log(employee1)
employee1.accept((employeeService: IEmployeeService) => setMultipleSalary(employeeService, 5))
console.log(employee1)

