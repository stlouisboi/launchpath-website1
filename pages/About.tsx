
import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About LaunchPath | Education Built on Structure, Responsibility, and Stewardship";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "LaunchPath is a compliance-first education program for serious owner-operators. We focus on structure, clarity, and responsibility—no dispatching, no guarantees, no hype.");
    }
  }, []);

  const values = [
    { 
      title: "Precision over Speed", 
      text: "Moving fast without systems is just accelerating towards a breakdown. We value the quiet, meticulous build.", 
      color: "lp-gold",
      badge: "Protocol V-1",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      title: "Transparency of Risk", 
      text: "We will never minimize the dangers of this industry. Understanding the risk is the only way to manage it.", 
      color: "lp-emerald",
      badge: "Audit Ready",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    { 
      title: "Institutional Trust", 
      text: "We build systems that outlast individuals. The process is the hero, not the person.", 
      color: "lp-amber",
      badge: "Legacy Path",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const boundaries = [
    { title: "No Dispatching", text: "We do not manage loads. Our focus is on the carrier entity, not daily logistics.", color: "lp-gold" },
    { title: "Educational Scope Only", text: "We provide framework and guidance. We are not a law firm or accounting agency.", color: "lp-emerald" },
    { title: "Merit-Based Guidance", text: "We do not guarantee results. Outcomes depend on the carrier's execution.", color: "lp-amber" }
  ];

  return (
    <div className="bg-lp-white-off min-h-screen">
      <div className="py-20 space-y-24">
        {/* Core Narrative */}
        <section className="lp-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="inline-block px-3 py-1 bg-lp-emerald-soft text-lp-emerald text-[10px] font-bold uppercase tracking-widest mb-6 rounded border border-lp-emerald/20">
              The Mission Statement
            </div>
            <h1 className="text-5xl font-bold text-lp-navy mb-10 leading-tight">Principled <br/><span className="text-lp-gold">Stewardship</span></h1>
            <div className="space-y-6 text-xl text-lp-navy/90 leading-relaxed font-light">
              <p>
                LaunchPath Transportation was built on a single observation: <span className="font-bold text-lp-gold">Good people fail in trucking because of bad timing.</span>
              </p>
              <p>
                The industry is full of "gurus" selling dreams of easy money. We exist as the counterbalance. We are an educational institution dedicated to order, sequencing, and the responsible management of a motor carrier authority.
              </p>
              <p>
                We believe that a trucking company is first and foremost a <span className="text-lp-emerald font-bold border-b-2 border-lp-emerald/30">safety management business</span> that happens to move freight. When that order is flipped, failure is inevitable.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="aspect-video bg-lp-navy rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white flex items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1590496793907-4286699d75b9?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern High-End Logistics Warehouse" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Branding Overlay */}
              <div className="absolute bottom-6 left-6 bg-lp-navy/80 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-lp-gold/20 flex items-center justify-center text-lp-gold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zM9 10a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm1-4a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-white font-bold text-[10px] tracking-widest uppercase">LaunchPath Frameworks <span className="text-lp-gold ml-2">// VERIFIED</span></span>
              </div>
            </div>
            {/* Floating Trust Badge */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-lp-white-off z-20 group-hover:rotate-12 transition-transform duration-500">
               <div className="text-center">
                 <div className="text-[8px] font-black text-lp-navy/40 uppercase tracking-tighter leading-none">Established</div>
                 <div className="text-lp-gold font-black text-xl leading-none my-0.5">2024</div>
                 <div className="text-[7px] font-black text-lp-navy uppercase tracking-widest leading-none">Standard</div>
               </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lp-navy/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* Values and Boundaries */}
        <section className="bg-lp-navy py-24 text-lp-white border-y border-white/5 shadow-inner overflow-hidden relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
             <div className="grid grid-cols-6 h-full w-full">
                {Array.from({length: 24}).map((_, i) => (
                  <div key={i} className="border border-white flex items-center justify-center p-12">
                     <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  </div>
                ))}
             </div>
          </div>

          <div className="lp-container grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <span className="w-12 h-1 bg-lp-gold block"></span>
                Our Values
              </h2>
              <div className="space-y-12">
                {values.map((v, i) => (
                  <div key={i} className="group flex gap-6">
                    <div className="relative">
                      <div className={`shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-${v.color} group-hover:bg-${v.color}/10 group-hover:border-${v.color}/30 transition-all duration-300 shadow-lg`}>
                        {v.icon}
                      </div>
                      {/* Stylized Checkmark Badge */}
                      <div className="absolute -bottom-1 -right-1 bg-lp-emerald rounded-full w-5 h-5 flex items-center justify-center border-2 border-lp-navy">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className={`text-xl font-bold text-lp-white group-hover:text-lp-gold transition-colors inline-block`}>{v.title}</h4>
                        <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-[8px] font-black uppercase tracking-widest text-white/50">{v.badge}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-md font-medium opacity-80">{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-lp-navy p-10 rounded-3xl shadow-2xl border border-white/10 relative">
              <div className="absolute top-8 right-8 text-lp-gold opacity-20">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
              </div>
              <h2 className="text-3xl font-bold mb-8 text-lp-gold flex items-center gap-3">
                Systemic Boundaries
              </h2>
              <p className="text-gray-300 mb-10 italic text-sm font-medium">To protect our students and our integrity, we adhere to strict operating boundaries.</p>
              <ul className="space-y-8">
                {boundaries.map((bound, bidx) => (
                  <li key={bidx} className="flex items-start gap-6 group">
                    <div className="relative shrink-0">
                      <div className={`bg-lp-white/5 text-lp-gold w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 group-hover:border-lp-gold/40 transition-all shadow-md`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {/* Stylized Trust Shield Badge */}
                      <div className="absolute -top-1 -left-1 text-lp-gold">
                         <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                           <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                         </svg>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold text-lp-white text-lg group-hover:text-lp-gold transition-colors">{bound.title}</h5>
                      <p className="text-xs text-gray-300 mt-1 leading-relaxed font-medium opacity-70">{bound.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-lp-emerald animate-pulse"></div>
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Verified Integrity System // ACTIVE</span>
                 </div>
                 {/* Integrity Seal */}
                 <div className="w-12 h-12 rounded-full border border-lp-gold/30 flex items-center justify-center rotate-12">
                   <div className="text-[6px] font-black text-lp-gold uppercase text-center leading-tight">
                     Launch<br/>Path<br/>Seal
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-container text-center py-12">
          <p className="text-lp-slate text-xs uppercase tracking-[0.3em] font-black mb-6">The LaunchPath Standard</p>
          <div className="relative inline-block px-12">
            <h3 className="text-4xl md:text-5xl font-bold text-lp-navy italic leading-tight">
              "To reduce preventable carrier failure <br className="hidden md:block"/> through structured education."
            </h3>
            <div className="absolute top-0 left-0 text-7xl text-lp-gold opacity-10 font-serif">“</div>
            <div className="absolute bottom-0 right-0 text-7xl text-lp-gold opacity-10 font-serif">”</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
