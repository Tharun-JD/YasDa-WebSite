import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import anime from 'animejs';

const PageTransition = ({ children }) => {
  const nodeRef = useRef(null);
  const overlayRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    const tl = anime.timeline({ easing: 'easeOutExpo' });

    // Overlay wipe in then out
    tl.add({
      targets: overlayRef.current,
      scaleY: [0, 1],
      transformOrigin: ['50% 100%', '50% 100%'],
      duration: 400,
      easing: 'easeInOutQuart',
    })
    .add({
      targets: overlayRef.current,
      scaleY: [1, 0],
      transformOrigin: ['50% 0%', '50% 0%'],
      duration: 400,
      easing: 'easeInOutQuart',
    })
    .add({
      targets: nodeRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 600,
    }, '-=300');
  }, [location.pathname]);

  return (
    <div className="relative w-full h-full">
      {/* Transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-cyan-400/10 z-[100] pointer-events-none"
        style={{ transform: 'scaleY(0)' }}
      />
      <div ref={nodeRef} className="w-full h-full opacity-0">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
