import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from './components/CountUp';
import portfolioNexus from './assets/portfolio_nexus.png';
import portfolioNeural from './assets/portfolio_neural.png';
import portfolioSynergy from './assets/portfolio_synergy.png';
import portfolioBiotek from './assets/portfolio_biotek.png';
import portfolioSynth from './assets/portfolio_synth.png';

const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.observe-section').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const [filter, setFilter] = useState('ALL');
  
  const projects = [
    {
      id: "PROJ-71",
      title: "NEXUS LOGISTICS ENGINE",
      category: "ENTERPRISE",
      desc: "ARCHITECTING A MISSION-CRITICAL ERP BACKBONE CAPABLE OF MANAGING 450+ CROSS-BORDER SHIPPING NODES WITH REAL-TIME TELEMETRY.",
      metrics: ["40% LATENCY REDUCTION", "ZERO DATA LOSS", ".NET CORE / AWS"],
      image: portfolioNexus
    },
    {
      id: "PROJ-12",
      title: "NEURAL INSPECT ALPHA",
      category: "AI",
      desc: "DEPLOYING EDGE-COMPUTING COMPUTER VISION MODELS TO 18 HIGH-PRECISION INDUSTRIAL MACHINES FOR REAL-TIME ANOMALY DETECTION.",
      metrics: ["99.8% ACCURACY", "SUB-10MS INFERENCE", "PYTHON / TENSORFLOW"],
      image: portfolioNeural
    },
    {
      id: "PROJ-09",
      title: "SYNERGY CLOUD DOCK",
      category: "INFRASTRUCTURE",
      desc: "GLOBAL SCALE ORCHESTRATION OF A HYBRID PROXMOX AND AWS ECOSYSTEM FOR A DISTRIBUTED TELEMEDICINE NETWORK.",
      metrics: ["99.99% UPTIME", "400ms GLOBAL SYNC", "TERRAFORM / GO"],
      image: portfolioSynergy
    },
    {
      id: "PROJ-44",
      title: "BIOTEK SECURE PORTAL",
      category: "SaaS",
      desc: "SaaS ENVIRONMENT FOR MULTI-TENANT HEALTHCARE ANALYTICS FEATURING RADICAL DATA ISOLATION AND MILITARY-GRADE ENCRYPTION.",
      metrics: ["HIPAA COMPLIANT", "2M+ RECORDS", "REACT / NODE.JS"],
      image: portfolioBiotek
    },
    {
      id: "PROJ-88",
      title: "SYNTH AUTOMATION HUB",
      category: "INFRASTRUCTURE",
      desc: "INDUSTRIAL-SCALE CI/CD PIPELINES FOR A HARDWARE-HEAVY FIRM, REDUCING DEPLOYMENT FRICTION BY 85%.",
      metrics: ["100+ BUILDS / DAY", "HARDENED SECURITY", "GITHUB ACTIONS"],
      image: portfolioSynth
    }
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.category === filter);

  const handleFilterChange = (f) => {
    // Glitch effect trigger
    document.querySelector('.portfolio-grid').classList.add('glitch-active');
    setTimeout(() => {
      setFilter(f);
      document.querySelector('.portfolio-grid').classList.remove('glitch-active');
    }, 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal-scale').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.observe-section').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-40 selection:bg-cyan-400 selection:text-black">
      {/* Portfolio Hero */}
      <section className="relative py-24 px-6 observe-section mb-20 overflow-hidden">
        {/* Kinetic Background */}
        <div className="absolute top-0 right-0 text-[20vw] font-black text-white/5 italic pointer-events-none uppercase leading-none translate-x-1/4">
          ASSETS
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="reveal-left max-w-4xl">
              <span className="text-cyan-400 font-black text-xs tracking-[1em] uppercase mb-8 block">PROJECTS / DEPLOYMENTS</span>
              <h1 className="text-7xl md:text-[14vw] font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.7]">
                HARDENED <br /> <span className="text-white border-b-20 border-white">OUTPUT.</span>
              </h1>
            </div>
            <p className="text-gray-500 text-xl font-black uppercase italic tracking-tighter max-w-xs reveal-right">
              Meticulous engineering. Measurable impact. Explore our global assets.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 mb-24 observe-section">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 border-y border-white/10 py-12">
           {['ALL', 'ENTERPRISE', 'AI', 'INFRASTRUCTURE', 'SaaS'].map(f => (
             <button
               key={f}
               onClick={() => handleFilterChange(f)}
               className={`px-8 py-4 text-xs font-black tracking-[0.3em] uppercase transition-all duration-300 ${filter === f ? 'bg-cyan-400 text-black' : 'hover:bg-white/10'}`}
             >
               {f}
             </button>
           ))}
        </div>
      </section>

      {/* Cinematic Masonry Grid */}
      <section className="px-6 observe-section">
        <div className="max-w-[1400px] mx-auto portfolio-grid grid md:grid-cols-2 gap-1 transition-opacity duration-300">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`relative aspect-square group overflow-hidden bg-white/5 reveal-scale ${index === 0 ? 'md:col-span-2 md:aspect-21/9' : ''}`}
            >
              <img 
                src={project.image} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                alt={project.title}
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                <div className="translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-cyan-400 font-black text-[10px] tracking-widest mb-4 uppercase">{project.id} / {project.category}</div>
                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">{project.title}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-12 border-t border-white/20 pt-8 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                     <p className="text-gray-400 font-bold text-sm leading-relaxed uppercase tracking-tight">{project.desc}</p>
                     <div className="space-y-4">
                        {project.metrics.map(m => (
                          <div key={m} className="flex items-center gap-3">
                             <div className="w-1.5 h-1.5 bg-cyan-400" />
                             <span className="text-xs font-black tracking-widest text-white">{m}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Scale CTA */}
      <section className="py-60 px-6 observe-section">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-b border-white/10 py-32 gap-12 group">
           <h2 className="text-7xl md:text-[10vw] font-black uppercase italic tracking-tighter leading-[0.7] reveal-left transition-all duration-700 group-hover:text-cyan-400">
              BUILD <br /> BEYOND.
           </h2>
           <div className="text-right max-w-xl reveal-right">
              <p className="text-gray-400 text-2xl font-black uppercase tracking-tighter mb-12">
                 WE ARE SELECTIVE IN OUR PARTNERSHIPS. IF YOUR VISION REQUIRES INDUSTRIAL STRENGTH ENGINEERING, INITIATE CONTACT.
              </p>
              <Link to="/contact" className="inline-block px-16 py-8 bg-white text-black font-black uppercase tracking-tighter hover:bg-cyan-400 transition-colors shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]">
                 REQUEST CLEARANCE
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
