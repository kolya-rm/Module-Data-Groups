const countWords = require("./count-words.js");

test("CountWords on a non-string throws TypeError", () => {
  expect(() => countWords(42)).toThrow(TypeError);
});

test("CountWords on an empty string returns empty object", () => {
  expect(countWords("")).toEqual({});
});

test("CountWords on a low case string separated by spaces returns object with word's count", () => {
  expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1});
});