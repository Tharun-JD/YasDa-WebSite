import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ title, desc, icon, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="group border-b border-white/10 last:border-0 py-12 cursor-pointer overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 items-center gap-12 relative z-10">
        <div className="md:col-span-1">
          <span className="text-cyan-400 font-black text-4xl italic opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
        </div>
        
        <div className="md:col-span-6">
          <h3 className={`text-4xl md:text-6xl font-black uppercase italic tracking-tighter transition-all duration-500 ${isOpen ? 'text-white translate-x-4' : 'text-white/40'}`}>
            {title}
          </h3>
        </div>

        <div className="md:col-span-5 relative">
          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
             <p className="text-gray-400 text-lg font-bold uppercase tracking-tight mb-8 leading-relaxed">
               {desc}
             </p>
             <Link to="/contact" className="inline-block px-8 py-3 bg-cyan-400 text-black font-black text-xs tracking-widest uppercase hover:bg-white transition-colors">
               DECODE SOLUTION
             </Link>
          </div>
          {!isOpen && <div className="text-white/10 text-8xl absolute top-1/2 left-0 -translate-y-1/2 font-black pointer-events-none">{icon}</div>}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
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

  const servicesList = [
    { title: "SYSTEM ARCHITECTURE", desc: "WE FORGE MISSION-CRITICAL BACKBONES FOR GLOBAL ENTERPRISES. FROM KERNEL-LEVEL OPTIMIZATIONS TO DISTRIBUTED MICROSERVICES ORCHESTRATION.", icon: "⚡" },
    { title: "INDUSTRIAL AUTOMATION", desc: "NEURAL AND MECHANICAL SYNTHESIS. WE DEPLOY AI SYSTEMS THAT MANAGE PRODUCTION PRECISION IN HIGH-FRICTION MANUFACTURING ENVIRONMENTS.", icon: "⚙️" },
    { title: "CLOUD INFRASTRUCTURE", desc: "ABSOLUTE CONTROL OVER AWS, AZURE, AND PRIVATE PROXMOX CLUSTERS. HIGH-AVAILABILITY, SELF-HEALING NETWORKS WITH 99.99% RELIABILITY.", icon: "☁️" },
    { title: "ENTERPRISE SaaS", desc: "COMPLEX MULTI-TENANT PORTALS DESIGNED FOR EXTREME DATA THROUGHPUT AND INTUITIVE USER CONTAINMENT.", icon: "💎" },
    { title: "AUTONOMOUS DEVOPS", desc: "AUTOMATED DELIVERY PIPELINES THAT ELIMINATE HUMAN ERROR. CI/CD TRANSFORMATION AT INDUSTRIAL SCALE.", icon: "🛠️" },
    { title: "DEFENSIVE ENGINEERING", desc: "WE BUILD DIGITAL FORTRESSES THAT ANTICIPATE THREATS BEFORE THEY BREACH YOUR PERIMETER.", icon: "🛡️" }
  ];

  const technologies = [
    { name: ".NET CORE", icon: "ALPHA" }, { name: "RUST", icon: "GAMMA" }, { name: "REACT", icon: "SIGMA" }, 
    { name: "NODE.JS", icon: "DELTA" }, { name: "DOCKER", icon: "OMEGA" }, { name: "PROXMOX", icon: "THETA" }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 selection:bg-cyan-400 selection:text-black">
      {/* Services Hero */}
      <section className="relative py-24 px-6 observe-section mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="reveal-left max-w-2xl">
              <span className="text-cyan-400 font-black text-xs tracking-[0.8em] uppercase mb-8 block">SERVICES / VERTICALS</span>
              <h1 className="text-7xl md:text-[12vw] font-black uppercase italic tracking-tighter leading-[0.7] mb-8">
                CORE <br /> <span className="text-white border-b-8 border-white">FORGE.</span>
              </h1>
            </div>
            <p className="text-gray-500 text-xl md:text-2xl font-black uppercase italic tracking-tighter transition-all max-w-sm reveal-right">
              HIGH-IMPACT ENGINEERING SOLUTIONS FOR THE MOST DEMANDING DIGITAL ENVIRONMENTS.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Reveal List */}
      <section className="observe-section border-t border-white/10">
        {servicesList.map((service, index) => (
          <ServiceItem key={service.title} {...service} index={index} />
        ))}
      </section>

      {/* Industrial Tech Stack */}
      <section className="py-48 px-6 bg-white text-black observe-section relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-black/10" />
        
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32">
             <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none reveal">TECHNOLOGY STACK</h2>
             <div className="h-4 w-32 bg-cyan-500 mx-auto mt-8 reveal stagger-1" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center reveal-scale group">
                <div className="text-xs font-black text-cyan-600 mb-8 tracking-[0.5em] group-hover:scale-125 transition-transform">{tech.icon}</div>
                <div className="w-full aspect-square border-2 border-black flex items-center justify-center relative overflow-hidden group-hover:bg-black transition-colors">
                  <span className="text-2xl font-black uppercase tracking-tighter text-black group-hover:text-white transition-colors relative z-10">{tech.name}</span>
                  <div className="absolute top-0 right-0 p-2 opacity-5 translate-x-1/2 -translate-y-1/2 text-4xl font-black">{tech.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action */}
      <section className="py-48 px-6 observe-section text-center">
         <div className="max-w-4xl mx-auto reveal-scale">
            <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] mb-16">
               READY TO <br /> <span className="text-cyan-400">DEPLOY?</span>
            </h2>
            <Link to="/contact" className="inline-block px-16 py-8 bg-white text-black font-black uppercase tracking-tighter text-2xl hover:bg-cyan-400 transition-colors">
               INITIATE CONSULTATION
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Services;
