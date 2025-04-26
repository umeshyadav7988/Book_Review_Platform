# 📖 Book Review Platform

**Book Review Platform** is a full-stack web application that allows users to add books, view detailed listings, and write, edit, or delete reviews. Built with **React** on the frontend and **Node.js** with **Express** on the backend, it uses **MongoDB** to manage data.
---

## ✨ Features

- **Add a Book**: Submit book details like title, author, ISBN, description, rating, and cover image.
- **View Books**: Browse a list of books with complete information.
- **Add Review**: Share your opinion by reviewing a book.
- **Edit Review**: Update your previous reviews.
- **Delete Review**: Remove reviews as needed.
- **Filter Reviews**: Use filter options to view specific reviews.

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- **React**
- **Tailwind CSS** – Utility-first CSS framework
- **Material UI** – UI components
- **Sweet Alerts** – For clean and user-friendly alerts
- **Axios** – For API requests

### 🧠 Backend
- **Node.js**
- **Express.js**
- **MongoDB** (via **Mongoose**)
- **JWT** – Authentication using JSON Web Tokens

##  Getting Started

### 🔧 Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/umeshyadav7988/book_Review_Platform.git
   cd book_Review_Platform
   ```

2. **Navigate to the backend folder**:

   ```bash
   cd backend
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create a `.env` file** in the `backend` folder and add the following:

   ```env
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

   > 🧪 *For test data or a sample `.env` file, feel free to reach out.*

5. **Start the backend server**:

   ```bash
   npm run dev
   ```

---

### 🌐 Frontend Setup

1. **Navigate to the frontend folder**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the frontend server**:

   ```bash
   npm start
   ```

---

## 🗄️ Database Setup

Make sure you have MongoDB running, either locally or via a cloud service like **MongoDB Atlas**. Add your connection URI to the `.env` file as `MONGO_URI`.

---

## 📬 Contact

For questions, contributions, or access to test data, feel free to reach out at **umeshyadav7988@gmail.com**
