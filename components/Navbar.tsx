import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-lp-navy border-b border-white/10 shadow-lg">
      <div className="lp-container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center group">
          <div className="bg-lp-white-off p-1.5 rounded-lg mr-3 shadow-inner">
            <img 
              src="/Launch path logo.png" 
              alt="LaunchPath Transportation" 
              className="h-8 md:h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-lp-white-off group-hover:text-lp-gold transition-colors">
            LaunchPath
          </span>
        </Link>
        
        <div className="flex items-center gap-6 lg:gap-8 text-sm font-bold">
          <Link to="/how-it-works" className="text-lp-white-off hover:text-lp-gold transition-colors hidden sm:block">How It Works</Link>
          <Link to="/resources" className="text-lp-white-off hover:text-lp-gold transition-colors hidden sm:block">Resources</Link>
          <Link to="/faq" className="text-lp-white-off hover:text-lp-gold transition-colors hidden sm:block">FAQ</Link>
          <Link to="/about" className="text-lp-white-off hover:text-lp-gold transition-colors hidden sm:block">About</Link>
          <Link 
            to="/apply" 
            className="bg-lp-gold text-lp-navy px-6 py-2.5 rounded-lg font-black hover:bg-lp-white-off hover:shadow-xl transition-all shadow-lg active:scale-[0.98]"
          >
            Apply for Guidance
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;