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
                    content: `Analyze the following news article for bias:

                    ${articleText}

                    Provide the response without any sources or formatting **strictly in the following JSON format**:

                    {
                        "sections": [
                            {
                                "title": "Source Reliability & Author Background",
                                "content": "Evaluates the credibility of the source and author..."
                            },
                            {
                                "title": "Language & Framing",
                                "content": "Identifies emotionally charged words or bias in framing..."
                            },
                            {
                                "title": "Presentation of Multiple Perspectives",
                                "content": "Checks whether the article presents diverse viewpoints..."
                            },
                            {
                                "title": "Context & Background Information",
                                "content": "Assesses if the article provides enough historical context..."
                            },
                            {
                                "title": "Potential Bias Indicators",
                                "content": [
                                    { "type": "Selection Bias", "details": "Facts may be selectively presented..." },
                                    { "type": "Omission of Perspectives", "details": "Some perspectives might be ignored..." },
                                    { "type": "Emphasis on Certain Facts", "details": "Specific facts may be overemphasized..." }
                                ]
                            },
                            {
                                "title": "Comparative Analysis",
                                "content": "Compares claims with reputable sources..."
                            },
                            {
                                "title": "Conclusion",
                                "content": "Summarizes whether the article appears biased or balanced..."
                            }
                        ]
                    }`,
                },
            ],
        }),
    };

    return fetch("https://api.perplexity.ai/chat/completions", options);
};

export default analyzeNewsArticle;
