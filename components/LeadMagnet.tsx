
import React, { useState } from 'react';

const LeadMagnet: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
      // Placeholder for email provider integration
      console.log('Lead captured:', { name, email });
    }
  };

  if (submitted) {
    return (
      <div className="bg-lp-charcoal p-8 md:p-12 rounded-xl border-l-8 border-lp-red text-lp-white">
        <h3 className="text-2xl font-bold mb-4">Request Received</h3>
        <p className="text-lp-gray mb-8">
          Thank you for your interest in The First 90 Days Risk Map™. Your briefing is ready.
        </p>
        <button 
          className="bg-lp-red hover:bg-red-700 px-8 py-4 rounded font-bold transition-all text-lg"
          onClick={() => window.open('https://example.com/risk-map.pdf', '_blank')}
        >
          Download PDF Now
        </button>
      </div>
    );
  }

  return (
    <div className="bg-lp-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1">
        <span className="text-lp-red font-bold text-sm tracking-widest uppercase mb-4 block">Proprietary Asset</span>
        <h2 className="text-3xl md:text-4xl font-bold text-lp-black mb-6">
          The First 90 Days Risk Map™
        </h2>
        <p className="text-lp-dark mb-6 leading-relaxed">
          The first 90 days are the most dangerous period for a new authority. This map details the specific regulatory and financial traps that cause 80% of preventable carrier failures.
        </p>
        <ul className="space-y-3 text-sm text-lp-gray italic mb-4">
          <li>• Critical insurance audit windows</li>
          <li>• The "Compliance Chokepoint" schedule</li>
          <li>• Data-driven survival benchmarks</li>
        </ul>
      </div>
      
      <div className="w-full md:w-1/3 bg-lp-light p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-lp-dark mb-1">First Name</label>
            <input 
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lp-red"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-lp-dark mb-1">Professional Email</label>
            <input 
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lp-red"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-lp-black text-lp-white py-4 rounded font-bold hover:bg-lp-red transition-all"
          >
            Access Risk Map™
          </button>
          <p className="text-[10px] text-lp-gray text-center mt-2 uppercase tracking-tighter">
            Strict professional privacy. No marketing hype.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadMagnet;
