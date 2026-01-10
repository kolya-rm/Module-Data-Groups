/*
There is a bug in this code which may not be immediately obvious. 
Hint: Try different test cases to uncover the bug. Then update the code  to 
resolve the bug. 
*/

function calculateAverage(arr) {
  return arr.reduce((accumulator, currentItem) => accumulator += currentItem, 0);
}

let arr = [1, 2, 3, 4, 5];
console.log(calculateAverage(arr));
