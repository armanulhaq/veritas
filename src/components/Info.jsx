import React from "react";

const Info = () => {
    return (
        <div className="flex gap-10 mx-5 lg:mx-10 rounded-xl p-7 lg:p-15">
            <div className="flex flex-col gap-4 justify-center w-[50%] p-20">
                <h1 className="text-2xl font-bold font-serif">
                    Why Media Literacy Matters
                </h1>
                <p className="text-gray-400 text-lg">
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
            <div className="flex flex-col gap-4 justify-center w-[50%] p-20">
                <h1 className="text-2xl font-bold font-serif">
                    What should you do?
                </h1>
                <ul className="text-gray-400 text-lg">
                    <li>
                        <div className="text-black font-bold  font-serif">
                            Be aware of your own biases
                        </div>
                        We all have preconceptions that affect how we interpret
                        information. Recognizing your own biases is the first
                        step toward more objective evaluation.
                    </li>
                    <li>
                        <div className="text-black font-bold  font-serif">
                            Distinguish facts from opinions
                        </div>
                        Pay attention to whether claims are supported by
                        evidence or merely presented as assertions.
                    </li>

                    <li>
                        {" "}
                        <div className="text-black font-bold  font-serif">
                            Diversify your news sources
                        </div>
                        Get information from multiple outlets with different
                        perspectives to build a more complete picture of complex
                        issues.
                    </li>
                    <li>
                        {" "}
                        <div className="text-black font-bold  font-serif">
                            Consider what's not being said
                        </div>
                        Sometimes what's omitted from a story is as important as
                        what's included. Look for missing context or
                        perspectives.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
