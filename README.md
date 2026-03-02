# Full Stack Company Incorporation Tool

## Overview

This project is a full stack web application designed to streamline the process of company incorporation. Users can create a new company, add shareholders, and view all companies and their details through an admin dashboard. The application is built with a React frontend and a Node.js/Express backend, using a relational database for data storage.

## Features

- Create and manage company records
- Add and manage shareholders for each company
- Admin dashboard to view all companies and their shareholders
- Responsive and modern user interface
- RESTful API architecture

## Technologies Used

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MySQL (or compatible relational database)
- Other: Axios, React Hook Form, React Router, React Toastify

## Folder Structure

```
Full_Stack_Company_Incorporation_Tool/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL or compatible database installed and running

### Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your database connection in `backend/config/db.js`.
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Environment Variables

- Set the API base URL in `frontend/.env` (e.g., `VITE_BASE_URL=http://localhost:5000/api`).
- Configure database credentials in `backend/config/db.js`.

## Usage

- Access the application in your browser at `http://localhost:5173` (or the port shown in your terminal).
- Create a new company, add shareholders, and view all companies via the admin dashboard.

## API Endpoints

- `POST /companies` - Create a new company
- `GET /companies` - Get all companies
- `GET /companies/:id` - Get a specific company
- `POST /shareholders` - Add shareholders to a company

## Customization

- Update styles in `frontend/src/index.css` or use Tailwind classes in components.
- Modify backend logic in `backend/controllers/` and `backend/models/` as needed.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
