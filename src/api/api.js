const analyzeNewsArticle = (articleText) => {
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer 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`, // Ensure the key is correctly set in env
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            temperature: 0.2,
            top_p: 0.9,
            model: "sonar",
            return_images: false,
            return_related_questions: false,
            top_k: 0,
            stream: false,
            presence_penalty: 0,
            frequency_penalty: 1,
            messages: [
                {
                    role: "user",
                    content: `Analyze the news article for bias and credibility.

IMPORTANT FORMATTING INSTRUCTIONS:
1. RESPOND ONLY WITH A VALID JSON ARRAY
2. DO NOT include any explanatory text before or after the JSON
3. DO NOT use markdown, code blocks, or any additional formatting
4. ENSURE the JSON is directly parseable by JSON.parse()

Article Text:
${articleText}

JSON RESPONSE FORMAT:
[
    "Overall Bias Score (Low/Moderate/High)",
    "Credibility Rating (Low/Medium/High)",
    "Source Reputation Description",
    "Fact Checking Assessment",
    "Bias Indicator Type 1",
    "Bias Indicator Description 1",
    "Bias Indicator Example 1",
    "Bias Indicator Type 2",
    "Bias Indicator Description 2",
    "Bias Indicator Example 2",
    "Covered Perspectives (comma-separated)",
    "Missing Perspectives (comma-separated)",
    "Analysis Summary",
    "Reading Advice"
]`,
                },
            ],
        }),
    };

    return fetch("https://api.perplexity.ai/chat/completions", options);
};

export default analyzeNewsArticle;
