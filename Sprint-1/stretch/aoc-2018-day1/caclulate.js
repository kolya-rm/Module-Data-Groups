const fs = require('fs');

const FILE_PATH = './input/'
const FILE_NAME = 'input.txt';
const FILE_ENCODING = 'utf8';

const frequencyDifferencesList = parseFrequencyDifferencesFile(FILE_NAME, FILE_PATH, FILE_ENCODING);

const resultingFrequency = calculateResultingFrequency(frequencyDifferencesList);

console.log(resultingFrequency);

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