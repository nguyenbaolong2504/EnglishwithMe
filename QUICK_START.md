# 🚀 Quick Start Guide - EnglishWithMe

## 1️⃣ Docker Setup (Recommended - 5 minutes)

### Step 1: Clone & Configure
```bash
cd EnglishwithMe
cp .env.example .env
```

### Step 2: Start Services
```bash
docker-compose up -d
```

### Step 3: Wait for Services
```bash
# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### Step 4: Access
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080/api
- **AI Service**: http://localhost:8000
- **Database**: MySQL at localhost:3306

---

## 2️⃣ Local Development Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
# Open http://localhost:5173
```

### Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### AI Service
```bash
cd ai-service
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

### Database
```bash
mysql -u root -p < backend/init.sql
```

---

## 📱 Features Overview

### Screens (6 tabs):

1. **🏠 Trang chủ** - Home with daily goal & recommended lessons
2. **📚 Học** - Learning path with 8 checkpoints per topic
3. **💪 Luyện tập** - Speaking practice + Camera AI + PDF quiz generation
4. **📖 Từ vựng** - Vocabulary tables with audio pronunciation
5. **📊 Thống kê** - Progress tracking & badges
6. **🎮 Trò chơi** - Karaoke, Quiz, 21-day streak

---

## 🎯 API Endpoints

### Users
```
GET    /api/users/{id}
POST   /api/users/register
PUT    /api/users/{id}
```

### Lessons
```
GET    /api/lessons
GET    /api/lessons/{id}
GET    /api/lessons/topic/{topic}
GET    /api/lessons/topic/{topic}/checkpoint/{checkpoint}
POST   /api/lessons
```

### Progress
```
GET    /api/progress/user/{userId}
POST   /api/progress
PUT    /api/progress/{id}
GET    /api/progress/stats/{userId}
```

### AI Services
```
POST   /ai/speaking/evaluate
POST   /ai/speaking/song-evaluation
POST   /ai/vision/detect
POST   /ai/grammar/check
POST   /ai/generate-quiz
GET    /ai/recommend/lessons
```

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port
lsof -i :5173  # Find process
kill -9 <PID>  # Kill it
```

### Docker Issues
```bash
# Clean up containers
docker-compose down
docker volume prune

# Rebuild
docker-compose build --no-cache
docker-compose up -d
```

### Database Connection Error
```bash
# Check MySQL is running
docker-compose logs mysql

# Verify credentials in .env
```

### Frontend Not Loading
- Clear browser cache
- Check console for errors: F12 → Console
- Verify backend is running: curl http://localhost:8080/api/health

---

## 🚢 Deployment

### Build Production Images
```bash
docker-compose build --prod
docker tag englishwithme-backend myregistry/backend:1.0
docker push myregistry/backend:1.0
```

### Deploy to Cloud
- Update `.env` with production values
- Push Docker images to registry
- Deploy using Kubernetes or Docker Swarm

---

## 📝 Sample Requests

### Register User
```bash
curl -X POST http://localhost:8080/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "username": "learner",
    "password": "secure_password"
  }'
```

### Get Lessons by Topic
```bash
curl http://localhost:8080/api/lessons/topic/Gia%20đình
```

### Record Progress
```bash
curl -X POST http://localhost:8080/api/progress \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "lessonId": 1,
    "xpEarned": 50,
    "completed": true
  }'
```

---

## ✅ Testing Checklist

- [ ] Frontend loads at localhost:5173
- [ ] Can see all 6 tabs
- [ ] Backend API responds at localhost:8080/api
- [ ] MySQL database has data
- [ ] AI service running at localhost:8000
- [ ] No console errors in browser F12

---

**You're all set! Start learning English! 🎉**
