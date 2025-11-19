import React from 'react';
import { staff } from '../data/mockData';
import type { Staff } from '../types';

const StaffCard: React.FC<{ person: Staff }> = ({ person }) => (
  <div className="text-center">
    <img src={person.imageUrl} alt={person.name} className="w-48 h-48 mx-auto rounded-full shadow-lg mb-4" />
    <h3 className="text-xl font-serif font-bold text-brand-dark-blue">{person.name}</h3>
    <p className="text-brand-gold font-semibold">{person.role}</p>
    <p className="text-sm text-slate-600 mt-2">{person.bio}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-16 bg-cover bg-center text-white" style={{backgroundImage: "url('https://static.wixstatic.com/media/847726_5e1f1857321e428c89c8a8041c2aa64f~mv2.jpg/v1/fill/w_1920,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/847726_5e1f1857321e428c89c8a8041c2aa64f~mv2.jpg')"}}>
          <div className="absolute inset-0 bg-brand-dark-blue bg-opacity-70"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-serif font-bold">About Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">Learn more about our heart for God and people.</p>
          </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-4">Our Vision & Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our vision is to be a life-giving church where people from all walks of life can experience God's love, find genuine community, and discover their divine purpose. Our mission is simple: to help people belong to a community, believe in Jesus, and become everything God created them to be.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-4">What We Believe</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe in the authority of the Bible as the inspired Word of God. We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. We believe in the deity of Jesus Christ, His virgin birth, His atoning death, His bodily resurrection, and His eventual return. We believe salvation is by grace through faith in Jesus Christ alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {staff.map(person => <StaffCard key={person.id} person={person} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;