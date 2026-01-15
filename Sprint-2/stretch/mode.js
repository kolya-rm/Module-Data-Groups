// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  // track frequency of each value
  let freqs = trackFrequencyOfEachValue(list);

  // Find the value with the highest frequency
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
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

module.exports = calculateMode;
