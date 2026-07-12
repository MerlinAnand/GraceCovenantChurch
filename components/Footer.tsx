import React from 'react';
import { Link } from 'react-router-dom';
import { churchInfo } from '../data/mockData';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img src="/logo.svg" alt="" className="h-8 w-8" />
              <h3 className="text-2xl font-serif font-bold">Grace Covenant Church</h3>
            </div>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              A place to belong, believe, and become.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{churchInfo.address}</li>
              <li>{churchInfo.email}</li>
              <li>{churchInfo.phone}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={churchInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FacebookIcon className="h-6 w-6" /></a>
              <a href={churchInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><InstagramIcon className="h-6 w-6" /></a>
              <a href={churchInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><YoutubeIcon className="h-6 w-6" /></a>
            </div>
          </div>

        </div>
        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Grace Covenant Church. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;