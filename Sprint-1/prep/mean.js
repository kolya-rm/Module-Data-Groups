function calculateMean(list) {
    let total = 0;

    for (const item of list) {
        total += item;
    }

    return total / list.length;
}

module.exports = calculateMean