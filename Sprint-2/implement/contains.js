function contains(object, key) {
  if (typeof object !=='object') {
    throw new TypeError('The first argument is not an Object');
  }

  const objectKeys = Object.keys(object);
  
  for (const currentKey of objectKeys) {
    if (key === currentKey) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
