import React from 'react';

const GivePage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-48 pb-32 bg-cover bg-center text-white" style={{backgroundImage: "url('https://static.wixstatic.com/media/847726_9acbf0b372a344778e1b695e554160a3~mv2.jpg/v1/fill/w_1920,h_700,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/847726_9acbf0b372a344778e1b695e554160a3~mv2.jpg')"}}>
          <div className="absolute inset-0 bg-brand-dark-blue bg-opacity-70"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-serif font-bold">Give</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">Generosity is our privilege.</p>
          </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-6">Partnering in the Gospel</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          We believe that generous giving is a joyful act of worship that makes a tangible difference in our church, our community, and our world. Your contributions help fund our ministries, support our outreach partners, and spread the message of hope. Thank you for your faithfulness and partnership.
        </p>
        <a 
          href="#" 
          onClick={(e) => {e.preventDefault(); alert("Redirecting to our secure giving portal.");}}
          className="inline-block px-12 py-4 bg-brand-gold text-brand-dark-blue font-bold text-lg uppercase tracking-wider rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
        >
          Give Online
        </a>
        <p className="text-sm text-slate-500 mt-4">You will be redirected to our secure third-party giving platform.</p>
      </div>
    </div>
  );
};

export default GivePage;