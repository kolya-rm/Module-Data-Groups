const fs = require('fs');

const FILE_PATH = './input/'
const FILE_NAME = 'input.txt';
const FILE_ENCODING = 'utf8';

const frequencyDifferencesList = parseFrequencyDifferencesFile(FILE_NAME, FILE_PATH, FILE_ENCODING);

console.log(`Resulting frequency is ${calculateResultingFrequency(frequencyDifferencesList)}`);
console.log(`First repeated frequency is ${findFirstRepeatedFrequency(frequencyDifferencesList)}`);

function parseFrequencyDifferencesFile(fileNameString, pathString, encodingString) {
  try {
    const fileContent = fs.readFileSync(pathString + fileNameString, encodingString);

    return fileContent.split('\n').map(str => Number.parseInt(str));
  } catch (err) {
    console.log(`File '${FILE_NAME}' read error: ${err.message}`);
  }
}

function calculateResultingFrequency(frequencyDifferencesList) {
  return frequencyDifferencesList.reduce((accumulator, currentItem) => accumulator += currentItem);
}

function findFirstRepeatedFrequency(frequencyDifferencesList) {
  const frequencySet = new Set();
  const frequencyDifferencesCount = frequencyDifferencesList.length;
  let currentResultFrequency = 0;
  let currentFrequencyDifferenceIndex = 0;

  while (!frequencySet.has(currentResultFrequency)) {
    frequencySet.add(currentResultFrequency);
    currentResultFrequency += frequencyDifferencesList[currentFrequencyDifferenceIndex];
    currentFrequencyDifferenceIndex++;
    if (currentFrequencyDifferenceIndex === frequencyDifferencesCount) {
      currentFrequencyDifferenceIndex = 0;
    }
  }
  return currentResultFrequency;
}