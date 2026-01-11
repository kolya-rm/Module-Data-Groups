// Write a function that takes an array of ice cream objects as a parameter
//	and returns an array of the names of ice creams I can eat
//  I can eat the ice cream if it is lactose-free and contains less than 10 grams of sugar
//  Use the solution from Exercise 1 to help you
function whichIceCreamsCanIEat(iceCreams) {
  const iceCreamICanEatNames = [];
  
  for (const iceCream of iceCreams) {
    if (iceCream.lactoseFree && iceCream.gramsOfSugarPerScoop < 10) {
      iceCreamICanEatNames.push(iceCream.flavour);
    }
  }

  return iceCreamICanEatNames;
}

const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: false,
  gramsOfSugarPerScoop: 12,
};

const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};

const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};

const allIceCreams = [iceCream1, iceCream2, iceCream3, iceCream4, iceCream5];

const iceCreamsICanEat = whichIceCreamsCanIEat(allIceCreams);
console.log(iceCreamsICanEat); // what should this output? : ["Coconut", "Lemon Sorbet"]
