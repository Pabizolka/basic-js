const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, current = 1) {
    if (arr.some((item) => Array.isArray(item))) {
      current = this.calculateDepth(arr.flat(), current + 1);
    }
    return current;
  }
};
