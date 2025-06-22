# SecureNodeAuth
A secure Node.js/Express API with JWT authentication and MongoDB for user management.

## Features
- User login with JWT generation
- Protected dashboard route
- MongoDB with Mongoose for user data
- Bcrypt for password hashing
- Custom error handling (400, 401, 404, 500)
- Async error handling with express-async-errors

## Setup
1. Clone the repo: `git clone https://github.com/Matlaba-Machaka/SecureNodeAuth.git`
2. Install dependencies: `npm install`
3. Create `.env` with `MONGO_URI`, `JWT_SECRET`, `PORT=5000`
4. Run: `npm start`

## Endpoints
- `POST /api/v1/login`: Authenticate user and return JWT
- `GET /api/v1/dashboard`: Access protected dashboard

## Tech Stack
- Node.js, Express
- MongoDB, Mongoose
- JWT, Bcrypt
- http-status-codes, express-async-errors
