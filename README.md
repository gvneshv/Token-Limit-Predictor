# Token Limit Predictor

[![Live demo](https://img.shields.io/badge/demo-GitHub%20Pages-4f46e5)](https://gvneshv.github.io/Token-Limit-Predictor/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A private, static web app that estimates prompt size, likely response range, reasoning overhead, difficulty, and whether a request may be worth splitting.

**Live app:** https://gvneshv.github.io/Token-Limit-Predictor/

## What it does

- Runs entirely in the browser with no server, database, account, analytics, or network calls.
- Uses deterministic input, complexity, and model-profile heuristics.
- Provides 19 profiles across OpenAI, Anthropic, Google, Groq, Perplexity, Cursor, xAI, Mistral, and Cohere, refreshed to each provider's current lineup as of 2026-09-14 (see the in-app "specs last checked" note and source links).
- Supports English/Ukrainian plus light, dark, and system-theme preferences, stored only in browser local storage.
- Keeps model and documentation links in the HTML as graceful fallbacks, so essential reference material remains visible even if browser JavaScript is blocked.

## Important limitation

This is a planning aid, not an official token or rate-limit calculator. Model specifications change and account limits depend on the plan, conversation, service conditions, and settings. Cursor Auto is a model router, not one fixed model, so its profile is deliberately conservative.

## Use and deploy

No build step, no dependencies. Any static file server works, for example:

```bash
python3 -m http.server 8000
```

Or

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` directly via `file://` also works, though a real local server is closer to how GitHub Pages will actually serve it.

## Security and privacy

The application deliberately has no database, accounts, analytics, third-party API calls, or prompt logging. It does not transmit pasted text. If storage, authentication, or analytics are added later, document retention, obtain consent, validate authorization per record, and add server-side rate limits and security headers before release.

## Project layout

- `index.html`: GitHub Pages entry point and accessible UI structure.
- `assets/app.js`: Local predictor, profile references, translations, and preferences.
- `assets/styles.css`: Responsive visual design and theme tokens.
- `assets/favicon.svg`: Site icon, referenced by the manifest and browser tab.
- `assets/og-image.png`: Social share preview image (Open Graph/Twitter card).
- `sitemap.xml` / `robots.txt`: Search-engine discovery files.
- `LICENSE`: MIT license.
