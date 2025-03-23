import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import analyzeNewsArticle from "@/api/api";

const Analysis = ({ query, setQuery, setResponse }) => {
    const handleSubmit = async () => {
        try {
            const result = await analyzeNewsArticle(query);
            const response = await result.json();
            setResponse(
                response.choices?.[0]?.message?.content || "No data available."
            );
        } catch (error) {
            console.error("Error analyzing article:", error);
            setResponse("Failed to analyze the article. Please try again.");
        }
    };

    return (
        <div className="flex justify-center mb-50">
            <div className="m-5 lg:mx-10 rounded-xl flex flex-col gap-5 px-7 lg:px-15 lg:w-[60%] justify-center shadow-2xl p-6">
                <div className="flex flex-col gap-1">
                    <div className="text-md lg:text-2xl font-bold">
                        Analyse News Article
                    </div>
                    <div className="border-b-2 pb-2 text-xs lg:text-sm text-gray-500">
                        Enter the URL of the article to analyse for bias and
                        credibility
                    </div>
                </div>
                <div>
                    <Input
                        className="bg-white h-13"
                        placeholder="Enter link you want to analyse"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="text-[7px] lg:text-xs text-gray-500 mt-1">
                        Enter the direct URL to a news article. The content will
                        be fetched and analyzed.
                    </div>
                    <div className="mt-4 flex justify-end">
                        <Button
                            onClick={handleSubmit}
                            className="cursor-pointer text-xs bg-orange-800 text-white hover:bg-orange-900"
                        >
                            Analyse Article
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
