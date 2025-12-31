
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lp-black text-lp-white pt-16 pb-8 border-t-4 border-lp-red">
      <div className="lp-container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6">
            <img 
              src="/Launch path logo.png" 
              alt="LaunchPath Transportation" 
              className="h-12 w-auto object-contain bg-lp-white p-1 rounded"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x60?text=LaunchPath';
              }}
            />
          </div>
          <p className="text-lp-gray text-sm leading-relaxed">
            Protecting new trucking authorities through education, sequencing, and risk-management frameworks.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-lp-gray">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-lp-red">Home</Link></li>
            <li><Link to="/how-it-works" className="hover:text-lp-red">How It Works</Link></li>
            <li><Link to="/resources" className="hover:text-lp-red">Resources</Link></li>
            <li><Link to="/about" className="hover:text-lp-red">About</Link></li>
            <li><Link to="/apply" className="hover:text-lp-red">Apply</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-lp-gray">Governance</h4>
          <ul className="space-y-3 text-sm">
            <li><span className="text-lp-gray cursor-default">Privacy Policy</span></li>
            <li><span className="text-lp-gray cursor-default">Terms of Service</span></li>
            <li><span className="text-lp-gray cursor-default">Compliance Disclaimer</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-lp-gray">Contact</h4>
          <p className="text-lp-gray text-sm mb-4">
            Professional inquiries only. We do not provide dispatch services.
          </p>
          <Link to="/apply" className="text-lp-red font-bold text-sm border-b border-lp-red pb-1">
            Submit Application &rarr;
          </Link>
        </div>
      </div>

      <div className="lp-container mt-16 pt-8 border-t border-lp-dark text-xs text-lp-gray flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} LaunchPath Transportation. All rights reserved.</p>
        <p className="max-w-md text-center md:text-right">
          Disclaimer: This is an educational platform. We do not provide legal, tax, or financial advice. We do not guarantee specific business outcomes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
