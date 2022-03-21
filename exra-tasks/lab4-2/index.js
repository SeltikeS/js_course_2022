const array1 = [7, 1, 5, 3, 6, 4];
const array2 = [1, 2, 3, 4, 5];
const array3 = [7, 6, 4, 3, 1];

function maxProfit(arr) {
  let maxValue = 0;
  if (arr.length === 0 || arr.length === 1) {
    return maxValue;
  }
  arr.forEach((item, index) => {
    for (let j = arr.length; j > index; --j) {
      const fArr = arr.slice(index, j);
      const sArr = arr.slice(j, arr.length);
      maxValue = Math.max(
        maxValue,
        fArr[fArr.length - 1] - fArr[0] + maxProfit(sArr),
      );
    }
  });
  return maxValue;
}

console.log(maxProfit(array1));
console.log(maxProfit(array2));
console.log(maxProfit(array3));
