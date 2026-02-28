import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import anime from 'animejs';

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative px-6 py-2 text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 ${
          isActive ? 'text-black bg-cyan-400' : 'text-white hover:text-cyan-400'
        }`
      }
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
    </NavLink>
  );
};

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    anime({
      targets: navRef.current,
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutExpo',
      delay: 500
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-black/95 border-cyan-400/30 py-2 backdrop-blur-md' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Industrial Style */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-10 h-10 bg-black border-2 border-white flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                <span className="text-white font-black text-xl group-hover:text-cyan-400 transition-colors">Y</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 border-2 border-cyan-400/30 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xs tracking-[0.3em] uppercase leading-none">YASDA</span>
              <span className="text-cyan-400 font-bold text-[8px] tracking-[0.5em] uppercase mt-1">SOFTWARE</span>
            </div>
          </Link>

          {/* Desktop Nav - Split/Blocky */}
          <div className="hidden lg:flex items-center border border-white/10 p-1 bg-black/40 backdrop-blur-sm">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>
            <NavItem to="/client">Clients</NavItem>
            <div className="h-4 w-[1px] bg-white/20 mx-2" />
            <Link to="/contact" className="px-6 py-2 bg-white text-black text-xs font-black tracking-[0.2em] uppercase hover:bg-cyan-400 transition-colors">
              Connect
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1 border border-white/20 hover:border-cyan-400 transition-colors"
          >
            <div className={`h-[2px] bg-white transition-all ${mobileOpen ? 'w-6 rotate-45 translate-y-1.5' : 'w-6'}`} />
            <div className={`h-[2px] bg-white transition-all ${mobileOpen ? 'w-0 opacity-0' : 'w-4 ml-auto'}`} />
            <div className={`h-[2px] bg-white transition-all ${mobileOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-6'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Industrial Slide */}
      <div
        className={`lg:hidden fixed inset-0 top-[inherit] bg-black z-40 transition-all duration-700 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-10 space-y-8">
          {[
            { to: '/', label: 'HOME' },
            { to: '/about', label: 'ABOUT' },
            { to: '/services', label: 'SERVICES' },
            { to: '/portfolio', label: 'PORTFOLIO' },
            { to: '/client', label: 'CLIENTS' },
            { to: '/contact', label: 'CONNECT' }
          ].map((item, idx) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-4xl md:text-6xl font-black tracking-tighter italic uppercase transition-all duration-500 ${
                  isActive ? 'text-cyan-400 translate-x-4' : 'text-white/20 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
