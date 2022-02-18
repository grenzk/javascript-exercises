const palindromes = function (string) {
  const newString = string
    .toUpperCase()
    .replace(/[^A-Z]/g, "");
  const finalString = newString
    .split("")
    .reverse()
    .join("");
  return newString === finalString;
};
// Do not edit below this line
module.exports = palindromes;
