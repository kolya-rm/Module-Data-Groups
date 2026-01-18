function createLookup(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('Argument is not array');
  }
  
  const lookup = {};

  if (list.length === 0) {
    return lookup;
  }
   
  for(const pair of list) {
    if (!Array.isArray(pair)) {
      throw new TypeError('Argument contains non-array elements');
    }

    if (pair.length !== 2) {
      throw new TypeError('Argument contains non-pair elements');
    }
    
    if (typeof pair[0] !== 'string' || typeof pair[1] !== 'string') {
      throw new TypeError(`Pair [${pair}] contains non-string element`);
    }

    lookup[pair[0]] = pair[1];
  }

  return lookup;
}

module.exports = createLookup;
