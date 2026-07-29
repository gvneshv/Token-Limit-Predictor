# Changelog

## Unreleased

- Filled in the real GitHub Pages URL across canonical, Open Graph/Twitter, sitemap, and robots.txt.
- Added a favicon, PWA manifest icon, Open Graph/Twitter share image, sitemap.xml, and MIT license.
- Replaced the succeeded OpenAI o3 profile with GPT-5.1 and added current Gemini, Grok, Mistral, and Cohere profiles.
- Added static-site SEO foundations: robots directives, web-app manifest, Open Graph/Twitter text metadata, and JSON-LD application data.
- Added static fallbacks for model selection and profile-source links.
- Restored native dropdown indicators, improved headline tracking for Cyrillic, and documented frontend maintenance intent in source comments.
- Rebuilt the app as a static GitHub Pages-compatible website with no backend or dependencies.
- Added 13 documented model profiles across OpenAI, Anthropic, Google, Groq, Perplexity, and Cursor.
- Corrected the empty-result state so it is replaced, rather than displayed above, an estimate.
- Reworked the estimation formula so profile response and reasoning factors change medium and high difficulty outcomes.
- Reworked the dark theme and made background gradients non-repeating.

## 0.1.0 - 2026-07-28

- Added a privacy-first FastAPI token-limit prediction app.
- Added a responsive light/dark interface and deterministic prediction engine.
- Added unit tests and local run documentation.
