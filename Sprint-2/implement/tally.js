function tally(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Input is not array`);
  }

  result = {};

  for(const key of array) {
    result[key] = result[key] ? result[key] + 1 : 1;
  }
  
  return result;
}

module.exports = tally;