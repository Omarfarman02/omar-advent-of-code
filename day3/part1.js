/**
 * Finds valid mul(X,Y) instructions and sums their results
 * @param {string} input
 * @returns {number}
 */
const part1 = (input) => {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  let match;
  let sum = 0;

  while ((match = regex.exec(input)) !== null) {
    const [, x, y] = match.map(Number);
    sum += x * y;
  }

  return sum;
};

module.exports = part1;
