function calculateMedian(list) {
    const medianIndex = Math.floor(list.length / 2);
    return list[medianIndex];
}

module.exports = calculateMedian;