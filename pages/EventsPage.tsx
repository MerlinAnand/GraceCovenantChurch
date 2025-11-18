
import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data/mockData';
import type { Event } from '../types';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
    <img src={event.imageUrl} alt={event.title} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
    <div className="p-8 flex flex-col justify-center">
      <p className="text-brand-gold font-bold uppercase tracking-wider">{event.category}</p>
      <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mt-2">{event.title}</h2>
      <p className="text-lg text-slate-600 mt-2 font-semibold">
        {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <p className="text-gray-500">{event.time} &bull; {event.locationName}</p>
      <p className="mt-4 text-slate-700 leading-relaxed">{event.description.substring(0, 150)}...</p>
      <Link to={`/events/${event.id}`} className="mt-6 inline-block font-bold text-brand-blue hover:text-brand-gold transition-colors">
        View Details &rarr;
      </Link>
    </div>
  </div>
);

const EventsPage: React.FC = () => {
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return (
    <div className="bg-brand-cream">
      <div className="pt-32 pb-16 bg-brand-blue text-white text-center">
        <h1 className="text-5xl font-serif font-bold">Events</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Find out what's happening at GraceCovenant.</p>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="text-center text-xl text-slate-500">No upcoming events. Please check back soon!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
