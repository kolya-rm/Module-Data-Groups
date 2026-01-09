function sum(elements) {
  return elements.filter(item => typeof item === "number").reduce((sum, item) => sum += item, 0);
}

module.exports = sum;
