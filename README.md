# 📚 Library Management System (Backend)

This is the backend API built using **Node.js**, **Express**, and **TypeScript** for a simple Library Management System. It supports user authentication, MongoDB integration, and RESTful APIs.

---

## 📁 Project Structure

backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── models/
│   │   └── userModel.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md


---

## ⚙️ Tech Stack

- **Node.js** & **Express.js**
- **TypeScript**
- **MongoDB** + **Mongoose**
- **Dotenv** for config
- **Nodemailer** for email
- **Nodemon** + **ts-node** for development

---

## 🛠 Setup Instructions


npm install


## package.json


✅ 7. Create Build (Optional)
For a typical Express-only backend, no build is required, but if you're using TypeScript or Babel, then:

✅ With TypeScript
Install and setup:

npm install --save-dev typescript ts-node @types/node @types/express
npx tsc --init
Add this to your package.json:


"scripts": {
  "dev": "nodemon --watch \"src/**/*.ts\" --exec \"ts-node\" src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}

