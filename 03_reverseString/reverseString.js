/* Refactored solution 8.27.2022 */

function reverseString(str) {
    str = Array.from(str);
    str.reverse();
    return str.join('');
  }


/* const reverseString = function(str) {
    let revStr = '';
    for (i = 0; i < str.length; i++) {
    revStr += str[(str.length - 1) - i];
    }
    return revStr;
}; */

// Do not edit below this line
module.exports = reverseString;
