const fs = require('fs');
const lib = require('./day1_lib.js')

const FILE_PATH = './input/'
const FILE_NAME = 'input.txt';
const FILE_ENCODING = 'utf8';

const frequencyDifferencesList = parseFrequencyDifferencesFile(FILE_NAME, FILE_PATH, FILE_ENCODING);

console.log(`Resulting frequency is ${lib.calculateResultingFrequency(frequencyDifferencesList)}`);
console.log(`First repeated frequency is ${lib.findFirstRepeatedFrequency(frequencyDifferencesList)}`);

function parseFrequencyDifferencesFile(fileNameString, pathString, encodingString) {
  try {
    const fileContent = fs.readFileSync(pathString + fileNameString, encodingString);

    return fileContent.split('\n').map(str => Number.parseInt(str));
  } catch (err) {
    console.log(`File '${FILE_NAME}' read error: ${err.message}`);
  }
}