/**
 * A closure is the combination of a function bundled together (enclosed) with references
 * to its surrounding state (the lexical environment). In other words,
 * a closure gives you access to an outer function’s scope from an inner function.
 * In JavaScript, closures are created every time a function is created, at function creation time.
 */

function add(x) {
  let z = x + 30;
  return (y) => {
    console.log(z + y);
  };
}

let ADD = add(35); // Z =  65
ADD(30); // Output 95

/** Advantages of closures
 * Closures are useful because they let you associate data (the lexical environment)
 * with a function that operates on that data.
 */

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

/**Emulating private methods with closures
 * here changeBy and privateCounterValue are private
 */

let counter = (() => {
  let privateCounterValue = 0;
  function changeBy(val) {
    privateCounterValue += val;
  }

  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    value: () => {
      return privateCounterValue;
    },
  };
})();

// const counter1 = counter();
counter.increment();
counter.increment();
console.log(counter.value());

/**Closure Scope Chain
 *
    Local Scope (Own scope)
    Outer Functions Scope
    Global Scope

 */

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};
