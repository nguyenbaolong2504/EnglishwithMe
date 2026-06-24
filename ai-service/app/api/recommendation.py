from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class UserProfile(BaseModel):
    user_id: int
    level: str
    completed_lessons: int
    weak_areas: list

@router.post("/lessons")
async def recommend_lessons(user_profile: UserProfile):
    """Recommend lessons based on user profile"""
    return {
        "user_id": user_profile.user_id,
        "recommendations": [
            {
                "lesson_id": 1,
                "title": "Basic Greetings",
                "reason": "New learner - foundational lesson",
                "difficulty": "BEGINNER",
                "xp_reward": 50
            },
            {
                "lesson_id": 2,
                "title": "Present Simple Tense",
                "reason": "Weak area detected",
                "difficulty": "BEGINNER",
                "xp_reward": 100
            },
            {
                "lesson_id": 3,
                "title": "Common Phrases",
                "reason": "Practice reinforcement",
                "difficulty": "BEGINNER",
                "xp_reward": 75
            }
        ]
    }

@router.get("/next-topic/{user_id}")
async def get_next_topic(user_id: int):
    """Get recommended next topic for user"""
    return {
        "user_id": user_id,
        "next_topic": "Daily Conversations",
        "reason": "You've completed basic greetings",
        "difficulty": "BEGINNER",
        "lessons_in_topic": 8,
        "estimated_duration": "30 minutes"
    }

@router.get("/adaptive-difficulty/{user_id}")
async def get_adaptive_difficulty(user_id: int):
    """Get adaptive difficulty based on user performance"""
    return {
        "user_id": user_id,
        "current_level": "BEGINNER",
        "suggested_level": "INTERMEDIATE",
        "accuracy": 85,
        "recommendation": "You're ready to move to intermediate lessons!"
    }
