import { useState, useEffect } from "react";
import ai from "../assets/ai.png";

const Results = ({ response }) => {
    const [parsedResponse, setParsedResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (typeof response === "string") {
                console.log("Raw response:", response);
                const cleanResponse = response
                    .replace(/```json|```/g, "")
                    .trim();
                console.log("Cleaned response:", cleanResponse);

                // Try to parse as array first
                let data;
                try {
                    data = JSON.parse(cleanResponse);
                } catch {
                    // If parsing fails, try to extract array from the string
                    const arrayMatch = cleanResponse.match(/\[[\s\S]*\]/);
                    if (arrayMatch) {
                        data = JSON.parse(arrayMatch[0]);
                    } else {
                        throw new Error("No valid array found in response");
                    }
                }

                if (!Array.isArray(data) || data.length < 14) {
                    throw new Error(
                        "Invalid response format: expected array with 14 elements"
                    );
                }

                setParsedResponse(data);
            } else {
                setParsedResponse(response);
            }
        } catch (err) {
            console.error("JSON parsing error:", err);
            console.error("Raw response that failed:", response);
            setError(`Failed to parse response: ${err.message}`);
        }
    }, [response]);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-red-600">
                <h3 className="text-xl font-bold mb-4">
                    Error Processing Response
                </h3>
                <p className="text-center">{error}</p>
                <p className="text-sm mt-4 text-gray-600">
                    Please try again or contact support if the issue persists.
                </p>
            </div>
        );
    }

    if (!parsedResponse) return <p>Loading analysis...</p>;

    const [
        overallBiasScore,
        credibilityRating,
        sourceReputation,
        factChecking,
        biasType1,
        biasDesc1,
        biasExample1,
        biasType2,
        biasDesc2,
        biasExample2,
        coveredPerspectives,
        missingPerspectives,
        summary,
        readingAdvice,
    ] = parsedResponse;

    return (
        <div className="flex flex-col items-center justify-center gap-6 mx-5 lg:mx-10 rounded-xl px-7 lg:px-15 py-10 text-lg mt-10">
            {/* Header */}
            <div className="w-fit text-black text-sm rounded-2xl px-3 py-1 flex gap-1 border border-[#e0c9a6]">
                <div className="text-orange-900">
                    <img className="h-5" src={ai} alt="" />
                </div>
                <div className="flex items-center">Analysis Report</div>
            </div>

            <h2 className="text-5xl font-bold">Bias Analysis</h2>
            <p className="text-center">
                Detailed analysis of potential bias in media reporting and
                content
            </p>

            {/* Overall Assessment */}
            <div className="w-[80vw] border border-[#ddb892] lg:w-[30vw] rounded-4xl mx-5 flex flex-col items-center gap-5 py-10 my-5 bg-[#f3dcaf]">
                <div className="text-3xl text-[#6c3d0f] bg-[#f3dcaf] font-black">
                    Overall Assessment
                </div>
                <div className="flex flex-col bg-[#f3dcaf] gap-2">
                    <div className="flex gap-2 bg-[#f3dcaf]">
                        <p className="bg-[#f3dcaf]">
                            <strong className="bg-[#f3dcaf]">
                                Overall Bias Score:
                            </strong>
                        </p>
                        <div className="underline bg-[#f3dcaf] decoration-[#6c3d0f] underline-offset-5 decoration-4">
                            {overallBiasScore}
                        </div>
                    </div>
                    <div className="flex gap-2 bg-[#f3dcaf]">
                        <p className="bg-[#f3dcaf]">
                            <strong className="bg-[#f3dcaf]">
                                Credibility Rating:
                            </strong>
                        </p>
                        <div className="underline bg-[#f3dcaf] decoration-[#6c3d0f] underline-offset-5 decoration-4">
                            {credibilityRating}
                        </div>
                    </div>
                </div>
            </div>

            {/* Source Evaluation */}
            <div className="w-[80vw] border border-[#ddb892] rounded-4xl p-8 bg-[#f3dcaf]">
                <h3 className="text-2xl font-bold text-[#6c3d0f] mb-4 bg-[#f3dcaf]">
                    Source Evaluation
                </h3>
                <div className="space-y-4 bg-[#f3dcaf]">
                    <div className="bg-[#f3dcaf]">
                        <h4 className="font-semibold mb-2 bg-[#f3dcaf]">
                            Reputation:
                        </h4>
                        <p className="bg-[#f3dcaf]">{sourceReputation}</p>
                    </div>
                    <div className="bg-[#f3dcaf]">
                        <h4 className="font-semibold mb-2 bg-[#f3dcaf]">
                            Fact Checking:
                        </h4>
                        <p className="bg-[#f3dcaf]">{factChecking}</p>
                    </div>
                </div>
            </div>

            {/* Bias Indicators */}
            <div className="w-[80vw] border border-[#ddb892] rounded-4xl p-8 bg-[#f3dcaf]">
                <h3 className="text-2xl font-bold text-[#6c3d0f] mb-4 bg-[#f3dcaf]">
                    Bias Indicators
                </h3>
                <div className="space-y-6 bg-[#f3dcaf]">
                    <div className="border-b border-[#ddb892] pb-4 bg-[#f3dcaf]">
                        <h4 className="font-semibold text-lg mb-2 bg-[#f3dcaf]">
                            {biasType1}
                        </h4>
                        <p className="mb-2 bg-[#f3dcaf]">{biasDesc1}</p>
                        <div className="bg-[#f3dcaf]">
                            <h5 className="font-semibold mb-1 bg-[#f3dcaf]">
                                Example:
                            </h5>
                            <p className="bg-[#f3dcaf]">{biasExample1}</p>
                        </div>
                    </div>
                    <div className="bg-[#f3dcaf]">
                        <h4 className="font-semibold text-lg mb-2 bg-[#f3dcaf]">
                            {biasType2}
                        </h4>
                        <p className="mb-2 bg-[#f3dcaf]">{biasDesc2}</p>
                        <div className="bg-[#f3dcaf]">
                            <h5 className="font-semibold mb-1 bg-[#f3dcaf]">
                                Example:
                            </h5>
                            <p className="bg-[#f3dcaf]">{biasExample2}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Perspective Coverage */}
            <div className="w-[80vw] border border-[#ddb892] rounded-4xl p-8 bg-[#f3dcaf]">
                <h3 className="text-2xl font-bold text-[#6c3d0f] mb-4 bg-[#f3dcaf]">
                    Perspective Coverage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#f3dcaf]">
                    <div className="bg-[#f3dcaf]">
                        <h4 className="font-semibold mb-2 bg-[#f3dcaf]">
                            Covered Perspectives:
                        </h4>
                        <ul className="list-disc list-inside bg-[#f3dcaf]">
                            {coveredPerspectives
                                .split(",")
                                .map((perspective, index) => (
                                    <li className="bg-[#f3dcaf]" key={index}>
                                        {perspective.trim()}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="bg-[#f3dcaf]">
                        <h4 className="font-semibold mb-2 bg-[#f3dcaf]">
                            Missing Perspectives:
                        </h4>
                        <ul className="list-disc list-inside bg-[#f3dcaf]">
                            {missingPerspectives
                                .split(",")
                                .map((perspective, index) => (
                                    <li className="bg-[#f3dcaf]" key={index}>
                                        {perspective.trim()}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <div className="w-[80vw] border border-[#ddb892] rounded-4xl p-8 bg-[#f3dcaf]">
                <h3 className="text-2xl font-bold text-[#6c3d0f] mb-4 bg-[#f3dcaf]">
                    Recommendations
                </h3>
                <div className="space-y-4 bg-[#f3dcaf]">
                    <div className="bg-[#f3dcaf]">
                        <h4 className="font-semibold mb-2 bg-[#f3dcaf]">
                            Summary:
                        </h4>
                        <p className="bg-[#f3dcaf]">{summary}</p>
                    </div>
                    <div className="bg-[#f3dcaf]">
                        <h4 className="font-semibold mb-2 bg-[#f3dcaf]">
                            Reading Advice:
                        </h4>
                        <p className="bg-[#f3dcaf]">{readingAdvice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
