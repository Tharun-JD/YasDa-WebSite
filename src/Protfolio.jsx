import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Portfolio = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.portfolio-item',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(200, {start: 300}),
      duration: 1000,
      easing: 'easeOutExpo'
    });
  }, []);

  const projects = [
    { title: "E-Commerce Platform", category: "Web Dev", image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { title: "Financial Dashboard", category: "UI/UX", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { title: "Health Tracker App", category: "Mobile Dev", image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { title: "Corporate Branding", category: "Design", image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { title: "AI Analytics Tool", category: "Web Dev", image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { title: "Social Media Campaign", category: "Marketing", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Our Work
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          A selection of our recent projects.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="portfolio-item opacity-0 group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-video"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-blue-400 font-medium text-sm mb-2">{project.category}</span>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
