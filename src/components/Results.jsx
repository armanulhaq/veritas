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
            <div className="flex flex-col  items-center justify-center gap-5 mx-5 lg:mx-10 rounded-xl px-7 lg:px-15 py-10 text-sm lg:text-lg mt-10">
                <div className="w-fit text-black text-xs lg:text-sm bg-[#ffedd8] rounded-2xl px-3 py-1 flex gap-1">
                    <div className="text-orange-900">
                        <img className="h-5" src={ai} alt="" />{" "}
                    </div>
                    {""}
                    <div>Analysis Report</div>
                </div>
                <h2 className="text-4xl font-bold">Bias Analysis</h2>
                <p className="text-gray-400">
                    Detailed analysis of potential bias in media reporting and
                    content
                </p>
                <div className="w-[90vw] lg:w-[30vw] shadow-sm rounded-4xl mx-5 flex flex-col items-center gap-5 px-3 py-5 lg:py-10">
                    <div className="text-3xl font-semibold">
                        Overall Assessment
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            <strong>Overall Bias Score:</strong>{" "}
                            {overallBiasScore}
                        </p>
                        <p>
                            <strong>Credibility Rating:</strong>{" "}
                            {credibilityRating}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {sections?.map((section, index) => (
                        <div
                            key={index}
                            className="p-10 bg-[#ffedd8] rounded-4xl shadow-sm"
                        >
                            <h3 className="text-2xl font-bold font-serif mb-3">
                                {section.title}
                            </h3>
                            {typeof section.content === "string" ? (
                                <p>{section.content}</p>
                            ) : Array.isArray(section.content) ? (
                                <ul>
                                    {section.content.map((item, i) => (
                                        <li key={i}>
                                            {typeof item === "string" ? (
                                                capitalizeFirstLetter(item)
                                            ) : (
                                                <div>
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
                                            <p key={i}>
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

                <div className="bg-[#ffedd8] mt-4 p-10 rounded-4xl shadow-sm">
                    <h3 className="font-semibold">Conclusion</h3>
                    <p>
                        <strong>Summary:</strong> {conclusion?.summaryStatement}
                    </p>
                    <p>
                        <strong>Recommendation:</strong>{" "}
                        {conclusion?.readingRecommendation}
                    </p>
                </div>
            </div>
        );
    } else return <></>;
};

export default Results;
