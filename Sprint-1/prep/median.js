function calculateMedian(list) {
    const listLength = list.length + 1;
    const medianIndex = Math.floor(listLength / 2) - 1;
    if (listLength % 2 === 0) {
        return list[medianIndex];
    } else {
        return (list[medianIndex] + list[medianIndex + 1]) / 2;
    }
}

calculateMedian([10, 20, 30, 50, 60]);

module.exports = calculateMedian;