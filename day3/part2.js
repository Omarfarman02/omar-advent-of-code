/**
 * Processes a corrupted program string for conditional multiplications.
 * Supports do() and don't() instructions for enabling/disabling `mul(...)`.
 * @param {string} input
 * @returns {number}
 */
const part2 = (input) => {
  const instructionRegex = /do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\)/g;

  let enabled = true;
  let sum = 0;
  let match;

  while ((match = instructionRegex.exec(input)) !== null) {
    const [fullMatch, x, y] = match;

    if (fullMatch === "do()") {
      enabled = true;
    } else if (fullMatch === "don't()") {
      enabled = false;
    } else if (x !== undefined && y !== undefined && enabled) {
      sum += Number(x) * Number(y);
    }
  }

  return sum;
};

module.exports = part2;
