function createLookup(list) {
  if (typeof list !== 'array') {
    throw new TypeError('Argument is not array');
  }
}

module.exports = createLookup;
