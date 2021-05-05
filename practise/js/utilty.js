function deepCopy(obj) {
    const newObj = {};
    for(let key in obj) {
        if(typeof obj[key] === 'object'){
            newObj[key] = deepCopy(obj[key]); 
        } else {
            newObj[key] = obj[key];
        }
    }
  return newObj;
}

let object = {
    name:'bhupi',
    address: {
        city: 'Noida',
        test: {
            key:'data'
        }
    }
}


console.log(deepCopy(object));

// get maximum length of a string
function getLongestString(str){
    let newStr = '', max = 0, maxString = '';
    for(let char of str){
        let pos = newStr.indexOf(char);
        if(pos !== -1){
         newStr = newStr.substr(pos + 1);
        }
        newStr +=char;
        if(max < newStr.length){
            maxString = newStr;
            max = newStr.length;
        }
    }
    return maxString;
}

console.log(getLongestString('dvdfdyuio'),'getLongestString');

function getFlatObject(obj){
    let resObj = {};
    function recursion(newObj,keyStr){
    for(let key in newObj){
      let newKetStr = keyStr ? key: `${keyStr}_${key}`;
        if(typeof newObj[key] ==="object"){
            recursion(newObj[key],newKetStr);
        } else {
          resObj[newKetStr] = newObj[key];
        }
    }
    }
    recursion(obj);
    return resObj;
  }
  
  
  
  function getSum(...args){
   let sum = args.reduce((accum, initialValue)=> accum + initialValue, 0);
    return function(...args1){
     if(args1.length){
      let newSum = args1.reduce((accum, initialValue)=> accum + initialValue, 0);
         return getSum(sum + newSum);
     } else {
         return sum;
     }
    }
  }