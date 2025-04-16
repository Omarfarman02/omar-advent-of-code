const fs = require("fs");
const path = require("path");

const parseInput = require("./inputParser");
const part1 = require("./part1");
const part2 = require("./part2");

// Optional: Keep a sample test for sanity check
const sampleInput = `
3 4
4 3
2 5
1 3
3 9
3 3
`;

describe("Day 1: Historian Hysteria", () => {
  // Load real puzzle input from input.txt
  const inputPath = path.join(__dirname, "input.txt");
  const rawInput = fs.readFileSync(inputPath, "utf-8");

  const realData = parseInput(rawInput);
  const sampleData = parseInput(sampleInput);

  test("Sample Input - Part 1", () => {
    const result = part1(sampleData.left, sampleData.right);
    expect(result).toBe(11);
  });

  test("Sample Input - Part 2", () => {
    const result = part2(sampleData.left, sampleData.right);
    expect(result).toBe(31);
  });

  test("Real Input - Part 1", () => {
    const result = part1(realData.left, realData.right);
    expect(result).toBe(936063);
  });

  test("Real Input - Part 2", () => {
    const result = part2(realData.left, realData.right);
    expect(result).toBe(23150395);
  });
});
