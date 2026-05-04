// Employee Management System
// This project uses OOP principles to model employees, managers, and a company.

// Base Employee class
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `Employee: ${this.name} | Department: ${this.department}`;
  }
}

// Manager class inherits from Employee
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `Manager: ${this.name} | Department: ${this.department} | Team Size: ${this.teamSize}`;
  }
}

// Company class stores and manages employees
class Company {
  constructor(companyName) {
    this.companyName = companyName;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log(`\n${this.companyName} Employee Directory`);
    console.log("----------------------------------------");

    this.employees.forEach((employee, index) => {
      console.log(`${index + 1}. ${employee.describe()}`);
    });

    console.log("----------------------------------------");
    console.log(`Total Employees: ${this.employees.length}`);
  }
}

// Create employee objects
const emp1 = new Employee("Mirayda", "Business Analytics");
const emp2 = new Employee("Alex", "Sales");
const emp3 = new Employee("Chloe", "Marketing");
const emp4 = new Employee("David", "Accounting");
const emp5 = new Employee("Lisa", "Information Systems");

// Create manager objects
const mgr1 = new Manager("Sarah", "Business Analytics", 6);
const mgr2 = new Manager("John", "Sales", 10);
const mgr3 = new Manager("Emily", "Marketing", 5);
const mgr4 = new Manager("Michael", "Accounting", 4);

// Create company object
const company = new Company("BrightPath Solutions");

// Add employees and managers to the company
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
company.addEmployee(emp4);
company.addEmployee(emp5);

company.addEmployee(mgr1);
company.addEmployee(mgr2);
company.addEmployee(mgr3);
company.addEmployee(mgr4);

// Display all employees and managers
company.listEmployees();
