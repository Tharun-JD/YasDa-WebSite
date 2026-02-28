import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import anime from 'animejs';

const PageTransition = ({ children }) => {
  const nodeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    anime({
      targets: nodeRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, [location.pathname]);

  return (
    <div ref={nodeRef} className="w-full h-full">
      {children}
    </div>
  );
};

export default PageTransition;
