const palindromes = function (words) {
    words = Array.from(words.toLowerCase()) // converts initial string to an array of lCase letters
    .filter(word => word.match(/[a-z]/g)); // converts the array into an array of only a-z characters
    let backwards = words.join(''); // sets backwards to a string, stripping all the commas from the array
    return words.join('') === Array.from(backwards).reverse().join('');
}
    

// Do not edit below this line
module.exports = palindromes;