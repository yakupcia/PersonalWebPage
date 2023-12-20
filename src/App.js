import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 

//pages
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//styles
import './App.css'

import AnimCursor from './components/AnimCursor';



function App() {
  return (
    <div className='Container'>
    <Router>
      <AnimCursor />
      <Navbar />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
