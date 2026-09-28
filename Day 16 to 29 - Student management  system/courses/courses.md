# 📚 Courses Page (Day 18 & Day 28)

## 📌 Overview

The **Courses** module of the Student Management System displays all courses the student is currently enrolled in. Each course is shown as a styled card with its course code, subject name, and instructor name.

This page was built in two phases:
- **Day 18** — HTML structure and CSS styling
- **Day 28** — JavaScript interactivity (`courses.js`) — click-to-popup course details

## ✨ Features

- Lists all enrolled courses as individual cards:
  | Code | Subject | Instructor |
  |---|---|---|
  | CS101 | Programming Fundamentals | Dr. Sharma |
  | MATH101 | Applied Calculus | Dr. Kumar |
  | DE101 | Digital Electronics | Dr. Verma |
- **Click any card** to open a popup modal showing full course details
- **Close button** dismisses the popup without a page reload
- Back navigation to the Dashboard

## 📂 Files

| File | Purpose |
|---|---|
| `courses.html` | Page structure with course cards and popup modal |
| `courses.css` | Styling for course cards, layout, and popup |
| `courses.js` | JavaScript — click events, DOM selection, popup toggling |

## 💡 Concepts Practised

- Semantic HTML structure for card-based UI
- CSS card layout and typography
- Font Awesome icon usage in the header
- `document.querySelectorAll()` to select multiple elements
- `forEach()` to attach event listeners to each card
- `element.style.display` to show/hide the popup
- `element.innerHTML` / `element.textContent` to dynamically populate popup fields

## 🔗 Navigation

- **← Dashboard** — [`../day-16.html`](../day-16.html)
