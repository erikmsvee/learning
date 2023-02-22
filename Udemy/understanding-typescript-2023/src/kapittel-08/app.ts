

window.document.title = "Kapittel 8";
console.clear();

/* #region A First Class Decorator */
/*
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Erik';

  constructor() {
    console.log('Creating person object');
  }
}

const person = new Person();
console.log(person);
*/
/* #endregion */

/* #region Working with Decorator Factories */
function LoggerFactory(logString: string) {
  return function (constructor: Function) {

    console.log(logString);
    console.log(constructor);
  }
}

/* @LoggerFactory('Logging PersonFactory')
class Person {

  constructor() {
    console.log('Creating object...');

  }
} */
/* #endregion */

/* #region Building more usefull Decorators */
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log('Rendering template');

    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h3')!.textContent += p.name
    }
  }
}

// @WithTemplate('<h1>My person object</h1>', 'app')
// class Person {
//   name = 'Erik';

//   constructor() {
//     console.log('Create Person...');

//   }
// }
/* #endregion */

/* #region Adding Multiple Decorators */
// @LoggerFactory('LOGGING Person')
// @WithTemplate('<h3>Logged Person</h3>', 'app')
class PersonMultiDecorator {
  name = 'Erik';

  constructor() {
    console.log('Cresting person object...');

  }
}
/* #endregion */

/* #region Diving into Property, Access, Method and Parameter Decorators */
function Log(target: any, propertyName: string | symbol) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Access decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  // @Log // Property decorator
  title: string;
  private _price: number;

  // @Log2 // Access decorator
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  // @Log3 // Method decorator
  getPriceWithTax(/* Parameter decorator */  /* @Log4 */ tax: number) {
    return this._price * (1 + tax);
  }
}
/* #endregion */

/* #region Returning and changing a Class in a Class decorator */
function Template(template: string, hookId: string) {
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
};

@Template('<h1>Template</h1>', 'app')
class Person {
  name = 'Erik M';

  constructor() {
    console.log('Created person...');
  }
}

// const person = new Person();
/* #endregion */

/* #region Other Decorater return types */
function AutoBind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button2 = document.querySelector('Button')!;
button2.addEventListener('click', p.showMessage);
/* #endregion */

/* #region Validation with Decorators */
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [...(registeredValidators[target.constructor.name]?.[propertyName] ?? []), 'required']
  };
}

function PositivNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [...(registeredValidators[target.constructor.name]?.[propertyName] ?? []), 'positive']
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Cource {
  @Required
  title: string;

  @PositivNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courceForm = document.querySelector('form')!;
courceForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCource = new Cource(title, price);

  if (!validate(createdCource)) {
    alert('Invalid input');
    return;
  }
  console.log(createdCource);
});
/* #endregion */