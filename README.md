# AI Hotel Booking Management

An AI-powered hotel booking management system that enables intelligent hotel search, secure user authentication, and a seamless booking experience through a modern web interface.

---

## 🚀 Features

* **AI-Powered Assistance**
  Smart interface to assist users with booking queries and recommendations.

* **Dynamic Booking System**
  Browse hotels, check availability, and manage reservations efficiently.

* **Responsive UI**
  Fully responsive design optimized for desktop, tablet, and mobile devices.

* **Robust Backend**
  PHP-based backend integrated with a MySQL database for reliable data handling.

---

## 🛠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript (Vite)
* **Backend:** PHP
* **Database:** MySQL
* **Tools:** ESLint, Prettier, Biome

---

## ⚙️ Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* PHP (v8.0+)
* MySQL Server

---

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Sourav1219/AI-Hotel-Booking-Management-.git
cd AI-Hotel-Booking-Management-
```

#### 2. Install frontend dependencies

```bash
npm install
```

---

### 🗄 Database Setup

1. Create a MySQL database:

```
AI_Hotel_Booking
```

2. Import the `database.sql` file manually
   *(or let the app auto-initialize if configured)*

---

### 🔐 Environment Configuration

Create your environment file:

```bash
cp .env.example .env
```

Update `.env` with your database credentials:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=AI_Hotel_Booking
DB_USER=root
DB_PASS=your_database_password
```

---

## ▶️ Running the Project

### Start Frontend

```bash
npm run dev
```

Frontend runs at: http://localhost:5173

---

### Start Backend (PHP server)

```bash
php -S localhost:8000
```

*(Alternatively, use XAMPP, MAMP, or any local PHP server)*

---

## 📦 Build for Production

```bash
npm run build
```

Production files will be generated in the `dist/` directory.

---

## 📌 Notes

* Ensure MySQL server is running before starting the backend
* `.env` file is not included in the repository for security reasons
* Use `.env.example` as a template

---

## 📄 License

© 2026 Sourav Verma. All rights reserved.
