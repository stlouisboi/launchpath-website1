import React, { useState, useEffect } from 'react';
import { CONCERNS } from '../constants';

const Apply: React.FC = () => {
  useEffect(() => {
    document.title = "Apply to LaunchPath | A Structured Path for Serious Owner-Operators";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "This is not for everyone. Apply if you want a compliance-first, structured path designed to protect authority and insurance before chasing revenue.");
    }
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="lp-container py-32 text-center max-w-xl">
        <div className="bg-lp-white p-12 rounded-xl shadow-2xl border-t-8 border-lp-red">
          <h2 className="text-3xl font-bold text-lp-black mb-4">Application Submitted</h2>
          <p className="text-lp-dark mb-8 leading-relaxed">
            Thank you for your honesty. Our team reviews every application for professional fit. If your goals align with the LaunchPath sequencing framework, we will contact you within 48 business hours.
          </p>
          <div className="text-left bg-lp-light p-6 rounded text-xs text-lp-gray">
            <p className="font-bold mb-2 uppercase">Next Steps:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Review the Risk Map™ in your email</li>
              <li>Wait for our initial internal assessment</li>
              <li>Schedule a structural briefing if requested</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lp-container py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <h1 className="text-5xl font-bold text-lp-black mb-8">This is not for everyone.</h1>
        <p className="text-xl text-lp-dark mb-10 leading-relaxed">
          LaunchPath guidance is reserved for owner-operators who are committed to institutional-grade operations. We prioritize those who are pre-launch or in the early "Build Window."
        </p>
        
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="bg-lp-black text-lp-white w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold text-lg">Selective Review</h4>
              <p className="text-lp-gray text-sm">We only accept applicants who show a commitment to compliance over "quick money."</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-lp-black text-lp-white w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold text-lg">Strategic Alignment</h4>
              <p className="text-lp-gray text-sm">Our systems require a specific order of operations. If you are already established and failing, our approach may require a reset.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-lp-black text-lp-white w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold text-lg">No False Promises</h4>
              <p className="text-lp-gray text-sm">We won't tell you what you want to hear. We'll tell you what the safety auditor will look for.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lp-white p-8 md:p-12 shadow-2xl rounded-xl border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Full Name</label>
              <input required type="text" className="w-full p-4 bg-lp-light border-0 focus:ring-2 focus:ring-lp-red rounded" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Professional Email</label>
              <input required type="email" className="w-full p-4 bg-lp-light border-0 focus:ring-2 focus:ring-lp-red rounded" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Phone Number</label>
              <input required type="tel" className="w-full p-4 bg-lp-light border-0 focus:ring-2 focus:ring-lp-red rounded" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2">State of Operation</label>
              <input required type="text" className="w-full p-4 bg-lp-light border-0 focus:ring-2 focus:ring-lp-red rounded" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-4">Authority Status</label>
            <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-lp-gray font-bold">DOT Status</span>
                 <select className="p-4 bg-lp-light border-0 rounded">
                   <option>DOT Active</option>
                   <option>DOT Pending/None</option>
                 </select>
               </div>
               <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-lp-gray font-bold">MC Status</span>
                 <select className="p-4 bg-lp-light border-0 rounded">
                   <option>MC Active</option>
                   <option>MC Inactive/None</option>
                   <option>Never Had One</option>
                 </select>
               </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-2">Primary Structural Concern</label>
            <select required className="w-full p-4 bg-lp-light border-0 focus:ring-2 focus:ring-lp-red rounded">
              <option value="">Select a concern...</option>
              {CONCERNS.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-2">What are you trying to protect/build?</label>
            <textarea 
              required
              rows={4} 
              className="w-full p-4 bg-lp-light border-0 focus:ring-2 focus:ring-lp-red rounded"
              placeholder="Describe your current situation and goals..."
            ></textarea>
          </div>

          <div className="flex items-start gap-3">
            <input required type="checkbox" className="mt-1 w-4 h-4 text-lp-red focus:ring-lp-red" />
            <p className="text-xs text-lp-gray leading-relaxed">
              I understand that LaunchPath provides education and structure, not legal advice or load procurement. I consent to being contacted regarding my application.
            </p>
          </div>

          <button 
            type="submit"
            className="w-full bg-lp-black text-lp-white py-5 rounded font-bold hover:bg-lp-red transition-all text-lg"
          >
            Submit Professional Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;