function findMax(elements) {
    const numberElements = elements.filter(item => typeof item === "number");
    const numberCount = numberElements.length;

    if (numberCount === 0) {
        return -Infinity;
    }

    let max = numberElements[0];

    for(let i = 1; i < numberCount; i++) {
        if (numberElements[i] > max) {
            max = numberElements[i];
        }
    }
    return max;
}

module.exports = findMax;
