const totalTill = require("./till.js");

test("Till on an empty object return '£0'", () => {
  expect(totalTill({})).toEqual("£0.00");
});

test("Till on an object with correct properties returns total amount", () => {
  expect(totalTill({ "1p": 10, "5p": 6, "50p": 4, "20p": 10 })).toEqual("£4.40");
});

test("Till on an object with incorrect property skips handling incorrect properties", () => {
  expect(totalTill({ "1p": 10, "5p": 6, "50p": 4, "20p": 10, "2g": 5 })).toEqual("£4.40");
});