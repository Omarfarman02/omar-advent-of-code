const fs = require("fs");

const isMASDiagonal = (chars) => {
  const s = chars.join("");
  return s === "MAS" || s === "SAM";
};

const countXMAS = (grid) => {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 1; r < rows - 1; r++) {
    for (let c = 1; c < cols - 1; c++) {
      const center = grid[r][c];
      if (center !== 'A') continue;

      const diag1 = [grid[r - 1][c - 1], center, grid[r + 1][c + 1]];
      const diag2 = [grid[r - 1][c + 1], center, grid[r + 1][c - 1]];

      if (isMASDiagonal(diag1) && isMASDiagonal(diag2)) {
        count++;
      }
    }
  }

  return count;
};

const input = fs.readFileSync("omar-advent-of-code/day4/input.txt", "utf8")
  .trim()
  .split("\n")
  .map(line => line.trim().split(""));

console.log("Part 2: X-MAS Count =", countXMAS(input));
