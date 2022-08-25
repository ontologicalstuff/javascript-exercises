const findTheOldest = function(arr) {
    let arrOfArr = [];
    let ages = []
    let date = new Date();
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        arrOfArr.push( Object.values(arr[i]) );
    }
    for (let i = 0; i < arrOfArr.length; i++) {
        if (arrOfArr[i].length > 2) {
          ages.push(arrOfArr[i][2] - arrOfArr[i][1]);
    }   else if (arrOfArr[i].length === 2) {
          ages.push(date.getFullYear() - arrOfArr[i][1]);
    }
    }
    let maxAge = Math.max(...ages);
    for (let i = 0; i < ages.length; i++) {
    if (maxAge === ages[i]) {
      index = i;
    }
}
    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
