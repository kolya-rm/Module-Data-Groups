function contains(object, key) {
  if (typeof object !=='object') {
    throw new TypeError('The first argument is not an Object');
  }

  return Object.keys(object).includes(key);
}

module.exports = contains;