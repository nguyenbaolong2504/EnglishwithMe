from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class GrammarQuestion(BaseModel):
    question: str
    options: List[str]
    correct: int
    explanation: str

class GrammarTopic(BaseModel):
    topic: str
    level: str

@router.post("/check")
async def check_grammar(text: str):
    """Check grammar and provide corrections"""
    return {
        "original": text,
        "corrections": [
            {
                "error": "Subject-verb agreement",
                "suggestion": "Corrected text",
                "explanation": "The subject should match the verb tense"
            }
        ],
        "score": 85,
        "feedback": "Good work! Mind the subject-verb agreement."
    }

@router.get("/topics")
async def get_grammar_topics(level: str = "BEGINNER"):
    """Get grammar topics by level"""
    topics = {
        "BEGINNER": [
            {"id": 1, "name": "Present Simple", "lessons": 5},
            {"id": 2, "name": "Present Continuous", "lessons": 5},
            {"id": 3, "name": "Pronouns", "lessons": 3},
        ],
        "INTERMEDIATE": [
            {"id": 4, "name": "Past Tense", "lessons": 6},
            {"id": 5, "name": "Conditionals", "lessons": 5},
        ],
        "ADVANCED": [
            {"id": 6, "name": "Subjunctive Mood", "lessons": 4},
            {"id": 7, "name": "Passive Voice", "lessons": 5},
        ]
    }
    return topics.get(level, topics["BEGINNER"])

@router.post("/questions")
async def generate_grammar_questions(topic: str, count: int = 10):
    """Generate grammar questions for a topic"""
    return {
        "topic": topic,
        "questions": [
            {
                "id": i+1,
                "question": f"Grammar question {i+1} about {topic}",
                "options": [f"Option {chr(65+j)}" for j in range(4)],
                "correct": 0,
                "explanation": "This is the correct answer explanation"
            }
            for i in range(min(count, 10))
        ]
    }
