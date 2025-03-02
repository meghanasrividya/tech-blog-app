# Tech Blog App

Welcome to the Tech Blog App! This project is a full-stack web application designed for tech enthusiasts to create, read, update, and delete blog posts. The app is built using React for the client-side and Node.js for the server-side.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login/register)
- Create, read, update, and delete blog posts
- Categorize posts
- Responsive design

## Technologies Used

### Client-side

- React
- React Router
- Axios

### Server-side

- Node.js
- Express
- SQL (Sequelize)

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- SQL Database (MySQL, PostgreSQL, etc.)

### Clone the repository

```bash
git clone https://github.com/meghanasrividya/tech-blog-app.git
cd tech-blog-app
```

### Install dependencies

#### Client

```bash
cd Client
npm install
```

#### Server

```bash
cd server
npm install
```

### Environment Variables

Create a `.env` file in the `server` directory and add the following environment variables:

```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
```

## Usage

### Running the Client

```bash
cd Client
npm start
```

### Running the Server

```bash
cd server
npm start
```

The client will be running on `http://localhost:3000` and the server will be running on `http://localhost:5000`.

## Folder Structure

```
tech-blog-app/
├── Client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── CreatePost.js
│   │   │   ├── UpdatePost.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   ├── ...
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   ├── ...
├── .gitignore
├── README.md
...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
