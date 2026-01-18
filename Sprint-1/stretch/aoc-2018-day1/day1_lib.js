function calculateResultingFrequency(frequencyDifferencesList) {
  return frequencyDifferencesList.reduce(
    (accumulator, currentItem) => (accumulator += currentItem)
  );
}

function findFirstRepeatedFrequency(frequencyDifferencesList) {
  const frequencySet = new Set();
  const frequencyDifferencesCount = frequencyDifferencesList.length;
  let currentResultFrequency = 0;
  let currentFrequencyDifferenceIndex = 0;

  while (!frequencySet.has(currentResultFrequency)) {
    frequencySet.add(currentResultFrequency);
    currentResultFrequency +=
      frequencyDifferencesList[currentFrequencyDifferenceIndex];
    currentFrequencyDifferenceIndex++;
    if (currentFrequencyDifferenceIndex === frequencyDifferencesCount) {
      currentFrequencyDifferenceIndex = 0;
    }
  }
  return currentResultFrequency;
}

module.exports = {
  calculateResultingFrequency: calculateResultingFrequency,
  findFirstRepeatedFrequency: findFirstRepeatedFrequency,
}