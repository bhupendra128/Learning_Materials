// function curry() {

// }

// function sum(a,b,c,d) {
//   console.log(a+b+c+d);
// }

// const curriedSum = curry(sum);

// curriedSum(1)(2)(3)(4); // 10
// curriedSum(1,2)(3,4); // 10
// curriedSum(1,2,3)(4); // 10
// curriedSum(1)(2,3,4); // 10

function add(x) {
  this.z = x + 30;
  return function(y) {
    console.log(this.z + y);
  };
}

const sum = add(35);
sum(30);
