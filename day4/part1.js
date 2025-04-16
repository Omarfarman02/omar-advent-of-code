const fs = require("fs");
const path = require("path");

/**
 * Reads and parses the input grid from a file
 * @param {string} filePath - path to input.txt
 * @returns {char[][]} 2D array of characters
 */
function parseInput(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8").trim();
  return raw.split("\n").map(line => line.trim().split(""));
}

/**
 * All 8 directions to check (dx, dy)
 * Right, Left, Down, Up, and Diagonals
 */
const directions = [
  [0, 1],   // →
  [0, -1],  // ←
  [1, 0],   // ↓
  [-1, 0],  // ↑
  [1, 1],   // ↘
  [-1, -1], // ↖
  [1, -1],  // ↙
  [-1, 1],  // ↗
];

/**
 * Count all occurrences of the word in the grid in 8 directions
 * @param {char[][]} grid
 * @param {string} word
 * @returns {number}
 */
function countOccurrences(grid, word) {
  const rows = grid.length;
  const cols = grid[0].length;
  const wordLength = word.length;
  let count = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      for (const [dx, dy] of directions) {
        let matched = true;
        for (let k = 0; k < wordLength; k++) {
          const nr = r + dx * k;
          const nc = c + dy * k;
          if (
            nr < 0 || nr >= rows ||
            nc < 0 || nc >= cols ||
            grid[nr][nc] !== word[k]
          ) {
            matched = false;
            break;
          }
        }
        if (matched) count++;
      }
    }
  }

  return count;
}

// === Run if called directly ===
if (require.main === module) {
  const grid = parseInput(path.join(__dirname, "input.txt"));
  const result = countOccurrences(grid, "XMAS");
  console.log("Part 1 Answer:", result);
}

module.exports = { parseInput, countOccurrences };
