import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const SCENARIOS = [
  { 
    id: 'flatbed', 
    label: 'Flatbed Compliance Model', 
    prompt: 'Cinematic wide shot of a pristine semi-truck with a flatbed trailer, perfectly secured cargo with red straps, driving down a scenic open highway during golden hour. Professional commercial lighting, 4k, institutional feel.',
    metrics: {
      insurance: "$12,500/yr (Tier 1)",
      maintenance: "98% Uptime",
      audit: "Pass (Zero Violations)"
    }
  },
  { 
    id: 'reefer', 
    label: 'Cold Chain Stability', 
    prompt: 'Close up of a refrigerated trailer moving through a highly efficient logistics distribution center, showing the temperature control unit humming perfectly. Modern logistics aesthetic, high resolution, professional commercial video.',
    metrics: {
      insurance: "$15,200/yr (Tier 1)",
      maintenance: "95% Uptime",
      audit: "Pass (Zero Violations)"
    }
  },
  { 
    id: 'dryvan', 
    label: 'High-Volume Dry Van', 
    prompt: 'A sleek white dry van semi-truck backing into a loading dock with extreme precision, distribution center background, professional atmosphere, daylight, cinematic quality.',
    metrics: {
      insurance: "$11,000/yr (Tier 1)",
      maintenance: "99% Uptime",
      audit: "Pass (Zero Violations)"
    }
  }
];

const CaseStudies: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState(SCENARIOS[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const loadingMessages = [
    "Initializing Strategic Simulation...",
    "Calibrating Regulatory Parameters...",
    "Modeling Compliance Trajectory...",
    "Compiling Visual Case Study...",
    "Finalizing Institutional Rendering..."
  ];

  useEffect(() => {
    document.title = "Carrier Simulations | LaunchPath Transportation Case Studies";
  }, []);

  const handleGenerate = async () => {
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
      await window.aistudio.openSelectKey();
      return;
    }

    setIsGenerating(true);
    setError(null);
    setVideoUrl(null);
    
    let messageIdx = 0;
    const msgInterval = setInterval(() => {
      setStatusMessage(loadingMessages[messageIdx % loadingMessages.length]);
      messageIdx++;
    }, 8000);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: selectedScenario.prompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await videoResponse.blob();
        setVideoUrl(URL.createObjectURL(blob));
      } else {
        throw new Error("Failed to retrieve simulation asset.");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setError("API Key Error. Please ensure you have selected a valid API key from a paid GCP project.");
        await window.aistudio.openSelectKey();
      } else {
        setError("The simulation failed to initialize. Please verify your connection and try again.");
      }
    } finally {
      clearInterval(msgInterval);
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-lp-white-off min-h-screen py-20">
      <div className="lp-container">
        <div className="max-w-4xl mb-16">
          <div className="lp-alert mb-8 inline-block rounded-xl font-black text-[10px] uppercase tracking-[0.3em]">
            Operational Simulations
          </div>
          <h1 className="text-5xl font-extrabold text-lp-navy mb-8 leading-tight">
            Authority <span className="text-lp-gold">In Motion.</span>
          </h1>
          <p className="text-xl text-lp-slate leading-relaxed">
            Visualize the outcome of a LaunchPath sequence. We use high-fidelity AI simulations to demonstrate the operational precision achieved through our Authority-First framework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-lp-navy p-10 rounded-[2.5rem] shadow-2xl border-t-8 border-lp-gold text-lp-white-off">
              <h3 className="text-2xl font-extrabold mb-6 text-lp-gold">Simulation Deck</h3>
              <div className="space-y-4 mb-10">
                {SCENARIOS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedScenario(s);
                      setVideoUrl(null);
                      setError(null);
                    }}
                    className={`w-full p-5 rounded-2xl font-bold text-left transition-all border-2 flex items-center justify-between ${
                      selectedScenario.id === s.id 
                      ? 'bg-lp-gold text-lp-navy border-lp-gold shadow-lg scale-[1.02]' 
                      : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span>{s.label}</span>
                    <div className={`w-2 h-2 rounded-full ${selectedScenario.id === s.id ? 'bg-lp-navy animate-pulse' : 'bg-white/20'}`}></div>
                  </button>
                ))}
              </div>

              <button
                disabled={isGenerating}
                onClick={handleGenerate}
                className="w-full lp-primary-btn flex items-center justify-center gap-3 py-4 text-sm tracking-widest uppercase disabled:opacity-50"
              >
                {isGenerating ? (
                  <div className="w-5 h-5 border-2 border-lp-navy border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                )}
                {isGenerating ? 'Processing...' : 'Run Simulation'}
              </button>
            </div>

            <div className="bg-lp-white p-8 rounded-[2rem] border border-lp-slate/10 shadow-sm">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-lp-gold mb-6">Success Metrics</h4>
              <div className="space-y-6">
                {Object.entries(selectedScenario.metrics).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center border-b border-lp-slate/5 pb-4">
                    <span className="text-xs font-bold text-lp-slate uppercase tracking-widest">{key}</span>
                    <span className="text-sm font-black text-lp-navy">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Viewer */}
          <div className="lg:col-span-8">
            <div className="bg-lp-navy rounded-[3rem] shadow-2xl border-8 border-lp-navy overflow-hidden aspect-video relative flex items-center justify-center group">
              {/* HUD Accents */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-lp-gold/40 z-20 pointer-events-none group-hover:border-lp-gold transition-colors"></div>
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-lp-gold/40 z-20 pointer-events-none group-hover:border-lp-gold transition-colors"></div>

              {videoUrl ? (
                <video 
                  controls 
                  autoPlay 
                  loop 
                  className="w-full h-full object-cover relative z-10"
                  src={videoUrl}
                />
              ) : isGenerating ? (
                <div className="text-center p-12 relative z-10 animate-fadeIn">
                   <div className="mb-10 flex justify-center">
                      <div className="relative w-24 h-24">
                        <div className="absolute inset-0 border-4 border-lp-gold/10 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-lp-gold border-t-transparent rounded-full animate-spin"></div>
                      </div>
                   </div>
                   <h3 className="text-2xl font-extrabold text-lp-white-off mb-4">{statusMessage}</h3>
                   <p className="text-lp-gold text-[10px] font-black uppercase tracking-[0.3em]">Institutional Data Stream // ACTIVE</p>
                </div>
              ) : error ? (
                <div className="text-center p-12 max-w-md relative z-10">
                  <div className="text-red-400 mb-6 flex justify-center">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-lp-white-off mb-4">Simulation Failed</h3>
                  <p className="text-lp-white-off/60 text-sm mb-8 leading-relaxed">{error}</p>
                  <button onClick={handleGenerate} className="lp-secondary-btn py-3 px-8 text-xs">Retry Simulation</button>
                </div>
              ) : (
                <div className="text-center p-12 relative z-10 group/ready">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover/ready:border-lp-gold transition-all duration-500">
                    <svg className="w-10 h-10 text-lp-gold group-hover/ready:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-lp-white-off mb-4">Awaiting Parameters</h3>
                  <p className="text-lp-white-off/50 italic text-sm">Select an operational scenario and run the simulation engine.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
