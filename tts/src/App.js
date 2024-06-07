import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';
import RegisterPage from './page/RegisterPage';
import ScenarioInputPage from './page/ScenarioInputPage';
import ScenarioPage from './page/ScenarioPage';
import EmotionPage from './page/EmotionPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/Main" element={<MainPage />} />
                    <Route path="/Register" element={<RegisterPage />} />
                    <Route path="/ScenarioInput" element={<ScenarioInputPage />} />
                    <Route path="/Scenario" element={<ScenarioPage />} />
                    <Route path="/Emotion" element={<EmotionPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
// 박지영
