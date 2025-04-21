# Define RESTful API

> Learn how to design and define a clean, scalable RESTful API from scratch using Node.js and Express.

## 🔥 Overview

This repository provides a simple but comprehensive guide to defining a RESTful API. Whether you're just getting started or looking to refresh your understanding of REST principles, this repo covers:

- ✅ RESTful principles and best practices  
- ✅ Resource naming conventions  
- ✅ HTTP methods and their correct use  
- ✅ Versioning, error handling, and status codes  
- ✅ Example CRUD endpoints with Node.js + Express  

## 🧠 What You'll Learn

- How to design resources and routes like a pro  
- When to use GET, POST, PUT, PATCH, DELETE  
- REST vs RESTful (yes, there’s a difference!)  
- Folder structure and modular route design  
- Handling common pitfalls (like inconsistent naming or wrong status codes)  

## 🚀 Tech Stack

- Node.js  
- Express.js  
- (Optional) Postman for testing  
- (Optional) MongoDB for real database integration  

## 📁 Project Structure

define-restful-api/ ├── routes/ │ └── users.js ├── controllers/ │ └── userController.js ├── models/ │ └── userModel.js ├── app.js └── package.json

bash
Copy
Edit

## 📦 Getting Started

1. Clone the repo  
```bash
git clone https://github.com/yourusername/define-restful-api.git
Install dependencies

bash
Copy
Edit
cd define-restful-api  
npm install
Run the app

bash
Copy
Edit
npm start
🧪 Example Routes

Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
POST	/api/users	Create new user
PUT	/api/users/:id	Replace user
PATCH	/api/users/:id	Update user partially
DELETE	/api/users/:id	Delete user
📚 Resources
RESTful API Design - Best Practices

MDN HTTP Methods

🙌 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check issues page.

