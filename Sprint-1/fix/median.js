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

  if (numberList.length === 0) {
    return null;
  }
  numberList = numberList.sort((a, b) => a - b);
  
  const middleIndex = Math.floor(numberList.length / 2);
  const listLength = numberList.length;
  let median;
  
  if (listLength % 2 === 0) {
    median = (numberList[middleIndex - 1] + numberList[middleIndex]) / 2;
  } else {
    median = numberList[middleIndex];
  }
  
  return median;
}

calculateMedian(
  [3, 1, 2]
)
module.exports = calculateMedian;