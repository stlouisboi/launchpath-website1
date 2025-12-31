import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-lp-white border-b border-gray-200">
      <div className="lp-container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img 
            src="/Launch path logo.png" 
            alt="LaunchPath Transportation" 
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <span className="font-bold text-xl tracking-tight hidden" style={{ display: 'none' }}>
            LaunchPath <span className="text-lp-red font-medium">Transportation</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-6 text-sm font-medium text-lp-dark">
          <Link to="/how-it-works" className="hover:text-lp-red transition-colors hidden sm:block">How It Works</Link>
          <Link to="/resources" className="hover:text-lp-red transition-colors hidden sm:block">Resources</Link>
          <Link to="/faq" className="hover:text-lp-red transition-colors hidden sm:block">FAQ</Link>
          <Link to="/about" className="hover:text-lp-red transition-colors hidden sm:block">About</Link>
          <Link 
            to="/apply" 
            className="bg-lp-red text-lp-white px-5 py-2 rounded font-semibold hover:bg-lp-black transition-all"
          >
            Apply
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;