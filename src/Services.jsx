import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.service-card',
      scale: [0.9, 1],
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(150),
      duration: 800,
      easing: 'easeOutElastic(1, .8)'
    });
  }, []);

  const servicesList = [
    { title: "Web Development", desc: "Custom, responsive websites built with modern frameworks like React and Vue.", icon: "💻" },
    { title: "UI/UX Design", desc: "Beautiful, intuitive user interfaces that engage your audience.", icon: "🎨" },
    { title: "Mobile Apps", desc: "Cross-platform mobile applications for iOS and Android.", icon: "📱" },
    { title: "SEO Optimization", desc: "Boost your visibility and rank higher on search engines.", icon: "🚀" },
    { title: "Cloud Hosting", desc: "Secure and scalable cloud infrastructure solutions.", icon: "☁️" },
    { title: "E-Commerce", desc: "Robust online stores with seamless payment integrations.", icon: "🛒" }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Our Services
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Comprehensive digital solutions tailored to your needs.
        </p>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            className="service-card opacity-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-50 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
