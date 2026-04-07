import React from 'react';
import logoIcon from '../assets/logo1.png';

const LogoAnimation = () => {
    return (
        <div className="flex flex-col items-center relative z-10 text-center">
            <div className="opacity-0 scale-75 animate-cinematic">
                <img
                    src={logoIcon}
<<<<<<< HEAD
                    alt="YASDA SYSTEMS Logo"
=======
                    alt="Yasda Software Logo"
>>>>>>> origin/main
                    className="w-[min(78vw,520px)] h-auto object-contain glow-cyan animate-logo-pulse"
                />
            </div>
        </div>
    );
};

export default LogoAnimation;
