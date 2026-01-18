/*
This code contains more than one error. Can you find and fix the errors.
*/

let list1 = [1, 2, 3, 4, 5];
let list2 = [6, 7, 8, 9, 10];

function mergeLists(list1, list2) {
  let mergedList = [];
  const maxLength = Math.max(list1.length, list2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < list1.length) {
      mergedList.push(list1[i]);
    }
    if (i < list2.length) {
      mergedList.push(list2[i]);
    }
  }
  return mergedList;
}

//Expected output: [1,6,2,7,3,8,4,9,5,10]
console.log(mergeLists(list1, list2));
