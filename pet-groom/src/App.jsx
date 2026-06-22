import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FrontPage from './Components/FrontPage';
import AboutUs from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';
import Gallery from './Components/Pages/Gallery';
import Blog from './Components/Pages/Blog';
import Post1 from './Components/Posts/Post1';
import Post2 from './Components/Posts/Post2';
import Post3 from './Components/Posts/Post3';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><FrontPage /><Footer /></>} />
        <Route path="/aboutus" element={<><Navbar /><AboutUs /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
        <Route path="/gallery" element={<><Navbar /><Gallery /><Footer /></>} />
        <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
        <Route path="/post1" element={<><Navbar /><Post1 /><Footer /></>} />
        <Route path="/post2" element={<><Navbar /><Post2 /><Footer /></>} />
        <Route path="/post3" element={<><Navbar /><Post3 /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
      </Routes>
    </Router>
  );
}