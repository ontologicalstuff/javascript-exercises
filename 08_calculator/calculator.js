const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let i = 0;
  let sum = 0;
  if (arr.length === i) { 
    return sum
  }
  while (i < arr.length) {
    sum += arr[i]
    i++;
  }
  return sum;
};

const multiply = function(arr) {
  let i = 0;
  let product = 1;
  if (arr.length === i) {
    return i;
  } else {
      while (i < arr.length) {
        product *= arr[i];
        i++
      }
      return product;
  }
    }

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let product = 1;
  while (num > 0) {
  product *= num;
  num--;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
