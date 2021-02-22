const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  transformedArray = arr.slice();
  for (let index = 0; index < transformedArray.length; index++) {
    if (String(transformedArray[index]).slice(0, 2) === "--") {
      switch (transformedArray[index]) {
        case "--discard-next":
          if (transformedArray[index + 1] !== undefined) {
            transformedArray.splice(index, 2);
            if (
              transformedArray[index] === "--discard-prev" ||
              transformedArray[index] === "--double-prev"
            ) {
              transformedArray.splice(index, 1);
            }
            index--;
          } else {
            transformedArray.splice(index, 1);
            index--;
          }
          break;
        case "--discard-prev":
          if (transformedArray[index - 1] !== undefined) {
            transformedArray.splice(index - 1, 2);
            index -= 2;
          } else {
            transformedArray.splice(index, 1);
            index--;
          }
          break;
        case "--double-next":
          if (transformedArray[index + 1] !== undefined) {
            transformedArray.splice(index, 1, transformedArray[index + 1]);
            index++;
          } else {
            transformedArray.splice(index, 1);
            index--;
          }
          break;
        case "--double-prev":
          if (transformedArray[index - 1] !== undefined) {
            transformedArray.splice(index, 1, transformedArray[index - 1]);
          } else {
            transformedArray.splice(index, 1);
            index--;
          }
          break;
        default:
          return false;
          break;
      }
    }
  }
  return transformedArray;
};
