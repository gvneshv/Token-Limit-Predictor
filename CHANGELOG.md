# Changelog

## Unreleased

- Rebuilt the app as a static GitHub Pages-compatible website with no backend or dependencies.
- Added 13 documented model profiles across OpenAI, Anthropic, Google, Groq, Perplexity, and Cursor.
- Corrected the empty-result state so it is replaced, rather than displayed above, an estimate.
- Reworked the estimation formula so profile response and reasoning factors change medium and high difficulty outcomes.
- Reworked the dark theme and made background gradients non-repeating.

## 0.1.0 - 2026-07-28

- Added a privacy-first FastAPI token-limit prediction app.
- Added a responsive light/dark interface and deterministic prediction engine.
- Added unit tests and local run documentation.
