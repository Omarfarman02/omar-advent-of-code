# 🎄 Advent of Code 2024 - Day 3: Mull It Over

## 📜 Problem Summary

The North Pole Toboggan Rental Shop's computer is acting up, and it's your job to figure out why. You're given a corrupted memory dump containing various jumbled instructions, with some legitimate `mul(X,Y)` multiplications hidden among garbage characters.

### Part 1 🧠

Scan the corrupted string for valid `mul(X,Y)` instructions — where `X` and `Y` are 1- to 3-digit integers. Add the result of each multiplication. Ignore any malformed syntax, spacing issues, or fake `mul` lookalikes (e.g. `mul(4*`, `mul [3,7]`, etc.).

### Part 2 🔧

Now things get a bit trickier! The corrupted memory also includes:

- `do()` — enables future `mul` instructions.
- `don't()` — disables future `mul` instructions.

The result is the sum of **only enabled** `mul(X,Y)` instructions, based on the most recent `do()` or `don't()` state.

---

## 🧪 Sample Input Example

```

xmul(2,4)&mul[3,7]!^don't()\_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))

```

✅ Part 1 Total: `2*4 + 5*5 + 11*8 + 8*5 = 161`
✅ Part 2 Total: `2*4 + 8*5 = 48` (only `mul` calls after a `do()` are active)

---

## 🧩 My Approach

### Parsing Strategy:

- I used a regular expression to match valid `mul(X,Y)` instructions, along with `do()` and `don't()` keywords.
- For Part 2, I maintained a simple boolean `enabled` flag to track whether multiplications should be counted based on the latest state modifier.

### Validation:

- Sample cases were implemented using `Jest`.
- A real input file (`input.txt`) is used for final verification.

---

## 🧠 AI Usage Notes

I used AI assistance (ChatGPT) for:

- Rapid prototyping of the regular expression logic.
- Structuring a clean and concise state machine for Part 2.
- Writing thorough inline comments and a clean README summary.

---

## 📁 Files

```

day3/
├── input.txt
├── part1.js
├── part2.js
├── day3.test.js
└── README.md

```

---

## ✅ Final Answers

- **Part 1:** ✅
- **Part 2:** ✅
