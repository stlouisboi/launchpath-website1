import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lp-navy text-lp-white-off pt-24 pb-12 border-t-[12px] border-lp-gold">
      <div className="lp-container grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-8 inline-block bg-lp-white-off p-2 rounded-xl">
            <img 
              src="/Launch path logo.png" 
              alt="LaunchPath Transportation" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x60?text=LaunchPath';
              }}
            />
          </div>
          <p className="text-lp-white-off/60 text-sm leading-relaxed mb-8 font-medium">
            Protecting new trucking authorities through education, sequencing, and risk-management frameworks.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-lp-gold hover:text-lp-white-off transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="text-lp-gold hover:text-lp-white-off transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-lp-gold">Navigation</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><Link to="/" className="hover:text-lp-gold transition-colors">Home Portal</Link></li>
            <li><Link to="/how-it-works" className="hover:text-lp-gold transition-colors">Sequence Framework</Link></li>
            <li><Link to="/resources" className="hover:text-lp-gold transition-colors">Compliance Library</Link></li>
            <li><Link to="/about" className="hover:text-lp-gold transition-colors">Our Mission</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-lp-gold">Legal Scope</h4>
          <ul className="space-y-4 text-xs font-bold text-lp-white-off/50">
            <li>Privacy & Data Integrity</li>
            <li>Terms of Education</li>
            <li>Institutional Disclaimer</li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-lp-gold">Guidance</h4>
          <p className="text-lp-white-off/60 text-sm mb-8 leading-relaxed font-medium">
            Professional Vetting Inquiry. We do not provide dispatching or brokerage.
          </p>
          <Link to="/apply" className="text-lp-gold font-black text-xs border-b-2 border-lp-gold pb-1 hover:text-lp-white-off hover:border-lp-white-off transition-all">
            Secure Application &rarr;
          </Link>
        </div>
      </div>

      <div className="lp-container mt-20 pt-10 border-t border-white/10 text-[10px] text-lp-white-off/40 flex flex-col md:flex-row justify-between items-center gap-6 font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} LaunchPath Transportation. Authority Secured.</p>
        <p className="max-w-md text-center md:text-right normal-case tracking-normal font-medium opacity-60">
          Educational platform only. We do not provide legal, tax, or financial advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;