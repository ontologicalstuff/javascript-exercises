const removeFromArray = function(arr, ...arrElements) {
    let arrElement;
for (let i = 0; i < arrElements.length; i++) { 
        arrElement = arrElements[i];
    for (let i = 0; i < arr.length; i++) {
            if (arrElement === arr[i]) {
        arr.splice(i, 1);
        }
    }
  }
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
