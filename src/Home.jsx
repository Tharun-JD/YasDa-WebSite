import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import CountUp from './components/CountUp';
import GlowCard from './components/GlowCard';

const SkillBar = ({ name, percentage, description, isVisible, delay }) => {
  const barRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      anime({
        targets: barRef.current,
        width: [0, `${percentage}%`],
        duration: 2000,
        delay: delay,
        easing: 'easeOutQuart'
      });
    }
  }, [isVisible, percentage, delay]);

  return (
    <div className="group relative py-8 border-b border-white/5 last:border-0 overflow-hidden">
      <div className="flex justify-between items-end mb-4 relative z-10">
        <h4 className="text-white font-black text-2xl tracking-tighter uppercase italic drop-shadow-lg">{name}</h4>
        <span className="text-cyan-400 font-black text-4xl italic opacity-30 group-hover:opacity-100 transition-opacity">{percentage}%</span>
      </div>
      <div className="h-1 bg-white/5 relative overflow-hidden">
        <div 
          ref={barRef}
          className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          style={{ width: 0 }}
        />
      </div>
      <p className="mt-4 text-gray-500 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
  );
};

const Home = () => {
  const heroRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [aboutVisible, setAboutVisible] = useState(false);

  // Typing effect
  useEffect(() => {
    const words = ['ENGINEERING INFRASTRUCTURE', 'AUTONOMOUS SYSTEMS', 'HYPER-SCALE DEVOPS', 'SaaS ARCHITECTURE'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentWord = words[wordIndex];
      setTypedText(isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1));
      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

      let speed = isDeleting ? 40 : 80;
      if (!isDeleting && charIndex === currentWord.length) {
        speed = 2500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
      }
      timeout = setTimeout(type, speed);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  // Kinetic Hero Animation
  useEffect(() => {
    const tl = anime.timeline({ easing: 'easeOutExpo' });

    tl.add({
      targets: '.hero-bg-text',
      translateX: ['100%', '0%'],
      opacity: [0, 0.03],
      duration: 3000,
    })
    .add({
      targets: [title1Ref.current, title2Ref.current],
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1500,
      delay: anime.stagger(200)
    }, '-=2500')
    .add({
      targets: '.hero-line',
      scaleX: [0, 1],
      duration: 1000,
    }, '-=2000')
    .add({
      targets: '.hero-cta',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
    }, '-=1500');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;
      
      anime({
        targets: '.hero-interactive',
        translateX: xPos,
        translateY: yPos,
        duration: 1000,
        easing: 'easeOutQuad'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for snappier reveals
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'about-section') setAboutVisible(true);
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.observe-section').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Mission-Critical Systems", percentage: 95, description: "Architecting hardened backends capable of processing millions of requests with zero-fail tolerance." },
    { name: "Autonomous Workflows", percentage: 92, description: "Engineering self-healing CI/CD pipelines and industrialized automation logic for high-impact sectors." },
    { name: "Neural Vision Systems", percentage: 88, description: "Deploying edge-computing AI models for real-time industrial inspection and predictive maintenance." },
    { name: "Distributed Infrastructure", percentage: 98, description: "Global scale orchestration across AWS, Azure, and private Proxmox clusters with 99.99% uptime." }
  ];

  return (
    <div className="bg-black text-white overflow-hidden selection:bg-cyan-400 selection:text-black">
      {/* Hero Section - Kinetic Brutalism */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden">
        {/* Kinetic Background Text */}
        <div className="hero-bg-text absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-black text-white/5 pointer-events-none uppercase italic leading-none whitespace-nowrap overflow-hidden">
          YASDA YASDA YASDA
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="hero-line w-32 h-2 bg-cyan-400 mb-12 origin-left" />
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8] mb-12">
            <div ref={title1Ref} className="opacity-0 overflow-hidden">ARCHITECTING</div>
            <div ref={title2Ref} className="opacity-0 overflow-hidden text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">THE ENGINE.</div>
          </h1>

          <div className="flex flex-col md:flex-row items-end gap-12 hero-cta opacity-0">
            <div className="flex-1">
              <p className="text-xl md:text-2xl text-gray-400 max-w-xl font-bold uppercase tracking-widest leading-relaxed">
                WE ENGINEER THE <span className="text-white border-b-2 border-white">{typedText}</span> OF TOMORROW.
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/services" className="group relative px-12 py-6 bg-white text-black font-black uppercase tracking-tighter overflow-hidden">
                <span className="relative z-10">INITIATE DISCOVERY</span>
                <div className="absolute inset-x-0 bottom-0 h-0 bg-cyan-400 group-hover:h-full transition-all duration-300 -z-0" />
              </Link>
            </div>
          </div>
        </div>

        {/* Industrial Decorations */}
        <div className="absolute bottom-20 left-20 hidden lg:block hero-interactive">
          {/* <div className="text-[10px] font-black tracking-[1em] text-white/20 uppercase vertical-text">STATION: YASDA_HQ / ACTIVE</div> */}
        </div>
      </section>

      {/* About Section - Asymmetric Grid */}
      <section id="about-section" className="py-24 md:py-48 px-6 observe-section relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-1 hidden lg:block">
               <div className="h-64 w-1 bg-cyan-400/20 sticky top-40 mx-auto" />
            </div>
            
            <div className="lg:col-span-5 reveal-left">
              <span className="text-cyan-400 font-black text-xs tracking-[0.5em] uppercase mb-8 block">01 / GENESIS</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none">
                TECHNICAL <br /> <span className="text-cyan-400">BRUTALISM.</span>
              </h2>
              <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
                <p>
                  <b className='text-cyan-400 font-extrabold text-xl tracking-wider animate-pulse'>YASDA SOFTWARE</b> is an elite engineering collective forged in 2021. We eliminate the noise of modern software delivery, focusing on pure, high-performance digital infrastructure.
                </p>
                <p>
                  Our DNA is built on <strong className="text-white">Radical Reliability</strong>—where mission-critical resilience is the baseline, and extraordinary precision is the result.
                </p>
                <Link to="/about" className="inline-block mt-8 py-4 border-b-2 border-cyan-400 text-white font-black tracking-widest hover:text-cyan-400 transition-colors uppercase italic">
                  DECODE OUR MISSION
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:pl-12 reveal-right">
              <div className="bg-white/5 border border-white/10 p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-12 tracking-widest">Engineering Capabilities</h3>
                <div className="grid gap-2">
                  {skills.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} isVisible={aboutVisible} delay={i * 200} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Grid of Power */}
      <section className="py-24 bg-white text-black observe-section relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.7] reveal-left">
              OUR <br /> VERTICALS<span className="text-cyan-500">.</span>
            </h2>
            <p className="text-xl max-w-sm font-bold uppercase tracking-tight reveal-right">
              Hardened engineering solutions for the most demanding digital environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10">
            {[
              { icon: "01", title: "Enterprise Forge", desc: "Forging mission-critical ERP and SaaS backbones for global industry leaders." },
              { icon: "02", title: "Cloud Dominance", desc: "Absolute orchestration and redundancy across multi-cloud and bare-metal clusters." },
              { icon: "03", title: "Industrial AI", desc: "Integrating neural inspection models into 18+ precision manufacturing machines." },
              { icon: "04", title: "DevOps Ops", desc: "Deploying autonomous delivery pipelines with 99.99% system availability." }
            ].map((s, i) => (
              <div key={s.title} className="p-12 border-r border-b border-black/10 hover:bg-cyan-400 group transition-all duration-500 reveal-scale">
                <div className="text-4xl font-black mb-8 opacity-20 group-hover:opacity-100 transition-opacity">{s.icon}</div>
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tighter">{s.title}</h3>
                <p className="text-gray-600 font-bold text-sm tracking-tight leading-relaxed group-hover:text-black transition-colors">{s.desc}</p>
                <div className="mt-12 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Link to="/services" className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black">Explore</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Brutalist Metrics */}
      <section className="py-32 bg-black border-y border-white/10 px-6 observe-section overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          {[
            { end: 50, label: "PLATFORMS FORGED", suffix: "+" },
            { end: 120, label: "NODES MANAGED", suffix: "" },
            { end: 99.99, label: "UPTIME RECORD", suffix: "%" },
            { end: 18, label: "MACHINES SYNCED", suffix: "+" }
          ].map((stat, i) => (
            <div key={stat.label} className="text-center md:text-left reveal-scale group">
              <div className="text-8xl md:text-9xl font-black italic tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-cyan-400/40 text-xs font-black tracking-[0.5em] uppercase mt-4 group-hover:text-white transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Final Impact */}
      <section className="py-48 px-6 observe-section">
        <div className="max-w-5xl mx-auto text-center reveal-scale">
          <h2 className="text-6xl md:text-[10vw] font-black uppercase italic tracking-tighter leading-[0.8] mb-16">
            READY TO <br /> <span className="text-cyan-400 animate-pulse-glow">REACH ALPHA?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
             <Link to="/contact" className="px-16 py-8 bg-cyan-400 text-black font-black uppercase tracking-tighter text-xl hover:scale-105 transition-transform">
               INITIATE MISSION
             </Link>
             <Link to="/portfolio" className="px-16 py-8 border-2 border-white text-white font-black uppercase tracking-tighter text-xl hover:bg-white hover:text-black transition-all">
               REVIEW ASSETS
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

