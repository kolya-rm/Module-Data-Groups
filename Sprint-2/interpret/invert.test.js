const invert = require("./invert.js");

test("Invert on an non-object input throws TypeError", () => {
  expect(() => invert([1, 3, 4])).toThrow(TypeError);
});