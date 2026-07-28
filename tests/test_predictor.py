from app.predictor import estimate_request_tokens, predict


def test_token_estimate_is_positive_and_scales_with_input() -> None:
    assert estimate_request_tokens("Hello") > 0
    assert estimate_request_tokens("Hello " * 100) > estimate_request_tokens("Hello")


def test_complex_request_is_split_and_marked_high_difficulty() -> None:
    request = """Analyze and design a secure architecture. Implement and test it.
```python
def migrate(): pass
```
"""
    result = predict(request, "GPT-5 Free")

    assert result["difficulty"] == "High"
    assert result["recommended_parts"] == 3
    assert result["expected_response_max"] >= result["expected_response_min"]


def test_short_prompt_receives_single_prompt_recommendation() -> None:
    result = predict("Write a polite greeting.", "GPT-5 Free")

    assert result["recommended_parts"] == 1
    assert "one focused prompt" in result["recommendation"]

