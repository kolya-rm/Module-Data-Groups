const calculateMean = require("./mean")

test("Calculates the mean of the list of numbers 3, 50, 7", () => {
    const list = [3, 50, 7];
    const currentOutput = calculateMean(list);
    const targetOutput = 20;

    expect(currentOutput).toEqual(targetOutput);
});

test("Calculates the mean of the list of numbers 3, 20, 7", () => {
  const list = [3, 20, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 10;

  expect(currentOutput).toEqual(targetOutput);
});

test("Calculates the mean of the list of numbers 3, 20, 7, 2", () => {
  const list = [3, 20, 7, 2];
  const currentOutput = calculateMean(list);
  const targetOutput = 8;

  expect(currentOutput).toEqual(targetOutput);
});