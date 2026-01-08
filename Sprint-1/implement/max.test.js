/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, returns -Infinity", () => {
  input = [];
  expected = -Infinity;
    
  expect(findMax(input)).toEqual(expected);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
describe("Find max in an array with the single element", () => {
  [
    { input: [-136], expected: -136 },
    { input: [-1], expected: -1 },
    { input: [0], expected: 0 },
    { input: [3], expected: 3 },
    { input: [2354], expected: 2354 },
  ].forEach(({input, expected}) => 
    it(`Returns max for [${input}]`, () => expect(findMax(input)).toEqual(expected))
  );
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
