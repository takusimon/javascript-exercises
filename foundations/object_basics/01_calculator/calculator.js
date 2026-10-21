const add = function(firstNumber,secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(arr) {
	return arr.reduce((sum,number) => sum + number,0);
};

const multiply = function(arr) {
  return arr.reduce((product,number) => product * number,1);
};

const power = function(base,exponent) {
	return base ** exponent;
};

const factorial = function(n) {
  let answer = n;
  if (n === 0){
    return 1;
  }
	for (;n > 1;n--) {
    answer *= n - 1;
  }
  return answer;
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
