import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Analysis from "./components/Analysis";
import Impact from "./components/Impact";
import Features from "./components/Features";
import { useRef, useState } from "react";
import Results from "./components/Results";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState({});
    // Create refs for Analysis and Impact components
    const analysisRef = useRef(null);
    const impactRef = useRef(null);

    // Function to scroll to a specific ref
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Navbar />
            <Hero
                scrollToAnalysis={() => scrollToSection(analysisRef)}
                scrollToImpact={() => scrollToSection(impactRef)}
            />
            <div ref={analysisRef}>
                <Analysis
                    setResponse={setResponse}
                    query={query}
                    setQuery={setQuery}
                />
            </div>
            {Object.keys(response).length > 0 && (
                <Results response={response} />
            )}
            {/* returns an array of all keys (properties) inside the response object. We checking the size of that. If >0, we have response */}

            <div ref={impactRef}>
                <Impact />
            </div>
            <Features />
            <Info />
            <Footer />
        </>
    );
}

export default App;
