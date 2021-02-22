const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) {
    return false;
  }
  let result = [];
  members.forEach((element) => {
    if (typeof element == "string" && element.trim(0).length > 0) {
      result.push(element.trim()[0].toUpperCase());
    }
  });
  if (result.length === 0) {
    return false;
  }
  return result.sort().join("");
};
