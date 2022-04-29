import './App.css';
import Background from "./background";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import WorldStatsMain from "./components/WorldStatsMain";
import CountryStatsMain from "./components/CountryStatsMain";
import CacheDetailsMain from "./components/CacheDetailsMain";
import CountryHistoryMain from "./components/CountryHistoryMain";

function App() {
    return (
        <div className="h-100">
            <Background className="particles" />
            <TopBar/>
            <Routes>
                <Route path="/" element={<WorldStatsMain/>} />
                <Route path="/country" element={<CountryStatsMain/>} />
                <Route path="/cache_details" element={<CacheDetailsMain/>} />
                <Route path="/country_history" element={<CountryHistoryMain/>} />
            </Routes>
        </div>
    );
}

export default App;
