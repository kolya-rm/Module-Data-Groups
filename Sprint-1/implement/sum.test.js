/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  input = [];
  expected = 0;
  
  expect(sum(input)).toEqual(expected);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
describe("Given an numeric array with just 1 number, returns contained number", () => {
  [
    { input: [-2], expected: -2 },
    { input: [0], expected: 0 },
    { input: [1024], expected: 1024 },
  ].forEach(({input, expected}) =>
    it(`Returns the sum of numbers in [${input}]`, () => expect(sum(input)).toEqual(expected))
  );
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
describe("Given a numeric array with negative elements, return sum of its elements", () =>{
  [
    { input: [-2, -1], expected: -3 },
    { input: [-2, -1, 0, 1], expected: -2 },
    { input: [-43, 11, 8, 18, -21, 32, -9, 7], expected:  3},
  ].forEach(({input, expected}) => 
    it(`Returns the elements sum in [${input}]`, () => expect(sum(input)).toEqual(expected))
  );
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
describe("Given a numeric array with decimal elements", () => {
  precision = 10 ** -3;
  [
    { input: [0.1, 1.2, 3.4], expected: 4.7 },
    { input: [-2.5, 0, 5, -3.4, 0.2], expected: -0.7 },
    { input: [3, -5.2, -1.8, 9, -4.7, 2.9], expected: 3.2 },
  ].forEach(({input, expected}) => 
    it(`Returns the elements sum in [${input}]`, () => expect(sum(input)).toBeCloseTo(expected, precision))
  );
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
describe("Given an array with non-numeric elements, should sum numeric elements", () => {
  [
    { input: [null, 10, undefined, [0, 1], 3], expected: 13 },
    { input: [12, 4, 8, "seven"], expected: 24 },
    { input: [null, {name: "Jane", surname: "Dow", age: 36}, false, 5], expected:  5},
  ].forEach(({input, expected}) => 
    it(`Returns the numeric elements sum for [${input}]`, () => expect(sum(input)).toEqual(expected))
  );
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
