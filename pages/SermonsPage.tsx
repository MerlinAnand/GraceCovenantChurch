
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { sermons } from '../data/mockData';
import type { Sermon } from '../types';

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
      {sermon.liveStreamUrl && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold uppercase px-2 py-1 rounded-md">Live</div>
      )}
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
  const [liveStreamOnly, setLiveStreamOnly] = useState(false);

  const uniqueSpeakers = useMemo(() => [...new Set(sermons.map(s => s.speaker))], []);
  const uniqueSeries = useMemo(() => [...new Set(sermons.map(s => s.series))], []);

  const filteredSermons = useMemo(() => {
    return sermons
      .filter(sermon => speakerFilter === '' || sermon.speaker === speakerFilter)
      .filter(sermon => seriesFilter === '' || sermon.series === seriesFilter)
      .filter(sermon => !liveStreamOnly || !!sermon.liveStreamUrl);
  }, [speakerFilter, seriesFilter, liveStreamOnly]);

  return (
    <div className="bg-white">
      <div className="pt-32 pb-16 bg-brand-blue text-white text-center">
        <h1 className="text-5xl font-serif font-bold">Sermons</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Explore our archive of messages.</p>
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
          <div className="w-full md:w-auto md:flex-shrink-0 flex items-center justify-start md:justify-center px-2 py-2 md:py-0">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
              <input 
                type="checkbox" 
                checked={liveStreamOnly} 
                onChange={e => setLiveStreamOnly(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-brand-blue focus:ring-brand-gold"
              />
              <span>Live Stream Available</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map(sermon => <SermonCard key={sermon.id} sermon={sermon} />)}
        </div>
      </div>
    </div>
  );
};

export default SermonsPage;
