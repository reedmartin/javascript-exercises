const removeFromArray = function (a, ...rest) {
    return a.filter(function (inBoth) {
        return !rest.includes(inBoth);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
