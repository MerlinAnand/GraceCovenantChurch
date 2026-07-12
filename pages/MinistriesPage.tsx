
import React from 'react';
import { ministries } from '../data/mockData';
import type { Ministry } from '../types';
import Reveal from '../components/Reveal';

const MinistryCard: React.FC<{ ministry: Ministry, index: number }> = ({ ministry, index }) => {
  const isReversed = index % 2 !== 0;
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
      <Reveal variant={isReversed ? 'right' : 'up'} className={`${isReversed ? 'md:col-start-2' : ''}`}>
        <img src={ministry.imageUrl} alt={ministry.name} className="rounded-lg shadow-xl" />
      </Reveal>
      <Reveal className={`${isReversed ? 'md:col-start-1' : ''}`}>
        <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-4">{ministry.name}</h2>
        <p className="text-lg text-slate-600 mb-4">{ministry.description}</p>
        <div className="text-sm text-slate-500">
            <p><strong>Meeting Info:</strong> {ministry.meetingInfo}</p>
            <p><strong>Contact:</strong> {ministry.contactPerson} (<a href={`mailto:${ministry.contactEmail}`} className="text-brand-blue hover:underline">{ministry.contactEmail}</a>)</p>
        </div>
      </Reveal>
    </div>
  );
};

const MinistriesPage: React.FC = () => {
  return (
    <div className="bg-brand-cream">
      <div className="relative pt-40 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/artifacts/kids_bible_classroom_1763537449346.png')" }}>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-white text-center px-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">Get Involved</h3>
          <h1 className="text-6xl md:text-7xl font-serif font-extrabold">Ministries</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">Find your place to connect and grow.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {ministries.map((ministry, index) => (
            <MinistryCard key={ministry.id} ministry={ministry} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinistriesPage;
