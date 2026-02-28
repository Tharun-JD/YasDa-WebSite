import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const GlowCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    glowRef.current.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, rgba(34, 211, 238, 0.15), transparent)`;
  };

  const handleMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.background = 'transparent';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10" />
      {children}
    </div>
  );
};

export default GlowCard;
