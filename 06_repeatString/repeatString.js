const repeatString = function(string, num) {
    let result = "";
    if (num < 0) {
        return "ERROR";
    }
    else {
    let i = 1;
    while (i <= num) {
        result += string;
        i++;
    }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
