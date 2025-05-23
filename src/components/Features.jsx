import React from "react";
import stats from "../assets/stats.svg";
import analyse from "../assets/analyse.svg";
import source from "../assets/source.svg";
import search from "../assets/search.svg";

const Features = () => {
    return (
        <div className="mt-50">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 mx-5 lg:mx-10 rounded-xl px-7 lg:px-15">
                    <div className="text-5xl  font-extrabold">Key Features</div>
                    <div className="text-lg">
                        Our sophisticated technology helps you navigate the
                        complex media landscape with confidence
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 m-5 lg:mx-10 gap-8 rounded-xl px-2 lg:px-10">
                    <div className="border border-[#e0c9a6] flex flex-col gap-4 p-10 rounded-xl bg-[#faedcd]">
                        <div className="flex justify-center ">
                            <div className="flex justify-center bg-[#f3dcaf] h-fit p-5 rounded-full">
                                <img
                                    className="w-10 bg-[#f3dcaf]"
                                    src={search}
                                    alt="users"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 bg-[#faedcd]">
                            <div className="flex justify-center font-bold text-xl ">
                                AI-Powered Analysis
                            </div>
                            <div className="text-lg flex justify-center text-center ">
                                Advanced algorithms examine news articles for
                                bias indicators, language patterns, and factual
                                presentation.
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#e0c9a6] flex flex-col gap-4 px-10 py-15 rounded-xl">
                        <div className="flex justify-center ">
                            <div className="flex justify-center bg-[#f3dcaf] h-fit p-5 rounded-full">
                                <img
                                    className="w-10 bg-[#f3dcaf]"
                                    src={stats}
                                    alt="users"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 ">
                            <div className="font- flex justify-center font-bold text-xl">
                                Bias Scoring
                            </div>
                            <div className="text-center text-lg ">
                                Receive a quantifiable assessment of bias
                                severity on a scale from balanced to heavily
                                biased
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#e0c9a6]   flex flex-col gap-4 px-10 py-15 rounded-xl">
                        <div className="flex justify-center ">
                            <div className="flex justify-center bg-[#f3dcaf]  h-fit p-5 rounded-full">
                                <img
                                    className="w-10 bg-[#f3dcaf]"
                                    src={analyse}
                                    alt="users"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 ">
                            <div className="font- flex justify-center font-bold text-xl ">
                                Structured Breakdown
                            </div>
                            <div className="text-center text-lg ">
                                Get detailed insights across multiple dimensions
                                including source reliability, language framing,
                                and more.
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#e0c9a6] flex flex-col gap-4 px-10 py-15 rounded-xl">
                        <div className="flex justify-center">
                            <div className="flex justify-center bg-[#f3dcaf]  h-fit p-5 rounded-full">
                                <img
                                    className="w-10 bg-[#f3dcaf]"
                                    src={source}
                                    alt="users"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 ">
                            <div className="flex justify-center font-bold text-xl ">
                                Alternative Sources
                            </div>
                            <div className="text-center text-lg ">
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
