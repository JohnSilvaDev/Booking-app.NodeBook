Booking App – NodeBook

A fullstack booking application built with Node.js, designed to manage bookings through a REST API.

🚀 Features

RESTful API

Booking management

Modular project structure

Easy setup and installation

🛠️ Tech Stack

Node.js

Express.js

JavaScript

NPM

📦 Prerequisites

Make sure you have the following installed:

Node.js (v18+ recommended)
https://nodejs.org/

npm (comes with Node.js)

Git

Check versions:

node -v
npm -v
git --version

⚙️ Installation

1️⃣ Clone the repository
git clone https://github.com/JohnSilvaDev/Booking-app.NodeBook.git
cd Booking-app.NodeBook

2️⃣ Install dependencies
npm install

3️⃣ Environment variables (if applicable)

If your project uses environment variables, create a .env file in the root directory:

cp .env.example .env


Then configure:

PORT=3000
DATABASE_URL=your_database_url_here
JWT_SECRET=your_secret_key


(Adjust according to your project setup.)

▶️ Running the Project
Development mode:
npm run dev


or

npm start


Server will run on:

http://localhost:3000

🧪 API Testing

You can test the API using:

Postman

Insomnia

REST Client (you already have request.rest in the project)

Example:

GET http://localhost:3000/api/bookings

📁 Project Structure
Booking-app.NodeBook/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── index.js
│
├── package.json
├── package-lock.json
└── request.rest

📌 Scripts
npm start       # Start server
npm run dev     # Start server with nodemon

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

John Silva
GitHub: https://github.com/JohnSilvaDev
