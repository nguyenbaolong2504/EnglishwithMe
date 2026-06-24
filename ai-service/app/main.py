from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
from dotenv import load_dotenv

load_dotenv()

from app.api import grammar, recommendation, speaking, vision

app = FastAPI(title="EnglishWithMe AI Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(grammar.router, prefix="/ai/grammar", tags=["Grammar"])
app.include_router(recommendation.router, prefix="/ai/recommend", tags=["Recommendation"])
app.include_router(speaking.router, prefix="/ai/speaking", tags=["Speaking"])
app.include_router(vision.router, prefix="/ai/vision", tags=["Vision"])

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "EnglishWithMe AI"}

@app.post("/ai/generate-quiz")
async def generate_quiz(file: UploadFile = File(...)):
    """Generate quiz questions from uploaded PDF"""
    try:
        content = await file.read()
        questions = await generate_questions_from_pdf(content)
        return {
            "status": "success",
            "questions": questions,
            "count": len(questions)
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

async def generate_questions_from_pdf(content: bytes):
    """Generate 10 sample questions from PDF content"""
    return [
        {
            "id": i+1,
            "question": f"Sample question {i+1} from PDF",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correct": 0,
            "explanation": "This is the correct answer explanation"
        }
        for i in range(10)
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
