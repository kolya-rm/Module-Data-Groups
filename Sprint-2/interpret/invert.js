// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("Input is not an object");
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}


module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// The current return value will be {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current return value will be {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value is {1: a, 2: b}

// c) What does Object.entries return? Why is it needed in this program?
// It returns array of key/value pairs in the order how they counted in the object

// d) Explain why the current return value is different from the target output
// Because in the code below the only one property with the key "key" is used for 
// assignation values from the original object.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)