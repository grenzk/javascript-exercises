const fibonacci = function (fibNum) {
  const arr = [];
  let num1 = 1;
  let num2 = 1;
  let sum;

  parseInt(fibNum);
  if (fibNum > 0) {
    for (let i = 0; i < fibNum; i++) {
      arr.push(num1);
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return arr[fibNum - 1];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
