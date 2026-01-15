// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = Number.parseInt(coin.replace(/p/, ""));

    total += coinValue * quantity;
  }
  
  return `£${Math.floor(total / 100) + ("." + total % 100).padEnd(3, "0")}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object
// Target output is '£4.40'.

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// We use Object.entries to iterate over all properties using for...of loop, which iterates over
// iterables object.

// c) What does coin * quantity evaluate to inside the for...of loop?
// The expression coin * quantity will evaluate to NaN.

// d) Write a test for this function to check it works and then fix the implementation of totalTill

module.exports = totalTill;