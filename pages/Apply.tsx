import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CONCERNS } from '../constants';
import { GoogleGenAI } from "@google/genai";

const Apply: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'filling' | 'verifying' | 'activated'>('filling');
  const [emailContent, setEmailContent] = useState<string>('');
  const [isGeneratingEmail, setIsGeneratingEmail] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    dotStatus: 'No DOT Number Yet',
    mcStatus: 'No MC Number Yet',
    concern: '',
    goals: '',
    consent: false
  });

  useEffect(() => {
    // Check if user is returning from a "verification link"
    if (searchParams.get('token') === 'simulated-activation-token') {
      setStatus('activated');
    }
  }, [searchParams]);

  useEffect(() => {
    if (status === 'filling') {
      document.title = `Application Phase ${step} - LaunchPath Transportation`;
    } else if (status === 'verifying') {
      document.title = `Verification Required - LaunchPath Transportation`;
    } else {
      document.title = `Application Catalogued - LaunchPath Transportation`;
    }
  }, [step, status]);

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const generateVerificationEmail = async (userName: string, userEmail: string) => {
    setIsGeneratingEmail(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a formal, institutional email for verifying an application to 'LaunchPath Transportation'. 
        The recipient is ${userName} at ${userEmail}. 
        The tone should be professional, serious, and compliance-focused. 
        Mention that this is a mandatory step in the 'Principal Identity Authentication Protocol'. 
        Include a placeholder for an activation link.`,
        config: {
          systemInstruction: "You are an automated communications officer for a high-end transportation compliance firm. Use institutional and authoritative language."
        }
      });
      setEmailContent(response.text || "Verification protocol initialized. Please check your secure inbox.");
    } catch (error) {
      console.error("Email generation failed:", error);
      setEmailContent("Verification protocol initialized. Please activate your account via the secure link sent to your registered address.");
    } finally {
      setIsGeneratingEmail(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      handleNext();
    } else {
      setStatus('verifying');
      window.scrollTo(0, 0);
      await generateVerificationEmail(formData.name, formData.email);
    }
  };

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Final Success State
  if (status === 'activated') {
    return (
      <div className="lp-container py-32 flex justify-center">
        <div className="bg-lp-white p-16 rounded-[3rem] shadow-2xl border-t-[12px] border-lp-gold max-w-2xl w-full text-center animate-fadeIn">
          <div className="w-20 h-20 bg-lp-gold/10 text-lp-gold rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold text-lp-navy mb-6">Identity Authenticated</h2>
          <p className="text-lp-slate text-lg mb-12 leading-relaxed">
            Activation successful. Your organizational profile is now formally registered in the <span className="text-lp-navy font-bold">Institutional Vetting Queue</span>.
          </p>
          <div className="text-left bg-lp-white-off p-10 rounded-2xl border border-lp-slate/10">
            <p className="font-black text-lp-navy mb-6 uppercase tracking-[0.2em] text-[10px]">Reference ID: LP-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex gap-4 items-center text-lp-navy">
                <span className="w-2 h-2 rounded-full bg-lp-gold"></span>
                Credential verification protocol finalized.
              </li>
              <li className="flex gap-4 items-center text-lp-navy">
                <span className="w-2 h-2 rounded-full bg-lp-gold"></span>
                SAFER risk-matching analysis initiated.
              </li>
              <li className="flex gap-4 items-center text-lp-slate/50">
                <span className="w-2 h-2 rounded-full bg-lp-slate/30 animate-pulse"></span>
                Assigned to Manual Strategic Review Desk.
              </li>
            </ul>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="lp-primary-btn mt-12 w-full text-lg uppercase tracking-widest"
          >
            Access Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Verification Pending State
  if (status === 'verifying') {
    return (
      <div className="lp-container py-32 flex justify-center">
        <div className="bg-lp-white p-12 md:p-16 rounded-[3rem] shadow-2xl border-t-[12px] border-lp-navy max-w-3xl w-full">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 bg-lp-navy/5 text-lp-navy rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-lp-navy mb-4">Identity Verification Pending</h2>
            <p className="text-lp-slate text-lg max-w-xl">
              A secure activation link has been dispatched to <span className="text-lp-navy font-bold">{formData.email}</span>. You must authorize this request to proceed with the vetting queue.
            </p>
          </div>

          <div className="bg-lp-white-off p-8 rounded-2xl border border-lp-slate/10 mb-10 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-black text-lp-slate/40 uppercase tracking-widest">Digital Briefing Preview</span>
              {isGeneratingEmail && <span className="text-[10px] text-lp-gold font-bold animate-pulse">GENERATING SECURE PROTOCOL...</span>}
            </div>
            <div className="prose prose-sm max-w-none text-lp-slate font-medium whitespace-pre-wrap">
              {emailContent || "Initializing secure communication channel..."}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="lp-alert rounded-xl text-center">
              <p className="text-xs font-bold italic">Check your "Junk" or "Clutter" folders if the message is not visible in your primary inbox within 120 seconds.</p>
            </div>
            <div className="flex gap-4">
               <button 
                onClick={() => window.location.reload()}
                className="lp-secondary-btn flex-1 text-xs uppercase tracking-widest"
              >
                Resend Activation Link
              </button>
              {/* Simulation Helper for Demo */}
              <button 
                onClick={() => window.location.href = window.location.pathname + '?token=simulated-activation-token'}
                className="bg-lp-gold/10 text-lp-gold border-2 border-lp-gold px-8 py-4 rounded-xl font-bold flex-1 text-xs uppercase tracking-widest hover:bg-lp-gold hover:text-white transition-all"
              >
                Simulate Link Activation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Application Entry State
  return (
    <div className="bg-lp-white-off min-h-screen">
      <div className="lp-container py-24">
        
        {/* Navigation / Progress */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex justify-between items-center px-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center gap-3 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg transition-all duration-500 border-2 ${step >= s ? 'bg-lp-navy text-lp-white-off border-lp-navy shadow-xl' : 'bg-lp-white text-lp-slate/40 border-lp-slate/10'}`}>
                  {step > s ? '✓' : s}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${step >= s ? 'text-lp-navy' : 'text-lp-slate/40'}`}>
                  {s === 1 ? 'Authentication' : s === 2 ? 'Diagnostic' : 'Alignment'}
                </span>
                {s < 3 && (
                  <div className={`absolute h-1 top-7 left-full w-[calc(100vw/3)] -z-0 transition-all duration-700 ${step > s ? 'bg-lp-gold' : 'bg-lp-slate/10'}`} style={{ width: 'clamp(20px, 15vw, 200px)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
          {/* Sidebar - Institutional Context */}
          <div className="lg:col-span-4">
            <div className="bg-lp-navy p-10 rounded-[2.5rem] shadow-2xl border-t-8 border-lp-gold text-lp-white-off mb-8">
              <h3 className="text-2xl font-extrabold mb-6 text-lp-gold">Phase {step}</h3>
              <div className="text-lp-white-off/70 text-sm leading-relaxed mb-8 space-y-4">
                {step === 1 && (
                  <p>Establishing the <span className="text-lp-white font-bold">Principal Identity</span>. This protocol ensures that all correspondence and guidance are directed to the authorized legal decision-maker of the carrier entity.</p>
                )}
                {step === 2 && (
                  <p>Conducting the <span className="text-lp-white font-bold">Regulatory Diagnostic</span>. We evaluate your current standing with the Department of Transportation to identify latent risk factors in your operational sequence.</p>
                )}
                {step === 3 && (
                  <p>Performing the <span className="text-lp-white font-bold">Strategic Mandate Evaluation</span>. This final phase determines if your organizational objectives are compatible with our stability-focused framework.</p>
                )}
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/10 text-[10px] font-bold uppercase tracking-widest text-lp-white-off/40 italic">
                "Precision in documentation is the precursor to operational excellence."
              </div>
            </div>
            <div className="lp-card p-8">
               <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-lp-navy/40">Reference Documentation</h4>
               <ul className="space-y-4">
                 <li><a href="#/resources" className="text-sm font-bold text-lp-navy hover:text-lp-gold flex items-center gap-2"><span>&rarr;</span> 90-Day Operational Risk Map</a></li>
                 <li><a href="#/faq" className="text-sm font-bold text-lp-navy hover:text-lp-gold flex items-center gap-2"><span>&rarr;</span> Regulatory Glossary</a></li>
               </ul>
            </div>
          </div>

          {/* Form - Clear Institutional Language */}
          <div className="lg:col-span-8">
            <div className="bg-lp-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-lp-slate/10 flex flex-col min-h-[600px]">
              <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                {step === 1 && (
                  <div className="space-y-10 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-lp-slate tracking-[0.2em]">Principal Representative Name</label>
                        <input required type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Full legal name of the applicant" className="w-full p-5 rounded-xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 font-bold text-lp-navy" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-lp-slate tracking-[0.2em]">Designated Corporate Email</label>
                        <input required type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} placeholder="official@carrier-entity.com" className="w-full p-5 rounded-xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 font-bold text-lp-navy" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-lp-slate tracking-[0.2em]">Direct Communication Line</label>
                        <input required type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="(XXX) XXX-XXXX" className="w-full p-5 rounded-xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 font-bold text-lp-navy" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-lp-slate tracking-[0.2em]">Primary Domicile Jurisdiction</label>
                        <input required type="text" value={formData.state} onChange={(e) => updateField('state', e.target.value)} placeholder="State of registration" className="w-full p-5 rounded-xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 font-bold text-lp-navy" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-10 animate-fadeIn">
                    <div className="lp-alert rounded-2xl">
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2">Technical Integrity Notice</p>
                       <p className="text-sm font-medium leading-relaxed italic">Verification of USDOT and MC credentials is required to determine the specific compliance track for your organization.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-lp-slate tracking-widest">USDOT Registration Status</label>
                        <select value={formData.dotStatus} onChange={(e) => updateField('dotStatus', e.target.value)} className="w-full p-5 rounded-xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 font-bold text-lp-navy appearance-none cursor-pointer">
                          <option>Registry Entry: Active</option>
                          <option>Registry Entry: Pending</option>
                          <option>No Registry Entry Initialized</option>
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-lp-slate tracking-widest">Operating Authority (MC) Status</label>
                        <select value={formData.mcStatus} onChange={(e) => updateField('mcStatus', e.target.value)} className="w-full p-5 rounded-xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 font-bold text-lp-navy appearance-none cursor-pointer">
                          <option>Grant of Authority: Active</option>
                          <option>Grant of Authority: Dismissed/Revoked</option>
                          <option>No Authority Granted Yet</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-10 animate-fadeIn">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-lp-slate tracking-widest">Primary Organizational Constraint</label>
                      <select required value={formData.concern} onChange={(e) => updateField('concern', e.target.value)} className="w-full p-5 rounded-xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 font-bold text-lp-navy appearance-none cursor-pointer">
                        <option value="">Select Primary Risk Vector...</option>
                        {CONCERNS.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-lp-slate tracking-widest">Strategic Mandate (12-Month Objective)</label>
                      <textarea required rows={4} value={formData.goals} onChange={(e) => updateField('goals', e.target.value)} className="w-full p-6 rounded-2xl border-2 border-lp-slate/20 bg-lp-white-off focus:border-lp-navy focus:ring-0 font-bold text-lp-navy resize-none" placeholder="Detail your institutional objectives and success criteria..."></textarea>
                    </div>
                    <div className="lp-alert rounded-2xl flex items-start gap-4">
                      <input type="checkbox" required checked={formData.consent} onChange={(e) => updateField('consent', e.target.checked)} className="mt-1 w-6 h-6 rounded border-2 border-lp-gold text-lp-navy focus:ring-lp-navy" />
                      <p className="text-[11px] font-bold leading-relaxed">I attest that the provided data is accurate to the best of my knowledge and acknowledge that LaunchPath is an educational consultancy firm, not a provider of legal or financial advice.</p>
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-16 flex justify-between gap-6">
                  {step > 1 && (
                    <button type="button" onClick={handleBack} className="lp-secondary-btn flex-grow text-sm uppercase tracking-widest">Previous Phase</button>
                  )}
                  <button type="submit" className="lp-primary-btn flex-grow text-sm uppercase tracking-[0.2em]">
                    {step < 3 ? 'Continue Evaluation' : 'Begin Activation Protocol'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;