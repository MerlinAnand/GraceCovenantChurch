import React, { useState } from 'react';
import { churchInfo } from '../data/mockData';

const GivePage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative pt-40 pb-24 bg-cover bg-center text-white" style={{backgroundImage: "url('/artifacts/bible_study_warmth_1763537438596.png')"}}>
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="relative z-10 text-center px-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">Generosity</h3>
            <h1 className="text-6xl md:text-7xl font-serif font-extrabold">Give</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">Generosity is our privilege.</p>
          </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-6">Partnering in the Gospel</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          We believe that generous giving is a joyful act of worship that makes a tangible difference in our church, our community, and our world. Your contributions help fund our ministries, support our outreach partners, and spread the message of hope. Thank you for your faithfulness and partnership.
        </p>

        {showComingSoon ? (
          <div className="bg-brand-cream border border-brand-gold/30 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">Online Giving is Coming Soon</h3>
            <p className="text-slate-600 leading-relaxed">
              We're setting up secure online giving. In the meantime, please reach out and we'll happily arrange it with you.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${churchInfo.email}`} className="px-8 py-3 bg-brand-dark-blue text-white font-bold uppercase tracking-wider rounded-full hover:bg-brand-blue transition-colors">
                Email Us
              </a>
              <a href={`tel:${churchInfo.phone.replace(/\s/g, '')}`} className="px-8 py-3 bg-white border-2 border-brand-dark-blue text-brand-dark-blue font-bold uppercase tracking-wider rounded-full hover:bg-brand-dark-blue hover:text-white transition-colors">
                Call {churchInfo.phone}
              </a>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowComingSoon(true)}
            className="inline-block px-12 py-4 bg-brand-gold text-brand-dark-blue font-bold text-lg uppercase tracking-wider rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            Give Online
          </button>
        )}
      </div>
    </div>
  );
};

export default GivePage;