const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let activityFloat = parseFloat(sampleActivity);
  if (
    typeof activityFloat === "string" &&
    0 <= activityFloat &&
    activityFloat <= MODERN_ACTIVITY
  ) {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / activityFloat) /
        (Math.log(2) / HALF_LIFE_PERIOD)
    );
  }
  return false;
};
