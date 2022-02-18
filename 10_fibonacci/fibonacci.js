const fibonacci = function (fibNum) {
  const arr = [];
  let num = 1;
  arr[0] = num;
  let i = 0;

  parseInt(fibNum);
  if (fibNum > 0) {
    while (i < fibNum - 1) {
      if (i === 0) {
        num = 0 + arr[0];
      } else {
        num += arr[i - 1];
      }
      i++;
      arr[i] = num;
    }
    return arr[fibNum - 1];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
