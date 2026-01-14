function tally(array) {
  result = {};
  for(const key of array) {
    result[key] = 1;
  }
  return result;
}

module.exports = tally;
