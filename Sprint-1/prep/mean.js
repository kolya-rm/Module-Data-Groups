function calculateMean(list) {
    let total = 0;

    total += list[0];
    total += list[1];
    total += list[2];

    return total / 3;
}

module.exports = calculateMean