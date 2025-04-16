# 🎄 Advent of Code 2024 - Day 1: Historian Hysteria

> Solved in JavaScript with Jest tests and a sprinkle of AI ✨

## 📜 Problem Summary

The Chief Historian has gone missing! In his absence, two separate groups of elves created lists of potentially significant locations — unfortunately, the lists don't match. Your job is to help reconcile the discrepancies.

---

### 🧩 Part One: The Distance Problem

The two lists of location IDs may look wildly different, but maybe they're just... slightly out of sync?

**Task:**  
Sort both lists independently. Then, match corresponding elements by index and compute the total of their absolute differences.

#### ✅ Approach:

- Parse the two-column input into `left[]` and `right[]`.
- Sort both arrays numerically.
- Compute total distance:  
  `sum += Math.abs(left[i] - right[i])`

#### 🧠 Example:

```

Input:
3 4
4 3
...

Sorted left: [1, 2, 3, 3, 3, 4]
Sorted right: [3, 3, 3, 4, 5, 9]

```

Total distance = `2 + 1 + 0 + 1 + 2 + 5 = 11`

---

### ⭐ Part Two: The Similarity Score

Upon closer inspection... maybe many of the numbers actually _do_ match — just not in the same order.

**Task:**
For every number in the left list, count how many times it appears in the right list. Multiply each left number by its count in the right list and sum everything.

#### ✅ Approach:

- Build a frequency map of `right[]`.
- For each number in `left[]`, calculate:
  `score += left[i] * countInRight[left[i]]`

#### 🧠 Example:

```

Left: [3, 4, 2, 1, 3, 3]
Right: [4, 3, 5, 3, 9, 3]

Similarity score = (3×3) + (4×1) + (2×0) + (1×0) + (3×3) + (3×3) = 31

```

---

## 🛠️ Folder Structure

```

day1/
├── input.txt # Puzzle input (not committed)
├── inputParser.js # Cleans and structures the input
├── part1.js # Solution for Part 1
├── part2.js # Solution for Part 2
├── day1.test.js # Jest tests for both parts
└── README.md # You're reading it!

```

---

## ⚙️ How to Run

```bash
# Run tests
npm install
npm test
```

---

## 🤖 AI Help?

Yes! AI was used (hey there 👋) to:

- Generate boilerplate code and comments
- Sanity-check logic against puzzle examples
- Improve input parsing robustness
- Write this very README (meta!)

---

## 🎉 Results

- ✅ **Part 1 Answer:** _Correct!_
- ✅ **Part 2 Answer:** _Also correct!_
- ⭐⭐ Two stars earned — 48 more to go!

