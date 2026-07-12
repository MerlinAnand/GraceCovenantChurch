import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-cream px-4">
      <div className="text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">404</h3>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark-blue mb-6">Page Not Found</h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-4 bg-brand-gold text-brand-dark-blue font-bold uppercase tracking-wider rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
