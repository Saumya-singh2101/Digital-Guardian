# Quick Setup Guide

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Set Up MongoDB

### Option A: Use MongoDB Atlas (Recommended - No Installation)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a free cluster
4. Get your connection string
5. Add it to `.env` file as `MONGODB_URI`

### Option B: Install MongoDB Locally
1. Download from https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. Use `mongodb://localhost:27017/digitalguardian` in `.env`

## Step 3: Create .env File
Create a `.env` file in the root directory:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/digitalguardian
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
```

## Step 4: Start the Server
```bash
npm start
```

## Step 5: Open the Website
Open `index.html` in your browser, or use a local server:
```bash
# Using Python
python -m http.server 8000
# Then open http://localhost:8000
```

## Testing the API
The backend API will be available at: `http://localhost:5000/api`

### Test Sign Up:
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123","role":"guardian","avatar":"avatar1"}'
```

### Test Sign In:
```bash
curl -X POST http://localhost:5000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check your connection string in `.env`
- For Atlas: Make sure your IP is whitelisted

### Port Already in Use
- Change `PORT` in `.env` to a different port (e.g., 5001)
- Or stop the process using port 5000

### CORS Errors
- Make sure the frontend is making requests to the correct API URL
- Check `API_BASE_URL` in `js/api.js`

