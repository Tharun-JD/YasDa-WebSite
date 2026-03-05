import React, { useEffect, useState, useRef } from 'react';
import logoIcon from '../assets/logo1.png';
import LogoAnimation from './LogoAnimation';
import NameReveal from './NameReveal';

const Preloader = ({ onComplete, mode }) => {
  const isNav = mode && mode.startsWith('nav-');
  const [phase, setPhase] = useState(isNav ? 2 : 1); // 1: Powering Y, 2: Synthesis, 3: Exit
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer1, timer2;

    if (isNav) {
      // Nav mode: Skip phase 1, show phase 2 for 2.5s
      timer2 = setTimeout(() => setPhase(3), 2500);
    } else {
      // Initial mode: Full sequence
      timer1 = setTimeout(() => setPhase(2), 2200);
      timer2 = setTimeout(() => setPhase(3), 5000);
    }

    const intervalDuration = isNav ? 25 : 60;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 100);
          return 100;
        }
        return prev + 1;
      });
    }, intervalDuration);

    return () => {
      if (timer1) clearTimeout(timer1);
      if (timer2) clearTimeout(timer2);
      clearInterval(interval);
    };
  }, [onComplete, isNav]);

  // Route-specific Content Configuration
  const getContent = () => {
    switch (mode) {
      case 'nav-home': return { text: "YASDA SOFTWARE", accent: "text-cyan-400", overlay: "default-grid" };
      case 'nav-about': return { text: "ABOUT", accent: "text-cyan-400", overlay: "about-scan" };
      case 'nav-services': return { text: "SERVICES", accent: "text-blue-500", overlay: "matrix-rain" };
      case 'nav-portfolio': return { text: "PORTFOLIO", accent: "text-white", overlay: "lens-shutter" };
      case 'nav-client': return { text: "CLIENTS", accent: "text-cyan-300", overlay: "star-field" };
      case 'nav-contact': return { text: "CONNECT", accent: "text-cyan-500", overlay: "wave-pulse" };
      default: return { text: "YASDA SOFTWARE", accent: "text-cyan-400", overlay: "default-grid" };
    }
  };

  const config = getContent();

  return (
    <div className={`fixed inset-0 z-1000 bg-black flex flex-col items-center justify-center border-x-8 border-cyan-400/20 overflow-hidden ${phase === 3 ? 'exit-wipe' : ''}`}>
      {/* Route-Specific Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {config.overlay === 'about-scan' && (
          <div className="absolute inset-0 bg-cyan-400/5">
            <div className="absolute top-0 left-0 w-full h-px bg-cyan-400 animate-scanning-laser" />
            <div className="absolute inset-0 grid grid-cols-12 opacity-10">
              {[...Array(12)].map((_, i) => <div key={i} className="border-r border-cyan-400/30 h-full" />)}
            </div>
          </div>
        )}
        {config.overlay === 'matrix-rain' && (
          <div className="absolute inset-0 matrix-container opacity-20">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="matrix-column text-cyan-500 text-[10px] font-mono leading-none flex flex-col" style={{ left: `${i * 10}%`, animationDelay: `${i * 0.5}s` }}>
                {"010101011100101".split("").map((c, j) => <span key={j}>{c}</span>)}
              </div>
            ))}
          </div>
        )}
        {config.overlay === 'lens-shutter' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 border border-white/20 rounded-full animate-ping opacity-20" />
            <div className="w-64 h-64 border-4 border-white/10 rounded-full animate-spin-slow" />
          </div>
        )}
        {config.overlay === 'wave-pulse' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-1 h-32 items-center">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1 bg-cyan-400 animate-waveform" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        )}
        {config.overlay === 'star-field' && (
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="absolute bg-white rounded-full animate-twinkle" style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animationDelay: `${Math.random() * 2}s`
              }} />
            ))}
          </div>
        )}
        <div className="absolute inset-0 cyber-grid-overlay opacity-20" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center w-full px-6">
        {/* Phase 1: Pure Logo Entrance */}
        {phase === 1 && (
          <LogoAnimation />
        )}

        {/* Phase 2: Reveal Company Name with logo in background */}
        {phase >= 2 && phase < 3 && (
          <div className="flex flex-col items-center text-center relative z-10 w-full justify-center max-w-5xl mx-auto">
            {/* Cinematic Background Logo - Refined Visibility */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-40 pointer-events-none overflow-hidden">
              <img
                src={logoIcon}
                alt=""
                className="h-[38vh] max-h-[280px] mb-2 w-auto max-w-[100vw] md:max-w-[85vw] object-contain filter blur-xs animate-pulse-glow"
              />
            </div>

            <div className={`relative w-full max-w-7xl px-2 sm:px-4 flex flex-col items-center`}>
              <NameReveal config={config} mode={mode} progress={progress} />

              <p className="mt-30 text-white/10 font-bold uppercase tracking-[1em] text-[8px]">
                YASDA INDUSTRIAL OPERATING SYSTEM v2.0
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse-logo-bg {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.35; filter: blur(4px) brightness(1.1); }
          50% { transform: scale(1.05) rotate(0.5deg); opacity: 0.6; filter: blur(2px) brightness(1.4); }
        }
        .animate-pulse-slow { animation: pulse-logo-bg 6s ease-in-out infinite; }

        @keyframes logo-pulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.4)); opacity: 1; }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 50px rgba(34, 211, 238, 0.8)); opacity: 0.9; }
        }
        .animate-logo-pulse { animation: logo-pulse 3s ease-in-out infinite; }

        @keyframes clean-fade-in {
          from { opacity: 0; transform: translateY(10px); filter: blur(5px); }
          to { opacity: 0.8; transform: translateY(0); filter: blur(0); }
        }
        .animate-clean-fade-in { animation: clean-fade-in 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }

        .glow-cyan { filter: drop-shadow(0 0 40px rgba(34, 211, 238, 0.4)); }
      `}</style>
    </div>
  );
};

export default Preloader;
