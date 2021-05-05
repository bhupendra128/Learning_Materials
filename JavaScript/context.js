/** Context
 * bind, call,apply,
 */

var obj = {
  firstName: "bhupi",
  lastName: "kumar",
};

function printUserDetail(age, method) {
  console.log(`${this.firstName} ${this.lastName} ${age} ${method}`);
}

printUserDetail();

//calling using bind

// const printUserDetail1 = printUserDetail.bind(obj);
// printUserDetail1(14, "bind");

// // now using call
// printUserDetail.call(obj, 14, "call");

// // now using apply
// printUserDetail.apply(obj, [14, "apply"]);

// now writing polyfill  for bind

Function.prototype.myBind = function(...args1) {
  let context = this,
    funcArgs = args1.slice(1);
  return (args2) => {
    this.apply(args1[0], [...funcArgs, ...args2]);
  };
};

const printUserDetail2 = printUserDetail.myBind(obj, "28", "myBind");
printUserDetail2("bhupidata");
