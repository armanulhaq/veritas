import React from "react";

const Info = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mx-5 lg:mx-10 rounded-xl px-7 lg:px-15 py-10 text-sm lg:text-md mt-10">
            <div className="flex flex-col gap-4 justify-center lg:w-[50%] lg:p-20 mb-5">
                <h1 className="text-xl lg:text-5xl font-bold font-serif">
                    Why Media Literacy Matters
                </h1>
                <p className="text-gray-400 text-md lg:text-lg">
                    In today's information-rich environment, the ability to
                    critically evaluate news content is more important than
                    ever. Biased reporting can shape public opinion, influence
                    decision-making, and deepen social divides.
                    <br />
                    <br />
                    Veritas empowers you to see beyond headlines and identify
                    content that may be presenting a skewed perspective, helping
                    you become a more informed news consumer.
                </p>
            </div>
            <div className="flex flex-col gap-4 justify-center lg:w-[50%] lg:p-20">
                <h1 className="text-3xl font-bold font-serif">
                    What should you do?
                </h1>
                <ul className="text-gray-400 gap-5 lg:gap-10 text-sm lg:text-lg flex flex-col">
                    <li className="flex flex-col gap-1 lg:gap-3">
                        <div className="text-black font-bold font-serif">
                            Be aware of your own biases
                        </div>
                        <div>
                            We all have preconceptions that affect how we
                            interpret information. Recognizing your own biases
                            is the first step toward more objective evaluation.
                        </div>
                    </li>
                    <li className="flex flex-col gap-1 lg:gap-3">
                        <div className="text-black font-bold font-serif">
                            Distinguish facts from opinions
                        </div>
                        <div>
                            Pay attention to whether claims are supported by
                            evidence or merely presented as assertions.
                        </div>
                    </li>

                    <li className="flex flex-col gap-1 lg:gap-3">
                        {" "}
                        <div className="text-black font-bold font-serif">
                            Diversify your news sources
                        </div>
                        <div>
                            Get information from multiple outlets with different
                            perspectives to build a more complete picture of
                            complex issues.
                        </div>
                    </li>
                    <li className="flex flex-col gap-1 lg:gap-3">
                        {" "}
                        <div className="text-black font-bold font-serif">
                            Consider what's not being said
                        </div>
                        <div>
                            Sometimes what's omitted from a story is as
                            important as what's included. Look for missing
                            context or perspectives.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
