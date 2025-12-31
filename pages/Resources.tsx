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
    <div className="py-20 space-y-24">
      <section className="lp-container">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-lp-black mb-4">Briefings & Briefcase Assets</h1>
          <p className="text-lp-dark">Tools and knowledge to secure your authority against common operational risks.</p>
        </div>
        <LeadMagnet />
      </section>

      <section className="lp-container">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-lp-red block"></span>
          Knowledge Library
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div key={article.slug} className="group bg-lp-white border border-gray-200 p-8 flex flex-col hover:shadow-lg transition-all cursor-pointer">
              <span className="text-[10px] uppercase font-black text-lp-gray mb-3 tracking-widest">Article / Analysis</span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-lp-red transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-lp-dark text-sm mb-8 flex-grow">
                {article.excerpt}
              </p>
              <button className="text-lp-black font-bold text-sm border-b-2 border-lp-black w-fit hover:border-lp-red transition-colors">
                Read Analysis &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SEO/Sitemap Section */}
      <section className="bg-lp-light py-12 border-t border-gray-200">
        <div className="lp-container">
          <div className="bg-lp-white p-8 rounded border border-gray-200">
            <h4 className="font-bold text-lp-black mb-4">Quick Sitemap</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <a href="#/" className="text-lp-gray hover:text-lp-red underline">Home Page</a>
              <a href="#/how-it-works" className="text-lp-gray hover:text-lp-red underline">System Framework</a>
              <a href="#/resources" className="text-lp-gray hover:text-lp-red underline">Compliance Library</a>
              <a href="#/about" className="text-lp-gray hover:text-lp-red underline">About the Firm</a>
              <a href="#/apply" className="text-lp-gray hover:text-lp-red underline">Application Form</a>
              <a href="#/faq" className="text-lp-gray hover:text-lp-red underline">FAQ</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;