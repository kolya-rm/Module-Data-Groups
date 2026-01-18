// Predict and explain first...
// The code below will not run. It will throw a type error, because it tries to iterate
// over the properties of an object using a for...of loop used for arrays. For correct
// work we should change this loop to a for...in loop.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(value);
}
