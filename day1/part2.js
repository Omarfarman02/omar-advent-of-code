/**
 * Part 2: Computes similarity score between two lists
 * For each number in the left list, multiply it by how many times it appears in the right list.
 * @param {number[]} left - First list of numbers
 * @param {number[]} right - Second list of numbers
 * @returns {number} - Total similarity score
 */
const part2 = (left, right) => {
  // Count occurrences of each number in the right list
  const rightCount = new Map();
  for (const num of right) {
    rightCount.set(num, (rightCount.get(num) || 0) + 1);
  }

  // Compute the total score based on how many times each left number appears in right
  let total = 0;
  for (const num of left) {
    const count = rightCount.get(num) || 0;
    total += num * count;
  }

  return total;
};

module.exports = part2;
