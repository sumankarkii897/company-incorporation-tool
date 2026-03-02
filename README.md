# Company Incorporation Tool

A Full Stack Company Incorporation Tool pre-screening assessment.

This project allows users to:

- Create a company
- Add shareholder details dynamically based on number of shareholders
- Save draft data after Step 1
- View all companies and shareholders via an admin page or API

---

## Backend

- Framework: Node.js + Express
- Database: MySQL
- Features:
  - Create company records
  - Save shareholder records linked to a company
  - Retrieve all companies
  - Retrieve a single company with shareholders
  - Draft persistence for multi-step forms

### Setup Instructions

1. Install dependencies

```bash
cd backend
npm install