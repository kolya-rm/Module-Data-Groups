function doubleAllNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= 2;
    }
}

const myNums = [10, 20, 30];

doubleAllNumbers(myNums);
console.log(myNums);

function swapFirstAndLast(arr) {
    let c = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = c;
}

const myArray = [5, 2, 3, 4, 1];

swapFirstAndLast(myArray);
console.log(myArray);