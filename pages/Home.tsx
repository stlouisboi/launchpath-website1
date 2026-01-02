import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadMagnet from '../components/LeadMagnet';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "LaunchPath Transportation | Protect Your Authority Before Your First Load";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Compliance-first education and group coaching for U.S. owner-operators. Learn the sequence that protects authority, insurance, and operations—without shortcuts or hype.");
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Off-White Background */}
      <section className="bg-lp-white-off py-20 md:py-32 overflow-hidden border-b border-lp-slate/10">
        <div className="lp-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeIn">
            <div className="lp-alert mb-8 inline-block rounded-xl font-black text-[10px] uppercase tracking-[0.3em] border-l-4 border-lp-gold">
              Institutional Grade Risk Management
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-lp-navy leading-[1.1] mb-8">
              Your authority is an asset. <br/>
              <span className="text-lp-gold">Protect it like one.</span>
            </h1>
            <p className="text-xl text-lp-slate mb-12 leading-relaxed max-w-xl">
              Don't risk your motor carrier license before the first mile. LaunchPath delivers the <span className="text-lp-navy font-bold">Authority-First Sequence™</span> required to secure your business, your insurance, and your legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/apply" className="lp-primary-btn text-lg min-w-[240px]">
                Apply for Guidance
              </Link>
              <Link to="/how-it-works" className="lp-secondary-btn text-lg min-w-[240px]">
                The System Explained
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="bg-lp-navy rounded-[3rem] p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
               <img 
                src="https://images.unsplash.com/photo-1501700489910-fb3a7eba0d73?q=80&w=2040&auto=format&fit=crop" 
                alt="Professional Logistics Truck on Open Road" 
                className="w-full h-[500px] object-cover rounded-[2.5rem] opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="bg-lp-white-off p-10 rounded-3xl shadow-2xl border-l-8 border-lp-gold -rotate-2">
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lp-gold mb-3">Diagnostic 01-A</p>
                   <h3 className="text-3xl font-extrabold text-lp-navy mb-4 leading-tight">First 90 Days <br/>Risk Map™</h3>
                   <p className="text-lp-slate text-sm leading-relaxed mb-6 font-medium">Preventing the 80% failure rate through sequenced administrative buildup.</p>
                   <div className="flex items-center gap-3 py-3 border-t border-lp-slate/10">
                     <div className="w-10 h-10 rounded-full bg-lp-gold/20 flex items-center justify-center text-lp-gold">
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                     </div>
                     <span className="text-xs font-bold text-lp-navy uppercase tracking-tighter">Verified Regulatory Path</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Analysis - Pure White Background */}
      <section className="bg-lp-white py-24">
        <div className="lp-container">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Why do new <br/><span className="text-lp-gold underline decoration-lp-gold/30">carriers fail?</span></h2>
            <p className="text-xl text-lp-slate leading-relaxed">
              Most operators prioritize "moving freight" over building a sustainable authority. This upside-down model creates critical structural gaps that underwriters and regulators notice immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Insurance Volatility", text: "Underwriters cancel policies if safety systems aren't visible within 45 days." },
              { title: "Compliance Lag", text: "A 30-day delay in Drug & Alcohol Clearinghouse triggers immediate federal intervention." },
              { title: "Sequencing Errors", text: "Acquiring equipment before securing viable insurance burns capital without revenue." }
            ].map((item, idx) => (
              <div key={idx} className="lp-card group relative">
                <div className="w-12 h-1 bg-lp-gold mb-8 group-hover:w-full transition-all duration-500"></div>
                <h4 className="font-extrabold text-2xl mb-4 group-hover:text-lp-gold transition-colors">{item.title}</h4>
                <p className="text-lp-slate leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section - Off-White Background */}
      <section className="bg-lp-white-off py-24 border-y border-lp-slate/10">
        <div className="lp-container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-lp-navy mb-4">The LaunchPath Sequence</h2>
            <p className="text-lp-slate max-w-2xl mx-auto font-medium">
              We provide Decision Compression™—removing false options so you only take the steps that ensure authority longevity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { tag: "01", title: "Authority-First Sequencing™", text: "Ensuring your administrative foundation is unshakeable before operational overhead exists." },
              { tag: "02", title: "Decision Compression™", text: "Eliminating the 'analysis paralysis' of regulatory choice with pre-vetted compliance paths." },
              { tag: "03", title: "Protected Build Window™", text: "A structured 8-week period to finalize your systems without the pressure of a truck payment." },
              { tag: "04", title: "Revenue After Readiness™", text: "Delayed launch ensures that when you haul, you're not one inspection away from bankruptcy." }
            ].map((card, i) => (
              <div key={i} className="bg-lp-white p-10 rounded-2xl shadow-sm border border-lp-slate/10 flex flex-col h-full hover:shadow-xl transition-all">
                <span className="text-lp-gold font-black text-3xl mb-6 opacity-40">{card.tag}</span>
                <h4 className="font-extrabold text-xl mb-4 leading-tight text-lp-navy">{card.title}</h4>
                <p className="text-sm text-lp-slate leading-relaxed mt-auto">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet - Pure White Background */}
      <section className="bg-lp-white py-24">
        <div className="lp-container">
          <LeadMagnet />
        </div>
      </section>

      {/* Call to Action - Navy Background */}
      <section className="bg-lp-navy py-24 text-lp-white-off border-t-[12px] border-lp-gold">
        <div className="lp-container flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-8 text-lp-white-off">Service Boundaries</h2>
            <p className="text-lp-slate-light mb-12 text-lg leading-relaxed">
              To maintain integrity, we clearly define what we are NOT. We are an educational organization focused on sustainable structure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "No Dispatching",
                "No Legal Advice",
                "No Load Guarantees",
                "No Income Promises"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10">
                  <span className="text-lp-gold text-2xl font-black">×</span>
                  <span className="text-xs font-black uppercase tracking-[0.2em]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full bg-lp-white-off p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lp-gold/10 blur-3xl rounded-full"></div>
            <h3 className="text-3xl font-extrabold mb-6 text-lp-navy">Vetting Application</h3>
            <p className="text-lp-slate font-medium mb-10 leading-relaxed">
              We work with serious professionals who understand that a trucking company is a high-risk logistics business, not a "money hack."
            </p>
            <div className="flex flex-col gap-4">
               <Link to="/apply" className="lp-primary-btn w-full block">
                 Apply if you’re ready to build it right.
               </Link>
               <Link to="/faq" className="text-lp-slate font-bold text-sm text-center hover:text-lp-navy transition-colors">
                  Frequently Asked Questions &rarr;
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
