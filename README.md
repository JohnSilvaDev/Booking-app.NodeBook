# Booking App – NodeBook

A fullstack booking application built with **Node.js** and **MongoDB**, designed to manage bookings through a RESTful API.

---

## 🚀 Features

- RESTful API
- Booking management
- Modular and scalable project architecture
- MongoDB database integration
- Environment variable configuration
- Easy setup and deployment

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **JavaScript (ES6+)**
- **MongoDB**
- **Mongoose**
- **NPM**

---

## 📦 Prerequisites

Make sure you have the following installed:

- **Node.js** (v18+ recommended)  
  https://nodejs.org/
- **npm** (comes with Node.js)
- **Git**
- **MongoDB Community Server** OR **MongoDB Atlas (Cloud)**  

Check versions:

```bash
node -v
npm -v
git --version
mongod --version
⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/JohnSilvaDev/Booking-app.NodeBook.git
cd Booking-app.NodeBook
2️⃣ Install dependencies
npm install
🗄️ Database Setup (MongoDB)
This project uses MongoDB as its database.

🖥️ Local MongoDB Setup
1️⃣ Install MongoDB
Download and install MongoDB Community Server:
https://www.mongodb.com/try/download/community

Verify installation:

mongod --version
2️⃣ Start MongoDB Server
mongod
or (Windows service):

net start MongoDB
3️⃣ Create Database
MongoDB automatically creates the database when data is inserted.

Suggested database name:

nodebook
☁️ MongoDB Atlas (Cloud Setup – Recommended)
1️⃣ Create Free Cluster
Go to: https://www.mongodb.com/cloud/atlas

Create account → Create Free Shared Cluster

Choose a region near your location

2️⃣ Create Database User
Go to Database Access

Create a new user:

Username

Password

Role: Read and Write

3️⃣ Whitelist IP Address
Go to Network Access

Add your IP or allow:

0.0.0.0/0
4️⃣ Get Connection URI
Click Connect → Drivers

Copy your connection string:

mongodb+srv://<username>:<password>@cluster.mongodb.net/nodebook
🔐 Environment Variables Setup
Create a .env file in the project root:

cp .env.example .env
Configure:

PORT=3000
MONGO_URI=mongodb://localhost:27017/nodebook
Or using MongoDB Atlas:

PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/nodebook
▶️ Running the Project
Development Mode
npm run dev
Production Mode
npm start
Server will run at:

http://localhost:3000
🧪 API Testing
You can test the API using:

Postman

Insomnia

REST Client (request.rest)

Example request:

GET http://localhost:3000/api/bookings
📁 Project Structure
Booking-app.NodeBook/
│
├── server/
│   ├── config/        # Database & environment configuration
│   ├── controllers/  # Request handling logic
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API endpoints
│   ├── services/     # Business logic
│   └── index.js      # Application entry point
│
├── .env.example
├── package.json
├── package-lock.json
└── request.rest      # REST client test file
📌 Available Scripts
npm start       # Start server (production)
npm run dev     # Start server with nodemon (development)
npm test        # Run tests (if implemented)
🛠️ Troubleshooting
MongoDB connection error
Make sure MongoDB is running:

mongod
Verify your .env connection string.

Check firewall and IP whitelist (Atlas).

Port already in use
Change the port inside .env:

PORT=4000
🚧 Roadmap
 Authentication (JWT)

 User roles & permissions

 Booking availability system

 Admin dashboard

 Docker deployment

 API documentation (Swagger)

📄 License
This project is licensed under the MIT License.
