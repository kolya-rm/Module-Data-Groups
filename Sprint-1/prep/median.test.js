const calculateMedian = require("./median");

test("Calculate the median of a ordered list of numbers 10, 20, 30, 50, 60", () => {
    const list = [10, 20, 30, 50, 60];
    const currentOutput = calculateMedian(list);
    const targetOutput = 30;

    expect(currentOutput).toEqual(targetOutput);
});

test("Calculate the median of a ordered list of numbers 10, 20, 30, 50, 60, 70, 80", () => {
  const list = [10, 20, 30, 50, 60, 70, 80];
  const currentOutput = calculateMedian(list);
  const targetOutput = 50;

  expect(currentOutput).toEqual(targetOutput);
});

test("Calculate the median of a ordered list of numbers 10, 20, 30, 40, 50, 60, 70, 80", () => {
  const list = [10, 20, 30, 40, 50, 60, 70, 80];
  const currentOutput = calculateMedian(list);
  const targetOutput = 45;

  expect(currentOutput).toEqual(targetOutput);
});