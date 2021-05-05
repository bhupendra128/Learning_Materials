// PolyFills

//PolyFills of Map
const inputArr = [0, 1, 4, 6];
Array.prototype.myMap = function(cb) {
  const arr = this;
  const newArr = [];
  for (let val of arr) {
    newArr.push(cb(val));
  }
  return newArr;
};

let res = inputArr.myMap((item) => item * item);
console.log(res, "res");

//PolyFills of reduce
Array.prototype.myReduce = function(cb, initialValue) {
  const arr = this;
  let sum = initialValue;
  for (let val of arr) {
    sum = cb(sum, val);
  }
  return sum;
};

res = inputArr.myReduce((acc, currVal) => acc + currVal, 0);
console.log(res, "res");

//PolyFill of Bind

// Call

const name = {
  firstName: "bhupi",
  lastName: "kumar",
};

// function printMyName(state, city) {
//   console.log(`${this.firstName} ${this.lastName} ${state} ${city}`);
// }

const printMyName = function(state, city) {
  console.log(`${this.firstName} ${this.lastName} ${state} ${city}`);
};

res = printMyName.call(name, "UP", "GN");

res = printMyName.apply(name, ["HR", "GN"]);

// using bind
res = printMyName.bind(name)("DL", "Test");
// res("DL", "Test");

// PolyFill of myBind
Function.prototype.myBind = function(...args) {
  let obj = this;
  const params = args.slice(1);
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

printMyName.myBind(name)("DL", "MyBind2");

const add = function(a) {
  return function(b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
};
console.log(add(2)(3)(4)(), "First");


// class pubsub {
//     constructor(){
//         let publishData = {
//         }
//     this.pubSubPublish=function(event,data) {
//       publishData = {
//           ...publishData,
//           [event]: data,
//       };
//     }
//     this.subscribePub = function(event) {
//         return publishData[event];
//     }
//     this.unsubscribe = function(event) {
//         delete publishData[event];
//     }
//     }
// }

// var pub1 = new pubsub();
// pub1.pubSubPublish('hello','my world');

// console.log(pub1.subscribePub('hello'));
// console.log(pub1.unsubscribe('hello'));


// const myArray = [1,5,7,8,8];

// Array.prototype.myReduce =  function(cb, initialValue) {
//     const arr = this;
//     let sum = initialValue || 0;
//     for(let val of arr){
//      sum = cb(sum,val);
//     }
//     return sum;
// }

// console.log(myArray.myReduce((acc, val)=> acc + val))


// const name = {
//     firstname: 'bhupendra',
//     lastName:'kumar',
// }

// function printFullName() {
//     return console.log(`${this.firstname} ${this.lastName}`)
// }

// console.log(printFullName.call(name)());

// create map using reduce
Array.prototype.mapUsingReduce = function(cb){
  return this.reduce(function(mapArr, currValue, index){
    mapArr[index] = cb(currValue,index);
    return mapArr;
  },[]);
}

const res =  [1,2,3,4].mapUsingReduce((item, index)=> item+index);
console.log(res,'res')


const arrayVal =  [1,2,3,4,5,6,7,8,9,10];

function getSum(arr, sum) {
    let res = [];
    const obj = {};
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = arr[i];
        let diff = sum  - arr[i];
        if(obj[diff] + arr[i] === sum) {
            res.push([arr[i],diff]); 
        }
        
        //  for(let j=i+1; j <arr.length; j++){
        //      if(arr[j] === diff){
        //         res.push([arr[i],diff]); 
        //      }
        //  }
    }
    return res;
}

console.log(getSum(arrayVal, 11))

// class HelloWord extends Component


