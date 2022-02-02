const sumAll = function (startVal, endVal) {
  const arr = [];
  if (
    startVal >= 0 &&
    endVal >= 0 &&
    typeof startVal === "number" &&
    typeof endVal === "number"
  ) {
    if (startVal > endVal) {
      for (let i = endVal; i <= startVal; i++) {
        arr.push(i);
      }
    } else {
      for (let i = startVal; i <= endVal; i++) {
        arr.push(i);
      }
    }
  } else {
    return "ERROR";
  }
  let sum = arr.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
