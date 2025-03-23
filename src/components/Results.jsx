import React from "react";

const Results = ({ response }) => {
    let formattedResponse;

    try {
        // Remove possible Markdown formatting
        if (typeof response === "string") {
            response = response.replace(/```json\n|\n```/g, "");
            formattedResponse = JSON.parse(response);
        } else {
            formattedResponse = response;
        }
    } catch (error) {
        console.error("Error parsing response:", error);
        return <p className="text-red-500">No data available.</p>;
    }

    return (
        <div className="flex flex-col mx-5 lg:mx-10 rounded-xl p-7 lg:p-15">
            <h2 className="text-xl font-bold">Analysis Results</h2>
            <div className="text-gray-500">
                Paste an article or enter a URL to analyze for bias and
                credibility
            </div>
            {formattedResponse && formattedResponse.sections ? (
                <div className="border p-4 rounded-md shadow-md">
                    {formattedResponse.sections.map((section, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-lg font-semibold">
                                {section.title}
                            </h3>

                            {/* If content is an array of objects, render them properly */}
                            {Array.isArray(section.content) ? (
                                <ul className="list-disc pl-5">
                                    {section.content.map((item, i) => (
                                        <li key={i}>
                                            <strong>{item.type}: </strong>
                                            {item.details}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700">
                                    {section.content}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">
                    No analysis yet. Enter a URL above and analyze.
                </p>
            )}
        </div>
    );
};

export default Results;
