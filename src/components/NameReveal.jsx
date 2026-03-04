import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const NameReveal = ({ config, mode, progress }) => {
    const containerRef = useRef(null);
    const isInitialBrand = mode === 'initial' || mode === 'nav-home' || !mode;
    const text = config?.text || "YASDA SOFTWARE";
    const words = text.split(" ");

    useEffect(() => {
        // Reset opacity before animation
        const letters = containerRef.current.querySelectorAll('.letter');
        anime.set(letters, { opacity: 0, translateY: 20, scale: 0.9 });

        anime({
            targets: letters,
            opacity: [0, 1],
            translateY: [20, 0],
            scale: [0.9, 1],
            delay: anime.stagger(40, { start: 300 }),
            duration: 1000,
            easing: 'easeOutExpo'
        });
    }, [text]);

    return (
        <div ref={containerRef} className="flex flex-col items-center justify-center w-full mt-4">
            <div className="w-full flex justify-center mb-2 px-2">
                <h1 className="w-full text-center whitespace-nowrap leading-[0.86] font-black italic uppercase tracking-[-0.035em] text-[clamp(1.6rem,8.1vw,7rem)] flex flex-wrap justify-center gap-x-[0.2em]">
                    {words.map((word, wIdx) => (
                        <span key={wIdx} className="inline-block whitespace-nowrap">
                            {word.split("").map((char, cIdx) => (
                                <span
                                    key={cIdx}
                                    className="letter inline-block text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
                                    style={{
                                        color: (words.length > 1 && wIdx === 1) || (words.length === 1 && isInitialBrand) ? '#22d3ee' : 'white',
                                        opacity: 0 // Initial state for anime.js
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </h1>
            </div>

            {/* Minimalist Line Load Bar */}
            <div className="w-full max-w-[80vw] md:max-w-[50vw] h-px bg-white/10 relative overflow-hidden mt-8 mx-auto">
                <div
                    className="absolute inset-y-0 left-0 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Tagline */}
            {isInitialBrand && (
                <div className="mt-6 overflow-hidden">
                    <p className="tagline text-[9px] md:text-[12px] font-black tracking-[0.5em] text-cyan-400/60 uppercase animate-clean-fade-in" style={{ animationDelay: '1.2s' }}>
                        " INNOVATION IS OUR DEFAULT SETTING "
                    </p>
                </div>
            )}
        </div>
    );
};

export default NameReveal;
