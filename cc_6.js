class Employee {
    constructor(name,department)
     {
        this.name = name;
        this.department = department;
    }
    describe()
     {
        return `${this.name}, works in the ${this.department} department.`;
        }
    };

    class Manager extends Employee {
    constructor(name, department, teamSize)
     {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe()
     {
        return `${this.name}, manages a team of ${this.teamSize} people in the ${this.department} department.`;
        }
    };

    const emp1 = new Employee("Mirayda", "Analytics");
    const emp2 = new Employee("Alex", "Sales");
    const emp3 = new Employee("Chloe", "Marketing");

    const mgr1 = new Manager("Sarah", "Analytics", 6);
    const mgr2 = new Manager("John", "Sales", 10);
    const mgr3 = new Manager("Emily", "Marketing", 5);

    class Company {
    constructor(employees)
    {
        this.employees = employees;
    }
    addEmployee(employee)
    {        
        this.employees.push(employee);
    }
    listEmployees()
    {
        return this.employees.map(emp => emp.describe()).join("\n");
    }
};

const company = new Company([emp1, emp2, emp3, mgr1, mgr2, mgr3]);

const newEmp = new Employee("David", "Accounting");
const newEmp2 = new Employee("Lisa", "Information Systems");
company.addEmployee(newEmp);
company.addEmployee(newEmp2);

const newMgr = new Manager("Michael", "Accounting", 4);
company.addEmployee(newMgr);

console.log(company.listEmployees());
