
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sermons } from '../data/mockData';

// Helper function to convert YouTube watch URL to embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);

    // Handle youtube.com/watch?v=VIDEO_ID format
    if (urlObj.hostname.includes('youtube.com') && urlObj.searchParams.has('v')) {
      const videoId = urlObj.searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtu.be/VIDEO_ID format
    if (urlObj.hostname.includes('youtu.be')) {
      const videoId = urlObj.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // If already an embed URL, return as is
    if (urlObj.pathname.includes('/embed/')) {
      return url;
    }

    return url;
  } catch (error) {
    return url;
  }
};

const SermonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const sermon = sermons.find(s => s.id === id);

  if (!sermon) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-4xl font-serif font-bold">Sermon Not Found</h1>
        <Link to="/sermons" className="mt-8 inline-block text-brand-gold hover:underline">Back to all sermons</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="pt-32 pb-12 bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold font-bold uppercase tracking-wider">{sermon.series}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2">{sermon.title}</h1>
          <p className="text-xl text-gray-300 mt-4">{sermon.speaker} &bull; {new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">

          {sermon.liveStreamUrl && (
            <div className="mb-8 text-center">
              <a
                href={sermon.liveStreamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-red-600 text-white font-bold text-lg uppercase tracking-wider rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 animate-pulse"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="8" />
                </svg>
                Watch Live
              </a>
            </div>
          )}

          <div className="aspect-w-16 aspect-h-9 mb-8 relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={getYouTubeEmbedUrl(sermon.videoUrl)}
              title={sermon.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-bold mb-4">Sermon Details</h2>
            <div className="prose max-w-none text-slate-700">
              <p>{sermon.description}</p>
            </div>

            <div className="mt-6 border-t pt-6 space-y-4">
              <div>
                <h3 className="font-bold">Scripture References</h3>
                <p>{sermon.scriptureRefs.join(', ') || 'N/A'}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={sermon.audioUrl} download className="px-6 py-2 bg-brand-blue text-white font-bold rounded-full text-center hover:bg-brand-dark-blue transition-colors">Download Audio</a>
                <a href={sermon.notesUrl} download className="px-6 py-2 bg-brand-blue text-white font-bold rounded-full text-center hover:bg-brand-dark-blue transition-colors">Download Notes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonDetailPage;