# AI-Hotel-Booking-Management-

An AI-powered hotel booking management system that enables smart hotel search, user authentication, and efficient booking with a modern web interface.

## Features
- **AI-Powered Assistance:** Smart interface for answering booking queries and assisting users.
- **Dynamic Bookings:** Explore hotels, view availability, and manage reservations seamlessly.
- **Responsive Design:** A beautiful, fully responsive UI optimized for all devices.
- **Robust Backend:** PHP backend paired with a MySQL database.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript/TypeScript, Vite
- **Backend:** PHP
- **Database:** MySQL
- **Linting & Formatting:** ESLint, Prettier, Biome

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- PHP (v8.0 or higher)
- MySQL Server

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sourav1219/AI-Hotel-Booking-Management-.git
   cd AI-Hotel-Booking-Management-
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Database Setup:**
   - Create a new MySQL database named `AI_Hotel_Booking` (or your preferred name).
   - The application is designed to auto-initialize the database using `database.sql` if it connects successfully but finds missing tables. Alternatively, you can manually import `database.sql` into your database.

4. **Environment Configuration:**
   - Copy the provided `.env.example` file to a new file named `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and update the database credentials to match your local MySQL setup:
     ```ini
     DB_HOST="127.0.0.1"
     DB_PORT="3306"
     DB_NAME="AI_Hotel_Booking"
     DB_USER="root"
     DB_PASS="your_database_password"
     ```

### Running the Application Locally

**1. Start the Vite Frontend Server:**
```bash
npm run dev
```
This will start the development server (usually at `http://localhost:5173`).

**2. Start the PHP Backend (Optional for API endpoints):**
If you are running the backend separately, open a new terminal in the project root and start PHP's built-in server:
```bash
php -S localhost:8000
```
*(Note: You can also host the PHP files using standard local servers like XAMPP, MAMP, or Laravel Valet).*

## Build for Production
To build the frontend assets for production deployment:
```bash
npm run build
```
This will generate optimized, minified static files in the `dist` directory.
