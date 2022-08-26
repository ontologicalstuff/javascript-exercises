/* First refactored solution */
const findTheOldest = function(arr) {
    let ages = [];
    let presentYear = new Date().getFullYear();
	ages = Array.from(arr, x => x.yearOfDeath - x.yearOfBirth || 
        presentYear - x.yearOfBirth);
    let maxAge = Math.max(...ages);
    for (let i = 0; i < arr.length; i++) {
 	if (maxAge === arr[i].yearOfDeath - arr[i].yearOfBirth || 
        maxAge === presentYear - arr[i].yearOfBirth) {
    	return arr[i]
    }
 }
};






/* First solution 
const findTheOldest = function(arr) {
    let objToArr = [];
    let ages = []
    let date = new Date();
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        objToArr.push( Object.values(arr[i]) );
    }
    for (let i = 0; i < objToArr.length; i++) {
        if (objToArr[i].length > 2) {
          ages.push(objToArr[i][2] - objToArr[i][1]);
    }   else if (objToArr[i].length === 2) {
          ages.push(date.getFullYear() - objToArr[i][1]);
    }
    }
    let maxAge = Math.max(...ages);
    for (let i = 0; i < ages.length; i++) {
    if (maxAge === ages[i]) {
      index = i;
    }

}
    return arr[index];
}; */


// Do not edit below this line
module.exports = findTheOldest;
