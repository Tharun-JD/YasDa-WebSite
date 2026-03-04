import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

const NameReveal = ({ config, mode, progress }) => {
    const containerRef = useRef(null);
    const isInitialBrand = mode === 'initial' || mode === 'nav-home' || !mode;
    const text = config?.text || 'YASDA SOFTWARE';
    const words = text.split(' ');

    const [displayChars, setDisplayChars] = useState(() =>
        words.map(w => w.split('').map(c => c))
    );
    const [revealed, setRevealed] = useState(false);
    const [scanActive, setScanActive] = useState(false);
    const [lineVisible, setLineVisible] = useState(false);

    useEffect(() => {
        setRevealed(false);
        setScanActive(false);
        setLineVisible(false);
        setDisplayChars(words.map(w =>
            w.split('').map(() => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
        ));

        const scanTimer = setTimeout(() => setScanActive(true), 200);
        const lineTimer = setTimeout(() => {
            setLineVisible(true);
            // Scramble all words together
            words.forEach((word, wIdx) => {
                scrambleThenReveal(wIdx, word, wIdx * 300);
            });
        }, 400);

        return () => {
            clearTimeout(scanTimer);
            clearTimeout(lineTimer);
        };
    }, [text]);

    const scrambleThenReveal = (wordIdx, word, startDelay) => {
        const revealStagger = 70;
        const scrambleInterval = 40;

        word.split('').forEach((finalChar, charIdx) => {
            const revealAt = startDelay + charIdx * revealStagger;
            let elapsed = 0;

            const interval = setInterval(() => {
                elapsed += scrambleInterval;
                if (elapsed < revealAt) {
                    setDisplayChars(prev => {
                        const next = prev.map(w => [...w]);
                        next[wordIdx][charIdx] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
                        return next;
                    });
                } else {
                    setDisplayChars(prev => {
                        const next = prev.map(w => [...w]);
                        next[wordIdx][charIdx] = finalChar;
                        return next;
                    });
                    clearInterval(interval);
                }
            }, scrambleInterval);
        });

        const lastWordIdx = words.length - 1;
        if (wordIdx === lastWordIdx) {
            setTimeout(() => setRevealed(true), startDelay + word.length * revealStagger + 300);
        }
    };

    return (
        <div ref={containerRef} className="flex flex-col items-center justify-center w-full mt-4 relative">

            {/* Horizontal scan line sweep */}
            {scanActive && (
                <div
                    className="absolute left-0 right-0 h-px pointer-events-none z-20"
                    style={{
                        animation: 'name-scan-sweep 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
                        background: '#22d3ee',
                        boxShadow: '0 0 20px 4px rgba(34,211,238,0.7)',
                        top: '50%',
                    }}
                />
            )}

            {/* Single straight line: YASDA SOFTWARE */}
            <div className="w-full flex justify-center px-2 relative">
                <h1
                    className="font-black italic uppercase text-center whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(1.4rem, 7vw, 6.5rem)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        opacity: lineVisible ? 1 : 0,
                        transform: lineVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                        transition: 'opacity 0.5s cubic-bezier(0.19,1,0.22,1), transform 0.6s cubic-bezier(0.19,1,0.22,1)',
                    }}
                >
                    {words.map((word, wIdx) => (
                        <span key={wIdx} className="inline-block relative" style={{ marginRight: wIdx < words.length - 1 ? '0.25em' : 0 }}>
                            {/* Chromatic aberration ghost layers */}
                            {revealed && (
                                <>
                                    <span
                                        className="absolute inset-0 font-black italic uppercase select-none pointer-events-none"
                                        style={{
                                            color: 'rgba(34,211,238,0.25)',
                                            transform: 'translate(-2px, 0)',
                                            filter: 'blur(1px)',
                                            letterSpacing: '-0.03em',
                                        }}
                                    >
                                        {word}
                                    </span>
                                    <span
                                        className="absolute inset-0 font-black italic uppercase select-none pointer-events-none"
                                        style={{
                                            color: 'rgba(255,80,80,0.15)',
                                            transform: 'translate(2px, 0)',
                                            filter: 'blur(1px)',
                                            letterSpacing: '-0.03em',
                                        }}
                                    >
                                        {word}
                                    </span>
                                </>
                            )}

                            {/* Scrambled / revealed letters */}
                            {(displayChars[wIdx] || word.split('')).map((char, cIdx) => (
                                <span
                                    key={cIdx}
                                    className="inline-block"
                                    style={{
                                        color: wIdx === 1 ? '#22d3ee' : 'white',
                                        textShadow: wIdx === 1
                                            ? '0 0 30px rgba(34,211,238,0.9), 0 0 60px rgba(34,211,238,0.5)'
                                            : '0 0 20px rgba(255,255,255,0.3)',
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </h1>
            </div>

            {/* Progress bar */}
            <div className="relative w-full mt-8 mx-auto overflow-hidden" style={{ maxWidth: 'min(80vw, 500px)' }}>
                <div className="h-px w-full relative" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <div
                        className="absolute inset-y-0 left-0 transition-all duration-300 ease-out"
                        style={{
                            width: progress + '%',
                            background: '#22d3ee',
                            boxShadow: '0 0 15px rgba(34,211,238,0.8)',
                        }}
                    />
                    {[20, 40, 60, 80].map(pct => (
                        <div
                            key={pct}
                            className="absolute top-0 w-px h-2 -translate-y-1/2"
                            style={{
                                left: pct + '%',
                                background: 'rgba(34,211,238,0.4)',
                                opacity: progress >= pct ? 1 : 0,
                                transition: 'opacity 0.3s',
                            }}
                        />
                    ))}
                </div>
                <div className="flex justify-between mt-1">
                    <span style={{ fontSize: '8px', fontFamily: 'monospace', color: 'rgba(34,211,238,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>INIT</span>
                    <span style={{ fontSize: '8px', fontFamily: 'monospace', color: 'rgba(34,211,238,0.6)', letterSpacing: '0.2em' }}>{progress}%</span>
                    <span style={{ fontSize: '8px', fontFamily: 'monospace', color: 'rgba(34,211,238,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>READY</span>
                </div>
            </div>

            {/* Tagline */}
            {isInitialBrand && (
                <div className="mt-6 overflow-hidden">
                    <p
                        style={{
                            fontSize: '10px',
                            fontWeight: 900,
                            letterSpacing: '0.5em',
                            color: 'rgba(34,211,238,0.6)',
                            textTransform: 'uppercase',
                            animation: 'tagline-reveal 1.2s cubic-bezier(0.19,1,0.22,1) forwards',
                            animationDelay: '1.6s',
                            opacity: 0,
                            clipPath: 'inset(0 100% 0 0)',
                        }}
                    >
                        &quot; INNOVATION IS OUR DEFAULT SETTING &quot;
                    </p>
                </div>
            )}

            <style>{`
                @keyframes name-scan-sweep {
                    0%   { top: -10%; opacity: 0; }
                    10%  { opacity: 1; }
                    90%  { opacity: 1; }
                    100% { top: 110%; opacity: 0; }
                }
                @keyframes tagline-reveal {
                    0%   { opacity: 0; clip-path: inset(0 100% 0 0); transform: translateY(6px); }
                    100% { opacity: 1; clip-path: inset(0 0% 0 0); transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default NameReveal;
