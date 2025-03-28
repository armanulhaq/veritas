import React from "react";
import { Button } from "./ui/button";
import ai from "../assets/ai.png";

const Hero = ({ scrollToAnalysis, scrollToImpact }) => {
    return (
        <div className="h-[90vh] lg:max-w-[70vw] flex flex-col px-5 md:px-10 lg:px-15 gap-5 lg:gap-10  justify-center">
            <div className="w-fit border bg-[#f3dcaf] border-[#e0c9a6]  text-xs lg:text-sm rounded-2xl px-3 flex items-center justify-between gap-1 py-1">
                <img className="h-5 bg-[#f3dcaf]" src={ai} alt="AI icon" />
                AI Powered News Verification
            </div>
            <div>
                <div className="text- text-4xl lg:text-7xl font-semibold">
                    Truth in Every
                </div>
                <div className="text-6xl lg:text-8xl font-black underline decoration-[#6c3d0f] underline-offset-15 mb-5 lg:mb-10">
                    Headline
                </div>
            </div>
            <div className="text-sm lg:text-lg ">
                Verify the credibility of any news article with our
                sophisticated Al analysis that detects bias, checks facts, and
                provides balanced context for informed reading.
            </div>
            <div className="flex gap-5">
                <Button
                    onClick={scrollToAnalysis}
                    className="cursor-pointer text-xs lg:h-13 lg:text-lg bg-[#6c3d0f] text-white hover:bg-orange-900"
                >
                    Analyse an article
                </Button>
                <Button
                    onClick={scrollToImpact}
                    className="bg-[#d9d9d9] text-xs lg:h-13 lg:text-lg text-black"
                >
                    Learn More
                </Button>
            </div>
        </div>
    );
};

export default Hero;
