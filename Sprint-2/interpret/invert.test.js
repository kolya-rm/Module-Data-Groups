const invert = require("./invert.js");

test("Invert on an non-object input throws TypeError", () => {
  expect(() => invert([1, 3, 4])).toThrow(TypeError);
});

test("Invert on an object returns object with inverted key/value pairs", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ "10": "x", "20": "y" });
});