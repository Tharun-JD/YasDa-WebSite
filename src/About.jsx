import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountUp from './components/CountUp';

const About = () => {
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

  const timeline = [
    { year: "2020", title: "INITIALIZATION", description: "YASDA SYSTEMS was forged in the peak of digital acceleration, targeting mission-critical enterprise gaps.", achievement: "FOUNDED" },
    { year: "2021", title: "INFRASTRUCTURE CORE", description: "Scaled to 5 veteran engineers and deployed our first Tier-1 SaaS backbone for global manufacturing.", achievement: "10+ SYSTEMS" },
    { year: "2022", title: "CLOUD ORCHESTRATION", description: "Achieved absolute AWS & Proxmox mastery with zero-downtime records across 12 high-traffic nodes.", achievement: "99.99% UPTIME" },
    { year: "2023", title: "NEURAL SYNTHESIS", description: "Pioneered ML-driven visual inspection for the manufacturing sector's 18+ precision machines.", achievement: "AI LEADER" },
    { year: "2024", title: "GLOBAL DEPLOYMENT", description: "Operating at scale across North America & Europe with a fully distributed elite engineering force.", achievement: "50+ ASSETS" }
  ];

  return (
    <div className="text-white min-h-screen pt-32 pb-20 selection:bg-cyan-400 selection:text-black">
      {/* Blueprint Hero */}
      <section className="relative py-24 md:py-48 px-6 observe-section overflow-hidden">
        {/* Blueprint Grid Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-cyan-400 font-black text-xs tracking-[0.8em] uppercase mb-8 block reveal">AUTHENTICATION / PROTOCOL</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8] mb-12 reveal-left">
            FORGING THE <br /> <span className="text-white border-b-8 border-cyan-400">INVISIBLE.</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-500 max-w-4xl font-bold uppercase tracking-tight reveal stagger-1">
            WE ARE THE ARCHITECTS OF HIGH-PRESSURE DIGITAL ENVIRONMENTS. WE BUILD THE SYSTEMS THAT POWER THE MODERN WORLD'S MOST CRITICAL OPERATIONS.
          </p>
        </div>
      </section>

      {/* Industrial Philosophy Section - 3D Perspective Reveal */}
      <section className="py-24 px-6 observe-section perspective-3d bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-12 bg-cyan-400 -translate-y-1/2 translate-x-12 rotate-45" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 leading-none">
                TECHNICAL <br /> PURITY.
            </h2>
            <div className="h-2 w-40 bg-black mb-12" />
            <p className="text-xl font-bold leading-relaxed mb-12 uppercase tracking-tight">
              AT YASDA, WE ELIMINATE THE FLUFF. OUR PHILOSOPHY IS ROOTED IN RADICAL ENGINEERING—CREATING CODEBASES THAT ARE AS ROBUST AS THEY ARE SCALABLE. FOR YASDA SYSTEMS, PRECISION IS NOT AN OPTION—IT IS THE CORE PROTOCOL.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 border-2 border-black group hover:bg-black transition-colors">
                <div className="text-6xl font-black mb-2 group-hover:text-cyan-400 transition-colors"><CountUp end={98} suffix="%" /></div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em]">RETENTION RATIO</div>
              </div>
              <div className="p-8 border-2 border-black group hover:bg-black transition-colors">
                <div className="text-6xl font-black mb-2 group-hover:text-cyan-400 transition-colors"><CountUp end={500} suffix="K" /></div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em]">HARDENED CODE LINES</div>
              </div>
            </div>
          </div>
          
          <div className="group reveal preserve-3d transition-all duration-[1500ms] ease-out [transform:rotateX(-30deg)_translateZ(-100px)] group-[.visible]:[transform:rotateX(0deg)_translateZ(0px)] relative">
            <div className="aspect-4/5 bg-black p-12 flex flex-col justify-between overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
               <div className="absolute inset-0 bg-cyan-400 translate-y-full group-[.visible]:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" />
               <div className="relative z-10">
                  <div className="text-8xl font-black text-white mix-blend-difference mb-8">01</div>
                  <h3 className="text-3xl font-black text-white mix-blend-difference uppercase italic leading-none">RADICAL<br />ENGINEERING</h3>
               </div>
                <div className="relative z-10 text-black font-bold translate-y-20 group-[.visible]:translate-y-0 transition-all duration-1000 delay-300">
                  <div className="space-y-6">
                    <p className="text-sm md:text-base leading-relaxed tracking-tight">
                      <span className="bg-black text-cyan-400 px-2 py-0.5 mr-1">YASDA SYSTEMS</span> is an elite IT engineering collective dedicated to forging the high-performance digital backbones of the modern world. Specializing in <span className="italic font-black opacity-80">TECHNICAL BRUTALISM</span> and <span className="italic font-black opacity-80">RADICAL ENGINEERING</span>, we eliminate the unnecessary noise of conventional software development to focus on pure, mission-critical infrastructure.
                    </p>
                    <p className="text-[11px] md:text-[13px] leading-relaxed uppercase tracking-[0.2em] text-black/70 border-l-2 border-black/20 pl-4">
                      Our expertise spans complex system architecture, industrial automation, and enterprise-scale SaaS solutions, ensuring absolute reliability in high-pressure digital environments.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid - Brutalist blocks */}
      <section className="py-32 bg-black observe-section px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-right mb-24">
             <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none reveal">CORE PROTOCOLS</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { title: "INNOVATION", icon: "ALPHA", desc: "Constant iteration on emerging tech stacks and distributed logic." },
              { title: "PRECISION", icon: "SIGMA", desc: "Absolute zero-margin for error in mission-critical deployments." },
              { title: "SYNERGY", icon: "DELTA", desc: "Forging absolute vertical alignment with client infrastructure." },
              { title: "IMPACT", icon: "OMNI", desc: "Observable, measurable throughput gains in every project." }
            ].map((p) => (
              <div key={p.title} className="bg-white/5 p-12 reveal-scale border border-white/10 hover:border-cyan-400 group transition-all">
                <div className="text-xs font-black text-cyan-400 mb-12 tracking-[0.5em] group-hover:translate-x-4 transition-transform">{p.icon}</div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase italic">{p.title}</h3>
                <p className="text-gray-500 font-bold text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Industrial Track */}
      <section className="py-32 observe-section relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-40">
            <h2 className="text-4xl md:text-7xl font-black text-white reveal italic uppercase tracking-tighter">EVOLUTIONARY TRACK</h2>
          </div>

          <div className="space-y-40">
            {timeline.map((item, i) => (
              <div key={item.year} className="group reveal">
                <div className="grid md:grid-cols-3 items-center gap-12 relative">
                  {/* Left Column */}
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-end md:text-right md:order-1' : 'md:items-start md:text-left md:order-3'}`}>
                    {i % 2 === 0 ? (
                      <>
                        <h3 className="text-3xl font-black text-cyan-400 mb-4 uppercase italic tracking-tighter">{item.title}</h3>
                        <p className="text-gray-400 text-lg font-bold leading-relaxed mb-4 uppercase tracking-tight max-w-sm">{item.description}</p>
                        <div className="inline-block px-4 py-1 bg-white text-black text-[10px] font-black tracking-widest uppercase">{item.achievement}</div>
                      </>
                    ) : (
                      <div className="text-[12vw] font-black leading-none italic text-white/5 transition-all duration-1000 group-[.visible]:text-cyan-400/8 group-[.visible]:drop-shadow-[0_0_30px_rgba(34,211,238,0.2)] select-none">
                        {item.year}
                      </div>
                    )}
                  </div>
                  
                  {/* Middle Column (Dot) */}
                  <div className="flex justify-center items-center md:order-2 z-20">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-cyan-400/20 rounded-full animate-ping" />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-start md:text-left md:order-3' : 'md:items-end md:text-right md:order-1'}`}>
                    {i % 2 === 0 ? (
                      <div className="text-[12vw] font-black leading-none italic text-white/5 transition-all duration-1000 group-[.visible]:text-cyan-400/8 group-[.visible]:drop-shadow-[0_0_30px_rgba(34,211,238,0.2)] select-none">
                        {item.year}
                      </div>
                    ) : (
                      <>
                        <h3 className="text-3xl font-black text-cyan-400 mb-4 uppercase italic tracking-tighter">{item.title}</h3>
                        <p className="text-gray-400 text-lg font-bold leading-relaxed mb-4 uppercase tracking-tight max-w-sm">{item.description}</p>
                        <div className="inline-block px-4 py-1 bg-white text-black text-[10px] font-black tracking-widest uppercase">{item.achievement}</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial CTA */}
      <section className="py-40 observe-section bg-cyan-400 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="reveal-scale">
            <h2 className="text-7xl md:text-[12vw] font-black uppercase italic tracking-tighter leading-[0.7] mb-16">
              PARTNER <br /> WITH THE <br /> FUTURE.
            </h2>
            <Link to="/contact" className="inline-block px-16 py-8 bg-black text-white font-black uppercase tracking-tighter text-xl hover:scale-110 transition-transform">
              INITIATE PROTOCOL
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
