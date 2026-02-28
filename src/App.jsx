import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ParticleField from './components/ParticleField';
import NoiseOverlay from './components/NoiseOverlay';

import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Protfolio';
import Client from './Client';
import Contact from './Contact';

import './index.css';

function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen text-slate-100 bg-gray-950 selection:bg-cyan-400/30 selection:text-white">
        <NoiseOverlay />
        <ParticleField />
        <Navbar />
        <main className="grow relative z-10">
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
    </Router>
  );
}

export default App;