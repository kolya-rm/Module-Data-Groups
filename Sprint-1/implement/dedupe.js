function dedupe(array) {
  const resultArray = [];
  const itemSet = new Set();

  for (let item of array) {
    if (!itemSet.has(item)) {
      itemSet.add(item);
      resultArray.push(item);
    }
  }
  
  return resultArray;
}

module.exports = dedupe;