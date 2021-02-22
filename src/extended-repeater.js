const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options == undefined) {
    options = {};
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  let segment = new Array(options.additionRepeatTimes).fill(
    String(options.addition)
  );
  let result = new Array(options.repeatTimes).fill(
    String(str) + segment.join(String(options.additionSeparator))
  );
  return result.join(options.separator);
};
