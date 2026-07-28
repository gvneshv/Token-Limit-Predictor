// Public model characteristics used by the local-only estimation heuristic.
const profiles = [
  {
    group: "OpenAI",
    id: "gpt-5-free",
    name: "GPT-5 Free",
    context: 128000,
    output: 16000,
    responseFactor: 1,
    reasoningFactor: 1.12,
    budget: 18000,
    source: "https://platform.openai.com/docs/models",
  },
  {
    group: "OpenAI",
    id: "gpt-5-mini",
    name: "GPT-5 mini",
    context: 128000,
    output: 16000,
    responseFactor: 0.82,
    reasoningFactor: 1.05,
    budget: 28000,
    source: "https://platform.openai.com/docs/models",
  },
  {
    group: "OpenAI",
    id: "gpt-5-1",
    name: "GPT-5.1",
    context: 128000,
    output: 32000,
    responseFactor: 1.2,
    reasoningFactor: 1.5,
    budget: 42000,
    source: "https://platform.openai.com/docs/models",
  },
  {
    group: "OpenAI",
    id: "gpt-4-1",
    name: "GPT-4.1",
    context: 1000000,
    output: 32768,
    responseFactor: 0.92,
    reasoningFactor: 1,
    budget: 36000,
    source: "https://platform.openai.com/docs/models",
  },
  {
    group: "Anthropic",
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    context: 200000,
    output: 64000,
    responseFactor: 1.08,
    reasoningFactor: 1.28,
    budget: 30000,
    source: "https://docs.anthropic.com/en/docs/about-claude/models",
  },
  {
    group: "Anthropic",
    id: "claude-opus-4",
    name: "Claude Opus 4",
    context: 200000,
    output: 32000,
    responseFactor: 1.28,
    reasoningFactor: 1.7,
    budget: 40000,
    source: "https://docs.anthropic.com/en/docs/about-claude/models",
  },
  {
    group: "Anthropic",
    id: "claude-haiku",
    name: "Claude Haiku",
    context: 200000,
    output: 8192,
    responseFactor: 0.7,
    reasoningFactor: 1,
    budget: 20000,
    source: "https://docs.anthropic.com/en/docs/about-claude/models",
  },
  {
    group: "Google",
    id: "gemini-3-1-pro",
    name: "Gemini 3.1 Pro",
    context: 1000000,
    output: 65536,
    responseFactor: 1.2,
    reasoningFactor: 1.55,
    budget: 38000,
    source: "https://ai.google.dev/gemini-api/docs/models",
  },
  {
    group: "Google",
    id: "gemini-3-flash",
    name: "Gemini 3 Flash",
    context: 1000000,
    output: 65536,
    responseFactor: 0.86,
    reasoningFactor: 1.12,
    budget: 32000,
    source: "https://ai.google.dev/gemini-api/docs/models",
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
    source: "https://ai.google.dev/gemini-api/docs/models",
  },
  {
    group: "Groq",
    id: "llama-3-3",
    name: "Llama 3.3 70B on Groq",
    context: 131072,
    output: 32768,
    responseFactor: 0.8,
    reasoningFactor: 1,
    budget: 35000,
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
  },
  {
    group: "xAI",
    id: "grok-4-3",
    name: "Grok 4.3",
    context: 1000000,
    output: 64000,
    responseFactor: 1.14,
    reasoningFactor: 1.42,
    budget: 36000,
    source: "https://docs.x.ai/developers/models",
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
    group: "Cohere",
    id: "command-a",
    name: "Cohere Command A",
    context: 256000,
    output: 8000,
    responseFactor: 0.88,
    reasoningFactor: 1.14,
    budget: 26000,
    source: "https://docs.cohere.com/docs/command-a",
  },
  {
    group: "Cursor",
    id: "cursor-auto",
    name: "Cursor Auto",
    context: 200000,
    output: 32000,
    responseFactor: 1.03,
    reasoningFactor: 1.25,
    budget: 30000,
    source: "https://docs.cursor.com/guides/selecting-models",
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
    themeSystem: "System",
    themeLight: "Light",
    themeDark: "Dark",
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
    recommendationLabel: "Recommendation",
    methodologySummary: "How this estimate works",
    methodologyText:
      "The calculator counts a local approximation of your input, detects complexity signals, then applies a published model-profile context and output budget. “Estimated total work” includes a conservative reasoning allowance for thinking models. It does not call any model or know your account limits.",
    footer:
      "Local-only estimates. Not an official token, context-window, or account-limit guarantee.",
    calculating: "Calculating…",
    tokens: "tokens",
    low: "Low",
    medium: "Medium",
    high: "High",
    source: "Profile sources",
    profile: "Context: {context} · max output: {output}",
    routed:
      "Cursor Auto routes between models, so this is a conservative planning profile.",
    recommendationOne: "This should fit as one focused prompt.",
    recommendationParts: "Break the request into {parts} parts.",
    note: "Based on local input analysis and the selected profile. Actual usage depends on instructions, tools, and provider settings.",
  },
  uk: {
    eyebrow: "Приватне планування запитів",
    headline: "Оцініть запит до відправлення.",
    intro:
      "Подивіться, як запит може поводитись у різних профілях AI. Текст залишається у вашому браузері.",
    languageLabel: "Мова",
    themeLabel: "Тема",
    themeSystem: "Системна",
    themeLight: "Світла",
    themeDark: "Темна",
    yourRequest: "Ваш запит",
    placeholder: "Опишіть, з чим вам потрібна допомога...",
    estimateProfile: "Профіль AI-моделі",
    privacy:
      "Запит не надсилається й не зберігається. Локальна оцінка не перевіряє квоти провайдера.",
    submit: "Оцінити запит",
    empty: "Ваша оцінка з’явиться тут.",
    model: "Профіль моделі",
    expectedResponse: "Очікувана відповідь",
    estimatedWork: "Оцінена загальна робота",
    difficulty: "Рівень складності",
    limitLikelihood: "Тиск на ліміт",
    recommendationLabel: "Рекомендація",
    methodologySummary: "Як працює оцінка",
    methodologyText:
      "Калькулятор локально оцінює розмір вхідного тексту, виявляє сигнали складності, а потім застосовує опубліковані контекст і бюджет відповіді профілю. «Загальна робота» містить консервативний резерв для міркувань thinking-моделей. Жодна модель не викликається, ліміти вашого облікового запису невідомі.",
    footer:
      "Локальні оцінки. Не є офіційною гарантією токенів, контексту чи лімітів облікового запису.",
    calculating: "Обчислення…",
    tokens: "токенів",
    low: "Низький",
    medium: "Середній",
    high: "Високий",
    source: "Джерела профілів",
    profile: "Контекст: {context} · макс. відповідь: {output}",
    routed:
      "Cursor Auto розподіляє запити між моделями, тому це консервативний профіль планування.",
    recommendationOne: "Це має вміститись в один сфокусований запит.",
    recommendationParts: "Розділіть запит на {parts} частини.",
    note: "Засновано на локальному аналізі та вибраному профілі. Фактичне використання залежить від інструкцій, інструментів і налаштувань провайдера.",
  },
};

// Cache the stable UI elements once after the deferred script has loaded.
const form = document.querySelector("#predictor-form");
const message = document.querySelector("#message");
const model = document.querySelector("#model");
const language = document.querySelector("#language");
const theme = document.querySelector("#theme");
const counter = document.querySelector("#counter");
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
  document.querySelector("#profile-note").textContent = p.routed
    ? copy.routed
    : replace(copy.profile, {
        context: format(p.context),
        output: format(p.output),
      });
}
/** Rebuild the model selector from profile data while preserving the selection. */
function populateModels() {
  const prior = model.value || "gpt-5-free";
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
/** Render source links in the active language while retaining safe static fallbacks. */
function renderSources() {
  const title = document.createElement("p");
  title.className = "source-title";
  title.textContent = text[locale].source;
  const list = document.createElement("div");
  list.className = "source-list";
  [...new Map(profiles.map((p) => [p.source, p.group])).entries()].forEach(
    ([url, group]) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = group;
      list.append(link);
    },
  );
  const sources = document.querySelector("#sources");
  sources.replaceChildren(title, list);
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
  renderSources();
}
/** Apply and persist the requested visual theme without sending any data. */
function applyTheme(value) {
  document.documentElement.dataset.theme = value;
  theme.value = value;
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
/** Derive a transparent estimate from prompt complexity and a model profile. */
function predict(value, profile) {
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
  const pressure = work / profile.budget;
  const parts =
    difficulty === "high" || pressure > 0.42
      ? 3
      : difficulty === "medium" || pressure > 0.2
        ? 2
        : 1;
  return {
    request,
    min,
    max,
    work,
    difficulty,
    pressure: pressure > 0.45 ? "high" : pressure > 0.18 ? "medium" : "low",
    parts,
  };
}
/** Update a single text-only result field without injecting markup. */
function set(id, value) {
  document.querySelector(id).textContent = value;
}
// Keep the browser-side character limit visible as the user types.
message.addEventListener("input", () => {
  counter.textContent = `${format(message.value.length)} / 50,000`;
});
model.addEventListener("change", updateProfileNote);
language.addEventListener("change", () => applyLanguage(language.value));
theme.addEventListener("change", () => applyTheme(theme.value));
populateModels();
applyLanguage(locale);
applyTheme(localStorage.getItem("tlp-theme") || "system");
// Calculate on the next frame so the loading label can paint before the result.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = text[locale].calculating;
  requestAnimationFrame(() => {
    const profile = selectedProfile();
    const result = predict(message.value, profile);
    const copy = text[locale];
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
    set(
      "#recommendation",
      result.parts === 1
        ? copy.recommendationOne
        : replace(copy.recommendationParts, { parts: result.parts }),
    );
    set("#note", copy.note);
    document.querySelector("#empty-state").hidden = true;
    document.querySelector("#result-content").hidden = false;
    button.disabled = false;
    button.innerHTML = `<span>${copy.submit}</span> <span aria-hidden="true">→</span>`;
  });
});
