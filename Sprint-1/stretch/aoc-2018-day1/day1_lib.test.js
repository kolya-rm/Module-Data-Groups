const lib = require('./day1_lib.js');

describe("Returns resulting frequency by the summing differences list elements", () => 
  [
    { input: [1, -2, 3, 1], expected: 3 },
    { input: [1, 1, 1], expected: 3 },
    { input: [1, 1, -2], expected: 0 },
    { input: [-1, -2, -3], expected: -6 },
  ].forEach(({input, expected}) =>
    it(`Calculating resulting frequency for [${input}]`, () => expect(lib.calculateResultingFrequency(input)).toEqual(expected))
  )
);

describe("Returns the first frequency reached twice for frequency differences list", () =>
  [
    { input: [1, -2, 3, 1], expected: 2},
    { input: [1, -1], expected: 0},
    { input: [3, 3, 4, -2, -4], expected: 10},
    { input: [-6, 3, 8, 5, -6], expected: 5},
    { input: [7, 7, -2, -7, -4], expected: 14},
  ].forEach(({input, expected}) =>
    it(`Find the first frequency reached twice for [${input}]`, () => expect(lib.findFirstRepeatedFrequency(input)).toEqual(expected)) 
  )
);