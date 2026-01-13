function createLookup(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('Argument is not array');
  }
  if (list.length === 0) {
    return {};
  }
  for(const pair in list) {
    if (!Array.isArray(pair)) {
      throw new TypeError('Argument contains non-array elements');
    }
  }
}

module.exports = createLookup;
