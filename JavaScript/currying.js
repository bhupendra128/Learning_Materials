function add(x) {
  let sum = x;
  return function resultFn(y) {
    if (arguments.length) {
      sum += y;
      return resultFn;
    }
    return sum;
  };
}

console.log(add(2)(3)(), "First"); // 6
console.log(add(2)(3)(4)(), "second"); // 9

function fixCurry(fn, totalArgs) {
  totalArgs = totalArgs || fn.length;
  return function recursor() {
    return arguments.length < totalArgs
      ? recursor.bind(this, ...arguments)
      : fn.call(this, ...arguments);
  };
}

var add = fixCurry((a, b, c) => a + b + c); //fn = summation function
console.log(add(1, 2, 3)); // output: 6
console.log(add(1)(2, 3)); // output: 6
console.log(add(1)(3)(2)); // output: 6
console.log(add(1, 2)(3)); // output: 6

function currying(fn, totArgs) {
  totArgs = totArgs || fn.length;
  return function recursiveFn() {
    return arguments.length < totArgs
      ? recursiveFn.bind(this, ...arguments)
      : fn.call(this, ...arguments);
  };
}

var addDData = currying((a, b, c, d) => a + b + c + d);
console.log(addDData(1, 2, 3, 4), "hello");
