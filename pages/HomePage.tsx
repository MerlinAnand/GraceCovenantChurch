import React from 'react';
import { Link } from 'react-router-dom';
import { sermons, events } from '../data/mockData';
import { ChevronRightIcon } from '../components/icons';

const HeroSection: React.FC = () => (
  <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.wixstatic.com/media/847726_7e64175396654b22be88544d6da36128~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/847726_7e64175396654b22be88544d6da36128~mv2.jpg')" }}>
    <div className="absolute inset-0 bg-brand-dark-blue bg-opacity-60" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold mb-4 animate-fade-in-down">Grace Covenant Church</h1>
      <p className="text-lg md:text-2xl font-light tracking-wider animate-fade-in-up">A place to belong, believe, and become.</p>
      <Link 
        to="/contact" 
        className="mt-8 px-8 py-3 bg-brand-gold text-brand-dark-blue font-bold uppercase tracking-wider rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
      >
        Plan Your Visit
      </Link>
    </div>
  </div>
);

const WelcomeSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-4">Welcome Home</h2>
      <p className="max-w-3xl mx-auto text-lg text-slate-600">
        We are a community of believers passionate about encountering God, connecting with others, and transforming our world. Whether you're new to church or have been a Christian for years, you have a place here.
      </p>
    </div>
  </section>
);

const LatestSermon: React.FC = () => {
  const latestSermon = sermons[0];
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 rounded-lg shadow-xl overflow-hidden">
            <img
              src={latestSermon.thumbnailUrl}
              alt={latestSermon.title}
              className="w-full h-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden'; }}
            />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-2">Latest Message</h3>
            <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-4">{latestSermon.title}</h2>
            <p className="text-lg text-slate-600 mb-6">{latestSermon.description}</p>
            <Link to={`/sermons/${latestSermon.id}`} className="inline-flex items-center font-bold text-brand-dark-blue hover:text-brand-gold transition-colors">
              Watch Now <ChevronRightIcon className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const UpcomingEvents: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-serif font-bold text-center text-brand-dark-blue mb-12">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {events.slice(0, 3).map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-brand-gold font-bold">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
              <h3 className="text-xl font-bold font-serif text-brand-dark-blue mt-2 mb-4">{event.title}</h3>
              <Link to={`/events/${event.id}`} className="inline-flex items-center font-bold text-brand-dark-blue group-hover:text-brand-gold transition-colors">
                Learn More <ChevronRightIcon className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/events" className="px-8 py-3 bg-brand-dark-blue text-white font-bold uppercase tracking-wider rounded-full hover:bg-brand-blue transition-colors">
          View All Events
        </Link>
      </div>
    </div>
  </section>
);

const ActionGrid: React.FC = () => {
    const actions = [
        { title: 'Connect with a Group', link: '/ministries', description: 'Find community and grow in your faith.' },
        { title: 'Give Online', link: '/give', description: 'Partner with us to make a difference.' },
        { title: 'Learn About Us', link: '/about', description: 'Discover our mission, vision, and beliefs.' },
    ];
    return (
        <section className="py-20 bg-brand-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid md:grid-cols-3 gap-8 text-center">
                    {actions.map(action => (
                        <Link to={action.link} key={action.title} className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                           <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-2">{action.title}</h3>
                           <p className="text-slate-600">{action.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <LatestSermon />
      <UpcomingEvents />
      <ActionGrid />
    </>
  );
};

export default HomePage;