const palindromes = function (words) {
    words = Array.from(words.toLowerCase()).filter(word => word.match(/[a-z]/g));
    let backwards = words.join('');
    backwards = Array.from(backwards)
    backwards = backwards.reverse().join('');
    if (words.join('') === backwards) {
        return true
    } 
        return false
   };

// Do not edit below this line
module.exports = palindromes;