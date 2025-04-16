const { isSafe } = require("./utils");

/**
 * Counts how many reports are safe
 * @param {number[][]} reports
 * @returns {number}
 */
const part1 = (reports) => {
  return reports.filter(isSafe).length;
};

module.exports = part1;
exports.isSafe = isSafe;
