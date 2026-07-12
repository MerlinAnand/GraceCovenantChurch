
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { sermons, churchInfo } from '../data/mockData';
import type { Sermon } from '../types';
import Reveal from '../components/Reveal';
import { YoutubeIcon } from '../components/icons';

const SermonCard: React.FC<{ sermon: Sermon }> = ({ sermon }) => (
  <Link to={`/sermons/${sermon.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    <div className="relative w-full h-48 bg-gray-300">
      <img
        src={sermon.thumbnailUrl}
        alt={sermon.title}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white opacity-70 group-hover:opacity-100" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
    <div className="p-6">
      <p className="text-sm text-gray-500">{sermon.speaker} &bull; {new Date(sermon.date).toLocaleDateString()}</p>
      <h3 className="text-xl font-serif font-bold text-brand-dark-blue mt-2">{sermon.title}</h3>
      <p className="text-sm text-brand-gold font-semibold mt-1">{sermon.series}</p>
    </div>
  </Link>
);

const SermonsPage: React.FC = () => {
  const [speakerFilter, setSpeakerFilter] = useState('');
  const [seriesFilter, setSeriesFilter] = useState('');

  const uniqueSpeakers = useMemo(() => [...new Set(sermons.map(s => s.speaker))], []);
  const uniqueSeries = useMemo(() => [...new Set(sermons.map(s => s.series))], []);

  const filteredSermons = useMemo(() => {
    return sermons
      .filter(sermon => speakerFilter === '' || sermon.speaker === speakerFilter)
      .filter(sermon => seriesFilter === '' || sermon.series === seriesFilter);
  }, [speakerFilter, seriesFilter]);

  return (
    <div className="bg-white">
      <div className="relative pt-40 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/artifacts/sunday_service_worship_1763537430650.png')" }}>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-white text-center px-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">Watch &amp; Listen</h3>
          <h1 className="text-6xl md:text-7xl font-serif font-extrabold">Sermons</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">Explore our archive of messages.</p>
          <a
            href={churchInfo.socialMedia.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-wider rounded-full hover:bg-red-700 transition-all transform hover:scale-105"
          >
            <YoutubeIcon className="h-5 w-5" />
            Subscribe on YouTube
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-100 rounded-lg items-center">
          <select value={speakerFilter} onChange={e => setSpeakerFilter(e.target.value)} className="w-full md:flex-1 p-3 border rounded-md bg-white focus:ring-brand-gold focus:border-brand-gold">
            <option value="">All Speakers</option>
            {uniqueSpeakers.map(speaker => <option key={speaker} value={speaker}>{speaker}</option>)}
          </select>
          <select value={seriesFilter} onChange={e => setSeriesFilter(e.target.value)} className="w-full md:flex-1 p-3 border rounded-md bg-white focus:ring-brand-gold focus:border-brand-gold">
            <option value="">All Series</option>
            {uniqueSeries.map(series => <option key={series} value={series}>{series}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon, index) => (
            <Reveal key={sermon.id} delay={(index % 3) * 120}>
              <SermonCard sermon={sermon} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SermonsPage;
