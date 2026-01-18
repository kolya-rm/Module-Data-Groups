const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
describe("Given an empty array, returns an empty array", () =>
  test("Returns [] for input []", () => {
    input = [];
    expected = [];

    expect(dedupe(input)).toEqual(expected);
  })
);

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
describe("Given an array with no duplicates, returns copy of input array", () =>
  [
    { input: [1, 3, 2], expected: [1, 3, 2] },
    { input: ['a', 'b', 'c', 'd'], expected: ['a', 'b', 'c', 'd'] },
    { input: [2, 'a', 'f', 5, 's', 82, 'h'], expected: [2, 'a', 'f', 5, 's', 82, 'h'] },
  ].forEach(({ input, expected }) =>
    it(`Returns copy of [${input}]`, () => expect(dedupe(input)).toEqual(expected))
  )
);

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element
describe("Given an array with duplicate elements, returns an array first occurrence of each element", () =>
  [
    { input: ['a','a','a','b','b','c'], expected: ['a','b','c'] },
    { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
    { input: [1, 2, 1], expected: [1, 2]},
  ].forEach(({input, expected}) =>
    it(`Lefts first occurrence of each element in [${input}]`, () => expect(dedupe(input)).toEqual(expected))
  )
);