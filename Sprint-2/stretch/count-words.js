/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string

  Example
  If we call countWords like this:

  countWords("you and me and you") then the target output is { you: 2, and: 2, me: 1 }

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops
    - Comparison inside if statements
    - Setting values on an object

## Advanced challenges

1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results

2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)

3. Order the results to find out which word is the most common in the input
*/

function countWords(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input is not string");
  }

  const tempObj = {};

  const words = str.toLowerCase().replace(/[^\w\s]/g, "").split(/\s/).filter(word => word.length > 0);

  for (const word of words) {
    tempObj[word] = tempObj[word] ? tempObj[word] + 1 : 1;
  }

  const resultObj = {};

  Object.entries(tempObj).sort((a, b) => b[1] - a[1]).map(entry => resultObj[entry[0]] = entry[1]);

  return resultObj;
}

console.log(countWords("You, and. me and :you and me"));

module.exports = countWords;