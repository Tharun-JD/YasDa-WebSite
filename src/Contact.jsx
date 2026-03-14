import React, { useEffect } from 'react';

const Contact = () => {
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

  return (
    <div className="text-white min-h-screen pt-32 pb-40 selection:bg-cyan-400 selection:text-black">
      {/* Contact Hero */}
      <section className="relative py-24 px-6 observe-section overflow-hidden">
        {/* Animated Background Text */}
        <div className="absolute top-0 right-0 text-[30vw] font-black text-white/3 italic pointer-events-none uppercase leading-none translate-x-1/4 -translate-y-1/4 animate-spin-slow">
           INIT
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="reveal-left max-w-5xl">
            {/* <span className="text-cyan-400 font-black text-xs tracking-[1em] uppercase mb-8 block font-mono">STATION: CONNECT / ALPHA_092</span> */}
            <h1 className="text-7xl md:text-[18vw] font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.7]">
               INITIATE <br /> <span className="text-cyan-400">MISSION.</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-3xl font-black uppercase tracking-tight max-w-3xl leading-none reveal stagger-1">
               WE ONLY DEPLOY TO PROJECTS WITH RADIATED IMPACT. CLEAR YOUR VISION. SEND YOUR SIGNAL.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Form Section */}
      <section className="px-6 observe-section relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24">
           {/* Left Info */}
           <div className="lg:col-span-5 reveal-left">
              <div className="space-y-24">
                 <div>
                    <h3 className="text-xs font-black text-cyan-400 tracking-[0.5em] mb-8 uppercase">DIRECT COMMAND</h3>
                    <div className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter hover:text-cyan-400 transition-colors">
                       COMMAND@YASDA.COM
                    </div>
                 </div>
                 <div>
                    <h3 className="text-xs font-black text-cyan-400 tracking-[0.5em] mb-8 uppercase">GLOBAL RECEPTION</h3>
                    <div className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
                       +1 800-FORGE-IT
                    </div>
                 </div>
                 <div>
                    <h3 className="text-xs font-black text-cyan-400 tracking-[0.5em] mb-8 uppercase">BASE COORDS</h3>
                    <div className="text-gray-400 text-xl font-bold uppercase tracking-tight leading-relaxed">
                       SOCIETY COMPLEX / SECTOR 7<br />
                       INDUSTRIAL ZONE X / SOUTH ASIA<br />
                       34.211° N / -118.490° W
                    </div>
                 </div>
              </div>
              
              {/* Industrial Decorations */}
              <div className="mt-32 pt-12 border-t border-white/10 hidden lg:block">
                 <div className="flex gap-4">
                    <div className="w-12 h-1 bg-cyan-400" />
                    <div className="w-12 h-1 bg-white/20" />
                    <div className="w-12 h-1 bg-white/20" />
                 </div>
              </div>
           </div>

           {/* Right Form */}
           <div className="lg:col-span-7 reveal-right">
              <form className="bg-white/5 p-8 md:p-16 border border-white/10 relative overflow-hidden">
                 {/* Blueprint Accents */}
                 <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400/20" />
                 <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-400/20" />
                 
                 <div className="space-y-12">
                     <div className="group border-b-2 border-white/10 focus-within:border-cyan-400 transition-colors pb-4">
                        <label className="text-[10px] font-black tracking-widest text-cyan-400 uppercase mb-4 block">IDENTIFIER / NAME</label>
                        <input 
                           type="text" 
                           placeholder="REQUIRED"
                           className="w-full bg-transparent border-none text-3xl font-black uppercase italic tracking-tighter focus:outline-none placeholder:text-white/10"
                        />
                     </div>

                     <div className="group border-b-2 border-white/10 focus-within:border-cyan-400 transition-colors pb-4">
                        <label className="text-[10px] font-black tracking-widest text-cyan-400 uppercase mb-4 block">SIGNAL / EMAIL</label>
                        <input 
                           type="email" 
                           placeholder="REQUIRED"
                           className="w-full bg-transparent border-none text-3xl font-black uppercase italic tracking-tighter focus:outline-none placeholder:text-white/10"
                        />
                     </div>

                     <div className="group border-b-2 border-white/10 focus-within:border-cyan-400 transition-colors pb-4">
                        <label className="text-[10px] font-black tracking-widest text-cyan-400 uppercase mb-4 block">INTENT / MESSAGE</label>
                        <textarea 
                           rows="4"
                           placeholder="INITIALIZE BRIEFING..."
                           className="w-full bg-transparent border-none text-3xl font-black uppercase italic tracking-tighter focus:outline-none placeholder:text-white/10 resize-none"
                        ></textarea>
                     </div>

                     <button className="w-full bg-white text-black py-8 font-black text-2xl uppercase tracking-tighter hover:bg-cyan-400 transition-all duration-500 scale-100 active:scale-95 group relative overflow-hidden">
                        <span className="relative z-0">TRANSMIT DATA</span>
                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                        <span className="absolute inset-0 flex items-center justify-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">AUTHENTICATING...</span>
                     </button>
                 </div>
              </form>
              
              {/* <div className="mt-12 text-[10px] font-black tracking-[0.5em] text-white/20 uppercase text-center lg:text-right">
                 ENCRYPTION: AES-256 / SHA-2 / TLS 1.3
              </div> */}
           </div>
        </div>
      </section>

      {/* Footer Industrial Accent */}
      <section className="py-48 px-6 text-center observe-section">
         <div className="max-w-7xl mx-auto reveal-scale">
             <div className="text-[15vw] font-black text-white opacity-5 italic leading-none whitespace-nowrap overflow-hidden">
                COMMAND CENTER COMMAND CENTER COMMAND CENTER
             </div>
         </div>
      </section>

    </div>
  );
};

export default Contact;
