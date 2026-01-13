function createLookup(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('Argument is not array');
  }
  return {};
}

module.exports = createLookup;
