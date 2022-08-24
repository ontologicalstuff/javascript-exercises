const palindromes = function (words) {
    words = words.toLowerCase();
    words = words.match(/[a-z]/g);
    let backwards = Array.from(words);
    backwards = backwards.reverse();
    if (words.toString() === backwards.toString()) {
    		return true
    } else {
    		return false
    }
 };

// Do not edit below this line
module.exports = palindromes;
