# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-09-14

### Changed

- Updated model specifications to reflect provider changes as of 2026-09-14.
- Replaced Claude Opus 4.8 with Claude Opus 5 (newer generation).
- Added Claude Fable 5.1 for demanding reasoning and long-horizon agentic work.
- Replaced Gemini 3.5 Flash-Lite with Gemini 3.1 Flash-Lite (current lineup).
- Added Gemini 3.7 Flash and Gemini 3.8 Flash (newer, more capable models).
- Replaced Grok 4.5 with Grok 4.6 (xAI's latest flagship model).
- Added Mistral Medium 3.5 with expanded 1M token context window.
- Added deprecation notice for Perplexity Sonar (migrating to Agent API, supported until September 27, 2026).
- Increased total model profiles from 16 to 19 across all providers.
- Updated PROFILES_LAST_VERIFIED date from 2026-08-01 to 2026-09-14.

### Fixed

- Added conditional display of deprecation notices for models marked as deprecated.
- Ensured deprecation notices appear in both English and Ukrainian languages.
- Removed dynamic source list population to avoid duplicate provider names (e.g., multiple "Anthropic" links) and reverted to static HTML version with single provider links.

## [1.0.1] - 2026-08-08

### Added

- Footer credit line linking to the author's GitHub and LinkedIn profiles.

## [1.0.0] - 2026-08-05

First public release: a full rewrite from the original FastAPI prototype into
a static, GitHub Pages-ready application, plus everything needed to publish
and maintain it.

### Added

- Static, dependency-free app that runs entirely client-side - no backend,
  build step, or account required.
- 16 documented model profiles across OpenAI, Anthropic, Google, Groq,
  Perplexity, Cursor, xAI, Mistral, and Cohere, each linked to its
  provider's own model documentation.
- Optional "context already used" field (percent or tokens) so an ongoing
  conversation can be factored into the estimate, with guidance on where to
  find that number or how to estimate it, and a note that file/image
  attachments can't be accounted for.
- "Context so far" result row and a dedicated recommendation to start a
  fresh conversation when projected usage is likely close to a model's
  context window.
- A visible "model specs last checked" note and per-provider source links.
- Light/dark theme toggle that defaults to the OS preference until the user
  picks explicitly.
- Full EN/UK localization, including result content (not just labels).
- SEO and GitHub Pages readiness: sitemap.xml, canonical/Open Graph/Twitter
  metadata, a brand favicon and PWA manifest icon, an Open Graph share
  image, JSON-LD application data, and robots directives.
- MIT license.

### Changed

- Refreshed every model profile to each provider's lineup as of 2026-07-29
  (OpenAI GPT-5.6 Luna/Terra/Sol; Anthropic Claude Haiku 4.5, Sonnet 5,
  Opus 4.8; Google Gemini 3.5 Flash-Lite/3.5 Flash/3.6 Flash; xAI Grok 4.5;
  Cohere Command A+; Groq's Qwen3.6 27B replacing the deprecated Llama 3.3
  70B; Cursor Router replacing Cursor Auto).
- Reworked the estimation formula so response/reasoning factors affect
  medium- and high-difficulty outcomes, and folded context-window pressure
  into the limit-pressure calculation alongside the existing reasoning
  budget.
- Replaced the System/Light/Dark theme dropdown with a single toggle
  button.
- Model-choice field now stacks its label above the dropdown instead of
  sitting inline, so it no longer crowds surrounding text at larger font
  sizes.
- Restored native dropdown indicators, improved headline tracking for
  Cyrillic, and made background gradients non-repeating.

### Fixed

- Result panel (token counts, difficulty, limit pressure, context summary,
  recommendation, note, and the submit button label) now re-translates
  immediately on a language switch, instead of staying in whichever
  language was active when the estimate was last calculated.
- Empty-result state now replaces, rather than displays above, an
  estimate.
- No-script `<select>` fallback and the default profile id no longer
  reference retired model ids.

## [0.1.0] - 2026-07-28

### Added

- Privacy-first FastAPI token-limit prediction app.
- Responsive light/dark interface and deterministic prediction engine.
- Unit tests and local run documentation.

[1.0.2]: https://github.com/gvneshv/Token-Limit-Predictor/releases/tag/v1.0.2
[1.0.1]: https://github.com/gvneshv/Token-Limit-Predictor/releases/tag/v1.0.1
[1.0.0]: https://github.com/gvneshv/Token-Limit-Predictor/releases/tag/v1.0.0
[0.1.0]: https://github.com/gvneshv/Token-Limit-Predictor/releases/tag/v0.1.0
