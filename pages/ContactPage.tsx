import React, { useState } from 'react';
import { churchInfo } from '../data/mockData';

type FormStatus = 'idle' | 'sending' | 'sent';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    console.log('Form data:', formData);
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-brand-cream">
      <div className="relative pt-40 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/artifacts/sunday_service_worship_1763537430650.png')" }}>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-white text-center px-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">Get In Touch</h3>
          <h1 className="text-6xl md:text-7xl font-serif font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">We'd love to hear from you.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="bg-white p-8 rounded-lg shadow-lg">
            {formStatus === 'sent' ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mb-3">Thanks for Reaching Out!</h2>
                <p className="text-slate-600">We've received your message and will be in touch soon.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-brand-blue font-semibold hover:text-brand-gold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-brand-gold focus:border-brand-gold"/>
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-brand-gold focus:border-brand-gold"/>
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-brand-gold focus:border-brand-gold"/>
                  <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-brand-gold focus:border-brand-gold"></textarea>
                  <button type="submit" disabled={formStatus === 'sending'} className="w-full px-8 py-3 bg-brand-dark-blue text-white font-bold uppercase tracking-wider rounded-full hover:bg-brand-blue transition-colors disabled:opacity-60">
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-4">Visit Us</h3>
              <p className="text-lg text-slate-700">{churchInfo.address}</p>
              <p className="text-lg text-slate-700 mt-2">{churchInfo.phone}</p>
              <p className="text-lg text-slate-700 mt-2"><a href={`mailto:${churchInfo.email}`} className="hover:text-brand-gold">{churchInfo.email}</a></p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-4">Service Times</h3>
              {churchInfo.serviceTimes.map(time => <p key={time} className="text-lg text-slate-700">{time}</p>)}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-center text-brand-dark-blue mb-6">Find Our Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.8282902315053!2d150.84272187633212!3d-33.73887951214045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129b0f15c15c15%3A0x80854582f3273e34!2sStonecutters%20Neighbourhood%20Centre!5e0!3m2!1sen!2sau!4v1721976935266!5m2!1sen!2sau"
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
  );
};

export default ContactPage;