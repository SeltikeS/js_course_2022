const array1 = [7, 1, 5, 3, 6, 4];
const array2 = [1, 2, 3, 4, 5];
const array3 = [7, 6, 4, 3, 1]



function maxProfit(arr) {
    let maxValue = 0;
    if(arr.length === 0 || arr.length === 1) {
        return maxValue;
    }
    for(let i = 0; i < arr.length - 1; ++i) {
        for(let j = arr.length; j > i; --j) {
            const fArr = arr.slice(i, j);
            const sArr = arr.slice(j, arr.length);
            let calcHere = 0 - fArr[0] + fArr[fArr.length - 1];
            let calcFnc = maxProfit(sArr);
            if(maxValue < (calcHere + calcFnc)) {
                maxValue = calcHere + calcFnc;
            }
        }
    }
    return maxValue;
}

console.log(maxProfit(array1));
console.log(maxProfit(array2));
console.log(maxProfit(array3));
