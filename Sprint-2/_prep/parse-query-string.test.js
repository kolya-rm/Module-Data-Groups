const parseQueryString = require('./parse-query-string.js')

it("Given a query string with no query parameters, returns empty object", () => {
  const input = "";
  currentOutput = parseQueryString(input);
  targetOutput = {};

  expect(currentOutput).toEqual(targetOutput);
});