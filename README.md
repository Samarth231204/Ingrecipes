# Ingrecipes

Ingrecipes is a lightweight backend service built with **Node.js**, **Express**, and **MongoDB**. It provides APIs for:

- **User management** (registration, login, profile handling)
- **Diary entries** where users can log their ingredient usage or recipes
- **Model feedback** to store and retrieve feedback related to AI/ML models used in the application

The project structure includes:
- `backend/dbconnect/db.js` – Handles MongoDB connection using the `MONGO_URI` environment variable.
- Mongoose models (`user.js`, `userprofile.js`, `diaryentry.js`, `modelfeedback.js`) defining the data schema.
- Environment configuration via `.env` (contains the MongoDB connection string).

To get started, install dependencies, set up the `.env` with your MongoDB URI, and run the server with `nodemon` or `node`.
