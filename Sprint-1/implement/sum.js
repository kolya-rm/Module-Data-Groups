function sum(elements) {
  return elements.reduce((sum, item) => sum += item, 0);
}

module.exports = sum;
