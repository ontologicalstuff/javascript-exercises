const reverseString = function(str) {
    let revStr = '';
    for (i = 0; i < str.length; i++) {
    revStr += str[(str.length - 1) - i];
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
