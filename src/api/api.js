const analyzeNewsArticle = (articleText) => {
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PERPLEXITY_API_KEY}`, // Ensure the key is correctly set in env
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
                    content: `Analyze the news article for bias.

IMPORTANT FORMATTING INSTRUCTIONS:
1. RESPOND ONLY WITH A VALID JSON
2. DO NOT include any explanatory text before or after the JSON
3. DO NOT use markdown, code blocks, or any additional formatting
4. ENSURE the JSON is directly parseable by JSON.parse()

Article Text:
${articleText}

JSON RESPONSE FORMAT:
{
    "overallBiasScore": "Low/Moderate/High",
    "credibilityRating": "Low/Medium/High",
    "sections": [
        {
            "title": "Source Credibility",
            "content": {
                "sourceReputation": "String description",
                "potentialBiasOrigins": "String explanation",
                "factualConsistency": "String assessment"
            }
        },
        {
            "title": "Linguistic Bias Indicators",
            "content": [
                {
                    "type": "Emotional Language/Framing Bias",
                    "examples": ["Specific language examples"],
                    "impact": "How language might influence perception"
                }
            ]
        },
        {
            "title": "Perspective Analysis",
            "content": {
                "perspectiveCoverage": "Description of viewpoint breadth",
                "missingPerspectives": ["List of perspectives not covered"],
                "balanceScore": "Numerical score 1-10"
            }
        },
        {
            "title": "Bias Type Breakdown",
            "content": [
                {
                    "type": "Selection Bias/Contextual Bias",
                    "details": "Explanation of bias type",
                    "severity": "Low/Moderate/High"
                }
            ]
        },
        {
            "title": "Recommended Reader Approach",
            "content": [
                "Recommendation 1",
                "Recommendation 2"
            ]
        }
    ],
    "conclusion": {
        "summaryStatement": "Concise bias summary",
        "readingRecommendation": "Advice for reading the article"
    }
}`,
                },
            ],
        }),
    };

    return fetch("https://api.perplexity.ai/chat/completions", options);
};

export default analyzeNewsArticle;
