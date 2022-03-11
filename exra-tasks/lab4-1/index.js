const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let sum = arr[0];

const nArr = arr;
console.log(nArr);

for(let i = 0; i < arr.length; ++i) {
    nArr.reduce((total, item) => {
        let nSum = total + item;
        if(nSum > sum) {
            sum = nSum;
        }
        return nSum;
    }, 0)
    nArr.shift();
}

console.log(sum);