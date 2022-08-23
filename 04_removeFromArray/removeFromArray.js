const removeFromArray = function(arr, ...arrElements) {
    let a;
for (let i = 0; i < arrElements.length; i++) { 
        a = arrElements[i];
    for (let i = 0; i < arr.length; i++) {
            if (a === arr[i]) {
        arr.splice(i, 1);
        }
    }
  }
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
