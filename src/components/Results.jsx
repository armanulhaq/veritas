import { useState, useEffect } from "react";
import ai from "../assets/ai.png";

const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/([A-Z])/g, " $1"); //finds all uppercase letters in the string." $1" adds a space before each uppercase letter found.

const Results = ({ response }) => {
    console.log(response);
    const [parsedResponse, setParsedResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (typeof response === "string") {
                const cleanResponse = response
                    .replace(/```json|```/g, "")
                    .trim();
                setParsedResponse(JSON.parse(cleanResponse));
            } else {
                setParsedResponse(response);
            }
        } catch (err) {
            setError("Failed to parse JSON response.");
        }
    }, [response]);

    if (error) return <p className="text-red-500">{error}</p>;
    if (!parsedResponse) return <p>Loading analysis...</p>;

    const { overallBiasScore, credibilityRating, sections, conclusion } =
        parsedResponse;

    if (response) {
        return (
            <div className="flex flex-col  items-center justify-center gap-3 mx-5 lg:mx-10 rounded-xl px-7 lg:px-15 py-10 text-lg mt-10">
                <div className="w-fit text-black text-sm  rounded-2xl px-3 py-1 flex gap-1  border border-[#e0c9a6] ">
                    <div className="text-orange-900 ">
                        <img className="h-5 " src={ai} alt="" />{" "}
                    </div>
                    {""}
                    <div className="flex items-center">Analysis Report</div>
                </div>
                <h2 className="text-5xl font-bold">Bias Analysis</h2>
                <p className="text-center">
                    Detailed analysis of potential bias in media reporting and
                    content
                </p>
                <div className="w-[80vw]  border border-[#ddb892] lg:w-[30vw] rounded-4xl mx-5 flex flex-col items-center gap-5 py-10 my-5">
                    <div className="text-3xl text-[#6c3d0f] font-black bg-[#faedcd]">
                        Overall Assessment
                    </div>
                    <div className="flex flex-col gap-2 bg-[#faedcd]">
                        <div className="flex gap-2 bg-[#faedcd]">
                            <p className="bg-[#faedcd]">
                                <strong>Overall Bias Score:</strong>{" "}
                            </p>
                            <div className="underline decoration-[#6c3d0f] underline-offset-5 decoration-4">
                                {overallBiasScore}
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <p className="bg-[#faedcd]">
                                <strong>Credibility Rating:</strong>{" "}
                            </p>
                            <div className="underline decoration-[#6c3d0f] underline-offset-5 decoration-4">
                                {credibilityRating}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {sections?.map((section, index) => (
                        <div
                            key={index}
                            className="p-10 rounded-4xl flex flex-col items-center justify-center  border border-[#ddb892]"
                        >
                            <h3 className="text-2xl font-2xl mb-3 text-[#6c3d0f] font-black bg-[#faedcd]">
                                {section.title}
                            </h3>
                            {typeof section.content === "string" ? (
                                <p className="bg-[#faedcd]">
                                    {section.content}
                                </p>
                            ) : Array.isArray(section.content) ? (
                                <ul className="bg-[#faedcd]">
                                    {section.content.map((item, i) => (
                                        <li key={i} className="bg-[#faedcd]">
                                            {typeof item === "string" ? (
                                                capitalizeFirstLetter(item)
                                            ) : (
                                                <div className="bg-[#faedcd]">
                                                    <strong>
                                                        {capitalizeFirstLetter(
                                                            item.type
                                                        )}
                                                        :
                                                    </strong>{" "}
                                                    {item.details ||
                                                        item.impact}
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div>
                                    {Object.entries(section.content).map(
                                        ([key, value], i) => (
                                            <p key={i} className="bg-[#faedcd]">
                                                <strong>
                                                    {capitalizeFirstLetter(key)}
                                                    :
                                                </strong>{" "}
                                                {Array.isArray(value)
                                                    ? value.join(", ")
                                                    : value}
                                            </p>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="border border-[#ddb892] mt-4 p-10 rounded-4xl flex flex-col items-center gap-2 justify-center   lg:w-[40vw] ">
                    <h3 className="font-black text-3xl text-[#6c3d0f] bg-[#faedcd]">
                        Conclusion
                    </h3>
                    <div>
                        <p className="bg-[#faedcd]">
                            <strong className="bg-[#faedcd]">Summary:</strong>{" "}
                            {conclusion?.summaryStatement}
                        </p>
                        <p className="bg-[#faedcd]">
                            <strong>Recommendation:</strong>{" "}
                            {conclusion?.readingRecommendation}
                        </p>
                    </div>
                </div>
            </div>
        );
    } else return <></>;
};

export default Results;
