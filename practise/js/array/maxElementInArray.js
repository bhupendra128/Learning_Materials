const arr = [1, 3, "a", 5, 5, "a", 5, 1, 7];

function findMaxElement(arr) {
  const resObj = {};
  let maxCountValue = 1;
  let maxCountKey = arr[0];
  arr.forEach((item) => {
    if (resObj[item]) {
      resObj[item] = resObj[item] + 1;
      if (resObj[item] >= maxCountValue) {
        maxCountKey = item;
        maxCountValue = resObj[item];
      }
    } else {
      resObj[item] = 1;
    }
  });
  console.log(maxCountKey, maxCountValue);
}

findMaxElement(arr);
