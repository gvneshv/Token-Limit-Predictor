// Public model characteristics used by the local-only estimation heuristic.
// Context window and max output figures are drawn from each provider's own model docs
// (linked in the "Profile sources" list in index.html) and were last cross-checked 2026-09-14.
// Providers revise these figures often - several changed twice in the months prior to this check
// - so treat exact numbers as approximate and re-verify against the source link before relying on them for capacity planning.
const PROFILES_LAST_VERIFIED = "2026-09-14";

const profiles = [
  {
    group: "OpenAI",
    id: "gpt-5-6-luna",
    name: "GPT-5.6 Luna",
    context: 1050000,
    output: 128000,
    responseFactor: 0.85,
    reasoningFactor: 1.05,
    budget: 30000,
    source: "https://platform.openai.com/docs/models",
  },
  {
    group: "OpenAI",
    id: "gpt-5-6-terra",
    name: "GPT-5.6 Terra",
    context: 1050000,
    output: 128000,
    responseFactor: 1.05,
    reasoningFactor: 1.3,
    budget: 42000,
    source: "https://platform.openai.com/docs/models",
  },
  {
    group: "OpenAI",
    id: "gpt-5-6-sol",
    name: "GPT-5.6 Sol",
    context: 1050000,
    output: 128000,
    responseFactor: 1.25,
    reasoningFactor: 1.6,
    budget: 55000,
    source: "https://platform.openai.com/docs/models",
  },
  {
    group: "Anthropic",
    id: "claude-haiku-4-5",
    name: "Claude Haiku 4.5",
    context: 200000,
    output: 64000,
    responseFactor: 0.75,
    reasoningFactor: 1.1,
    budget: 24000,
    source: "https://platform.claude.com/docs/en/models/haiku-4-5/overview",
  },
  {
    group: "Anthropic",
    id: "claude-sonnet-5",
    name: "Claude Sonnet 5",
    context: 1000000,
    output: 64000,
    responseFactor: 1.1,
    reasoningFactor: 1.3,
    budget: 34000,
    source: "https://platform.claude.com/docs/en/models/sonnet-5/overview",
  },
  {
    group: "Anthropic",
    id: "claude-opus-5",
    name: "Claude Opus 5",
    context: 1000000,
    output: 128000,
    responseFactor: 1.3,
    reasoningFactor: 1.7,
    budget: 46000,
    source: "https://platform.claude.com/docs/en/models/opus-5/overview",
  },
  {
    group: "Anthropic",
    id: "claude-fable-5-1",
    name: "Claude Fable 5.1",
    context: 1000000,
    output: 128000,
    responseFactor: 1.45,
    reasoningFactor: 1.9,
    budget: 60000,
    source: "https://platform.claude.com/docs/en/models/fable-5-1/overview",
  },
  {
    group: "Google",
    id: "gemini-3-1-flash-lite",
    name: "Gemini 3.1 Flash-Lite",
    context: 1000000,
    output: 65536,
    responseFactor: 0.68,
    reasoningFactor: 1,
    budget: 22000,
    source:
      "https://ai.google.dev/gemini-api/docs/models/gemini-3-1-flash-lite",
  },
  {
    group: "Google",
    id: "gemini-3-6-flash",
    name: "Gemini 3.6 Flash",
    context: 1000000,
    output: 65536,
    responseFactor: 1.05,
    reasoningFactor: 1.35,
    budget: 40000,
    source: "https://ai.google.dev/gemini-api/docs/models/gemini-3-6-flash",
  },
  {
    group: "Google",
    id: "gemini-3-7-flash",
    name: "Gemini 3.7 Flash",
    context: 1048576,
    output: 65536,
    responseFactor: 1.15,
    reasoningFactor: 1.45,
    budget: 45000,
    source: "https://ai.google.dev/gemini-api/docs/models/gemini-3-7-flash",
  },
  {
    group: "Google",
    id: "gemini-3-8-flash",
    name: "Gemini 3.8 Flash",
    context: 1048576,
    output: 65536,
    responseFactor: 1.25,
    reasoningFactor: 1.55,
    budget: 50000,
    source: "https://ai.google.dev/gemini-api/docs/models/gemini-3-8-flash",
  },
  {
    group: "Groq",
    id: "qwen3-6-27b-groq",
    name: "Qwen3.6 27B on Groq",
    context: 131072,
    output: 32768,
    responseFactor: 0.82,
    reasoningFactor: 1.05,
    budget: 33000,
    source: "https://console.groq.com/docs/models",
  },
  {
    group: "Groq",
    id: "gpt-oss-120b",
    name: "GPT-OSS 120B on Groq",
    context: 131072,
    output: 65536,
    responseFactor: 1.05,
    reasoningFactor: 1.3,
    budget: 36000,
    source: "https://console.groq.com/docs/models",
  },
  {
    group: "Perplexity",
    id: "sonar",
    name: "Perplexity Sonar",
    context: 128000,
    output: 8192,
    responseFactor: 0.76,
    reasoningFactor: 1,
    budget: 24000,
    source: "https://docs.perplexity.ai/docs/sonar/models/sonar",
    deprecated: true,
  },
  {
    group: "xAI",
    id: "grok-4-6",
    name: "Grok 4.6",
    context: 500000,
    output: 64000,
    responseFactor: 1.15,
    reasoningFactor: 1.45,
    budget: 38000,
    source: "https://docs.x.ai/developers/models/grok-4-6",
  },
  {
    group: "Mistral",
    id: "mistral-large-3",
    name: "Mistral Large 3",
    context: 256000,
    output: 32000,
    responseFactor: 0.98,
    reasoningFactor: 1.12,
    budget: 30000,
    source: "https://docs.mistral.ai/models",
  },
  {
    group: "Mistral",
    id: "mistral-medium-3-5",
    name: "Mistral Medium 3.5",
    context: 1000000,
    output: 128000,
    responseFactor: 1.2,
    reasoningFactor: 1.4,
    budget: 42000,
    source: "https://docs.mistral.ai/models",
  },
  {
    group: "Cohere",
    id: "command-a-plus",
    name: "Cohere Command A+",
    context: 128000,
    output: 64000,
    responseFactor: 0.95,
    reasoningFactor: 1.2,
    budget: 30000,
    source: "https://docs.cohere.com/docs/command-a-plus",
  },
  {
    group: "Cursor",
    id: "cursor-router",
    name: "Cursor Router",
    context: 200000,
    output: 32000,
    responseFactor: 1.03,
    reasoningFactor: 1.25,
    budget: 30000,
    source: "https://cursor.com/help/models-and-usage/available-models",
    routed: true,
  },
];

// All visible copy is kept here so language changes do not require a network request.
const text = {
  en: {
    eyebrow: "Private prompt planning",
    headline: "Estimate before you send.",
    intro:
      "See how your request may behave with different AI model profiles. Your text stays in this browser.",
    languageLabel: "Language",
    themeLabel: "Theme",
    yourRequest: "Your request",
    placeholder: "Describe what you need help with...",
    estimateProfile: "AI model profile",
    privacy:
      "Your request is never sent or saved. This local estimate is not a provider quota check.",
    submit: "Estimate request",
    empty: "Your estimate will appear here.",
    model: "Model profile",
    expectedResponse: "Expected response",
    estimatedWork: "Estimated total work",
    difficulty: "Difficulty level",
    limitLikelihood: "Limit pressure",
    contextSoFar: "Context so far",
    contextSummary:
      "{used} / {context} {tokensLabel} ({percent}%) · ~{remaining} left",
    recommendationLabel: "Recommendation",
    methodologySummary: "How this estimate works",
    methodologyText:
      "The calculator counts a local approximation of your input, detects complexity signals, then applies a published model-profile context and output budget. “Estimated total work” includes a conservative reasoning allowance for thinking models. It does not call any model or know your account limits.",
    footer:
      "Local-only estimates. Not an official token, context-window, or account-limit guarantee.",
    madeBy: "Made by",
    calculating: "Calculating…",
    tokens: "tokens",
    low: "Low",
    medium: "Medium",
    high: "High",
    source: "Profile sources",
    profile: "Context: {context} · max output: {output}",
    routed:
      "Cursor Router routes between models, so this is a conservative planning profile.",
    deprecated:
      "Note: Perplexity Sonar is being deprecated and migrated to Agent API. Support continues until September 27, 2026.",
    specsFreshness:
      "Model specs last checked {date}. Providers revise context and output limits often - verify against the linked source before relying on exact numbers.",
    contextUsedLabel: "Context already used (optional)",
    unitPercent: "% used",
    unitTokens: "Tokens used",
    contextUsedPlaceholder: "e.g. 40",
    contextHelp:
      "Some chat interfaces show a context or usage meter - a percentage, a token count, or a \u201cthis conversation is getting long\u201d warning - use that number if yours has one. If it doesn't, estimate instead: a fresh chat is close to 0%, a short back-and-forth is roughly 15\u201330%, a long session is 50\u201370%, and if you've noticed the assistant forgetting earlier details or seen a length warning, treat it as 80%+.",
    attachmentsNote:
      "Planning to attach files, images, or other documents too? This estimate can't account for them - we have no way to know their size or content - so treat the result as a floor, not a guarantee.",
    recommendationOne: "This should fit as one focused prompt.",
    recommendationParts: "Break the request into {parts} parts.",
    recommendationFresh:
      "This conversation is likely close to the model's context limit. Consider starting a fresh conversation or summarizing earlier messages before continuing.",
    note: "Based on local input analysis and the selected profile. Actual usage depends on instructions, tools, and provider settings.",
  },
  uk: {
    eyebrow: "Попереднє планування запиту",
    headline: "Оцініть навантаження перед відправкою.",
    intro:
      "Дізнайтеся, як ваш запит працюватиме з різними моделями штучного інтелекту. Текст залишається лише у вашому браузері.",
    languageLabel: "Мова",
    themeLabel: "Тема",
    yourRequest: "Ваш запит",
    placeholder: "Опишіть, що саме вам потрібно зробити...",
    estimateProfile: "Профіль ШІ-моделі",
    privacy:
      "Ваш запит нікуди не надсилається і не зберігається. Цей розрахунок є приблизним і виконується прямо на вашому пристрої, він не перевіряє ліміти вашого тарифного плану.",
    submit: "Оцінити запит",
    empty: "Результат оцінки з'явиться тут.",
    model: "Профіль моделі",
    expectedResponse: "Очікувана відповідь",
    estimatedWork: "Орієнтовний обсяг роботи",
    difficulty: "Рівень складності",
    limitLikelihood: "Рівень навантаження на ліміти",
    contextSoFar: "Контекст на даний момент",
    contextSummary:
      "{used} / {context} {tokensLabel} ({percent}%) · залишилось ~{remaining}",
    recommendationLabel: "Рекомендація",
    methodologySummary: "Як працює ця оцінка?",
    methodologyText:
      "Калькулятор рахує приблизну довжину вашого тексту, шукає складні завдання, а потім зіставляє це з офіційними характеристиками обраної моделі штучного інтелекту. «Орієнтовний обсяг роботи» вже враховує запас на «роздуми» для розумних моделей. Калькулятор не зв'язується з серверами штучного інтелекту і не знає обмежень вашого особистого акаунта.",
    footer:
      "Розрахунок відбувається локально на вашому пристрої. Не є офіційною гарантією токенів, контексту чи лімітів облікового запису.",
    madeBy: "Автор:",
    calculating: "Обчислення…",
    tokens: "токенів",
    low: "Низький",
    medium: "Середній",
    high: "Високий",
    source: "Джерела даних про моделі",
    profile: "Контекст: {context} · макс. відповідь: {output}",
    routed:
      "Інструмент «Cursor Router» перемикається між різними моделями, тому тут показано найбільш обережний (запасний) варіант розрахунку.",
    deprecated:
      "Примітка: Perplexity Sonar застарів і мігрує в Agent API. Підтримка триває до 27 вересня 2026 року.",
    specsFreshness:
      "Характеристики моделей востаннє перевірялися {date}. Розробники часто змінюють ліміти пам'яті та відповідей - звіряйтеся з офіційними сайтами, якщо вам потрібні точні цифри.",
    contextUsedLabel: "Контекст, який уже використано (необов’язково)",
    unitPercent: "% використано",
    unitTokens: "Токенів використано",
    contextUsedPlaceholder: "наприклад 40",
    contextHelp:
      "Деякі чат-інтерфейси показують індикатор контексту чи використання - відсоток, кількість токенів або попередження «чат/розмова стає задовгою» - використайте це число, якщо воно є. Якщо ні, оцініть самостійно: новий чат - близько 0%, короткий обмін повідомленнями - приблизно 15–30%, довга сесія - 50–70%, а якщо ви помітили, що асистент забуває ранні деталі, або бачили попередження про довжину, вважайте це 80%+.",
    attachmentsNote:
      "Плануєте також долучити файли, зображення чи інші документи? Ця оцінка не може їх врахувати - ми не знаємо їхній розмір чи вміст - тож сприймайте результат як мінімум, а не гарантію.",
    recommendationOne: "Цей текст має поміститися в один чіткий запит.",
    recommendationParts: "Розділіть запит на {parts} частини.",
    recommendationFresh:
      "Цей чат, ймовірно, близький до ліміту контексту моделі. Розгляньте початок нового чату або стисніть попередні повідомлення, перш ніж продовжити.",
    note: "Оцінка базується на аналізі вашого тексту та обраній моделі. Реальні витрати залежать від інструкцій, підключених інструментів та налаштувань платформи.",
  },
};

// Cache the stable UI elements once after the deferred script has loaded.
const form = document.querySelector("#predictor-form");
const message = document.querySelector("#message");
const model = document.querySelector("#model");
const language = document.querySelector("#language");
const theme = document.querySelector("#theme");
const counter = document.querySelector("#counter");
const contextUsedInput = document.querySelector("#context-used");
const contextUnit = document.querySelector("#context-unit");
let locale = localStorage.getItem("tlp-language") || "en";
// Format counts using the active interface locale.
const format = (number) =>
  number.toLocaleString(locale === "uk" ? "uk-UA" : "en-US");
// Substitute named placeholders in translated strings.
const replace = (value, data) =>
  value.replace(/\{(\w+)\}/g, (_, key) => data[key]);
/** Return the selected model profile, with a safe default for malformed markup. */
function selectedProfile() {
  return profiles.find((profile) => profile.id === model.value) || profiles[0];
}
/** Show the selected model's documented planning limits below the selector. */
function updateProfileNote() {
  const p = selectedProfile();
  const copy = text[locale];
  let note = p.routed
    ? copy.routed
    : replace(copy.profile, {
        context: format(p.context),
        output: format(p.output),
      });
  if (p.deprecated && copy.deprecated) {
    note += ". " + copy.deprecated;
  }
  document.querySelector("#profile-note").textContent = note;
}
/** Rebuild the model selector from profile data while preserving the selection. */
function populateModels() {
  const prior = model.value || profiles[0].id;
  model.innerHTML = "";
  [...new Set(profiles.map((p) => p.group))].forEach((group) => {
    const optionGroup = document.createElement("optgroup");
    optionGroup.label = group;
    profiles
      .filter((p) => p.group === group)
      .forEach((profile) => {
        const option = new Option(profile.name, profile.id);
        optionGroup.appendChild(option);
      });
    model.appendChild(optionGroup);
  });
  model.value = prior;
  updateProfileNote();
}
/** Show when the model specs were last checked against provider docs. */
function updateSpecsFreshness() {
  const el = document.querySelector("#specs-freshness");
  if (!el) return;
  el.textContent = replace(text[locale].specsFreshness, {
    date: PROFILES_LAST_VERIFIED,
  });
}
/** Apply translated labels and remember the user's language in local storage. */
function applyLanguage(value) {
  locale = value;
  const copy = text[value];
  document.documentElement.lang = value;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = copy[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = copy[el.dataset.i18nPlaceholder];
  });
  language.value = value;
  localStorage.setItem("tlp-language", value);
  counter.textContent = `${format(message.value.length)} / 50,000`;
  updateProfileNote();
  updateSpecsFreshness();
  renderResult();
}
/** Return the theme currently in effect, falling back to the OS preference. */
function effectiveTheme() {
  return (
    document.documentElement.dataset.theme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
}
/** Apply and persist an explicit light/dark choice without sending any data. */
function applyTheme(value) {
  document.documentElement.dataset.theme = value;
  theme.setAttribute("aria-pressed", String(value === "dark"));
  localStorage.setItem("tlp-theme", value);
}
/** Estimate input tokens locally from characters, words, and punctuation. */
function tokens(value) {
  const parts = value.match(/[\p{L}\p{N}_]+|[^\s]/gu) || [];
  return Math.max(
    1,
    Math.ceil(Math.max(value.length / 4, parts.length / 0.78)),
  );
}
/** Resolve the optional "already used" field into a token count for this profile. */
function resolveContextUsed(profile) {
  const raw = Number(contextUsedInput.value);
  if (!contextUsedInput.value || Number.isNaN(raw) || raw <= 0) return 0;
  if (contextUnit.value === "percent") {
    const pct = Math.min(Math.max(raw, 0), 100);
    return Math.round(profile.context * (pct / 100));
  }
  return Math.min(Math.max(Math.round(raw), 0), profile.context);
}
/** Derive a transparent estimate from prompt complexity and a model profile. */
function predict(value, profile, usedTokens) {
  const request = tokens(value);
  const lowered = value.toLowerCase();
  const terms = [
    "analyze",
    "architecture",
    "compare",
    "debug",
    "design",
    "implement",
    "investigate",
    "migrate",
    "optimize",
    "refactor",
    "security",
    "test",
  ];
  const signals = terms.filter((term) => lowered.includes(term)).length;
  const code = /```|\b(def|class|function)\s|=>|[{}]/.test(value);
  const score =
    signals * 2 +
    Number(code) * 3 +
    Number(value.split("\n").length > 12) * 2 +
    Number(request > 700) * 2;
  const difficulty = score >= 7 ? "high" : score >= 3 ? "medium" : "low";
  const base = { low: 0.74, medium: 1.28, high: 2.08 }[difficulty];
  const rawMax = Math.round(
    110 + request * base * profile.responseFactor * 2.15,
  );
  const max = Math.min(profile.output, rawMax);
  const min = Math.min(
    max,
    Math.round(55 + request * base * profile.responseFactor * 0.58),
  );
  const work = Math.round(request + max * profile.reasoningFactor);
  const workPressure = work / profile.budget;
  const projected = usedTokens + request + max;
  const contextRatio = profile.context ? projected / profile.context : 0;
  const level = (ratio, high, medium) =>
    ratio > high ? "high" : ratio > medium ? "medium" : "low";
  const severity = { low: 0, medium: 1, high: 2 };
  const workLevel = level(workPressure, 0.45, 0.18);
  const contextLevel = level(contextRatio, 0.9, 0.65);
  const pressure =
    severity[contextLevel] > severity[workLevel] ? contextLevel : workLevel;
  const parts =
    difficulty === "high" || workPressure > 0.42 || contextRatio > 0.75
      ? 3
      : difficulty === "medium" || workPressure > 0.2 || contextRatio > 0.5
        ? 2
        : 1;
  return {
    request,
    min,
    max,
    work,
    difficulty,
    pressure,
    parts,
    usedTokens,
    remaining: Math.max(0, profile.context - usedTokens),
    contextRatio,
  };
}
/** Update a single text-only result field without injecting markup. */
function set(id, value) {
  document.querySelector(id).textContent = value;
}
// The most recent estimate, kept so a language switch can redraw the result panel in the new locale without recomputing anything.
let lastProfile = null;
let lastResult = null;
let lastUsedTokens = 0;
/** Redraw every translated result field from the cached last estimate. */
function renderResult() {
  if (!lastProfile || !lastResult) return;
  const copy = text[locale];
  const profile = lastProfile;
  const result = lastResult;
  const usedTokens = lastUsedTokens;
  set("#result-model", profile.name);
  set("#provider", profile.group);
  set("#request-tokens", `${format(result.request)} ${copy.tokens}`);
  set(
    "#response-tokens",
    `${format(result.min)}–${format(result.max)} ${copy.tokens}`,
  );
  set("#work-tokens", `${format(result.work)} ${copy.tokens}`);
  set("#difficulty", copy[result.difficulty]);
  set("#probability", copy[result.pressure]);
  const contextRow = document.querySelector("#context-row");
  if (usedTokens > 0) {
    contextRow.hidden = false;
    set(
      "#context-summary",
      replace(copy.contextSummary, {
        used: format(usedTokens),
        context: format(profile.context),
        tokensLabel: copy.tokens,
        percent: Math.round((usedTokens / profile.context) * 100),
        remaining: format(result.remaining),
      }),
    );
  } else {
    contextRow.hidden = true;
  }
  set(
    "#recommendation",
    usedTokens > 0 && result.contextRatio > 0.75
      ? copy.recommendationFresh
      : result.parts === 1
        ? copy.recommendationOne
        : replace(copy.recommendationParts, { parts: result.parts }),
  );
  set("#note", copy.note);
}
// Keep the browser-side character limit visible as the user types.
message.addEventListener("input", () => {
  counter.textContent = `${format(message.value.length)} / 50,000`;
});
model.addEventListener("change", updateProfileNote);
language.addEventListener("change", () => applyLanguage(language.value));
theme.addEventListener("click", () => {
  applyTheme(effectiveTheme() === "dark" ? "light" : "dark");
});
populateModels();
applyLanguage(locale);
const storedTheme = localStorage.getItem("tlp-theme");
if (storedTheme) {
  applyTheme(storedTheme);
} else {
  // No explicit choice yet: follow the OS preference (handled in CSS) and just sync the toggle icon/state to match it.
  theme.setAttribute("aria-pressed", String(effectiveTheme() === "dark"));
}
// Calculate on the next frame so the loading label can paint before the result.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  const label = document.querySelector("#submit-label");
  button.disabled = true;
  label.textContent = text[locale].calculating;
  requestAnimationFrame(() => {
    const profile = selectedProfile();
    const usedTokens = resolveContextUsed(profile);
    lastProfile = profile;
    lastResult = predict(message.value, profile, usedTokens);
    lastUsedTokens = usedTokens;
    renderResult();
    document.querySelector("#empty-state").hidden = true;
    document.querySelector("#result-content").hidden = false;
    button.disabled = false;
    label.textContent = text[locale].submit;
  });
});
