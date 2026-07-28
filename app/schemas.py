"""Request and response models for the public prediction API."""

from pydantic import BaseModel, Field


class PredictionRequest(BaseModel):
    """A prompt to assess. Prompts are never persisted by this application."""

    message: str = Field(min_length=1, max_length=50_000)
    model: str = Field(default="GPT-5 Free", max_length=80)


class PredictionResponse(BaseModel):
    """A transparent, heuristic estimate returned to the browser."""

    model: str
    request_tokens: int
    expected_response_min: int
    expected_response_max: int
    difficulty: str
    daily_limit_probability: str
    recommended_parts: int
    recommendation: str
    note: str

