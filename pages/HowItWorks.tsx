import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  useEffect(() => {
    document.title = "The LaunchPath Roadmap | How Authority-First Sequencing™ Works";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Understand the exact 4-phase sequence LaunchPath uses to build stable, compliant trucking authorities from the ground up.");
    }
  }, []);

  const phases = [
    {
      id: "01",
      title: "Diagnostic & Risk Mapping",
      subtitle: "The Vetting Phase",
      detail: "Before filing a single document, we run a profile diagnostic. This includes evaluating your commercial credit, insurance marketability, and capital reserves. We identify if you're in an insurance 'hot zone' and adjust the strategy accordingly.",
      items: ["Insurance Marketability Analysis", "Credit Profile Check", "Capital Reserve Audit"],
      image: "https://images.unsplash.com/photo-1553413766-41f9d287afdf?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Administrative Buildup",
      subtitle: "The Authority Phase",
      detail: "We initialize the Authority-First Sequence™. This involves filing for your USDOT and MC numbers, appointing a BOC-3 process agent, and setting up your Unified Carrier Registration (UCR). We do this *before* you lease or buy a truck to avoid the 'burn rate' trap.",
      items: ["USDOT/MC Filing", "BOC-3 Process Agent", "UCR Registration"],
      image: "https://images.unsplash.com/photo-1454165833767-027ff33026b6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Operational Readiness",
      subtitle: "The Compliance Phase",
      detail: "While your authority is 'aging' in the 21-day protest period, we build your safety management system. This includes registering with the Drug & Alcohol Clearinghouse, establishing a random testing pool, and selecting a compliant ELD vendor.",
      items: ["Clearinghouse Setup", "Random Pool Entry", "Safety File Construction"],
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Monitored Launch",
      subtitle: "The Revenue Phase",
      detail: "You haul your first load only when the 'Compliance Shell' is complete. We monitor your SMS scores and insurance data for the first 90 days to ensure you pass your New Entrant Safety Audit with zero critical violations.",
      items: ["New Entrant Audit Prep", "SMS Data Monitoring", "Policy Maintenance"],
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-lp-white-off min-h-screen font-sans">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-lp-slate/10 bg-lp-white">
        <div className="lp-container text-center max-w-4xl">
          <div className="lp-alert mb-8 inline-block rounded-xl font-black text-[10px] uppercase tracking-[0.3em]">
            Strategic Operating Manual
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-lp-navy mb-8 leading-tight">
            How we build <br/> <span className="text-lp-gold">Bulletproof Carriers.</span>
          </h1>
          <p className="text-xl text-lp-slate leading-relaxed mb-12">
            Most carriers start with a truck and a dream. We start with a <span className="text-lp-navy font-bold">framework and a sequence.</span> Here is exactly how we take you from applicant to operational authority.
          </p>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-24 bg-lp-navy text-lp-white-off relative overflow-hidden">
        <div className="lp-container relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-lp-gold uppercase tracking-widest">Traditional vs. LaunchPath</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-lp-white/10 rounded-3xl overflow-hidden border border-lp-white/10">
            <div className="p-12 bg-lp-navy">
              <h4 className="text-xl font-black mb-8 text-red-400 uppercase tracking-widest">The Traditional Trap</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-red-400 font-bold">01.</span>
                  <p className="text-sm opacity-70">Buy truck first, incurring $3,000+ monthly payments immediately.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-400 font-bold">02.</span>
                  <p className="text-sm opacity-70">Rush authority filing while truck sits idle, burning cash.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-400 font-bold">03.</span>
                  <p className="text-sm opacity-70">Take first insurance quote available due to desperation.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-400 font-bold">04.</span>
                  <p className="text-sm opacity-70">Haul first load without safety files; fail first DOT audit.</p>
                </li>
              </ul>
            </div>
            <div className="p-12 bg-lp-navy/50 backdrop-blur-md">
              <h4 className="text-xl font-black mb-8 text-lp-gold uppercase tracking-widest">The LaunchPath Sequence</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-lp-gold font-bold">01.</span>
                  <p className="text-sm">Validate marketability and secure authority *before* buying equipment.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-lp-gold font-bold">02.</span>
                  <p className="text-sm">Age the authority during the protest period while overhead is zero.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-lp-gold font-bold">03.</span>
                  <p className="text-sm">Build full safety management systems during the aging window.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-lp-gold font-bold">04.</span>
                  <p className="text-sm">Launch with a mature authority and a ready-to-pass audit profile.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-lp-gold/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Detailed Phase Roadmap */}
      <section className="py-32 lp-container">
        <div className="flex flex-col gap-32">
          {phases.map((phase, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-lp-gold/20">{phase.id}</span>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-lp-gold">{phase.subtitle}</h4>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-lp-navy">{phase.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-lp-slate leading-relaxed font-medium">
                  {phase.detail}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {phase.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-lp-white p-4 rounded-xl border border-lp-slate/10 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-lp-emerald"></div>
                      <span className="text-xs font-bold text-lp-navy uppercase tracking-tighter">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-lp-navy rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-2xl"></div>
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-4 border-lp-white-off shadow-inner">
                  <img 
                    src={phase.image} 
                    alt={phase.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-lp-navy/20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lp-container">
        <div className="bg-lp-navy p-12 md:p-24 rounded-[4rem] text-center border-b-[16px] border-lp-gold shadow-[0_50px_100px_-20px_rgba(27,58,107,0.5)] relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-lp-gold/10 blur-[100px] rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-black text-lp-white-off mb-8 leading-tight">
            Stop guessing. <br/> <span className="text-lp-gold">Start sequencing.</span>
          </h2>
          <p className="text-xl text-lp-white-off/70 mb-12 max-w-2xl mx-auto font-medium">
            Join the elite group of owner-operators who treat their authority as an institutional asset, not just a job.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/apply" className="lp-primary-btn px-12 py-5 text-lg">
              Apply for Guidance
            </Link>
            <Link to="/resources" className="lp-secondary-btn bg-transparent border-lp-white/30 text-lp-white-off hover:bg-lp-white-off hover:text-lp-navy px-12 py-5 text-lg">
              View Risk Map™
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
