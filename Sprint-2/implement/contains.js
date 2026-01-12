function contains(object, key) {
  const objectKeys = Object.keys(object);
  
  for (const currentKey of objectKeys) {
    if (key === currentKey) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
