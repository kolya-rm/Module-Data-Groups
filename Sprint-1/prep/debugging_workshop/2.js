/*
This function should return the value of the largest number in the given array. 
Can you fix the bug in this function

*/

function getLargestNum(arr) {
  let largestNum = arr[0];;
  for (let i = 1; i < arr.length; i++) {
    let currentItem = arr[i];
    if (currentItem > largestNum) {
      largestNum = currentItem;
    }
  }
  return largestNum;
}

let arr = [1, 2, 3, 4, 5];

getLargestNum(arr);