from fastapi import APIRouter, File, UploadFile, HTTPException
from typing import List

router = APIRouter()

class DetectionResult(BaseModel):
    object_name: str
    english: str
    vietnamese: str
    pronunciation: str
    confidence: float
    example: str

@router.post("/detect")
async def detect_objects(image: UploadFile = File(...)):
    """Detect objects in image and return English/Vietnamese names"""
    try:
        content = await image.read()
        return {
            "status": "success",
            "objects": [
                {
                    "object_name": "apple",
                    "english": "Apple",
                    "vietnamese": "Quả táo",
                    "pronunciation": "/ˈæp.əl/",
                    "confidence": 0.98,
                    "example": "I eat an apple every day."
                },
                {
                    "object_name": "table",
                    "english": "Table",
                    "vietnamese": "Cái bàn",
                    "pronunciation": "/ˈteɪ.bəl/",
                    "confidence": 0.95,
                    "example": "Please put the book on the table."
                }
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/vocab/{category}")
async def get_vocabulary_by_category(category: str):
    """Get vocabulary for a specific category"""
    categories = {
        "animals": [
            {"word": "cat", "vietnamese": "Con mèo", "pronunciation": "/kæt/"},
            {"word": "dog", "vietnamese": "Con chó", "pronunciation": "/dɔːg/"},
        ],
        "food": [
            {"word": "apple", "vietnamese": "Quả táo", "pronunciation": "/ˈæp.əl/"},
            {"word": "bread", "vietnamese": "Bánh mì", "pronunciation": "/brɛd/"},
        ],
        "classroom": [
            {"word": "desk", "vietnamese": "Cái bàn", "pronunciation": "/dɛsk/"},
            {"word": "book", "vietnamese": "Cuốn sách", "pronunciation": "/bʊk/"},
        ]
    }
    
    result = categories.get(category.lower(), [])
    return {
        "category": category,
        "vocabulary": result
    }
