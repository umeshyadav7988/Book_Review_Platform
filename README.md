# 📚 Book Management App

**Book Management App** is a full-stack web application that allows users to add, view, and review books. Built using **React** for the frontend and **Node.js** with **Express** for the backend, it integrates a **MongoDB** database to store book and review data. Users can also upload book cover images using **Cloudinary** or **Amazon S3**.

---

##  Features

- **Add a Book**: Input book details including title, author, ISBN, description, rating, and upload a cover image.
- **View Books**: Browse a list of all books along with their information.
- **Add Review**: Share thoughts and opinions on books through reviews.
- **Edit Review**: Modify previously added reviews.
- **Delete Review**: Remove reviews from the system.
- **Filter Reviews**: Easily find relevant reviews using filter options.

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **React**
- **Tailwind CSS** (for styling)
- **Material UI** (for prebuilt UI components)
- **Sweet Alerts** (for elegant alert modals)
- **Axios** (for API requests)

### 🔹 Backend
- **Node.js**
- **Express**
- **MongoDB** (with **Mongoose** for ORM)
- **JWT** (for user authentication)

### ☁️ Cloud Storage
- **Cloudinary**
- **Amazon S3**

---

## 📦 Installation Guide

### 🔧 Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/umeshyadav7988/book_Review_Platform.git
   cd book_Review_Platform
   ```

2. **Navigate to the backend folder:**

   ```bash
   cd backend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file** in the `backend` directory with the following variables:

   ```env
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

   > 💡 *For test data and a sample `.env` file, you can reach out via email: kaveeshwaray@gmail.com*

5. **Start the backend server:**

   ```bash
   npm run dev
   ```

   Backend will run at: `http://localhost:5000`

---

### 💻 Frontend Setup

1. **Navigate to the frontend folder:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the frontend development server:**

   ```bash
   npm start
   ```

   Frontend will run at: `http://localhost:3000`

---

## 🗄️ Database Setup

Ensure you have a MongoDB instance running—either locally or via a cloud provider like **MongoDB Atlas**. Provide the connection string in your `.env` file under `MONGO_URI`.

