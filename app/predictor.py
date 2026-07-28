"""Deterministic, local-only heuristics for prompt-size estimates.

These estimates are intentionally model-agnostic. They do not call an AI provider,
store prompts, or represent an official limit for any product or plan.
"""

from __future__ import annotations

import math
import re

WORD_PATTERN = re.compile(r"\w+|[^\w\s]", re.UNICODE)
COMPLEXITY_TERMS = {
    "analyze", "architecture", "compare", "debug", "design", "implement",
    "investigate", "migrate", "optimize", "refactor", "security", "test",
}


def estimate_request_tokens(message: str) -> int:
    """Estimate token count without sending the content to an external service."""

    words_and_symbols = len(WORD_PATTERN.findall(message))
    # English prose averages roughly four characters per token. The blended estimate
    # handles code, punctuation, and non-English text a little more conservatively.
    return max(1, math.ceil(max(len(message) / 4, words_and_symbols / 0.78)))


def predict(message: str, model: str) -> dict[str, int | str]:
    """Return an explainable estimate derived from prompt length and intent signals."""

    request_tokens = estimate_request_tokens(message)
    normalized = message.lower()
    signals = sum(term in normalized for term in COMPLEXITY_TERMS)
    has_code = "```" in message or any(marker in message for marker in ("def ", "class ", "{", "=>"))
    line_count = message.count("\n") + 1
    score = signals * 2 + int(has_code) * 3 + int(line_count > 12) * 2 + int(request_tokens > 700) * 2

    if score >= 7:
        difficulty = "High"
        multiplier = 2.1
    elif score >= 3:
        difficulty = "Medium"
        multiplier = 1.35
    else:
        difficulty = "Low"
        multiplier = 0.85

    response_min = max(150, int(request_tokens * multiplier * 0.6))
    response_max = min(8_000, max(500, int(request_tokens * multiplier * 1.8)))
    usage_score = request_tokens + response_max
    probability = "High" if usage_score > 4_500 else "Average" if usage_score > 1_700 else "Low"
    parts = 3 if difficulty == "High" or usage_score > 3_500 else 2 if difficulty == "Medium" else 1
    recommendation = (
        f"Break the request into {parts} parts." if parts > 1
        else "This request should fit comfortably as one focused prompt."
    )
    note = (
        f"The estimate uses {request_tokens:,} input tokens and a {difficulty.lower()}-complexity "
        "response profile. Actual usage varies with the model, conversation context, and requested detail."
    )

    return {
        "model": model,
        "request_tokens": request_tokens,
        "expected_response_min": response_min,
        "expected_response_max": response_max,
        "difficulty": difficulty,
        "daily_limit_probability": probability,
        "recommended_parts": parts,
        "recommendation": recommendation,
        "note": note,
    }

