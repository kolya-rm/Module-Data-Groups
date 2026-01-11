const fs = require('fs');
const lib = require('./day1_lib.js')

const DIR_NAME = 'input/'
const FILE_NAME = 'input.txt';
const FILE_ENCODING = 'utf8';

const frequencyDifferencesList = parseFrequencyDifferencesFile(FILE_NAME, DIR_NAME, FILE_ENCODING);

console.log(`Resulting frequency is ${lib.calculateResultingFrequency(frequencyDifferencesList)}`);
console.log(`First repeated frequency is ${lib.findFirstRepeatedFrequency(frequencyDifferencesList)}`);

function parseFrequencyDifferencesFile(fileName, dirName, encoding) {
  try {
    const filePath = process.cwd() + '/' + dirName + fileName;
    const fileContent = fs.readFileSync(filePath, encoding);

    return fileContent.split('\n').map(str => Number.parseInt(str));
  } catch (err) {
    console.log(`File '${FILE_NAME}' read error: ${err.message}`);
  }
}