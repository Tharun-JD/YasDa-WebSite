import React, { useEffect, useState, useRef } from 'react';
import anime from 'animejs';
import logoIcon from '../assets/logo1.png';

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState(1); // 1: Powering Y, 2: Synthesis YASD, 3: Exit
  const [progress, setProgress] = useState(0);
  const heroRef = useRef(null);
  const floorRef = useRef(null);

  useEffect(() => {
    // Phase 1: Powering up 'Y' (Balanced duration)
    const timer1 = setTimeout(() => setPhase(2), 2200);
    // Phase 2: Show Full Name (2.8s visibility)
    const timer2 = setTimeout(() => setPhase(3), 5000);

    // Progress bar: 0→100 over 6000ms; triggers onComplete at 100%
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 100);
          return 100;
        }
        return prev + 1;
      });
    }, 60);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center overflow-hidden ${phase === 3 ? 'exit-wipe' : ''}`}>
      {/* Background Tech Noise */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      
      {/* Central Sequence */}
      <div className="relative flex flex-col items-center w-full max-w-4xl px-6">
        {phase === 1 && (
          <div className="flex flex-col items-center relative z-10 text-center">
            {/* Intro Logo (logo1.png) */}
            <div
              className="opacity-0 scale-75"
              style={{
                animation:
                  'cinematic-entrance 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards'
              }}
            >
              <img
                src={logoIcon}
                alt="Yasda Software Logo"
                className="w-[48vw] max-w-[280px] h-auto object-contain filter brightness-125 glow-cyan"
                style={{ animation: 'logo-pulse 2s ease-in-out infinite' }}
              />
            </div>
          </div>
        )}

        {phase >= 2 && phase < 3 && (
          <div className="flex flex-col items-center text-center relative z-10 min-h-[300px] justify-center">
            {/* Background Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-30 animate-pulse-slow">
              <img src={logoIcon} alt="" className="w-full max-w-lg object-contain filter contrast-125 blur-sm" />
            </div>

            <div className="relative">
              <h1 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter text-white animate-glitch-reveal">
                YASDA <span className="text-cyan-400">SOFTWARE</span>
              </h1>
              <div className="h-px w-full bg-cyan-400/30 mt-6 animate-scale-x" />
              <p className="mt-6 text-gray-400 font-bold uppercase tracking-[0.5em] text-xs">
                <span className="text-cyan-400/80">"INNOVATION</span> IS OUR DEFAULT SETTING"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Percentage — absolute bottom center */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <span className="text-xs font-black text-cyan-400/60 tracking-widest tabular-nums">
          {progress}%
        </span>
      </div>

      <style jsx>{`
        @keyframes logo-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }
        @keyframes animate-scale-x {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        .glow-cyan {
          filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.6));
        }
      `}</style>
    </div>
  );
};

export default Preloader;
