# 📊 Grades & Results Page (Day 22)

## 📌 Overview

The **Grades & Results** module of the Student Management System displays the student's academic performance. It includes an **Overall Result card** with CGPA and percentage, a **detailed marks table** for each subject, and a **summary card** with aggregate statistics.

## ✨ Features

- **Overall Result card** — Shows CGPA (8.5) and Percentage (85%)
- **Marks table** — Subject-wise breakdown:
  | Course | Code | Grade | Marks |
  |---|---|---|---|
  | Programming Fundamentals | CS101 | A+ | 91 |
  | Calculus | MATH101 | B | 80 |
  | Digital Electronics | DE101 | A | 88 |
  | Computational Design Thinking | CDT101 | A+ | 92 |
  | Computer Organization | CO101 | B+ | 85 |
- **Summary card** — Total Courses: 5, Highest Marks: 92, Lowest Marks: 80
- Back navigation to the Dashboard

## 📂 Files

| File | Purpose |
|---|---|
| `grades-results.html` | Grades layout — result card, marks table, and summary card |
| `grades-results.css` | Styling for result cards, table, and grade badges |

## 💡 Concepts Practised

- HTML `<table>` with `<thead>` and `<tbody>` for structured academic data
- Multi-card page layout
- CSS table styling with column-specific classes (`course`, `code`, `grade`, `marks`)

## 🔗 Navigation

- **← Dashboard** — [`../day-16.html`](../day-16.html)
