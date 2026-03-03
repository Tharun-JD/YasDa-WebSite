import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Client = () => {
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

  const testimonials = [
    {
      name: "SARAH CHEN",
      role: "CTO / NEXUS LOGISTICS",
      text: "YASDA DIDN'T JUST BUILD AN ERP; THEY ARCHITECTED A MISSION-CRITICAL OPERATING SYSTEM THAT REDUCED OUR LATENCY BY 40% AT PEAK THROUGHPUT.",
      rating: 5,
      id: "SIGMA-01"
    },
    {
      name: "MARCUS VANCE",
      role: "VP OPERATIONS / GLOBAL FORGE",
      text: "THE NEURAL INSPECTION SYSTEM DEPLOYED BY THE YASDA TEAM IS UNPARALLELED. WE'VE SEEN A 99.8% ACCURACY RATE ACROSS 18 PRODUCTION LINES.",
      rating: 5,
      id: "DELTA-02"
    },
    {
      name: "ELENA ROSSI",
      role: "DIRECTOR / HEALTH SYNC",
      text: "ZERO DOWNTIME. ABSOLUTE SECURITY. YASDA'S CLOUD INFRASTRUCTURE IS THE GOLD STANDARD FOR GLOBAL TELEMEDICINE COMPLIANCE.",
      rating: 5,
      id: "OMEGA-03"
    }
  ];

  return (
    <div className="text-white min-h-screen pt-32 pb-40 selection:bg-cyan-400 selection:text-black">
      {/* Client Hero */}
      <section className="relative py-24 px-6 observe-section mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="reveal-left max-w-4xl">
              <span className="text-cyan-400 font-black text-xs tracking-[1em] uppercase mb-8 block">PARTNERS / TRUST</span>
              <h1 className="text-6xl md:text-[15vw] font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.7]">
                ELITE <br /> <span className="text-white border-b-20 border-white">FORCES.</span>
              </h1>
            </div>
            <p className="text-gray-500 text-xl font-black uppercase italic tracking-tighter max-w-xs reveal-right">
              WE PARTNER WITH DISRUPTORS. WE BUILD FOR LEADERS.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Testimonials */}
      <section className="px-6 observe-section">
        <div className="max-w-7xl mx-auto space-y-1">
          {testimonials.map((t) => (
            <div key={t.id} className="grid lg:grid-cols-12 bg-white/5 border border-white/10 reveal-scale hover:bg-cyan-400 hover:text-black transition-all duration-500 group">
               <div className="lg:col-span-2 p-12 border-b lg:border-b-0 lg:border-r border-white/10 group-hover:border-black transition-colors flex items-center justify-center">
                  <div className="text-[10px] font-black tracking-widest uppercase rotate-0 lg:-rotate-90 whitespace-nowrap">{t.id}</div>
               </div>
               
               <div className="lg:col-span-8 p-12 md:p-24">
                  <div className="flex gap-1 mb-12">
                    {[...Array(t.rating)].map((_, i) => <span key={i} className="text-cyan-400 group-hover:text-black text-xs">▲</span>)}
                  </div>
                  <blockquote className="text-3xl md:text-5xl font-black uppercase italic leading-[0.9] tracking-tighter mb-16">
                     "{t.text}"
                  </blockquote>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/10 group-hover:bg-black/10 flex items-center justify-center font-black text-2xl italic border border-white/10 group-hover:border-black/20">
                       {t.name[0]}
                    </div>
                    <div>
                       <div className="font-black text-xl tracking-tighter">{t.name}</div>
                       <div className="text-[10px] font-black tracking-[0.3em] text-cyan-400 group-hover:text-black mt-1 uppercase">{t.role}</div>
                    </div>
                  </div>
               </div>

               <div className="lg:col-span-2 p-12 flex items-center justify-center opacity-10 group-hover:opacity-100 transition-opacity">
                   <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H8.01703C6.91246 16 6.01703 16.8954 6.01703 18V21M14.017 21H18.017C19.1216 21 20.017 20.1046 20.017 19V11.2361C20.017 10.6625 19.7266 10.129 19.2435 9.82035L14.7265 6.91427C13.6826 6.24296 12.3514 6.24296 11.3075 6.91427L6.79051 9.82035C6.30739 10.129 6.01703 10.6625 6.01703 11.2361V19C6.01703 20.1046 6.91246 21 8.01703 21H14.017Z" stroke="currentColor" strokeWidth="2" fill="none" />
                   </svg>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Logo Wall */}
      <section className="py-48 px-6 bg-white text-black observe-section overflow-hidden mt-20">
        <div className="max-w-[1400px] mx-auto text-center mb-32">
           <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter reveal">NETWORK ASSETS</h2>
           <div className="h-4 w-32 bg-black mx-auto mt-8 reveal stagger-1" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5 bg-black/10 border border-black/10">
           {["QUANTUM", "NEXUS", "FORGE", "BIOTEK", "ORBIT", "SYNTH"].map(name => (
             <div key={name} className="bg-white p-20 flex flex-col items-center justify-center group hover:bg-black transition-all">
                <span className="text-2xl font-black tracking-[0.3em] uppercase group-hover:text-cyan-400 transition-colors italic">{name}</span>
                <div className="text-[10px] font-black opacity-10 uppercase mt-4 group-hover:opacity-40 transition-opacity">LEVEL 1 PARTNER</div>
             </div>
           ))}
        </div>
      </section>

      {/* Final Action */}
      <section className="py-48 px-6 observe-section text-center">
         <div className="max-w-4xl mx-auto reveal-scale">
            <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] mb-16">
               READY TO <br /> <span className="text-cyan-400">CONNECT?</span>
            </h2>
            <Link to="/contact" className="inline-block px-16 py-8 bg-white text-black font-black uppercase tracking-tighter text-2xl hover:bg-cyan-400 transition-colors shadow-[-10px_10px_0_0_#fff]">
               INITIATE UPLINK
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Client;
