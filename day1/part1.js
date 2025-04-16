/**
 * Part 1: Compute total distance between sorted left and right values.
 *
 * Sort both lists independently, then calculate the sum of absolute
 * differences between each pair at the same index.
 *
 * @param {number[]} left - Array of left-side numbers.
 * @param {number[]} right - Array of right-side numbers.
 * @returns {number} - Sum of absolute differences.
 */
const part1 = (left, right) => {
  // Clone and sort both arrays to avoid mutating original inputs
  const leftSorted = [...left].sort((a, b) => a - b);
  const rightSorted = [...right].sort((a, b) => a - b);

  // Sum absolute differences for each index
  return leftSorted.reduce((sum, l, i) => {
    return sum + Math.abs(l - rightSorted[i]);
  }, 0);
};

module.exports = part1;
