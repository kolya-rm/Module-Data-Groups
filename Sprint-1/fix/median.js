// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  
  let numberList = list.filter((item) => typeof item === "number");
  const numberListLength = numberList.length;
  
  if (numberListLength === 0) {
    return null;
  }
  numberList = numberList.sort((a, b) => a - b);
  
  const middleIndex = Math.floor(numberListLength / 2);
  
  return numberListLength % 2 === 0 ? 
    (numberList[middleIndex -1] + numberList[middleIndex]) / 2 :
    numberList[middleIndex];
}

module.exports = calculateMedian;