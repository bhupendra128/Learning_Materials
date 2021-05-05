/**A Sum Array Puzzle
 *Given an array arr[] of n integers, construct a Sum Array sum[] (of same size) 
 such that sum[i] is equal to the sum of all the elements of arr[] except arr[i]. 
 Solve it without subtraction operator and in O(n).

 Input : arr[] = {3, 6, 4, 8, 9}
Output : sum[] = {27, 24, 26, 22, 21}

Input : arr[] = {4, 5, 7, 3, 10, 1}
Output : sum[] = {26, 25, 23, 27, 20, 29}
 */

function getSumArray(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const sum = arr.reduce((acc, currValue) => {
      if (currValue === arr[i]) {
        return acc;
      }
      return acc + currValue;
    }, 0);
    newArr.push(sum);
  }
  return newArr;
}
// var array = [3, 6, 4, 8, 9];
// console.log(getSumArray(array), "output"); //[ 27, 24, 26, 22, 21 ]

/** Now we have to get O(n) */

function getSumArray1(arr) {
  const len = arr.length;
  let leftArr = arr.slice();
  let rightArr = arr.slice();
  let sumArr = [];
  leftArr[0] = 0;
  rightArr[len - 1] = 0;

  for (let i = 1; i < len; i++) {
    leftArr[i] = arr[i - 1] + leftArr[i - 1];
  }
  for (let j = len - 2; j >= 0; j--) {
    rightArr[j] = arr[j + 1] + rightArr[j + 1];
  }
  for (let k = 0; k < len; k++) {
    let sumValue = leftArr[k] + rightArr[k];
    sumArr.push(sumValue);
  }
  return sumArr;
}
// var array = [3, 6, 4, 8, 9];
// console.log(getSumArray1(array), "arr1"); // [ 27, 24, 26, 22, 21 ]
