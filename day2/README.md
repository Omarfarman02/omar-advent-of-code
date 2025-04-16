# 🎄 Advent of Code 2024 - Day 2: Red-Nosed Reports

## 🧩 Problem Summary

You're helping engineers at the Red-Nosed Reindeer reactor analyze unusual data logs. Each report is a list of `levels`. A report is considered **safe** if:

### ✅ Part 1 Rules

- All levels are either strictly **increasing** or **decreasing**.
- Each adjacent level differs by **1–3 units**.

**Example:**

```

7 6 4 2 1 ← Safe
1 2 7 8 9 ← Not safe (7 - 2 = 5)

```

### 🔧 Part 2 Twist: Problem Dampener

If a report is not safe, the **Problem Dampener** allows you to **remove one level**. If that makes it safe, then the whole report is counted as safe.

---

## ✅ My Solution

### ✔️ `part1.js`

- Validates each report using the increasing/decreasing logic.
- Filters and counts only safe reports.

### ✔️ `part2.js`

- Reuses the safe logic.
- Attempts removing one level at a time from unsafe reports to check if it becomes safe.

### 🧪 Tests

- Written in **Jest** and run via `npm test`.
- Reads `input.txt` for real data.

---

## ⚙️ AI Assistance

🧠 I used ChatGPT to:

- Brainstorm clean logic for detecting safe sequences.
- Refactor duplicate logic between Part 1 and Part 2.
- Comment and document each function clearly.
- Help write and organize tests efficiently.

---

## 📈 Results

- ✅ **Part 1 Safe Reports:** 269
- ✅ **Part 2 Safe Reports with Dampener:** 337

_(Real numbers are printed in the test logs!)_

---

## 📁 Files

- `input.txt` – Your puzzle input (not included in version control)
- `inputParser.js` – Parses input into arrays of numbers
- `part1.js` – Logic for basic safe reports
- `part2.js` – Extended logic using the Problem Dampener
- `day2.test.js` – Jest test file
