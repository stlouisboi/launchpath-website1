import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadMagnet from '../components/LeadMagnet';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "LaunchPath Transportation | Protect Your Authority Before Your First Load";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Compliance-first education and group coaching for U.S. owner-operators. Learn the sequence that protects authority, insurance, and operations—without shortcuts or hype.");
    }
  }, []);

  return (
    <div className="flex flex-col gap-24 py-16">
      {/* Hero Section */}
      <section className="lp-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-lp-black leading-tight mb-8">
            Protect your authority <br/>
            <span className="text-lp-red">before you haul your first load.</span>
          </h1>
          <p className="text-xl text-lp-dark mb-10 leading-relaxed max-w-xl">
            LaunchPath Transportation provides compliance-first education and structured guidance for U.S. owner-operators. We focus on risk reduction, not revenue hype.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/apply" 
              className="bg-lp-black text-lp-white px-8 py-4 rounded font-bold text-center hover:bg-lp-red transition-all"
            >
              Apply for Guidance
            </Link>
            <Link 
              to="/how-it-works" 
              className="border-2 border-lp-black text-lp-black px-8 py-4 rounded font-bold text-center hover:bg-lp-light transition-all"
            >
              The System Explained
            </Link>
          </div>
        </div>
        <div className="hidden lg:block relative h-[500px] bg-lp-charcoal rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800&grayscale=1" 
            alt="Trucking Infrastructure" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="bg-lp-white/90 backdrop-blur p-8 rounded border-l-4 border-lp-red">
               <p className="text-sm font-bold uppercase tracking-widest text-lp-gray mb-2">Internal Briefing</p>
               <h3 className="text-2xl font-bold text-lp-black">The First 90 Days Risk Map™</h3>
               <p className="mt-4 text-lp-dark">The majority of carrier failures are preventable through proper sequencing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Failure Section */}
      <section className="bg-lp-charcoal py-24 text-lp-white">
        <div className="lp-container">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What shuts carriers down early?</h2>
            <p className="text-lp-gray text-lg mb-12">
              Most new operators fail before their first renewal because they prioritize "moving freight" over building an authority.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Insurance Volatility", text: "Underwriters often cancel new policies within 45 days if safety management systems aren't visible." },
              { title: "Compliance Lag", text: "A 30-day delay in Drug & Alcohol Clearinghouse or ELD setup triggers immediate audits." },
              { title: "Sequencing Errors", text: "Acquiring equipment before securing viable insurance results in burning capital without revenue." }
            ].map((item, idx) => (
              <div key={idx} className="bg-lp-dark p-8 rounded border border-lp-dark hover:border-lp-red transition-colors">
                <h4 className="font-bold text-xl mb-4">{item.title}</h4>
                <p className="text-lp-gray text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proprietary Framework Section */}
      <section className="lp-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-lp-black mb-4">How results happen</h2>
          <p className="text-lp-dark max-w-2xl mx-auto">
            Our framework is designed for Decision Compression™—removing false options so you only take the steps that matter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "01", title: "Authority-First Sequencing™", text: "Ensuring your administrative foundation is unshakeable before operational overhead exists." },
            { tag: "02", title: "Decision Compression™", text: "Eliminating the 'analysis paralysis' of regulatory choice with pre-vetted compliance paths." },
            { tag: "03", title: "Protected Build Window™", text: "A structured 8-week period to finalize your systems without the pressure of a truck payment." },
            { tag: "04", title: "Revenue After Readiness™", text: "Delayed launch ensures that when you haul, you're not one inspection away from bankruptcy." }
          ].map((card, i) => (
            <div key={i} className="bg-lp-white p-6 border-t-4 border-lp-red shadow-sm flex flex-col h-full">
              <span className="text-lp-red font-black text-2xl mb-4 opacity-30">{card.tag}</span>
              <h4 className="font-bold text-lg mb-3 leading-tight">{card.title}</h4>
              <p className="text-sm text-lp-dark leading-relaxed mt-auto">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="lp-container">
        <LeadMagnet />
      </section>

      {/* Boundaries Section */}
      <section className="bg-lp-light py-20 border-y border-gray-200">
        <div className="lp-container flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Service Boundaries</h2>
            <p className="text-lp-dark mb-8">
              To maintain integrity, we clearly define what we are NOT. We are an educational organization focused on sustainable structure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-lp-red text-xl font-bold">×</span>
                <span className="text-sm font-medium">No Dispatching</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lp-red text-xl font-bold">×</span>
                <span className="text-sm font-medium">No Legal Advice</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lp-red text-xl font-bold">×</span>
                <span className="text-sm font-medium">No Load Guarantees</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lp-red text-xl font-bold">×</span>
                <span className="text-sm font-medium">No Income Promises</span>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-lp-white p-8 rounded border border-gray-200 shadow-sm self-center">
            <h3 className="text-xl font-bold mb-4">Application Ready?</h3>
            <p className="text-lp-dark text-sm mb-6 leading-relaxed">
              We work with serious professionals who understand that a trucking company is a high-risk logistics business, not a "money hack."
            </p>
            <Link 
              to="/apply" 
              className="inline-block bg-lp-red text-lp-white px-6 py-3 rounded font-bold hover:bg-lp-black transition-all"
            >
              Apply if you’re ready to build it right.
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;