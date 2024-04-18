import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About/About';
import Technology from '../pages/Technology/Technology';
import Project from '../pages/Project/Project';
import Contact from '../pages/Contact/Contact';


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/technology' element={<Technology />} />
                <Route path='/project' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
};


export default AppRoutes
