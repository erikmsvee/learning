

window.document.title = "Kapittel 5";
console.clear();

/* Optional Parameters and Properties */ 
// /*
interface Named {
  readonly name: string;
  outputName?: string; // optional property

  greet(name?: string): void
}

class Person implements Named {
  name: string;
  outputName?: string | undefined;
  
  constructor(n?: string) { // optional parameter
    if(n) {
      this.name = n;
    }
  }
  greet(name?: string | undefined): void {
    throw new Error("Method not implemented.");
  }
}
// */

/* Interfaces as Function Types */
/*
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let addNumber: AddFn;
addNumber = (n1: number, n2: number) => {
  return n1 + n2;
}
*/

/* Extending interfaces */
/*
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  // can extend several by using "," between
  greet(phrase: string): void;
}

class Person implements Greetable {
  // all stuff from above interfaces is enforced
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    throw new Error("Method not implemented.");
  }
}
*/

/* Readonly interface properties */
/*
interface Greetable {
  readonly name: string;
}

class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

let user1: Greetable;
user1 = new Person('Erik');
user1.name = 'Mary'; // Not allowed
*/

/* Interface with Classes */
/*
// implements means that a class have to contain what is in the interface
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number = 48) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
    // throw new Error("Method not implemented.");
  }
}

let user1: Greetable;
user1 = new Person('Erik M');
user1.greet('Hi there - I\'m');
console.log(user1); 
*/

/* Interfaces */
/*
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Erik M',
  age: 48,

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

user1.greet('Hi there - I\'m');
*/