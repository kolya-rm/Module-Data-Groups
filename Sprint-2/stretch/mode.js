// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  const valueFrequencyMap = trackFrequencyOfEachValue(list);

  return findValueWithHighestFrequency(valueFrequencyMap);
}

const trackFrequencyOfEachValue = (list) => {
  const valueFrequencyMap = new Map();

  for(const value of list) {
    if (typeof value !== "number") {
      continue;
    }
    valueFrequencyMap.set(value, (valueFrequencyMap.get(value) || 0) + 1);
  }

  return valueFrequencyMap;
}

const findValueWithHighestFrequency = (valueFrequencyMap) => {
  let maxFrequency = 0;
  let mode;

  for (const [value, frequency] of valueFrequencyMap) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mode = value;
    }
  }

  return maxFrequency === 0 ? NaN : mode;
}

module.exports = calculateMode;
