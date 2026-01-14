const countWords = require("./count-words.js");

test("CountWords on a non-string throws TypeError", () => {
  expect(() => countWords(42)).toThrow(TypeError);
});