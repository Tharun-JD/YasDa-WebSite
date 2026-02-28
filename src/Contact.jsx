import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    anime({
      targets: [infoRef.current, formRef.current],
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: anime.stagger(300),
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          We'd love to hear from you. Drop us a line!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div ref={infoRef} className="opacity-0 bg-blue-600 rounded-3xl p-10 text-white shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <p className="text-blue-100 mb-8 max-w-sm">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <span className="text-lg">+1 (234) 567-8910</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <span className="text-lg">hello@yasda.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <span className="text-lg">123 Innovation Drive,<br/>Tech City, TC 10101</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors text-2xl">📱</a>
            <a href="#" className="hover:text-blue-200 transition-colors text-2xl">💼</a>
            <a href="#" className="hover:text-blue-200 transition-colors text-2xl">📸</a>
          </div>
        </div>

        <div ref={formRef} className="opacity-0 bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
