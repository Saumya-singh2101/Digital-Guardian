check out the website on https://statuesque-genie-9458a4.netlify.app/

# 🛡️ Digital Guardian Angel

A full-stack web application that serves as an AI mentor for online safety, empowering young women with practical cybersecurity skills through interactive chat, threat detection, and gamified learning.

## ✨ Features

- **💬 AI Chat Mentor**: Interactive chat interface with the Digital Guardian Angel
- **🤖 Threat Detector**: Analyze links, messages, and emails for potential threats with safety scoring
- **🎮 Gamified Missions**: Complete challenges to earn points and badges
- **📊 Dashboard**: Track your progress, level up, and compete on the leaderboard
- **🎨 Neon Theme**: Beautiful, modern UI with neon aesthetics

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install all dependencies** (root, server, and client):
   ```bash
   npm run install-all
   ```

   Or install manually:
   ```bash
   npm install
   cd server && npm install
   cd ../client && npm install
   ```

2. **Start the development servers**:
   ```bash
   npm run dev
   ```

   This will start both the backend (port 5000) and frontend (port 3000) concurrently.

   Or start them separately:
   ```bash
   # Terminal 1 - Backend
   npm run server

   # Terminal 2 - Frontend
   npm run client
   ```

3. **Open your browser**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## 📁 Project Structure

```
hack4us/
├── server/              # Backend API
│   ├── index.js        # Express server and routes
│   ├── data/           # JSON data storage (auto-created)
│   └── package.json
├── client/             # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   │   ├── Chat.js
│   │   │   ├── ThreatDetector.js
│   │   │   ├── Missions.js
│   │   │   └── Dashboard.js
│   │   ├── App.js      # Main app component
│   │   └── index.js    # Entry point
│   └── package.json
└── package.json        # Root package.json
```

## 🎯 Usage

### Chat with Guardian Angel
- Navigate to the Chat page
- Ask questions about online safety, privacy, passwords, harassment, etc.
- Get supportive, actionable advice

### Threat Detection
- Go to the Threat Detector page
- Paste any suspicious link, message, or email text
- Get a safety score (0-100) and detailed analysis
- Receive recommendations on how to proceed

### Complete Missions
- Visit the Missions page
- Complete challenges like:
  - Spot the Scam
  - Password Power-Up
  - Secure Your Socials
  - Guardian Quiz
- Earn points and unlock badges

### Track Progress
- Check your Dashboard to see:
  - Total points and current level
  - Number of threat checks performed
  - Missions completed
  - Your badges and achievements
  - Leaderboard ranking

## 🛠️ Technology Stack

### Backend
- **Node.js** with **Express.js**
- RESTful API architecture
- JSON file-based data storage (easily upgradeable to database)

### Frontend
- **React** 18
- **React Router** for navigation
- **Axios** for API calls
- Custom CSS with neon theme styling

## 🎨 Design Features

- Neon-themed UI with cyan (#00f0ff) and magenta (#ff00ff) accents
- Smooth animations and transitions
- Responsive design for mobile and desktop
- Glassmorphism effects with backdrop blur
- Glowing text and button effects

## 🔧 API Endpoints

- `GET /api/health` - Health check
- `POST /api/chat` - Send message to Guardian Angel
- `POST /api/detect-threat` - Analyze threat in text/URL
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user data
- `PUT /api/users/:id` - Update user data
- `GET /api/missions` - Get all missions
- `POST /api/missions/:id/complete` - Complete a mission
- `GET /api/leaderboard` - Get top 10 users

## 📝 Notes

- User data is stored in `server/data/users.json`
- Missions are stored in `server/data/missions.json`
- The app automatically creates these files on first run
- For production, consider upgrading to a proper database (MongoDB, PostgreSQL, etc.)

## 🚀 Deployment

### Build for Production

```bash
cd client
npm run build
```

The built files will be in `client/build/`. You can serve this with any static file server, or integrate it with your Express server.

### Environment Variables

Create a `.env` file in the server directory:
```
PORT=5000
```

Create a `.env` file in the client directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

For production, update `REACT_APP_API_URL` to your production API URL.

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests!

## 📄 License

MIT License - feel free to use this project for your own purposes!

---

**Built with 💜 to empower online safety**

