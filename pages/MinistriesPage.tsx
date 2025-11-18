
import React from 'react';
import { ministries } from '../data/mockData';
import type { Ministry } from '../types';

const MinistryCard: React.FC<{ ministry: Ministry, index: number }> = ({ ministry, index }) => {
  const isReversed = index % 2 !== 0;
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={`${isReversed ? 'md:col-start-2' : ''}`}>
        <img src={ministry.imageUrl} alt={ministry.name} className="rounded-lg shadow-xl" />
      </div>
      <div className={`${isReversed ? 'md:col-start-1' : ''}`}>
        <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-4">{ministry.name}</h2>
        <p className="text-lg text-slate-600 mb-4">{ministry.description}</p>
        <div className="text-sm text-slate-500">
            <p><strong>Meeting Info:</strong> {ministry.meetingInfo}</p>
            <p><strong>Contact:</strong> {ministry.contactPerson} (<a href={`mailto:${ministry.contactEmail}`} className="text-brand-blue hover:underline">{ministry.contactEmail}</a>)</p>
        </div>
      </div>
    </div>
  );
};

const MinistriesPage: React.FC = () => {
  return (
    <div className="bg-brand-cream">
      <div className="pt-32 pb-16 bg-brand-blue text-white text-center">
        <h1 className="text-5xl font-serif font-bold">Ministries</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Find your place to connect and grow.</p>
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
