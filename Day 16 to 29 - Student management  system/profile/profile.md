# 👤 Profile Page (Day 17 & Day 23–27)

## 📌 Overview

The **Profile** module of the Student Management System displays a student's complete profile across four information cards. It includes an **Edit Profile** feature that allows live in-page editing using JavaScript DOM manipulation.

This page was built in two phases:
- **Day 17** — HTML structure and CSS styling
- **Day 23–27** — JavaScript logic (`profile.js`) + HTML & CSS refinements

## ✨ Features

- Displays student profile across 4 sections:
  - **Card 1** — Name, Roll Number, and Course banner
  - **Card 2** — Personal Information (Name, Email, Phone, Date of Birth)
  - **Card 3** — Academic Information (Program, Department, Semester, Enrollment Year)
  - **Card 4** — Contact Information (Address, City, State)
- **Edit Profile** button reveals an edit form
- **Save Changes** button updates all displayed fields live without a page reload
- Back navigation to the Dashboard

## 📂 Files

| File | Purpose |
|---|---|
| `profile.html` | Page structure — display cards + edit form |
| `profile.css` | Styling for profile cards, form, and layout |
| `profile.js` | JavaScript — DOM selection, event listeners, live field updates |
| `profile-image.jpg` | Student profile photo asset |

## 💡 Concepts Practised

- `document.querySelector()` for targeted DOM selection
- `addEventListener()` — `click` and `submit` events
- `event.preventDefault()` to stop default form submission
- `element.style.display` to toggle visibility between display view and edit form
- `element.innerHTML` to update multiple fields dynamically

## 🔗 Navigation

- **← Dashboard** — [`../day-16.html`](../day-16.html)
