const totalTill = require("./till.js");

test("Till on an empty object return '£0'", () => {
  expect(totalTill({})).toEqual("£0.00");
});