function findMax(elements) {
    const numberElements = elements.filter(item => typeof item === "number");
    let max = -Infinity;

    for(let i = 0; i < numberElements.length; i++) {
        if (numberElements[i] > max) {
            max = numberElements[i];
        }
    }
    return max;
}

module.exports = findMax;
