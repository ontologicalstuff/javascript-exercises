const findTheOldest = function(arr) {
    let presentYear = new Date().getFullYear();
    return arr.sort((a, b) => 
    (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth) ||
    (presentYear - a.yearOfBirth) - (presentYear - b.yearOfBirth)
    )[arr.length -1]
}

// Do not edit below this line
module.exports = findTheOldest;
