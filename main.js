// **** CONST & LET

const name = 'John';

//name = 'jack';
//causes error, const can't be changed once set

let nametwo = 'Matt';
nametwo = 'Matthew';
console.log(nametwo);

//let can be changed - above code outputs Matthew

const person = {
  name: 'John',
  age: 33
};

person.name = 'Matt';
console.log(person);

//Const can change OBJECTS that are already created (above and below)

const nums = [1, 2, 3, 4];
nums.push(5);

console.log(nums);

// ****Arrow Functions

const sayHello = name => console.log(`Hello ${name}`);

sayHello('Matt');

//Same as a normal function sayHello(){}; etc

// ****FOREACH
const fruits = ['Apples', 'Oranges', 'Pears'];

fruits.forEach((fruit, index) => {
  console.log(fruit);
});

// **** MAP
const singular = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(singular);

// **** FILTER

const people = [
  { id: 1, name: 'Matt', email: 'matt@gmail.com' },
  { id: 2, name: 'Bob', email: 'bob@gmail.com' },
  { id: 3, name: 'Julia', email: 'julia@gmail.com' },
  { id: 4, name: 'Erin', email: 'erin@gmail.com' }
];

const people2 = people.filter(person => person.id !== 2);

console.log(people2);

// **** SPREAD -> spread operator is '...'

const arr = [1, 2, 3];
const arr2 = [...arr, 4];

const arr3 = [...arr2.filter(num => num !== 2)];
console.log(arr3);

console.log(arr2);

//Using spread above it adds the number to 'arr', below it inserts the person2 'email' value into person1

const person1 = {
  name: 'Matt',
  age: 36
};

const person2 = {
  ...person1,
  email: 'matt@gmail.com'
};

console.log(person2);

// **** DESTRUCTURING (generally all variables should follow same structure but already had name as a const)

const profile = {
  profilename: 'John Doe',
  profileaddress: {
    street: '123 Main Street',
    city: 'Toronto'
  },
  profilehobbies: ['movies', 'music']
};

const { profilename, profileaddress, profilehobbies } = profile;
const { street, city } = profile.profileaddress;

console.log(street, city);

// **** CLASSES
//React Component class is just a ES6 Class
// Inside a class you can have properties or methods

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const newPerson = new Person('Matt', 25);
const newPerson2 = new Person('Sarah', 29);

console.log(newPerson.greet());
console.log(newPerson2.greet());

// **** SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 3000);

console.log(customer1.info());

// **** MODULES
//Babel allows you to use ES6 modules

/* Example
file 1 (file.js) 
export const user = 'Jeff';
export const nums = [1, 2, 3];
export default Person;

file 2 (file2.js)

import { user, nums } from './file1';
import Person from './file1';

console.log(name)  -> Would display 'Jeff' From file 1
*/
