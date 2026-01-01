import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About LaunchPath | Education Built on Structure, Responsibility, and Stewardship";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "LaunchPath is a compliance-first education program for serious owner-operators. We focus on structure, clarity, and responsible operation—no dispatching, no guarantees, no hype.");
    }
  }, []);

  return (
    <div className="bg-lp-sand min-h-screen">
      <div className="py-20 space-y-24">
        {/* Core Narrative */}
        <section className="lp-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-lp-emerald-soft text-lp-emerald text-[10px] font-bold uppercase tracking-widest mb-6 rounded border border-lp-emerald/20">
              The Mission Statement
            </div>
            <h1 className="text-5xl font-bold text-lp-navy mb-10">Principled Stewardship</h1>
            <div className="space-y-6 text-xl text-lp-navy/90 leading-relaxed font-light">
              <p>
                LaunchPath Transportation was built on a single observation: <span className="font-bold text-lp-trust">Good people fail in trucking because of bad timing.</span>
              </p>
              <p>
                The industry is full of "gurus" selling dreams of easy money. We exist as the counterbalance. We are an educational institution dedicated to order, sequencing, and the responsible management of a motor carrier authority.
              </p>
              <p>
                We believe that a trucking company is first and foremost a <span className="text-lp-emerald font-bold border-b-2 border-lp-emerald/30">safety management business</span> that happens to move freight. When that order is flipped, failure is inevitable.
              </p>
            </div>
          </div>

          {/* Video Placeholder Section */}
          <div className="relative group">
            <div className="aspect-video bg-lp-navy rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white flex items-center justify-center relative cursor-pointer">
              {/* Background Image Placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200&grayscale=1" 
                alt="The LaunchPath Vision Video" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Play Button Overlay */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-lp-trust text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse-soft group-hover:bg-lp-emerald transition-colors">
                  <svg className="w-8 h-8 ml-1 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-6 text-white font-bold tracking-widest uppercase text-xs">Watch the Framework Briefing</p>
                <div className="mt-2 px-3 py-1 bg-white/10 rounded-full text-lp-trust-light text-[10px] font-mono backdrop-blur-sm">
                  04:22 — STABILITY OVER SPEED
                </div>
              </div>

              {/* Branding Overlay */}
              <div className="absolute bottom-6 left-6 bg-lp-navy/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <span className="text-white font-bold text-[10px] tracking-tighter uppercase">LP-TRANS <span className="text-lp-amber">Briefing Media</span></span>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lp-trust/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* Values and Boundaries */}
        <section className="bg-lp-navy py-24 text-lp-white border-y border-white/5 shadow-inner">
          <div className="lp-container grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <span className="w-12 h-1 bg-lp-emerald block"></span>
                Our Values
              </h2>
              <div className="space-y-12">
                {[
                  { title: "Precision over Speed", text: "Moving fast without systems is just accelerating towards a breakdown. We value the quiet, meticulous build.", color: "lp-trust-light" },
                  { title: "Transparency of Risk", text: "We will never minimize the dangers of this industry. Understanding the risk is the only way to manage it.", color: "lp-emerald" },
                  { title: "Institutional Trust", text: "We build systems that outlast individuals. The process is the hero, not the person.", color: "lp-amber" }
                ].map((v, i) => (
                  <div key={i} className="group">
                    <h4 className={`text-xl font-bold mb-3 text-${v.color} group-hover:translate-x-2 transition-transform inline-block`}>{v.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-md">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-lp-navy-light p-10 rounded-3xl shadow-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-8 text-lp-emerald underline decoration-lp-emerald/30 underline-offset-8 font-serif">Our Boundaries</h2>
              <p className="text-gray-300 mb-10 italic text-sm">To protect our students and our integrity, we adhere to strict operating boundaries.</p>
              <ul className="space-y-8">
                {[
                  { title: "No Dispatching", text: "We do not manage loads. Our focus is on the carrier entity, not daily logistics.", color: "lp-trust-light" },
                  { title: "Educational Scope Only", text: "We provide framework and guidance. We are not a law firm or accounting agency.", color: "lp-emerald" },
                  { title: "Merit-Based Guidance", text: "We do not guarantee results. Outcomes depend on the carrier's execution.", color: "lp-amber" }
                ].map((bound, bidx) => (
                  <li key={bidx} className="flex items-start gap-6 group">
                    <span className={`bg-${bound.color}/10 text-${bound.color} w-8 h-8 flex items-center justify-center rounded-xl text-xs font-bold shrink-0 border border-${bound.color}/20`}>
                      {bidx + 1}
                    </span>
                    <div>
                      <h5 className="font-bold text-lp-white text-lg group-hover:text-lp-trust-light transition-colors">{bound.title}</h5>
                      <p className="text-xs text-gray-300 mt-1 leading-relaxed">{bound.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="lp-container text-center py-12">
          <p className="text-lp-slate text-xs uppercase tracking-[0.3em] font-black mb-6">LaunchPath Standard</p>
          <div className="relative inline-block">
            <h3 className="text-4xl md:text-5xl font-bold text-lp-navy italic leading-tight">
              "To reduce preventable carrier failure <br className="hidden md:block"/> through structured education."
            </h3>
            <div className="absolute -top-6 -left-10 text-7xl text-lp-amber opacity-10">“</div>
            <div className="absolute -bottom-10 -right-10 text-7xl text-lp-amber opacity-10">”</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;