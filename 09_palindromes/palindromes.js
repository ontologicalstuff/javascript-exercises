const palindromes = function (words) {
    words = Array.from(words.toLowerCase()); // converts initial string to an array of lCase letters
    .filter(word => word.match(/[a-z]/g)); // converts the array into an array of only a-z characters
    let backwards = words.join(''); // sets backwards to a string, stripping all the commas from the array
    backwards = Array.from(backwards);
    backwards = backwards.reverse().join(''); // reverses the array, then converts it to a string stripped of commas
    return words.join('') === backwards;
}
    

// Do not edit below this line
module.exports = palindromes;