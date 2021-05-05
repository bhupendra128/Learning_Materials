// Sorting
// Selection  sort O(n2)
// search for smallest and largest, and then update the array
// ascending order

let inputArr = [133, 124, 88, -1, 765, 345, 46];
function selectionSortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// console.log(
//   "Sorted Array ***Selection Sort Ascending",
//   selectionSortAscending(inputArr)
// );

// bubble  sort O(n2)
// find the smallest and largest between the 2 element and then bubble outs
// ascending order

function bubbleSortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// console.log(
//   "Sorted Array **Bubble Sort Ascending",
//   bubbleSortAscending(inputArr)
// );

// insertion  sort worst O(n2), best O(n)
// compares 1st element with second and based on condition shift to next position and put element of that position into sorted array
// ascending order

function insertionSortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(
//   "Sorted Array **Insertion Sort Ascending",
//   insertionSortAscending(inputArr)
// );

// Merge  sort worst O(nlogn), best O(nlogn)
// compares 1st element with second and based on condition shift to next position and put element of that position into sorted array
// ascending order

// Merge Sort Implentation (Recursion)
function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

//Searching Algo
// linear search O(n)

function linearSearch(arr, input) {
  for (let ele of arr) {
    if (ele === input) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch(inputArr, 88));

// binary Search log(n)
//

const sortedArr = [0, 4, 7, 32, 44, 88, 99, 999, 6780];

function binarySearch(arr, input) {
  let len = arr.length;
  const search = (l, r) => {
    if (r >= l) {
      let mid = Math.floor((l + r) / 2);
      if (arr[mid] === input) return mid;
      else if (arr[mid] > input) return search(l, mid);
      else return search(mid, r);
    } else return -1;
  };
  return search(0, len);
}

console.log(binarySearch(sortedArr, 88));
