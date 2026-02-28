import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import anime from 'animejs';

const NavItem = ({ to, children }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    const link = linkRef.current;
    
    const handleMouseEnter = () => {
      anime({
        targets: link,
        scale: 1.1,
        color: '#60a5fa', // Tailwind blue-400
        duration: 300,
        easing: 'easeOutElastic(1, .8)'
      });
    };

    const handleMouseLeave = () => {
      anime({
        targets: link,
        scale: 1,
        color: '#ffffff',
        duration: 300,
        easing: 'easeOutQuad'
      });
    };

    link.addEventListener('mouseenter', handleMouseEnter);
    link.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      link.removeEventListener('mouseenter', handleMouseEnter);
      link.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <NavLink
      to={to}
      ref={linkRef}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md transition-colors duration-200 ${
          isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl tracking-wider">YASDA</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/services">Services</NavItem>
              <NavItem to="/portfolio">Portfolio</NavItem>
              <NavItem to="/client">Client</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
