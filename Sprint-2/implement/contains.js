function contains(object, key) {
  const objectKeys = Object.keys(object);
  if (objectKeys.length === 0) {
    return false;
  }
  for (const currentKey of objectKeys) {
    if (key === currentKey) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
