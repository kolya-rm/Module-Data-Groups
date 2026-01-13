function createLookup(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('Argument is not array');
  }
  if (list.length === 0) {
    return {};
  }
  for(const pair of list) {
    if (!Array.isArray(pair)) {
      throw new TypeError('Argument contains non-array elements');
    }
    if (pair.length !== 2) {
      throw new TypeError('Argument contains non-pair elements');
    }
  }
}

module.exports = createLookup;
