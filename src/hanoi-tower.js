const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resultTurnes = 2 ** disksNumber - 1;
  let resultSeconds = resultTurnes * (3600 / turnsSpeed);
  return { turns: resultTurnes, seconds: Math.floor(resultSeconds) };
};
