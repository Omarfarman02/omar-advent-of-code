const fs = require("fs");
const { countXMAS, countXMASSpecial } = require("./part2"); // Adjust path if needed

describe("Day 4 Tests", () => {
  const sampleInput = fs.readFileSync("day4/input.txt", "utf8")
    .trim()
    .split("\n")
    .map(line => line.trim().split(""));

  test("Part 1: Should find XMAS in the grid", () => {
    const xmasCount = countXMAS(sampleInput);
    expect(xmasCount).toBe(2560);
  });

  test("Part 2: Should find X-MAS in X shape", () => {
    const xmasCount = countXMASSpecial(sampleInput);
    expect(xmasCount).toBe(1910);
  });
});
