/**PolyFill Map */

var sampleArr = [1, 2, 3, 4];
Array.prototype.myMap = function(callback) {
  const inputArr = this;
  const newArray = [];
  for (let i of inputArr) {
    newArray.push(callback(i));
  }
  return newArray;
};

const res = sampleArr.myMap((item) => item * item);
console.log(res, "res");

/**Currying function */

function sum(a) {
  return function(b) {
    console.log(a + b);
  };
}

const sum1 = sum(1);
sum1(10);

//-----------------------

Array.prototype.newMap =  function(callback){
  let arr =  this;
  const newArr = [];
  for(let i of arr){
newArr.push(callback(i));
  }
  return newArr;
}

const updateMap = sampleArr.newMap(item=>item*item);