import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/Main" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
