import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Analysis from "./components/Analysis";
import Impact from "./components/Impact";
import Features from "./components/Features";
import { useState } from "react";
import Results from "./components/Results";

function App() {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState({});

    return (
        <>
            <Navbar />
            <Hero />
            <Analysis
                setResponse={setResponse}
                query={query}
                setQuery={setQuery}
            />
            <Results response={response} />
            <Impact />
            <Features />
        </>
    );
}

export default App;
