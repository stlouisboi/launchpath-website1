import React, { useEffect } from 'react';
import LeadMagnet from '../components/LeadMagnet';
import { ARTICLES } from '../constants';

const Resources: React.FC = () => {
  useEffect(() => {
    document.title = "Trucking Compliance Resources | The First 90 Days Risk Map™";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Practical resources for new and growing carriers: The First 90 Days Risk Map™, DOT vs MC clarity, insurance stability insights, and compliance fundamentals—built for U.S. owner-operators.");
    }
  }, []);

  return (
    <div className="py-20 space-y-32">
      {/* Risk Map Prominence Section */}
      <section className="lp-container">
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl font-extrabold text-lp-navy mb-6 leading-tight">
            Institutional <span className="text-lp-gold">Briefings & Briefcase Assets</span>
          </h1>
          <p className="text-xl text-lp-slate leading-relaxed">
            Essential tools designed to secure your authority against common operational risks. Start with our cornerstone asset for new authorities.
          </p>
          <div className="mt-8">
            <a 
              href="#risk-map-cta" 
              className="inline-flex items-center gap-2 bg-lp-gold text-lp-navy px-8 py-4 rounded-xl font-bold shadow-xl shadow-lp-gold/30 hover:bg-lp-navy hover:text-lp-white-off transition-all active:scale-[0.98]"
            >
              Download The Risk Map™
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
          </div>
        </div>
        <div className="relative">
          {/* Visual indicator for the 90-day map */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-lp-gold text-lp-navy flex items-center justify-center rounded-full font-black text-xl shadow-xl z-10 animate-pulse">
            !
          </div>
          <LeadMagnet />
        </div>
      </section>

      {/* Articles Section */}
      <section className="lp-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-lp-navy mb-4 flex items-center gap-3">
              <span className="w-10 h-1 bg-lp-gold block"></span>
              Knowledge Library
            </h2>
            <p className="text-lp-slate">Detailed analysis of regulatory frameworks and operational risk vectors.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div key={article.slug} className="group bg-lp-white border border-lp-slate/10 p-8 rounded-2xl flex flex-col hover:shadow-xl hover:border-lp-gold/30 transition-all cursor-pointer shadow-sm">
              <div className="mb-6">
                <span className="text-[10px] uppercase font-black text-lp-gold/50 tracking-widest px-2 py-1 bg-lp-gold/10 rounded">Article / Analysis</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-lp-navy group-hover:text-lp-gold transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-lp-slate text-sm mb-8 flex-grow leading-relaxed">
                {article.excerpt}
              </p>
              <div className="text-lp-navy font-bold text-sm flex items-center gap-2 group-hover:text-lp-gold transition-colors">
                Read Analysis 
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;