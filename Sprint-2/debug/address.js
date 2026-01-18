// Predict and explain first...
// This code below will return 'My house number is undefined' string. It's because in the template string
// we try to access to object property like to array element. For get house number value we should access to it
// either using the dot notation or by the property name in square brackets.

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
