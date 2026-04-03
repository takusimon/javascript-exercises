const add = function(firstNum,secondNum) {
return firstNum + secondNum;
};

const subtract = function(firstNum,secondNum) {
return firstNum - secondNum;	
};

const sum = function(arr) {
return arr.reduce((sum,number) => sum + number, 0);
};

const multiply = function(arr) {
return arr.reduce((product,number) => product * number, 1);
};

const power = function(base, exponent) {
return base ** exponent;
};

const factorial = function(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i;
  };
  return res;
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
