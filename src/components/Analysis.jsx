import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import analyzeNewsArticle from "@/api/api";
import ai from "../assets/ai.png";

const Analysis = ({ query, setQuery, setResponse }) => {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
        setLoading(true); // Start loading
        try {
            const result = await analyzeNewsArticle(query);
            const response = await result.json();
            setResponse(
                response.choices?.[0]?.message?.content || "No data available."
            );
        } catch (error) {
            console.error("Error analyzing article:", error);
            setResponse("Failed to analyze the article. Please try again.");
        } finally {
            setLoading(false); // Stop loading after response
        }
    };

    return (
        <div className="h-[50vh] flex items-center justify-center">
            <div className="flex justify-center">
                <div className="w-[90vw] lg:w-[60vw] rounded-4xl mx-5 py-10 lg:py-20 bg-[#f3dcaf]  border border-[#e0c9a6]">
                    <div className="flex flex-col justify-center items-center gap-5 bg-[#f3dcaf]">
                        <div className="w-fit text-black text-xs lg:text-sm rounded-2xl px-3 py-1 flex gap-1 border border-[#e0c9a6]">
                            <div className="text-orange-900 bg-[#f3dcaf] ">
                                <img className="h-5" src={ai} alt="" />{" "}
                            </div>
                            {""}
                            <div className="flex items-center">
                                AI-powered news analysis
                            </div>
                        </div>
                        <div className="flex gap-1 text-lg flex-col  items-center text-center bg-[#f3dcaf]">
                            <div className="text-2xl lg:text-3xl font-bold flex items-center bg-[#f3dcaf]">
                                Analyze News Article{" "}
                            </div>
                            <div className=" text-sm lg:text-lg px-6 bg-[#f3dcaf]">
                                Enter the URL of a news article to analyze it
                                for bias, credibility, and balanced reporting.
                            </div>
                        </div>
                        <div className="w-[100%] lg:w-[90%] px-6 flex flex-col sm:flex-row gap-4 justify-center bg-[#f3dcaf]">
                            <div className="flex flex-col w-[100%] bg-[#f3dcaf]">
                                <Input
                                    className="bg-[#f4f3ee] border border-[#e0c9a6] h-15 w-[100%] rounded-lg text-sm lg:text-md py-3 md:py-5 lg:py-7 px-3 lg:px-5"
                                    placeholder="https://example.com/news-article"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <div className="text-[9px] lg:text-[11px] px-3 lg:px-5  mt-1 bg-[#f3dcaf]">
                                    Enter the direct URL to a news article. The
                                    content will be fetched and analyzed.
                                </div>
                            </div>

                            <div className="flex justify-end bg-[#f3dcaf]">
                                <Button
                                    onClick={handleSubmit}
                                    disabled={loading} // Disable when loading
                                    className={`cursor-pointer text-md  bg-[#6c3d0f]  hover:bg-orange-900 text-white py-5 lg:py-7 px-3 lg:px-5 rounded-4xl ${
                                        loading
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-2 text-black bg-[#6c3d0f]">
                                            <span className="animate-spin  bg-[#6c3d0f] h-5 w-5 border-2 border-white rounded-full"></span>
                                            <div className="bg-[#6c3d0f] text-white">
                                                Analysing...
                                            </div>
                                        </div>
                                    ) : (
                                        "Analyse Article"
                                    )}
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
