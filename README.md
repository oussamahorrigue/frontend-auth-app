# Frontend Authentication System

This is the frontend part of a simple authentication system built with React. It allows users to register, log in, and view a welcome page upon successful login.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This frontend interacts with the backend authentication API to handle user registration and login using JSON Web Tokens (JWT). Once the user is logged in, a token is saved in the local storage to maintain the session.

### Features

- **User Registration**: Allows new users to register using their email and password.
- **User Login**: Registered users can log in and receive a JWT.
- **Secure Session**: JWT is stored in localStorage and used for session management.
- **Logout**: The user can log out, which clears the token from localStorage.

## Technologies Used

- **Frontend**: React.js, Axios, CSS
- **Authentication**: JWT for user authentication
- **API Communication**: Axios for HTTP requests

## Installation Instructions

### Prerequisites

Before you start, ensure you have the following installed:

- Node.js
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/frontend-auth-app.git
   cd frontend-auth-app
   ```
