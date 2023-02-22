

/* Kapittel 2 */
window.document.title = "Kapittel 2";

/* Never */
// /*



// */

/* Unknown */
/*
// use more explisit typing than unknown => string | number, but unkown is better than any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string') {
  userName = userInput;
}

const generateError = (message: string, code: number): never  => {
  throw { message: message, errorCode: code }
}

generateError('An error occured', 500);

*/

/* Function types & Callback */
/*
function logResult (result) {
  console.log(`Result is: ${result}`);
}

function addAndHandle(n1: number, n2: number, cb: (number: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, logResult);
*/

/* Function as type */
/*
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(48, 44));

let combineValues: (a: number, b: number) => number;

// let func: Function;
combineValues = add;
// combineValues = printResult;

*/

/* Function return type */
/*

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}
printResult(add(48, 44));

*/

/* Union, Literal, Type Alias */
/*
type Combinable = number | string; // Union => Type alias
type ConversionDescripto = 'as-number'| 'as-text'; // Literal => Type alias

function combine(
  // input1: number | string, // Union
  // input2: number | string, // Union
  input1: Combinable, // Type Alias
  input2: Combinable, // Type Alias
  // resultConversion:  'as-number'| 'as-text' // literal only allowed types
  resultConversion:  ConversionDescripto // Type Alias
  ) {
  let result: string | number;

  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineTextAges = combine('30', '26', 'as-number');
console.log(combineTextAges);

const combineNames = combine('Erik ', 'Martin', 'as-text');
console.log(combineNames);
*/

/* Basic, Objects and Arrays */
/*

enum Role { ADMIN = 2, READ_ONLY, AUTHOR, BOSMAN }; // number get incremented

interface Person {
  name: string;
  age: number;
  hobbies: string[]; // (string|number)[] allow string and number
  role: [number, string]; // tuple if you know the amount of values in advance, this one allow exact 2 values
  roleType: Role;
  optional?: any; // this can be whatever DONT use
}

const person: Person = {
  name: 'Erik M',
  age: 48,
  hobbies: ['TKD', 'Brewing'],
  role: [2, 'author'],
  roleType: Role.ADMIN
};

if(person.roleType === Role.ADMIN) {
  console.log(`User is admin and index is ${Role.ADMIN.valueOf()}`);
}

// person.hobbies.forEach(hobby => {
//   console.log(hobby);
// });

// function add(n1: number, n2: number): number {
//   return n1 + n2;
// };
*/
