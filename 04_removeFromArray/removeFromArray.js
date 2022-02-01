const removeFromArray = function (array, ...items) {
  let index;
  for (let i = 0; i < items.length; i++) {
    if (array.includes(items[i])) {
      index = array.indexOf(items[i]);
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
