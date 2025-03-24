import React from "react";
import stats from "../assets/stats.svg";
import analyse from "../assets/analyse.svg";
import source from "../assets/source.svg";
import search from "../assets/search.svg";

const Features = () => {
    return (
        <div className="bg-[#f8f9fa] py-20">
            <div>
                <div className="flex flex-col items-center justify-center gap-3 mx-5 lg:mx-10 rounded-xl px-7 lg:px-15">
                    <div className="text-4xl font-serif font-bold">
                        Key Features
                    </div>
                    <div className="text-gray-500 text-sm lg:text-md">
                        Our sophisticated technology helps you navigate the
                        complex media landscape with confidence
                    </div>
                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-4 m-5 lg:mx-10 gap-8 rounded-xl p-10">
                    <div className="border-2 flex flex-col gap-4 px-10 py-15 rounded-xl ">
                        <div className="flex justify-center">
                            <div className="flex justify-center bg-[#ffedd8] h-fit p-5 rounded-full">
                                <img
                                    className="w-10"
                                    src={search}
                                    alt="users"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-serif flex justify-center font-bold text-lg lg:text-xl">
                                AI-Powered Analysis
                            </div>
                            <div className="text-gray-500 text-sm lg:text-md flex justify-center text-center ">
                                Advanced algorithms examine news articles for
                                bias indicators, language patterns, and factual
                                presentation.
                            </div>
                        </div>
                    </div>
                    <div className="border-2 flex flex-col gap-4 px-10 py-15 rounded-xl">
                        <div className="flex justify-center">
                            <div className="flex justify-center bg-[#ffedd8] h-fit p-5 rounded-full">
                                <img className="w-10" src={stats} alt="users" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-serif flex justify-center font-bold text-lg lg:text-xl">
                                Bias Scoring
                            </div>
                            <div className="text-gray-500 text-center text-sm lg:text-md">
                                Receive a quantifiable assessment of bias
                                severity on a scale from balanced to heavily
                                biased
                            </div>
                        </div>
                    </div>
                    <div className="border-2 flex flex-col gap-4 px-10 py-15 rounded-xl">
                        <div className="flex justify-center">
                            <div className="flex justify-center bg-[#ffedd8] h-fit p-5 rounded-full">
                                <img
                                    className="w-10"
                                    src={analyse}
                                    alt="users"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-serif flex justify-center font-bold text-lg lg:text-xl">
                                Structured Breakdown
                            </div>
                            <div className="text-gray-500 text-center text-sm lg:text-md">
                                Get detailed insights across multiple dimensions
                                including source reliability, language framing,
                                and more.
                            </div>
                        </div>
                    </div>
                    <div className="border-2 flex flex-col gap-4 px-10 py-15 rounded-xl">
                        <div className="flex justify-center">
                            <div className="flex justify-center bg-[#ffedd8] h-fit p-5 rounded-full">
                                <img
                                    className="w-10"
                                    src={source}
                                    alt="users"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-serif flex justify-center font-bold text-lg lg:text-xl">
                                Alternative Sources
                            </div>
                            <div className="text-gray-500 text-center text-sm lg:text-md">
                                Discover balanced reporting alternatives when
                                bias is detected in your article.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
