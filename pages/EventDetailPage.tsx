
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data/mockData';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-4xl font-serif font-bold">Event Not Found</h1>
        <Link to="/events" className="mt-8 inline-block text-brand-gold hover:underline">Back to all events</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="relative pt-40 pb-24 bg-cover bg-center" style={{ backgroundImage: `url(${event.imageUrl})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-serif font-bold">{event.title}</h1>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mb-6">Event Details</h2>
              <div className="prose max-w-none text-slate-700 leading-relaxed">
                <p>{event.description}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold mb-4">When & Where</h3>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p className="mt-2"><strong>Location:</strong><br/>{event.locationName}<br/>{event.address}</p>
              </div>
              <a href={event.registrationLink} className="w-full block text-center px-8 py-3 bg-brand-gold text-brand-dark-blue font-bold uppercase tracking-wider rounded-full hover:bg-opacity-90 transition-colors">
                RSVP via Email
              </a>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-center text-brand-dark-blue mb-6">Location Map</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={event.mapEmbedUrl}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
