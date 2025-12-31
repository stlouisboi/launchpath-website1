import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
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

  return (
    <div className="py-20 lp-container max-w-3xl">
      <h1 className="text-4xl font-bold text-lp-black mb-12">Frequently Asked Questions</h1>
      <div className="space-y-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-200 pb-8">
            <h3 className="text-xl font-bold text-lp-black mb-4">{faq.q}</h3>
            <p className="text-lp-dark leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 p-8 bg-lp-light rounded-xl border border-gray-200">
        <h4 className="font-bold mb-4">Still have questions?</h4>
        <p className="text-sm text-lp-dark mb-6">If you are ready for a serious structural briefing, we recommend submitting a professional application.</p>
        <Link to="/apply" className="text-lp-red font-bold hover:underline">Apply for Guidance &rarr;</Link>
      </div>
    </div>
  );
};

export default FAQ;