const fs = require("fs");
const path = require("path");

const parseInput = require("./inputParser");
const part1 = require("./part1");
const part2 = require("./part2");

const sampleInput = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`;

describe("Day 2", () => {
  const realInput = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

  const reports = parseInput(realInput);
  const sampleReports = parseInput(sampleInput);

  test("Part 1 - Sample Input", () => {
    const result = part1(sampleReports);
    expect(result).toBe(2);
  });

  test("Part 1 - Real Input", () => {
    const result = part1(reports);
    expect(result).toBe(269);
  });

  test("Part 2 - Sample Input with Problem Dampener", () => {
    const result = part2(sampleReports);
    expect(result).toBe(4);
  });

  test("Part 2 - Real Input", () => {
    const result = part2(reports);
    expect(result).toBe(337);
  });
});
