"""FastAPI entry point for the Token Limit Predictor."""

from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from app.predictor import predict
from app.schemas import PredictionRequest, PredictionResponse

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title="Token Limit Predictor", docs_url=None, redoc_url=None)
app.mount("/static", StaticFiles(directory=BASE_DIR / "static"), name="static")
templates = Jinja2Templates(directory=BASE_DIR / "templates")


@app.get("/", response_class=HTMLResponse)
async def home(request: Request) -> HTMLResponse:
    """Render the single-page predictor interface."""

    return templates.TemplateResponse(request=request, name="index.html")


@app.post("/api/predict", response_model=PredictionResponse)
async def create_prediction(payload: PredictionRequest) -> PredictionResponse:
    """Calculate a prediction in memory and return it without retention."""

    return PredictionResponse(**predict(payload.message, payload.model))

