const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((pValue, cValue) => pValue + cValue,
  0
)};

const multiply = function(arr) {
  return arr.reduce( (pValue, cValue) => pValue * cValue,
  1
)};

const power = function(num, exp) {
	return num ** exp;
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
