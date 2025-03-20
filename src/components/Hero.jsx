import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <div className="h-[90vh] lg:max-w-[80vw] flex flex-col px-5 md:px-10 lg:px-15 gap-5 lg:gap-10  justify-center">
            <div className="w-fit text-black text-xs lg:text-sm bg-[#ffedd8] rounded-2xl px-3 py-1">
                <span className="text-orange-900">●</span> AI Powered News
                Verification
            </div>
            <div>
                <div className="font-serif text-4xl lg:text-8xl">
                    Truth in Every
                </div>
                <div className="text-6xl lg:text-8xl font-extrabold underline decoration-orange-800 underline-offset-15">
                    Headline
                </div>
            </div>
            <div className="text-gray-500 text-sm lg:text-lg font-serif">
                Verify the credibility of any news article with our
                sophisticated Al analysis that detects bias, checks facts, and
                provides balanced context for informed reading.
            </div>
            <div className="flex gap-5">
                <Button className="cursor-pointer text-xs lg:h-13 lg:text-lg bg-orange-800 text-white hover:bg-orange-900">
                    Analyse an article
                </Button>
                <Button className="bg-gray-200 text-xs lg:h-13 lg:text-lg text-black">
                    Learn More
                </Button>
            </div>
        </div>
    );
};

export default Hero;
