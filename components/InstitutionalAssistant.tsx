
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const InstitutionalAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string, thinking?: string }[]>([
    { role: 'assistant', content: "Welcome to LaunchPath Strategic Support. I am your institutional assistant. How can I assist with your authority compliance today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, transcribing]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        await handleTranscription(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone access denied:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleTranscription = async (blob: Blob) => {
    setTranscribing(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: {
            parts: [
              { inlineData: { mimeType: 'audio/webm', data: base64Audio } },
              { text: "Transcribe this audio strictly as it is spoken. Return only the transcription text." }
            ]
          }
        });

        const transcription = response.text || "";
        setInput(prev => prev + (prev ? ' ' : '') + transcription);
      };
    } catch (err) {
      console.error("Transcription failed:", err);
    } finally {
      setTranscribing(false);
    }
  };

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Using gemini-3-pro-preview with thinking mode for complex queries
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...messages, { role: 'user', content: userMessage }].map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        config: {
          thinkingConfig: { thinkingBudget: 32768 },
          systemInstruction: "You are the LaunchPath Strategic Assistant. You provide highly professional, compliance-focused advice for U.S. trucking owner-operators. You prioritize Authority-First Sequencing and institutional stability. You are concise, authoritative, and helpful. You never provide legal or financial advice directly but offer structural frameworks."
        }
      });

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response.text || "I'm having trouble connecting to the Strategic Data Core. Please try again."
      }]);
    } catch (err) {
      console.error("Chat failed:", err);
      setMessages(prev => [...prev, { role: 'assistant', content: "An operational timeout occurred. Please re-initialize the query." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Trigger Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-lp-navy text-lp-gold rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border-2 border-lp-gold group"
        >
          <svg className="w-8 h-8 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-lp-white w-[380px] h-[600px] rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(27,58,107,0.4)] border border-lp-slate/10 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-lp-navy p-6 flex items-center justify-between border-b border-lp-gold/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-lp-gold/10 rounded-full flex items-center justify-center border border-lp-gold text-lp-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lp-white-off font-black text-sm uppercase tracking-widest">Institutional AI</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-lp-emerald animate-pulse"></div>
                  <span className="text-[9px] font-bold text-lp-white-off/60 uppercase">Strategic Core Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-lp-white-off/40 hover:text-lp-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-lp-white-off/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm border ${
                  m.role === 'user' 
                  ? 'bg-lp-navy text-lp-white-off border-lp-navy rounded-tr-none' 
                  : 'bg-lp-white text-lp-navy border-lp-slate/10 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-lp-white border border-lp-slate/10 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-lp-gold rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-lp-gold rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-lp-gold rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            {transcribing && (
              <div className="flex justify-end">
                <div className="bg-lp-gold/10 border border-lp-gold/30 p-3 rounded-xl flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-lp-gold border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-[10px] font-black text-lp-gold uppercase tracking-widest">Transcribing Secure Audio...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-lp-white border-t border-lp-slate/10">
            <form onSubmit={handleSend} className="relative">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Submit your strategic inquiry..."
                className="w-full bg-lp-white-off border-2 border-lp-slate/10 rounded-2xl p-4 pr-24 text-sm font-bold text-lp-navy focus:border-lp-gold focus:ring-0 resize-none min-h-[80px]"
              />
              <div className="absolute right-3 bottom-3 flex items-center gap-2">
                <button 
                  type="button"
                  onMouseDown={startRecording}
                  onMouseUp={stopRecording}
                  onMouseLeave={stopRecording}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isRecording 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'bg-lp-gold/10 text-lp-gold hover:bg-lp-gold hover:text-lp-navy'
                  }`}
                  title="Hold to transcribe audio"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 bg-lp-navy text-lp-white-off rounded-xl flex items-center justify-center hover:bg-lp-gold hover:text-lp-navy disabled:opacity-30 disabled:hover:bg-lp-navy transition-all shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
            <p className="mt-3 text-[9px] text-center text-lp-slate font-black uppercase tracking-widest opacity-50">
              Encrypted Protocol // Gemini 3 Pro Reasoning
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstitutionalAssistant;
