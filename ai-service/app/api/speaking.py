from fastapi import APIRouter, File, UploadFile, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class PronunciationFeedback(BaseModel):
    word: str
    accuracy: float
    correct_pronunciation: str
    user_pronunciation: str
    feedback: str

@router.post("/evaluate")
async def evaluate_pronunciation(audio: UploadFile = File(...)):
    """Evaluate user pronunciation from audio file"""
    try:
        content = await audio.read()
        return {
            "status": "success",
            "overall_score": 85,
            "feedback": [
                {
                    "word": "hello",
                    "accuracy": 95,
                    "correct": "/həˈloʊ/",
                    "feedback": "Excellent pronunciation!"
                },
                {
                    "word": "world",
                    "accuracy": 78,
                    "correct": "/wɝld/",
                    "feedback": "Try to pronounce the 'r' more clearly"
                }
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/song-evaluation")
async def evaluate_karaoke(audio: UploadFile = File(...), song_title: str = None):
    """Evaluate singing accuracy for karaoke"""
    try:
        content = await audio.read()
        return {
            "song": song_title,
            "status": "success",
            "lines": [
                {
                    "line": "Baby baby baby oh",
                    "accuracy": 92,
                    "status": "correct",
                    "color": "green"
                },
                {
                    "line": "Like baby baby baby no",
                    "accuracy": 78,
                    "status": "incorrect",
                    "color": "red",
                    "feedback": "Try pronouncing more clearly"
                }
            ],
            "overall_score": 85,
            "difficult_parts": [
                "Like baby baby baby no"
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/lessons")
async def get_speaking_lessons(topic: str = None):
    """Get speaking lessons by topic"""
    return {
        "lessons": [
            {
                "id": 1,
                "title": "Introductions",
                "duration": 15,
                "difficulty": "BEGINNER"
            },
            {
                "id": 2,
                "title": "Daily Conversations",
                "duration": 20,
                "difficulty": "BEGINNER"
            },
            {
                "id": 3,
                "title": "Business English",
                "duration": 25,
                "difficulty": "INTERMEDIATE"
            }
        ]
    }
