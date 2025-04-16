# 🎄 Advent of Code 2024 - Day 4: Ceres Search

## 📜 Problem Summary

While searching for the Chief Historian in the Ceres monitoring station, an Elf asks you to help with a word search puzzle. You are tasked with finding all occurrences of the word "XMAS" in a grid of letters, with some additional constraints.

### Part 1 🧠

In the first part, you need to find all instances of the word "XMAS" in the grid. The word can appear in any direction: horizontally, vertically, diagonally, and even backward. Additionally, the word can overlap with other words.

### Part 2 🔧

In the second part, the puzzle becomes trickier. You need to find occurrences of "XMAS" in a specific pattern — resembling an "X" shape. This means you need to find "MAS" on one diagonal and "SAM" on the other, both forwards and backwards.

---

## 🧪 Sample Input Example

.M.S...... ..A..MSMS. .M.S.MAA.. ..A.ASMSM. .M.S.M.... .......... S.S.S.S.SS .A.A.A.A.. M.M.M.M.M. ..........


✅ **Part 1 Total:** The word "XMAS" appears 2560 times in the grid.

✅ **Part 2 Total:** The word "X-MAS" appears 1910 times in the X-shaped pattern.

---

## 🧩 My Approach

### Parsing Strategy:

- For Part 1, I used a straightforward search for the word "XMAS" in all 8 possible directions: horizontally, vertically, diagonally, and both forwards and backwards.
  
- For Part 2, I specifically focused on the "X" pattern, where "MAS" appears diagonally, and "SAM" appears on the opposite diagonal.

### Validation:

- Sample cases were implemented using `Jest`.
- A real input file (`input.txt`) is used for final verification.

---

## 🧠 AI Usage Notes

I used AI assistance (ChatGPT) for:

- Quick validation of different pattern search algorithms.
- Structuring and writing tests for the different cases.
- Writing a clean and concise README summary with a consistent format.

---

## 📁 Files


```

day4/
├── input.txt
├── part1.js
├── part2.js
├── day4.test.js
└── README.md

```

---

## ✅ Final Answers

- **Part 1:** ✅
- **Part 2:** ✅
