const form = document.querySelector('#predictor-form');
const message = document.querySelector('#message');
const counter = document.querySelector('#counter');
const emptyState = document.querySelector('#empty-state');
const content = document.querySelector('#result-content');
const submitButton = form.querySelector('button');
const model = document.querySelector('#model');
const language = document.querySelector('#language');
const theme = document.querySelector('#theme');

const translations = {
  en: {
    eyebrow: 'Prompt planning, without retention', headline: 'Know the shape of your request before you send it.',
    intro: 'Paste a prompt to estimate its size, expected response, and whether splitting it may help.',
    languageLabel: 'Language', themeLabel: 'Theme', themeSystem: 'System', themeLight: 'Light', themeDark: 'Dark',
    yourRequest: 'Your request', placeholder: 'Describe what you need help with...', estimateProfile: 'Estimate profile',
    privacy: 'Your text is analyzed only to produce this estimate. It is not saved.', submit: 'Estimate request',
    empty: 'Your estimate will appear here.', model: 'Model', expectedResponse: 'Expected response',
    difficulty: 'Difficulty level', limitLikelihood: 'Daily-limit likelihood', recommendationLabel: 'Recommendation',
    footer: 'Estimates are heuristic, not an official model-limit guarantee.', calculating: 'Calculating…', tokens: 'tokens',
    unavailable: 'Unable to calculate the estimate.',
  },
  uk: {
    eyebrow: 'Планування запитів без збереження даних', headline: 'Дізнайтесь масштаб запиту до його відправлення.',
    intro: 'Вставте запит, щоб оцінити його розмір, очікувану відповідь і потребу поділити його на частини.',
    languageLabel: 'Мова', themeLabel: 'Тема', themeSystem: 'Системна', themeLight: 'Світла', themeDark: 'Темна',
    yourRequest: 'Ваш запит', placeholder: 'Опишіть, з чим вам потрібна допомога...', estimateProfile: 'Профіль оцінки',
    privacy: 'Текст обробляється лише для цієї оцінки та не зберігається.', submit: 'Оцінити запит',
    empty: 'Ваша оцінка з’явиться тут.', model: 'Модель', expectedResponse: 'Очікувана відповідь',
    difficulty: 'Рівень складності', limitLikelihood: 'Ймовірність денного ліміту', recommendationLabel: 'Рекомендація',
    footer: 'Оцінки є евристичними та не гарантують офіційні ліміти моделі.', calculating: 'Обчислення…', tokens: 'токенів',
    unavailable: 'Не вдалося розрахувати оцінку.',
  },
};

let currentLanguage = localStorage.getItem('tlp-language') || 'en';

function updateCounter() {
  counter.textContent = `${message.value.length.toLocaleString(currentLanguage === 'uk' ? 'uk-UA' : 'en-US')} / 50,000`;
}

function applyLanguage(value) {
  currentLanguage = value;
  const copy = translations[value];
  document.documentElement.lang = value;
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = copy[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => { element.placeholder = copy[element.dataset.i18nPlaceholder]; });
  language.value = value;
  localStorage.setItem('tlp-language', value);
  updateCounter();
}

function applyTheme(value) {
  document.documentElement.dataset.theme = value;
  theme.value = value;
  localStorage.setItem('tlp-theme', value);
}

message.addEventListener('input', () => {
  updateCounter();
});
language.addEventListener('change', () => applyLanguage(language.value));
theme.addEventListener('change', () => applyTheme(theme.value));
applyLanguage(currentLanguage);
applyTheme(localStorage.getItem('tlp-theme') || 'system');

function setText(id, value) {
  document.querySelector(id).textContent = value;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  submitButton.textContent = translations[currentLanguage].calculating;

  try {
    const response = await fetch('/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message.value, model: model.value }),
    });
    if (!response.ok) throw new Error(translations[currentLanguage].unavailable);
    const prediction = await response.json();
    const locale = currentLanguage === 'uk' ? 'uk-UA' : 'en-US';
    setText('#result-model', prediction.model);
    setText('#request-tokens', `${prediction.request_tokens.toLocaleString(locale)} ${translations[currentLanguage].tokens}`);
    setText('#response-tokens', `${prediction.expected_response_min.toLocaleString(locale)}–${prediction.expected_response_max.toLocaleString(locale)} ${translations[currentLanguage].tokens}`);
    setText('#difficulty', prediction.difficulty);
    setText('#probability', prediction.daily_limit_probability);
    setText('#recommendation', prediction.recommendation);
    setText('#note', prediction.note);
    emptyState.hidden = true;
    content.hidden = false;
  } catch (error) {
    setText('#note', error.message);
    emptyState.hidden = true;
    content.hidden = false;
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = `<span>${translations[currentLanguage].submit}</span> <span aria-hidden="true">→</span>`;
  }
});
