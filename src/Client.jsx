import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Client = () => {
  const listRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.client-logo',
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutBack'
    });
  }, []);

  const clients = [
    { name: "Acme Corp", logo: "🚀" },
    { name: "GlobalTech", logo: "🌐" },
    { name: "Nexus Innovations", logo: "💡" },
    { name: "Vertex Solutions", logo: "⚡" },
    { name: "Pioneer Group", logo: "⭐" },
    { name: "Quantum Data", logo: "📊" },
    { name: "Apex Dynamics", logo: "🏔️" },
    { name: "Horizon Ventures", logo: "🌅" }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Our Trusted Clients
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          We've had the pleasure of working with some of the most innovative companies around the world.
        </p>
      </div>

      <div ref={listRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className="client-logo opacity-0 bg-white w-40 h-40 rounded-full shadow-md flex flex-col items-center justify-center p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer grayscale hover:grayscale-0"
          >
            <span className="text-5xl mb-2">{client.logo}</span>
            <span className="text-sm font-semibold text-gray-700 text-center">{client.name}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-20 bg-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">Ready to start your project?</h3>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join our growing list of satisfied clients and let us help you achieve your digital goals.</p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Client;
