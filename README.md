# Inland Pricing Tool

This project is an intermodal pricing tool for Egypt, developed using React and Vite for the frontend and Express.js for the backend. The tool allows users to manage and query pricing data for various container types and locations.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and session management
- Upload and process Excel files containing pricing data
- Query and amend pricing data
- Admin functionalities to add new users and manage data
- Responsive design with Tailwind CSS

## Project Structure
inland_pricing_tool/ 
├── client/ 
│ ├── .gitignore 
│ ├── eslint.config.js 
│ ├── index.html 
│ ├── package.json 
│ ├── public/ 
│ ├── README.md 
│ ├── src/ 
│ │ ├── App.jsx 
│ │ ├── assets/ 
│ │ ├── data.js 
│ │ ├── FormSections/ 
│ │ ├── FormsWrapper/ 
│ │ ├── icons_animation/ 
│ │ ├── index.css 
│ │ ├── introSection/ 
│ │ ├── Login/ 
│ │ ├── main.jsx 
│ │ ├── nav/ 
│ │ ├── output.css 
│ │ ├── sectionOne/ 
│ │ ├── Sections/ 
│ │ ├── sectionTwo/ 
│ │ ├── utils.js 
│ ├── tailwind.config.js 
│ ├── vite.config.js 
├── README.md 
├── server/ 
│ ├── .env 
│ ├── .gitignore 
│ ├── config/ 
│ │ ├── db.js 
│ │ ├── getLoggedUser.js 
│ │ ├── writeToPortsTables.js 
│ ├── package.json 
│ ├── routes/ 
│ │ ├── addUser.js 
│ │ ├── downloadFiles.js 
│ │ ├── getFiles.js 
│ │ ├── insertPrice.js 
│ │ ├── loginRoutes.js 
│ │ ├── queryPrice.js 
│ │ ├── uploadPriceTable.js 
│ ├── server.js


## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/inland_pricing_tool.git
   cd inland_pricing_tool/server

2. Install backend dependencies:
   npm install

3. Create a .env file in the server directory and add your MySQL credentials:
  MYSQL_PASS=your_mysql_password

4. Start the backend server:
  npm start

  Frontend Setup
1. Navigate to the client directory:
  cd ../client

2. Install frontend dependencies:
  npm install

3. Start the frontend development server:
  npm run dev

## Usage
1. Open your browser and navigate to http://localhost:5173.
2. Log in with your credentials.
3. Use the navigation to access different sections of the tool.
## API Endpoints
### Authentication
POST /login: Authenticate user.
### File Upload
POST /uploadFile: Upload an Excel file containing pricing data.
### Query and Amend Pricing
POST /queryPrice: Query pricing data.
POST /insertPrice: Amend pricing data.
### User Management
POST /addUser: Add a new user.
### File Management
GET /getFiles: Get a list of uploaded files.
GET /downloadFiles/:fileName: Download a specific file.
