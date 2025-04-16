const { isSafe } = require("./utils");

/**
 * Determines if a report can be made safe by removing one level
 * @param {number[]} levels
 * @returns {boolean}
 */
const canBeMadeSafe = (levels) => {
  for (let i = 0; i < levels.length; i++) {
    const modified = [...levels.slice(0, i), ...levels.slice(i + 1)];
    if (isSafe(modified)) return true;
  }
  return false;
};

/**
 * Counts reports that are safe or can be made safe with the Problem Dampener
 * @param {number[][]} reports
 * @returns {number}
 */
const part2 = (reports) => {
  return reports.filter((levels) => isSafe(levels) || canBeMadeSafe(levels))
    .length;
};

module.exports = part2;
