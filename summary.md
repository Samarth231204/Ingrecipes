# Project Summary

This repository contains a Node.js backend for a diary and feedback application, using Express, Mongoose, and dotenv for configuration. The main components include:

- **Models**: `User`, `UserProfile`, `DiaryEntry`, `Feedback`.
- **Database Connection**: `backend/dbconnect/db.js` sets up a MongoDB connection.
- **Environment Variables**: Stored in `.env` (e.g., `MONGO_URI`, `PORT`).
- **Dependencies**: Managed via `package.json` and `package-lock.json`.

## Current Changes

- Added the `UserProfile` model to store additional user information.
- Updated the database connection logic to use environment variables for the MongoDB URI.
- Ensured all models are properly exported and imported where needed.
- Minor cleanup of unused imports and added comments for clarity.

## Usage

1. Install dependencies: `npm install`.
2. Set up environment variables in `.env`.
3. Start the server: `npm start`.

---

For more details, refer to the individual model files and the `backend/dbconnect/db.js` file.