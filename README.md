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


