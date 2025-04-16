/**
 * Parses the input string into two arrays of numbers: left and right.
 * Each line of the input is expected to contain two numbers separated by whitespace.
 * The first number on the line goes into the left array, the second into the right array.
 *
 * Example input line: "3 4" → left: [3], right: [4]
 *
 * @param {string} input - Raw input string from the puzzle input file
 * @returns {{ left: number[], right: number[] }} Parsed arrays of numbers
 */
const parseInput = (input) => {
  const left = [];
  const right = [];

  input
    .trim() // Remove any leading/trailing whitespace from the entire input
    .split("\n") // Split input into lines
    .forEach((line) => {
      // Clean each line and split it by any amount of whitespace (space, tab, etc.)
      const parts = line.trim().split(/\s+/);

      // Only process lines with exactly two values; skip malformed lines
      if (parts.length !== 2) return;

      // Convert the two string parts to numbers
      const [l, r] = parts.map(Number);

      // Push the numbers into the appropriate arrays
      left.push(l);
      right.push(r);
    });

  return { left, right };
};

module.exports = parseInput;
