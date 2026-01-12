function contains(object, key) {
  const objectKeys = Object.keys(object);
  if (objectKeys.length === 0) {
    return false;
  }
}

module.exports = contains;
