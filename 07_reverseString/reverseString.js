const reverseString = function (string) {
    // I can make it an array reverse the order
    // and join it back together as a string
    // first take the string and make it an array
    let initalString = string
    let initalArray = initalString.split("");
    // reverse the array
    let reverseArray = initalArray.reverse();
    // rejoin the array
    let rejoinArrary = reverseArray.join("");
    // return the rejoined array
    return rejoinArrary;
    //// I WAS HERE
};

// Do not edit below this line
module.exports = reverseString;
