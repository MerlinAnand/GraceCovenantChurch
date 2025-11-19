import React from 'react';
import { Link } from 'react-router-dom';
import { sermons, events } from '../data/mockData';
import { ChevronRightIcon } from '../components/icons';

const HeroSection: React.FC = () => (
  <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.wixstatic.com/media/847726_7e64175396654b22be88544d6da36128~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/847726_7e64175396654b22be88544d6da36128~mv2.jpg')" }}>
    <div className="absolute inset-0 bg-brand-dark-blue bg-opacity-60" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-extrabold mb-6 animate-fade-in-down tracking-tight">
        Grace Covenant Church
      </h1>
      <p className="text-xl md:text-3xl font-light tracking-wide mb-4 animate-fade-in-up max-w-3xl">
        Welcome Home
      </p>
      <p className="text-base md:text-lg font-light tracking-wider mb-8 animate-fade-in-up max-w-2xl opacity-90">
        A place to belong, believe, and become.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
        <Link
          to="/contact"
          className="px-10 py-4 bg-brand-gold text-brand-dark-blue font-bold uppercase tracking-wider rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-glow"
        >
          Plan Your Visit
        </Link>
        <Link
          to="/sermons"
          className="px-10 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/30 transition-all transform hover:scale-105"
        >
          Watch Messages
        </Link>
      </div>
    </div>
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
        <div className="w-1 h-2 bg-white/50 rounded-full animate-gentle-float"></div>
      </div>
    </div>
  </div>
);

const WelcomeSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark-blue mb-6">Welcome Home</h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 leading-relaxed">
          We are a community of believers passionate about encountering God, connecting with others, and transforming our world.
          Whether you're new to church or have been a Christian for years, you have a place here.
        </p>
      </div>
    </div>
  </section>
);

const LatestSermon: React.FC = () => {
  const latestSermon = sermons[0];
  return (
    <section className="py-24 bg-gradient-to-br from-brand-cream to-white">
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
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">Latest Message</h3>
            <h2 className="text-5xl font-serif font-bold text-brand-dark-blue mb-6 leading-tight">{latestSermon.title}</h2>
            <p className="text-lg text-slate-600 mb-4">By {latestSermon.speaker}</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{latestSermon.description}</p>
            <Link
              to={`/sermons/${latestSermon.id}`}
              className="inline-flex items-center px-8 py-3 bg-brand-dark-blue text-white font-bold uppercase tracking-wider rounded-full hover:bg-brand-blue transition-all transform hover:scale-105 shadow-lg"
            >
              Watch Now
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const MinistriesHighlight: React.FC = () => {
  const ministries = [
    {
      title: "GraceKids",
      time: "Saturdays • 6:30 PM",
      description: "Fun, safe environment for children to learn about Jesus",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Velocity",
      time: "Fridays • 7:30 PM",
      description: "Youth ministry for students in 6th-12th grade",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Tongues of Fire",
      time: "Zoom ID: 4735795423",
      description: "Small groups for deeper community and Bible study",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4">Join Us</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/10"
            >
              <div className="text-brand-gold mb-6 flex justify-center">
                {ministry.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">{ministry.title}</h3>
              <p className="text-brand-gold font-semibold mb-4 tracking-wide">{ministry.time}</p>
              <p className="text-white/80 leading-relaxed">{ministry.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/ministries"
            className="inline-flex items-center px-8 py-3 bg-brand-gold text-brand-dark-blue font-bold uppercase tracking-wider rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Explore Ministries
            <ChevronRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const UpcomingEvents: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold text-brand-dark-blue mb-4">Upcoming Events</h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {events.slice(0, 3).map(event => (
          <div key={event.id} className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative overflow-hidden h-56">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark-blue px-4 py-2 rounded-full font-bold text-sm">
                {event.category}
              </div>
            </div>
            <div className="p-8">
              <p className="text-sm text-brand-gold font-bold mb-2 tracking-wider uppercase">{event.time}</p>
              <h3 className="text-2xl font-bold font-serif text-brand-dark-blue mb-4">{event.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{event.description}</p>
              <Link
                to={`/events/${event.id}`}
                className="inline-flex items-center font-bold text-brand-dark-blue hover:text-brand-gold transition-colors"
              >
                Learn More
                <ChevronRightIcon className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/events"
          className="inline-flex items-center px-8 py-3 bg-brand-dark-blue text-white font-bold uppercase tracking-wider rounded-full hover:bg-brand-blue transition-all transform hover:scale-105 shadow-lg"
        >
          View All Events
          <ChevronRightIcon className="h-5 w-5 ml-2" />
        </Link>
      </div>
    </div>
  </section>
);

const ActionGrid: React.FC = () => {
  const actions = [
    {
      title: 'Our Team',
      link: '/about',
      description: 'Meet our passionate leadership team.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Give Online',
      link: '/give',
      description: 'Partner with us to make a difference.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Get Connected',
      link: '/contact',
      description: 'Take your next step with us.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-brand-cream to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {actions.map(action => (
            <Link
              to={action.link}
              key={action.title}
              className="group block p-10 bg-white rounded-2xl shadow-soft hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-t-4 border-brand-gold"
            >
              <div className="text-brand-dark-blue mb-6 group-hover:text-brand-gold transition-colors flex justify-center">
                {action.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3 text-center">{action.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{action.description}</p>
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
      <MinistriesHighlight />
      <UpcomingEvents />
      <ActionGrid />
    </>
  );
};

export default HomePage;