const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let res = 0;
  arr.forEach((element) => {
    res += element.filter((item) => item === "^^").length;
  });
  return res;
};
