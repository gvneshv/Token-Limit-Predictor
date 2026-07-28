# Token Limit Predictor

A small, local FastAPI web app that estimates prompt size, likely response range, difficulty, and whether a request may be worth splitting.

## What it does

- Estimates prompt tokens with a deterministic heuristic.
- Uses visible complexity signals, such as code and task verbs, to estimate response length.
- Returns results in memory only. Prompts are not written to a database or log by this application.
- Includes an accessible responsive interface with English/Ukrainian language control and light, dark, or system theme preferences. Preferences stay only in the browser's local storage.
- Lets the user choose an estimate profile. Model names provide context only; they do not query live plan limits.

## Important limitation

This is a planning aid, not an official OpenAI token or rate-limit calculator. Actual token use and plan limits depend on the chosen model, the full conversation, service conditions, and response settings.

## Run locally

Requires Python 3.11+ and Poetry.

```bash
poetry install
poetry run uvicorn app.main:app --reload
```

Open `http://127.0.0.1:8000`.

## Test

```bash
poetry run pytest
```

## Security and privacy

The application deliberately has no database, accounts, analytics, third-party API calls, or prompt logging. Keep it behind HTTPS when deployed and set proxy headers only through a trusted reverse proxy. If storage, authentication, or analytics are added later, document retention, obtain consent, validate authorization per record, and add rate limits and security headers before release.

## Project layout

- `app/predictor.py`: Pure prediction heuristic.
- `app/main.py`: HTTP routes and static/template wiring.
- `app/templates` and `app/static`: Browser interface.
- `tests`: Fast unit tests for the estimation logic.
