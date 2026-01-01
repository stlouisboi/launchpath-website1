import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  useEffect(() => {
    document.title = "How LaunchPath Works | Authority-First Sequencing™ for Owner-Operators";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "See how LaunchPath reduces shutdown risk using Authority-First Sequencing™, Decision Compression™, and a Protected Build Window™.");
    }
  }, []);

  return (
    <div className="py-20 space-y-32 bg-lp-white">
      <section className="lp-container max-w-4xl text-center">
        <div className="inline-block px-3 py-1 bg-lp-trust-soft text-lp-trust text-[10px] font-bold uppercase tracking-widest mb-6 rounded">The Methodology</div>
        <h1 className="text-5xl font-bold text-lp-navy mb-8">The Framework for <span className="text-lp-trust">Authority Stability</span></h1>
        <p className="text-xl text-lp-slate leading-relaxed">
          The LaunchPath system isn't about moving freight faster. It's about building a compliance shell that protects your capital from regulatory erosion.
        </p>
      </section>

      {/* Framework Pillars */}
      <section className="lp-container space-y-32">
        {[
          {
            title: "Authority-First Sequencing™",
            description: "Most fail because they buy a truck first. We reverse the cycle.",
            steps: ["Registry Setup", "Insurance Pre-Audit", "Compliance Documentation"],
            detail: "By securing your authority and insurance foundation before incurring debt on equipment, you eliminate the pressure to haul 'desperation freight' that leads to safety violations.",
            accent: "lp-trust"
          },
          {
            title: "Decision Compression™",
            description: "Removing the noise from the DOT process.",
            steps: ["Vetted Vendor List", "Compliance Tree", "Risk Identification"],
            detail: "We provide decision trees that filter out high-risk choices. You don't need 10 options for an ELD; you need the one that won't trigger an audit.",
            accent: "lp-emerald"
          },
          {
            title: "Protected Build Window™",
            description: "An 8-week structured environment for construction.",
            steps: ["Week 1-2: Legal", "Week 3-5: Safety", "Week 6-8: Tech"],
            detail: "This is a quiet phase. No trucks on the road. No burning fuel. Just pure structural development to ensure you are already a 'safety-fit' carrier before day one.",
            accent: "lp-amber"
          }
        ].map((pillar, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-lp-navy">{pillar.title}</h2>
              <p className={`text-lg text-${pillar.accent} font-medium mb-4 italic`}>{pillar.description}</p>
              <p className="text-lp-slate leading-relaxed mb-8">{pillar.detail}</p>
              <div className="flex flex-wrap gap-2">
                {pillar.steps.map((step, sidx) => (
                  <span key={sidx} className="bg-lp-sand text-lp-navy text-[10px] font-bold px-3 py-1 rounded border border-lp-sand uppercase tracking-widest shadow-sm">
                    {step}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full bg-lp-navy aspect-video rounded-3xl overflow-hidden flex items-center justify-center p-12 border-4 border-lp-sand shadow-2xl relative">
               <div className="absolute top-4 left-6 flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-lp-emerald"></div>
                 <div className="w-2 h-2 rounded-full bg-lp-amber opacity-40"></div>
                 <div className="w-2 h-2 rounded-full bg-lp-slate opacity-40"></div>
               </div>
               <div className="text-gray-400 font-mono text-xs leading-relaxed w-full">
                  <span className="text-lp-trust-light font-bold">// SYSTEM ARCHITECTURE V.{idx + 1}.0</span>
                  <br/><br/>
                  <span className="text-lp-emerald font-bold">&gt; INITIALIZING {pillar.title.toUpperCase()}</span>
                  <br/>
                  <span className="text-white opacity-40">&gt; CHECKING REGULATORY BOUNDARIES... OK</span>
                  <br/>
                  <span className="text-white opacity-40">&gt; ANALYZING RISK VECTORS... MITIGATED</span>
                  <br/>
                  <span className={`text-white font-black mt-2 inline-block animate-pulse`}>&gt; SEQUENCE STATUS: ACTIVE</span>
               </div>
            </div>
          </div>
        ))}
      </section>

      <section className="lp-container bg-lp-navy p-12 md:p-20 text-lp-white rounded-[3rem] text-center border-b-[12px] border-lp-emerald shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-lp-trust/5 blur-3xl rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to follow the sequence?</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          We don't accept everyone. We work with carriers who value long-term stability over short-term "hustle."
        </p>
        <Link 
          to="/apply" 
          className="bg-lp-trust px-10 py-5 rounded-xl font-bold text-lg hover:bg-lp-navy transition-all inline-block shadow-lg shadow-lp-trust/20 active:scale-[0.98]"
        >
          Submit Your Application
        </Link>
      </section>
    </div>
  );
};

export default HowItWorks;