import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  useEffect(() => {
    document.title = "How LaunchPath Works | Authority-First Sequencing™ for Owner-Operators";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "See how LaunchPath reduces shutdown risk using Authority-First Sequencing™, Decision Compression™, and a Protected Build Window™—so you operate with clarity before revenue pressure.");
    }
  }, []);

  return (
    <div className="py-20 space-y-32">
      <section className="lp-container max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-lp-black mb-8">The Framework for <span className="text-lp-red">Authority Stability</span></h1>
        <p className="text-xl text-lp-dark leading-relaxed">
          The LaunchPath system isn't about moving freight faster. It's about building a compliance shell that protects your capital from regulatory erosion.
        </p>
      </section>

      {/* Framework Pillars */}
      <section className="lp-container space-y-24">
        {[
          {
            title: "Authority-First Sequencing™",
            description: "Most fail because they buy a truck first. We reverse the cycle.",
            steps: ["Registry Setup", "Insurance Pre-Audit", "Compliance Documentation", "Operational Readiness", "Revenue Generation"],
            detail: "By securing your authority and insurance foundation before incurring debt on equipment, you eliminate the pressure to haul 'desperation freight' that leads to safety violations."
          },
          {
            title: "Decision Compression™",
            description: "Removing the noise from the DOT process.",
            steps: ["Vetted Vendor List", "Compliance Tree", "Risk Identification"],
            detail: "We provide decision trees that filter out high-risk choices. You don't need 10 options for an ELD; you need the one that won't trigger an audit."
          },
          {
            title: "Protected Build Window™",
            description: "An 8-week structured environment for construction.",
            steps: ["Week 1-2: Legal foundation", "Week 3-5: Insurance & Safety", "Week 6-8: Systems & Tech"],
            detail: "This is a quiet phase. No trucks on the road. No burning fuel. Just pure structural development to ensure that when your MC becomes active, you are already a 'safety-fit' carrier."
          },
          {
            title: "Revenue After Readiness™",
            description: "Delayed revenue is stable revenue.",
            steps: ["Readiness Checklist", "Final Safety Review", "Go-Live"],
            detail: "The biggest threat to a new MC is destabilization from early growth. We verify your readiness before you engage the market, ensuring that revenue serves the business rather than just covering mistakes."
          }
        ].map((pillar, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-lp-black">{pillar.title}</h2>
              <p className="text-lg text-lp-red font-medium mb-4 italic">{pillar.description}</p>
              <p className="text-lp-dark leading-relaxed mb-8">{pillar.detail}</p>
              <div className="flex flex-wrap gap-2">
                {pillar.steps.map((step, sidx) => (
                  <span key={sidx} className="bg-lp-light text-lp-charcoal text-xs font-bold px-3 py-1 rounded border border-gray-200 uppercase tracking-tighter">
                    {step}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full bg-lp-charcoal aspect-video rounded-xl overflow-hidden flex items-center justify-center p-8 border-4 border-lp-dark">
               <div className="text-lp-gray font-mono text-sm leading-relaxed">
                  [ System Architecture Visualization - Pillar {idx + 1} ]
                  <br/><br/>
                  &gt; INITIALIZING SEQUENCE...
                  <br/>
                  &gt; VALIDATING COMPLIANCE...
                  <br/>
                  &gt; MITIGATING EARLY RISK...
                  <br/>
                  &gt; STATUS: {pillar.title.toUpperCase()} ACTIVE
               </div>
            </div>
          </div>
        ))}
      </section>

      <section className="lp-container bg-lp-black p-12 md:p-20 text-lp-white rounded-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to follow the sequence?</h2>
        <p className="text-lp-gray mb-10 max-w-2xl mx-auto">
          We don't accept everyone. We work with carriers who value long-term stability over short-term "hustle."
        </p>
        <Link 
          to="/apply" 
          className="bg-lp-red px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block"
        >
          Submit Your Application
        </Link>
      </section>
    </div>
  );
};

export default HowItWorks;