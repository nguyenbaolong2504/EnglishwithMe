# EnglishWithMe - AI English Learning App

Complete application for learning English with AI-powered features including speaking practice, camera vocabulary recognition, and adaptive learning paths.

## 🎯 Features

### Frontend (React + Vite)
- ✅ **HỌC** - Learning path with 8 checkpoints per topic (15-20 lessons each)
- ✅ **LUYỆN TẬP** - 4 skills practice + Camera AI + PDF quiz generation
- ✅ **TỪ VỰNG** - Vocabulary tables with phonetic + examples + audio
- ✅ **THỐNG KÊ** - Progress tracking, badges, XP charts
- ✅ **TRÒ CHƠI** - Karaoke AI, 21-day streak, adaptive quiz

### Backend (Spring Boot)
- RESTful API for users, lessons, progress tracking
- JWT authentication
- Database: MySQL with full schema

### AI Service (Python FastAPI)
- Speech recognition & evaluation
- Camera object detection (English/Vietnamese)
- PDF to quiz conversion
- Grammar checking
- Adaptive recommendations

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local development)
- Java 17+ (for local backend)
- Python 3.11+ (for local AI service)

### Option 1: Docker (Recommended)

```bash
# Clone & setup
git clone <repo>
cd EnglishwithMe
cp .env.example .env

# Start all services
docker-compose up -d

# Access
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080/api
- AI Service: http://localhost:8000
- MySQL: localhost:3306
```

### Option 2: Local Development

#### Frontend
```bash
cd frontend
npm install
npm run dev
# Open http://localhost:5173
```

#### Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
# API available at http://localhost:8080/api
```

#### AI Service
```bash
cd ai-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
# API available at http://localhost:8000
```

#### Database
```bash
# Create database
mysql -u root -p
CREATE DATABASE englishwithme;
SOURCE backend/init.sql;
```

## 📁 Project Structure

```
EnglishwithMe/
├── frontend/                 # React + Vite
│   ├── screens/             # 6 main screens
│   ├── components/          # Reusable components
│   ├── styles/              # CSS files
│   └── services/            # API integration
├── backend/                 # Spring Boot
│   ├── src/main/java/       # Java controllers, entities, repos
│   ├── src/main/resources/  # application.yml
│   ├── init.sql             # Database schema
│   └── pom.xml
├── ai-service/              # Python FastAPI
│   ├── app/
│   │   ├── api/            # Grammar, Speaking, Vision, Recommendation
│   │   └── main.py         # FastAPI app
│   └── requirements.txt
├── docker-compose.yml
└── .env.example
```

## 🔌 API Endpoints

### User Management
- `GET /api/users/{id}` - Get user profile
- `POST /api/users/register` - Register new user
- `PUT /api/users/{id}` - Update user

### Lessons
- `GET /api/lessons` - Get all lessons
- `GET /api/lessons/topic/{topic}` - Get by topic
- `GET /api/lessons/topic/{topic}/checkpoint/{checkpoint}` - Get by checkpoint

### Progress
- `GET /api/progress/user/{userId}` - Get user progress
- `POST /api/progress` - Record lesson completion
- `GET /api/progress/stats/{userId}` - Get completion stats

### AI Features
- `POST /ai/speaking/evaluate` - Evaluate pronunciation
- `POST /ai/speaking/song-evaluation` - Karaoke evaluation
- `POST /ai/vision/detect` - Detect objects in image
- `POST /ai/grammar/check` - Check grammar
- `POST /ai/generate-quiz` - Generate quiz from PDF

## 🎨 Design System

### Colors
- Primary: #7c3aed (Violet)
- Accent: #a78bfa (Light Violet)
- Success: #10b981 (Green)
- Danger: #ef4444 (Red)
- Background: #f0f4ff (Light Blue)

### Typography
- Headings: Plus Jakarta Sans (Bold)
- Body: System default
- Numbers: DM Mono

## 🔐 Authentication

JWT-based authentication is configured in the backend. Update authentication middleware as needed for production.

## 🧪 Testing

```bash
# Backend tests
cd backend
mvn test

# Frontend tests
cd frontend
npm run test
```

## 📦 Deployment

### Production Build

```bash
# Build all images
docker-compose build

# Push to registry
docker tag englishwithme-backend myregistry/backend
docker push myregistry/backend
```

### Environment Variables
Update `.env` with production values:
- Database credentials
- API URLs
- Google Cloud credentials (optional)
- JWT secret keys

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/name`
2. Commit changes: `git commit -m "Add feature"`
3. Push: `git push origin feature/name`
4. Create Pull Request

## 📝 License

MIT License

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Made with ❤️ for English learners**
