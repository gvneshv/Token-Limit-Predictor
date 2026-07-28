const form = document.querySelector('#predictor-form');
const message = document.querySelector('#message');
const counter = document.querySelector('#counter');
const emptyState = document.querySelector('#empty-state');
const content = document.querySelector('#result-content');
const submitButton = form.querySelector('button');

message.addEventListener('input', () => {
  counter.textContent = `${message.value.length.toLocaleString()} / 50,000`;
});

function setText(id, value) {
  document.querySelector(id).textContent = value;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  submitButton.textContent = 'Calculating…';

  try {
    const response = await fetch('/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message.value, model: 'GPT-5 Free' }),
    });
    if (!response.ok) throw new Error('Unable to calculate the estimate.');
    const prediction = await response.json();
    setText('#model', prediction.model);
    setText('#request-tokens', `${prediction.request_tokens.toLocaleString()} tokens`);
    setText('#response-tokens', `${prediction.expected_response_min.toLocaleString()}–${prediction.expected_response_max.toLocaleString()} tokens`);
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
    submitButton.innerHTML = 'Estimate request <span aria-hidden="true">→</span>';
  }
});

