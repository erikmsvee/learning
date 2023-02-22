

window.document.title = "Kapittel 6";
console.clear();

/* #region Intersection types */
type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Erik',
  privileges: ['Create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// console.log(e1);
/* #endregion */

/* #region Type guards  */
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b
}

type UnkownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnkownEmployee) {
  console.log('Name: ' + emp.name);

  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
}

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car()
const v2 = new Truck();
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// useVehicle(v1);
// useVehicle(v2);
/* #endregion */

/* #region Discriminated unions */
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break;
    case 'horse':
      speed = animal.runningSpeed
      break;
  }


  console.log('Moving with speed: ' + speed);
}

// moveAnimal({ type: 'bird', flyingSpeed: 200 });
/* #endregion */

/* #region Type casting */
const paragraph = document.querySelector('p');
const paragraphById = document.getElementById('message-output');

const userInput = document.getElementById('user-input')! // "!" does not know its a InputElement, but it knows its there
const userInputV2 = <HTMLInputElement>document.getElementById('user-input'); // ! tells that the element exist
const userInputV3 = document.getElementById('user-input') as HTMLInputElement; // better for React and Vue (?)

// userInput.value= 'Banana'; 
// userInputV2.value = 'Hello';
// userInputV2.value = 'Hello 2'
/*  #endregion */

/* #region Index Properties */
// Can add as many properties as needed, as long as they are of correct types
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character' }
  // id: string; // setting it to number is not allowed
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  userName: 'Must start with a capital character!'
}
/*  #endregion */

/* #region Function Overloads */
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b
}

const result = add2(1, 5);
const result2 = add2('Erik', 'Martin');
/*  #endregion */

/* #region Optional Chaining */
const fetchUserData = {
  id: 'u1',
  name: 'Erik',
  job: { title: 'CEO', description: 'Boss' }
}

// console.log(fetchUserData?.job?.title);

/*  #endregion */

/* #region Nullish Coalecing */
const userInputNulish = '';

// const storedData = userInputNulish || 'DEFAULT';
const storedData = userInputNulish && 'DEFAULT';

console.log(storedData);

/*  #endregion */