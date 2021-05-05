/** Question 1
 * Write a memoize function ?
 */

const add = (a, b) => a + b;
const newAdd = memoize(add);
console.log(newAdd(1, 2));
console.log(newAdd(1, 2));

/** Question 2
 * Find the diff between 2 nested objects
 */
var obj1 = {
    a: 'a1',
    b: 'b2',
    c: {
      c1: 'c1',
      c2: 'c2',
      c3: 'c3',
      h: {
          h1:'h1',
      },
    },
    d: 'd1',
  };
  
  var obj2 = {
    a: 'a1',
    c: {
      c1: 'c1',
      c2: 'c2',
      j: {
          j1:'j1'
      }
    },
    d: 'd2',
    e: 'e1'
  };
  
  // output object
  var obj3 = {
    b: 'b2',
    c: {
      c3: 'c3',
    },
    d: 'd1',
  };
  
  function getDiffObj(objA, objB) {
    let finalDif = {};
    function recursion(obj1, obj2) {
      for (let key in obj1) {
        if (!finalDif[key]) {
          if (typeof obj1[key] === 'object') {
          finalDif[key] = getDiffObj(obj1[key], obj2[key]);
          } else if (!obj2 || !obj2[key] || obj1[key] !== obj2[key]) {
            finalDif[key] = obj1[key];
          }
        }
      }
    }
    recursion(objA, objB);
    recursion(objB, objA);
    return finalDif;
  }

  console.log(getDiffObj(obj1, obj2));

/**
 * Question 3
 * Create a sorted output array as shown below ?
 */
//input
var array = [8, 7, 0, 6, 4, -9, -7, 2, -1, 3, 5, 1, 10];
//output
var array2 = [-7, 7, -1, 1, -9, 0, 2, 3, 4, 5, 6, 8, 10];

/**
 * Question 4
 * input/output question ?
 */

let x = [];
let y = x;

console.log(x === y); // true
console.log(x == y); // true

x = [];

console.log(x === y); // false
console.log(x == y); // false

/**
 * Question 5
 * Create a Polyfill of filter ?
 */
const arr = [1, 3, 5, 6, 7];
const res = arr.myFilter((itm) => itm > 2);

Array.prototype.myFilter = function(cb) {
  let arr = this;
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
};

/**
 * Question 6
 * Write a html and css for modal and align it in center ?
 */

/**
 * Question 7
 * Write different usage of useEffect hooks ?
 */

/**
 * Question 8
 * Explain Virtual DOM and how diff algorithms works ?
 * How it is implemented ?
 */

/**
 * Question 9
 * What happens in browser when we type a url and click on enter ?
 * How the full flow works?
 */

/**
 * Question 10
 * Write the implementation of call, apply and bind ? with example.
 */

/**
 * Question 11
 * What is debounce and throttle ?
 * And where they are used ?
 */

/**
 * Question 12
 * what is jsx ?
 * how does react parse the jsx ?
 */

/**
 * Question 13
 * create a flat object as shown below ?
 */

let obj = {
  name: 'Bhupendra',
  address: {
    lat: '123',
    long: '222',
  },
  pin: '123',
};

let output = {
  name: 'Bhupendra',
  'address.lat': '123',
  'address.long': '222',
  pin: '123',
};

function getFlatObj(obj) {
  let resObj = {};
  function recursion(newObj, keyStr) {
    for (let key in newObj) {
      let newKey = keyStr ? `${keyStr}.${key}` : key;
      if (typeof newObj[key] === 'object') {
        recursion(newObj[key], newKey);
      } else {
        resObj[newKey] = newObj[key];
      }
    }
  }
  recursion(obj);
  return resObj;
}

console.log(getFlatObj(obj));

/**
 * Question 14
 * Given an integer array, you need to find one continuous subarray that if you only sort this subarray
 * in ascending order, then the whole array will be sorted in ascending order, too.
 * You need to find the shortest such subarray and output its length.
 * Example 1:
 * Input: [2, 6, 4, 8, 1, 10, 9, 15]
 * Output: 5
 * Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 */

/**
 * Question 15
 * what is output for below ?
 */

var obj = {
  a: this,
  b: function() {
    return this.a;
  },
};

obj.b();
