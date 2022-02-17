const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, num) => total * num);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (number) {
  let value = 1;
  if (number === 0) {
    return value;
  } else {
    for (let i = 1; i <= number; i++) {
      value *= i;
    }
    return value;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
