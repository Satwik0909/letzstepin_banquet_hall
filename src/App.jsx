import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Booking from './pages/Booking'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Services from './pages/Services'
import './styles/globals.css'; // Update this line

export default function App() {
  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}