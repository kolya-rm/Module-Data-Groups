function findMax(elements) {
    const elementCount = elements.length;

    if (elementCount === 0) {
        return -Infinity;
    }

    let max = elements[0];

    for(let i = 1; i < elementCount; i++) {
        if (elements[i] > max) {
            max = elements[i];
        }
    }
    return max;
}

module.exports = findMax;
