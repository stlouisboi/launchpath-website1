
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Resources from './pages/Resources';
import About from './pages/About';
import Apply from './pages/Apply';
import FAQ from './pages/FAQ';
import CaseStudies from './pages/CaseStudies';
import InstitutionalAssistant from './components/InstitutionalAssistant';

// Scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>
        <Footer />
        <InstitutionalAssistant />
      </div>
    </Router>
  );
};

export default App;
