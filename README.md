# 🛒 Greencart – Full Stack E-Commerce Web Application

Greencart is a full-stack MERN e-commerce web application that allows users to browse products, manage carts, place orders, and make online payments. It also includes a seller dashboard for product and order management.

---

## 🚀 Features

### 👤 User Features
- User authentication (Register / Login)
- Browse products by category
- Add / remove products from cart
- Manage shipping addresses
- Place orders (Cash on Delivery & Online Payment)
- View order history

### 🧑‍💼 Seller Features
- Seller authentication
- Add, update, and delete products
- Manage product stock
- View all customer orders
- Secure seller-only routes

### 💳 Payment
- Stripe online payment integration
- Cash on Delivery (COD) option

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Stripe Payment Gateway
- Cloudinary (Image Uploads)

---

## 📂 Project Structure

greencart/
│
├── client/ # Frontend (React + Vite)
│
├── server/ # Backend (Node + Express)
│ ├── controllers
│ ├── routes
│ ├── models
│ ├── middlewares
│ └── configs
│
└── README.md

## ▶️ How to Run Locally

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Stripe account (for test payments)

### Backend Setup
```bash
cd server
npm install
npm run server

### fronend Setup
cd client
npm install
npm run dev


---

### 2️⃣ Environment Variables (MUST HAVE)
This avoids confusion and keeps secrets safe.

```md
## ⚙️ Environment Variables

Create a `.env` file inside the `server` folder:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
SELLER_EMAIL=your_seller_email
NODE_ENV=development


> ⚠️ Never commit `.env` files to GitHub.

## 🔗 API Endpoints (Overview)

### User
- POST `/api/user/register`
- POST `/api/user/login`
- GET `/api/user/is-auth`

### Cart & Orders
- POST `/api/cart/update`
- POST `/api/order/cod`
- POST `/api/order/stripe`
- GET `/api/order/user`

### Seller
- POST `/api/seller/login`
- GET `/api/order/seller`

## 👨‍💻 Author

**Om Italiya**  
Final Year B.E. Computer Engineering Student  
Full Stack Developer (MERN)

- GitHub: https://github.com/OmItaliya7
