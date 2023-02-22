

window.document.title = "Kapittel 7";
console.clear();

/* #region Intro */
const names = ['Erik M', 'Mary', 'Cecilie M'];
const names2: Array<string> = []; // same as => string[] 

const promise: Promise<string> = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve('This is done');
    }, 2000);
  } catch (error) {
    reject(error)
  }
});

promise.then(_data => { });
/* #endregion */

/* #region Generic Function & Working with contraints */
// extends is the contraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Erik M' }, { age: 30 });
// console.log(mergedObj);
/* #endregion */

/* #region Another Generic Function */
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';

  if (element.length > 0) {
    descriptionText = `Got ${element.length} ${element.length === 1 ? 'element' : 'elements'}`;
  }

  return [element, descriptionText];
}

// console.log(countAndDescribe('Hi therer!'));
/* #endregion */

/* #region "keyof" constraints */
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

// console.log(extractAndConvert({ name: 'Erik', age: 48 }, 'name'));
/* #endregion */

/* #region Generic Classes */
// only allows primitives of type, but only the selected type
class DataStorage<T extends string | number | boolean> {
  private data: T[] = []; // another way => Array<T>

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Erik');
textStorage.addItem('Mary');
textStorage.removeItem('Mary');

// console.log(textStorage.getItems());
/* #endregion */

/* #region Generic Utility Types */
// https://www.typescriptlang.org/docs/handbook/generics.html
interface CourceGoal {
  title: string;
  description: string;
  completedUntil: Date;
}

function createCourceGoal(title: string, description: string, date: Date): CourceGoal {
  // Practical if you need to just create an object based on an interface, 
  // but dont want to fill with data
  let courceGoal: Partial<CourceGoal> = {};
  courceGoal.title = title;
  courceGoal.description = description;
  courceGoal.completedUntil = date;

  return courceGoal as CourceGoal;
}

const namesUtil: Readonly<string[]> = ['Erik', 'Mary'];
// not allowed => namesUtil.push('Cecilie');
// not allowed => namesUtil.pop();
/* #endregion */

/* #region Generic Types vs Union Types */
// Use union type when you want to be flexible to what goes into the array
class DataStorageUnion {
  private data: (string | number | boolean)[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
/* #endregion */