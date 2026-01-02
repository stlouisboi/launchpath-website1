import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "LaunchPath FAQ | Authority, Insurance, Compliance, and What We Do (and Don’t)";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Answers to common questions about LaunchPath, authority protection, insurance stability, compliance basics, program boundaries, and who the program is designed for.");
    }
  }, []);

  const faqs = [
    {
      q: "What exactly is LaunchPath Transportation?",
      a: "We are an educational firm providing structured frameworks for U.S. owner-operators. Our goal is to ensure you have a compliant, stable foundation before you start operations."
    },
    {
      q: "Do you provide dispatch or load procurement services?",
      a: "No. We do not engage in logistics, dispatching, or freight brokering. Our focus is strictly on the structural and regulatory health of your motor carrier authority."
    },
    {
      q: "Is the guidance provided considered legal advice?",
      a: "No. LaunchPath provides education and administrative frameworks based on industry best practices. We recommend consulting with qualified legal or accounting professionals for specific advice."
    },
    {
      q: "Who is the ideal candidate for this program?",
      a: "Serious professionals who are either in the 'pre-launch' phase or within their first 90 days of operation and want to avoid the common traps that lead to early failure."
    },
    {
      q: "What is Authority-First Sequencing™?",
      a: "It is our proprietary method of building a carrier. We prioritize administrative and compliance foundations before committing to heavy equipment overhead or insurance premiums."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-lp-white-off min-h-screen">
      <div className="lp-container max-w-4xl">
        <div className="mb-16">
          <div className="lp-alert mb-6 inline-block rounded-lg font-bold text-[10px] uppercase tracking-widest">
            Institutional Knowledge Base
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-lp-navy mb-6 leading-tight">
            Regulatory & <span className="text-lp-gold">Operational FAQ</span>
          </h1>
          <p className="text-lg text-lp-slate leading-relaxed">
            Clarifying the boundaries of our sequence-first framework and addressing the administrative hurdles of new authority management.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`lp-card overflow-hidden transition-all duration-300 border-2 ${
                activeIndex === idx 
                ? 'border-lp-gold shadow-xl scale-[1.01]' 
                : 'border-transparent hover:border-lp-slate/20'
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between py-2 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-6">
                  <span className={`text-xs font-black transition-colors ${activeIndex === idx ? 'text-lp-gold' : 'text-lp-slate/30'}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`text-xl font-bold transition-colors ${activeIndex === idx ? 'text-lp-navy' : 'text-lp-navy/80 group-hover:text-lp-navy'}`}>
                    {faq.q}
                  </h3>
                </div>
                <div className={`transition-transform duration-300 transform ${activeIndex === idx ? 'rotate-180 text-lp-gold' : 'text-lp-slate/40'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === idx ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-lp-slate/10 pt-8">
                  <p className="text-lp-slate leading-relaxed text-lg font-medium">
                    {faq.a}
                  </p>
                  <div className="mt-8 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-lp-gold"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-lp-navy/40">Verified Procedural Answer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-lp-navy p-12 md:p-16 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-lp-white-off">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lp-gold/5 blur-3xl rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-grow">
              <h4 className="text-3xl font-extrabold text-lp-gold mb-4 tracking-tight">Still have operational questions?</h4>
              <p className="text-lp-white-off/70 leading-relaxed text-lg max-w-xl">
                If you are ready for a serious structural briefing, we recommend submitting a professional application for vetting.
              </p>
            </div>
            <Link 
              to="/apply" 
              className="lp-primary-btn bg-lp-gold text-lp-navy hover:bg-lp-white-off px-12 py-5 rounded-2xl font-black text-center transition-all shadow-2xl active:scale-[0.98] whitespace-nowrap uppercase tracking-widest text-sm"
            >
              Apply for Guidance
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-lp-slate/40">LaunchPath System Integrity Protocol // 2024</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;