const removeFromArray = function(arr, ...arrElements) {
    return arr.filter(element => arrElements.indexOf(element) < 0)
  }

// Do not edit below this line
module.exports = removeFromArray;
