import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Analysis from "./components/Analysis";
import Impact from "./components/Impact";
import Features from "./components/Features";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Analysis />
            <Impact />
            <Features />
        </>
    );
}

export default App;
