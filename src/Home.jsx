import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Link } from 'react-router-dom';

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    anime.timeline({
      easing: 'easeOutExpo',
    })
    .add({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1200,
    })
    .add({
      targets: subtitleRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
    }, '-=800')
    .add({
      targets: buttonRef.current,
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 800,
    }, '-=600');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 
        ref={titleRef} 
        className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 opacity-0"
      >
        Welcome to <span className="text-blue-600">YASDA</span>
      </h1>
      
      <p 
        ref={subtitleRef}
        className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10 opacity-0"
      >
        We build beautiful, dynamic web experiences using modern technologies.
      </p>
      
      <div 
        ref={buttonRef}
        className="opacity-0"
      >
        <Link 
          to="/services" 
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  );
};

export default Home;
