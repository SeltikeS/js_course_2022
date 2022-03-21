const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arr2 = [-2, 1];

function maxArrSum(arr) {
  let sum = arr[0];
  const nArr = arr;

  while (nArr.length) {
    nArr.reduce((total, item) => {
      const nSum = total + item;
      if (nSum > sum) {
        sum = nSum;
      }
      return nSum;
    }, 0);
    nArr.shift();
  }
  return sum;
}

console.log(maxArrSum(arr1));
console.log(maxArrSum(arr2));
