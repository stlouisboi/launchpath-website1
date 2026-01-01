import React, { useState } from 'react';

const LeadMagnet: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-lp-navy p-12 md:p-20 rounded-[3rem] border-t-8 border-lp-gold text-lp-white-off shadow-2xl relative overflow-hidden text-center">
        <h3 className="text-4xl font-extrabold mb-6 text-lp-gold">Briefing Authorized</h3>
        <p className="text-lp-white-off/70 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          The First 90 Days Risk Map™ has been prioritized for your review. Download the institutional briefing below.
        </p>
        <button 
          className="bg-lp-gold text-lp-navy px-12 py-5 rounded-2xl font-black transition-all text-xl shadow-2xl hover:bg-lp-white-off active:scale-[0.98] flex items-center gap-4 mx-auto"
          onClick={() => window.open('https://example.com/risk-map.pdf', '_blank')}
        >
          Download PDF Document
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </button>
      </div>
    );
  }

  return (
    <div id="risk-map-cta" className="bg-lp-white p-10 md:p-20 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(27,58,107,0.1)] border border-lp-slate/10 flex flex-col lg:flex-row gap-20 items-center overflow-hidden scroll-mt-24">
      <div className="flex-1">
        <div className="lp-alert mb-10 inline-block rounded-xl font-black text-[10px] uppercase tracking-[0.3em]">
          Institutional Risk Briefing
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-lp-navy mb-8 leading-[1.1]">
          The First 90 Days <br/> <span className="text-lp-gold">Risk Map™</span>
        </h2>
        <p className="text-xl text-lp-slate leading-relaxed mb-10 max-w-xl">
          The "Death Zone" for new carriers is day 1 to day 90. This briefing reveals the specific administrative failure points that bankrupt <span className="text-lp-navy font-bold">80% of new authorities.</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 py-6 border-t border-lp-slate/10">
          {[
            "Insurance audit windows",
            "Compliance Chokepoints",
            "Underwriter risk profiling",
            "Operational survival data"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm font-bold text-lp-navy uppercase tracking-tighter">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-lp-gold/10 text-lp-gold font-bold">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full lg:w-[450px] bg-lp-white-off p-12 rounded-[2.5rem] border border-lp-navy/5 shadow-inner">
        <div className="mb-10 text-center">
          <h4 className="text-2xl font-extrabold text-lp-navy mb-2">Secure Access</h4>
          <p className="text-[10px] text-lp-gold font-black uppercase tracking-[0.3em]">Institutional Grade Access</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase text-lp-slate tracking-widest ml-1">Legal First Name</label>
            <input 
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Robert"
              className="w-full p-5 rounded-xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 transition-all text-sm font-bold text-lp-navy"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase text-lp-slate tracking-widest ml-1">Professional Email</label>
            <input 
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@authority.com"
              className="w-full p-5 rounded-xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 transition-all text-sm font-bold text-lp-navy"
            />
          </div>
          <button type="submit" className="lp-primary-btn w-full mt-4 text-sm uppercase tracking-widest">
            Access Risk Map™
          </button>
          <p className="text-[10px] text-center text-lp-slate font-medium pt-4 opacity-70">
            Professional Use Only. Secure 256-bit Encryption.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadMagnet;