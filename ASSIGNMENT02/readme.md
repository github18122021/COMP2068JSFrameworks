# Library Management System

## Overview

The Library Management System is a web application designed for managing books in a library. It offers features such as user registration, login, book management, and session handling to ensure secure access and effective management of library resources.

## Features

- **User Registration and Login**: Allows users to create accounts and log in.
- **Book Management**: Enables users to add, edit, view, and delete books.
- **Session Handling**: Manages user sessions to ensure secure access.

## Technologies

- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing user and book data.
- **Mongoose**: ODM library for MongoDB to interact with the database.
- **Bcrypt**: Library for hashing passwords.
- **Express-Session**: Middleware for managing sessions.
- **Tailwind CSS**: CSS framework for styling.
- **EJS**: Templating engine for rendering dynamic HTML views.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/github18122021/COMP2068JSFrameworks.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd ASSIGNMENT02
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Set Up Environment Variables**

    Create a `.env` file in the root directory with the following content:

    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/library
    SESSION_SECRET=your-session-secret
    ```

5. **Start the Application**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

### Home Page

- Displays a list of books and provides navigation to other features.

### User Registration

- **Register**: Allows users to create a new account.
  - **Route**: `GET /register` - Displays the registration page.
  - **Route**: `POST /register` - Handles user registration.

### User Login

- **Login**: Allows users to log in to their account.
  - **Route**: `GET /login` - Displays the login page.
  - **Route**: `POST /login` - Handles user login.

### Book Management

- **Add Book**: Allows users to add new books to the library.
  - **Route**: `GET /add-book` - Displays the form for adding a new book.
  - **Route**: `POST /add-book` - Handles adding a new book to the database.

- **Edit Book**: Allows users to update existing book details.
  - **Route**: `GET /edit-book/:id` - Displays the form for editing a book.
  - **Route**: `POST /edit-book/:id` - Handles updating book details.

- **Delete Book**: Allows users to remove books from the library.
  - **Route**: `POST /delete-book/:id` - Handles book deletion.

### User Logout

- **Logout**: Ends the user session.
  - **Route**: `GET /logout` - Logs out the user and destroys the session.

## Live Demo

You can view a live demo of the application [here](https://library-management-system-e3ke.onrender.com).
