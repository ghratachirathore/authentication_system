# Authentication System

A simple and secure Authentication System built using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, JWT and bcrypt. The application allows users to register, login, access a protected dashboard and logout securely.

## Features

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Protected Dashboard
* Logout Functionality
* Form Validation
* Responsive UI
* MongoDB Database Integration

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* bcrypt
* JSON Web Token (JWT)

## Folder Structure

```
AuthenticationSystem
│
├── frontend
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── auth.controller.js
│   ├── middleware
│   │   └── auth.middleware.js
│   ├── models
│   │   └── user.model.js
│   ├── routes
│   │   └── auth.route.js
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/ghratachirathore/authentication_system.git
```

### Navigate to Backend

```bash
cd authentication_system/backend
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Start Server

```bash
npm run dev
```

Server will run at:

```
http://localhost:8000
```

### Run Frontend

Open the frontend folder using Live Server and access:

* index.html
* register.html
* login.html
* dashboard.html

## API Endpoints

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

## Authentication Flow

```
Register User
      ↓
MongoDB Stores User
      ↓
Login User
      ↓
JWT Token Generated
      ↓
Token Stored in Local Storage
      ↓
Protected Dashboard Access
      ↓
Logout
```

## Dependencies

* express
* mongoose
* bcrypt
* jsonwebtoken
* dotenv
* cors
* nodemon

## Future Improvements

* Forgot Password Functionality
* Email Verification
* Profile Management
* Refresh Tokens
* Role-Based Authentication
* Deployment using Render and MongoDB Atlas

## Author

Ghratachi Rathore

