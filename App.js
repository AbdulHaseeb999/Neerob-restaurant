import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'; 
import Aboutus from './components/AboutPlantFood.js';
function App() {
  return (
    <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/about"element={<Aboutus />} />
                    <Route path="/" element={<div>About Us</div>} />
                    <Route path="/Menu"element={<Menu />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;