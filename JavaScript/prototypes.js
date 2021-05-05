/**Prototypes
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another
 * JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object,
 * which acts as a template object that it inherits methods and properties from
 */

function Person(first, last, age, gender, interests) {
  // property and method definitions
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  //...see link in summary above for full definition
}

let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);

console.log(person1.valueOf()); // due to property inherited from Object
console.log(person1.__proto__);
console.log(Object.getPrototypeOf(person1));
console.log(Object.prototype, "object");

person1.prototype.newObject = "hello";

console.log(person1, "person1");
