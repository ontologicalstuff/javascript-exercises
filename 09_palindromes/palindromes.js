const palindromes = function (words) {
    words = Array.from(words.toLowerCase()) 
    .filter(word => word.match(/[a-z]/g)); 
    let backwards = words.join(''); 
    return words.join('') === Array.from(backwards).reverse().join('');
}
    

// Do not edit below this line
module.exports = palindromes;
