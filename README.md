# Token Limit Predictor

A private, static web app that estimates prompt size, likely response range, reasoning overhead, difficulty, and whether a request may be worth splitting.

## What it does

- Runs entirely in the browser with no server, database, account, analytics, or network calls.
- Uses deterministic input, complexity, and model-profile heuristics.
- Provides 13 profiles across OpenAI, Anthropic, Google, Groq, Perplexity, and Cursor.
- Supports English/Ukrainian plus light, dark, and system-theme preferences, stored only in browser local storage.

## Important limitation

This is a planning aid, not an official token or rate-limit calculator. Model specifications change and account limits depend on the plan, conversation, service conditions, and settings. Cursor Auto is a model router, not one fixed model, so its profile is deliberately conservative.

## Use and deploy

Open `index.html` in a browser, or publish this repository through GitHub Pages. No build step or environment variables are required.

## Security and privacy

The application deliberately has no database, accounts, analytics, third-party API calls, or prompt logging. It does not transmit pasted text. If storage, authentication, or analytics are added later, document retention, obtain consent, validate authorization per record, and add server-side rate limits and security headers before release.

## Project layout

- `index.html`: GitHub Pages entry point and accessible UI structure.
- `assets/app.js`: Local predictor, profile references, translations, and preferences.
- `assets/styles.css`: Responsive visual design and theme tokens.
