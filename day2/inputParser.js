/**
 * Parses multiline input into an array of reports (each a number array)
 * @param {string} input
 * @returns {number[][]}
 */
const parseInput = (input) =>
  input
    .trim()
    .split("\n")
    .map((line) => line.trim().split(/\s+/).map(Number));

module.exports = parseInput;
