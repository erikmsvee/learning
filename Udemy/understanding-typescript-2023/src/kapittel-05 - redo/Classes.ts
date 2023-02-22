

window.document.title = "Kapittel 5";
console.clear();

class Department {
  // private readonly id: string;
  // private name: string; // field => private not accessable outside class
  // private employees: string[] = []; // not accessible outside of class
  protected employees: string[] = []; // acessible for classes that extends this class
  static fiscalYear = 2020;
  constructor(private readonly id: string, public name: string) {
  // constructor(private id: string, public name: string) {
  // constructor(n: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    // method that does not need to be instaciated
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department: ${this.id} - ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  private admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT'); // calls constructor in Department class
    this.admins = admins;
  }

  getAdmins(){
    console.log('IT department admins: ' + this.admins);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    // account.mostRecentReport;
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string){
    // account.mostRecentReport = 'text;
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = this.reports[reports.length -1];
  }

  describe() {
    // overrides Department description method
  }

  addEmployee(employee: string): void {
    if (employee === 'Max') {
      return;
    }

    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports(): string[] {
    return this.reports;
  }
}

/* Singleton and private constructors */
/*
// singleton assures that only one object can be created of the class
class Accounting {
  private static instance: Accounting;
  
  private constructor(private id: string, private name: string) {
  }

  getDepartmentName(): string {
    return this.name;
  }

  getDepartmentId(): string {
    return this.id;
  }

  static getInstance() {
    if(Accounting.instance) {
      return this.instance
    }

    this.instance = new Accounting('A1', 'Accounting');
    return this.instance;
  }
}

const accounting = Accounting.getInstance();
const accounting2 = Accounting.getInstance(); // this is the same instance as accounting

console.log(accounting.getDepartmentName(), accounting2.getDepartmentName());
*/

/* Abstract classes */
/*
// class needs to be marked as abstract, and method also need to be avstract
// this forces al classes that extends super to implement the method
// how to write it => abstract description(text: string): void;
abstract class SuperClass {
  private classId: number;

  constructor(id: number) {
    this.classId = id;
  }

  getClassId(): number {
    return this.classId
  }

  abstract getDescription(): string;
}

class SubClass extends SuperClass {
  constructor(id: number, private description: string) {
    super(id);
  }

  getDescription(): string {
    return this.description;
    // throw new Error("Method not implemented.");
  }
}

const subClass = new SubClass(1234, 'testklasse');
console.log(subClass.getClassId(), subClass.getDescription());

*/

/* Static methods & properties */
// cant be accessed from inside of a class unless class is accessed directly Class.staticValue/function
// const employee = Department.createEmployee('Erik Martin Svee');
// console.log(employee, Department.fiscalYear);


/* getters and setters */
// const ac = new AccountingDepartment('ac01', ['Created the department', 'Added first report']);
// console.log(ac.mostRecentReport);
// ac.addReport('Adding a new report')
// console.log(ac.mostRecentReport);
// ac.mostRecentReport = 'Added the last report';
// console.log(ac.mostRecentReport);

/* Inheritance */
// const itDepatment = new ITDepartment('I1', ['Erik M']);
// itDepatment.getAdmins();

// const accounting = new AccountingDepartment('A1', ['Up and running']);
// accounting.addReport('woops');
// accounting.getReport();


/* Basic */
// const accounting = new Department('a1', 'Accounting');
// accounting.describe();
// accounting.addEmployee('Erik M');
// accounting.addEmployee('Mary');
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'HR', describe: accounting.describe };
// accountingCopy.describe();
