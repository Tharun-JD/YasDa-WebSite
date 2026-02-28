import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    anime({
      targets: contentRef.current.children,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(200),
      easing: 'easeOutQuad'
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div ref={contentRef} className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 border-b-4 border-blue-600 inline-block pb-2 opacity-0">
          About Us
        </h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 opacity-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            YASDA was founded with a simple mission: to create exceptional digital experiences 
            that help businesses grow. We believe in the power of great design combined with 
            flawless engineering.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our team of expert developers and designers work collaboratively to bring your 
            ideas to life, ensuring every project we undertake is built with scalability, 
            performance, and user experience in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0">
          {[
            { title: "Innovation", desc: "Pushing boundaries with modern tech." },
            { title: "Quality", desc: "Delivering excellence in every line of code." },
            { title: "Partnership", desc: "Working with you, not just for you." }
          ].map((value, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-700 mb-2">{value.title}</h3>
              <p className="text-blue-900/70">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
