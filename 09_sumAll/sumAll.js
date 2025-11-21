const sumAll = function (initialA, initialB) {
    let sum = 0;
    if ((initialA < 0 || initialB < 0) || (!Number.isInteger(initialA)) || (!Number.isInteger(initialB)) ) {
        return 'ERROR';
    }
    else if (initialA >= initialB) {
        for (; initialB <= initialA; initialB++) {
            sum += initialB;
        }
    }
    else {
        for (; initialA <= initialB; initialA++) {
            sum += initialA;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
