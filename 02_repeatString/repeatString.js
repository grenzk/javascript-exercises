const repeatString = function (word, count) {
  if (count < 0) {
    return "ERROR";
  } else {
    return word.repeat(count);
  }
};

// Do not edit below this line
module.exports = repeatString;
