import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About LaunchPath | Education Built on Structure, Responsibility, and Stewardship";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "LaunchPath is a compliance-first education program for serious owner-operators. We focus on structure, clarity, and responsible operation—no dispatching, no guarantees, no hype.");
    }
  }, []);

  return (
    <div className="py-20 space-y-24">
      <section className="lp-container max-w-3xl">
        <h1 className="text-5xl font-bold text-lp-black mb-10">Principled Stewardship</h1>
        <div className="space-y-6 text-xl text-lp-dark leading-relaxed font-light">
          <p>
            LaunchPath Transportation was built on a single observation: <span className="font-bold">Good people fail in trucking because of bad timing.</span>
          </p>
          <p>
            The industry is full of "gurus" selling dreams of easy money. We exist as the counterbalance. We are an educational institution dedicated to order, sequencing, and the responsible management of a motor carrier authority.
          </p>
          <p>
            We believe that a trucking company is first and foremost a <span className="text-lp-red font-bold underline">safety management business</span> that happens to move freight. When that order is flipped, failure is inevitable.
          </p>
        </div>
      </section>

      <section className="bg-lp-charcoal py-24 text-lp-white">
        <div className="lp-container grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="space-y-12">
              {[
                { title: "Precision over Speed", text: "Moving fast without systems is just accelerating towards a breakdown. We value the quiet, meticulous build." },
                { title: "Transparency of Risk", text: "We will never minimize the dangers of this industry. Understanding the risk is the only way to manage it." },
                { title: "Institutional Trust", text: "We build systems that outlast individuals. The process is the hero, not the person." }
              ].map((v, i) => (
                <div key={i} className="border-l-2 border-lp-red pl-6">
                  <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                  <p className="text-lp-gray text-sm">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-lp-dark p-10 rounded shadow-inner">
            <h2 className="text-3xl font-bold mb-8 text-lp-red">Our Boundaries</h2>
            <p className="text-lp-gray mb-8 italic">To protect our students and our integrity, we adhere to strict operating boundaries.</p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="bg-lp-red/20 text-lp-red w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">1</span>
                <div>
                  <h5 className="font-bold">No Dispatching</h5>
                  <p className="text-xs text-lp-gray">We do not manage loads. Our focus is on the carrier entity, not daily logistics.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-lp-red/20 text-lp-red w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">2</span>
                <div>
                  <h5 className="font-bold">Educational Scope Only</h5>
                  <p className="text-xs text-lp-gray">We provide framework and guidance. We are not a law firm or a licensed accounting agency.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-lp-red/20 text-lp-red w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">3</span>
                <div>
                  <h5 className="font-bold">Merit-Based Guidance</h5>
                  <p className="text-xs text-lp-gray">We do not guarantee results. Outcomes depend on the carrier's execution of the framework.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-container text-center py-12">
        <p className="text-lp-gray text-sm uppercase tracking-widest font-bold mb-4">Mission Statement</p>
        <h3 className="text-3xl font-bold text-lp-black italic">"To reduce preventable carrier failure through structured education."</h3>
      </section>
    </div>
  );
};

export default About;