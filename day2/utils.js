/**
 * Determines if a single report is safe
 * @param {number[]} levels
 * @returns {boolean}
 */
exports.isSafe = (levels) => {
  const diffs = levels.slice(1).map((val, i) => val - levels[i]);

  // Check if all diffs are within [-3, -1] or [1, 3]
  const allWithinRange = diffs.every(
    (diff) => Math.abs(diff) >= 1 && Math.abs(diff) <= 3
  );

  // Check if strictly increasing or decreasing
  const allIncreasing = diffs.every((diff) => diff > 0);
  const allDecreasing = diffs.every((diff) => diff < 0);

  return allWithinRange && (allIncreasing || allDecreasing);
};
