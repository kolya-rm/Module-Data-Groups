const parseQueryString = require('./parse-query-string.js')

it("Given a query string with no query parameters, returns empty object", () => {
  const input = "";
  currentOutput = parseQueryString(input);
  targetOutput = {};

  expect(currentOutput).toEqual(targetOutput);
});

it("Given a query string with one pair of query params, returns them in object form", () => {
  const input = "fruit=banana";
  currentOutput = parseQueryString(input);
  targetOutput = { fruit: "banana", };

  expect(currentOutput).toEqual(targetOutput);
});