import React, { useRef, useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import anime from 'animejs';
import logoIcon from '../assets/logo1.png';

const NavItem = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
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

const Navbar = ({ onNavClick }) => {
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

  const handleNavClick = (mode = 'nav') => {
    if (onNavClick) onNavClick(mode);
    setMobileOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-black/95 border-cyan-400/30 py-2 backdrop-blur-md' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Industrial Icon + Text Style */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => handleNavClick('nav-home')}>
            <img src={logoIcon} alt="YASDA Icon" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-white font-black text-xl tracking-[0.2em] uppercase leading-none group-hover:text-cyan-400 transition-colors">YASDA</span>
              <span className="text-cyan-400 font-bold text-[9px] tracking-[0.6em] uppercase mt-1 opacity-80">SOFTWARE</span>
            </div>
          </Link>

          {/* Desktop Nav - Split/Blocky */}
          <div className="hidden lg:flex items-center border border-white/10 p-1 bg-black/40 backdrop-blur-sm">
            <NavItem to="/" onClick={() => handleNavClick('initial')}>Home</NavItem>
            <NavItem to="/about" onClick={() => handleNavClick('nav-about')}>About</NavItem>
            <NavItem to="/services" onClick={() => handleNavClick('nav-services')}>Services</NavItem>
            <NavItem to="/portfolio" onClick={() => handleNavClick('nav-portfolio')}>Portfolio</NavItem>
            <NavItem to="/client" onClick={() => handleNavClick('nav-client')}>Clients</NavItem>
            <div className="h-4 w-px bg-white/20 mx-2" />
            <Link to="/contact" onClick={() => handleNavClick('nav-contact')} className="px-6 py-2 bg-white text-black text-xs font-black tracking-[0.2em] uppercase hover:bg-cyan-400 transition-colors">
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
            { to: '/', label: 'HOME', mode: 'initial' },
            { to: '/about', label: 'ABOUT', mode: 'nav-about' },
            { to: '/services', label: 'SERVICES', mode: 'nav-services' },
            { to: '/portfolio', label: 'PORTFOLIO', mode: 'nav-portfolio' },
            { to: '/client', label: 'CLIENTS', mode: 'nav-client' },
            { to: '/contact', label: 'CONNECT', mode: 'nav-contact' }
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => handleNavClick(item.mode)}
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
