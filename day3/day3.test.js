const fs = require("fs");
const path = require("path");

const part1 = require("./part1");
const part2 = require("./part2");

describe("Day 3", () => {
  const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
  const sampleInput1 = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
  const sampleInput2 = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

  test("Part 1 - Sample Input", () => {
    const result = part1(sampleInput1);
    expect(result).toBe(161);
  });

  test("Part 1 - Real Input", () => {
    const result = part1(input);
    expect(result).toBe(159892596);
  });

  test("Part 2 - Sample Input", () => {
    const result = part2(sampleInput2);
    expect(result).toBe(48);
  });

  test("Part 2 - Real Input", () => {
    const result = part2(input);
    expect(result).toBe(92626942);
  });
});
