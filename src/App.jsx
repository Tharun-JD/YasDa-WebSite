import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ParticleField from './components/ParticleField';
import NoiseOverlay from './components/NoiseOverlay';
import Preloader from './components/Preloader';

import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Client from './Client';
import Contact from './Contact';

import './index.css';

function App() {
  const [loading, setLoading] = useState(() => 
    sessionStorage.getItem('yasda_visited') ? null : 'initial'
  );

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('yasda_visited', 'true');
    setLoading(null);
  };

  const triggerPreloader = (mode = 'nav') => {
    setLoading(mode);
  };

  return (
    <Router>
      <div className="relative flex flex-col min-h-screen text-slate-100 bg-gray-950 selection:bg-cyan-400/30 selection:text-white overflow-x-hidden">
        {loading && (
          <Preloader 
            onComplete={handlePreloaderComplete} 
            mode={loading} 
          />
        )}
        
        {!loading && (
          <div className="relative isolate min-h-screen">
            <NoiseOverlay />
            <div className="fixed inset-0 z-0"><ParticleField /></div>
            
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar onNavClick={triggerPreloader} />
              <main className="grow">
                <Routes>
                  <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                  <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                  <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                  <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
                  <Route path="/client" element={<PageTransition><Client /></PageTransition>} />
                  <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;