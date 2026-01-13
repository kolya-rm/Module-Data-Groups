const createLookup = require("./lookup.js");

describe('Creates a country currency code lookup object for multiple codes given in a pairs array', () => {
  [
    { input: 42},
    { input: 'Some string'},
    { input: undefined},
    { input: false},
    { input: null},
  ].forEach(({input})  => 
    it('Given not an array, throw a type error', () => expect(() => createLookup(input)).toThrow(TypeError))
  ) 
});


/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
