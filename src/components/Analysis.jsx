import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import analyzeNewsArticle from "@/api/api";
import ai from "../assets/ai.png";

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
        <div className="h-[100vh] flex items-center justify-center">
            <div className="flex justify-center">
                <div className="w-[90vw] lg:w-[60vw] shadow-lg rounded-4xl mx-5 py-10 lg:py-20">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <div className="w-fit text-black text-xs lg:text-sm bg-[#ffedd8] rounded-2xl px-3 py-1 flex gap-1">
                            <div className="text-orange-900">
                                <img className="h-5" src={ai} alt="" />{" "}
                            </div>
                            {""}
                            <div>AI-powered news analysis</div>
                        </div>
                        <div className="flex gap-1 text-lg flex-col items-center text-center">
                            <div className="text-2xl lg:text-3xl font-bold">
                                Analyze News Article{" "}
                            </div>
                            <div className="text-gray-400 text-sm lg:text-lg px-4">
                                Enter the URL of a news article to analyze it
                                for bias, credibility, and balanced reporting.
                            </div>
                        </div>
                        <div className="w-[100%] lg:w-[90%] px-4 flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="flex flex-col w-[100%]">
                                <Input
                                    className="bg-white h-15 w-[100%]  rounded-3xl text-sm lg:text-md py-3 md:py-5 lg:py-7 px-3 lg:px-5"
                                    placeholder="https://example.com/news-article"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <div className="text-[7px] lg:text-[11px] text-gray-500 px-5">
                                    Enter the direct URL to a news article. The
                                    content will be fetched and analyzed.
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button
                                    onClick={handleSubmit}
                                    className="cursor-pointer text-md bg-orange-800 text-white hover:bg-orange-900 py-5 lg:py-7 px-3 lg:px-5 rounded-4xl"
                                >
                                    Analyse Article
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
