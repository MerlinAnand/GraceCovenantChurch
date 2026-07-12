import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
  { name: 'Sermons', path: '/sermons' },
  { name: 'Events', path: '/events' },
  { name: 'Ministries', path: '/ministries' },
  { name: 'About', path: '/about' },
  { name: 'Give', path: '/give' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem: React.FC<{ path: string; name: string; onClick?: () => void }> = ({ path, name, onClick }) => (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `uppercase tracking-wider font-bold text-sm transition-colors duration-300 ${
          isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold/80'
        }`
      }
    >
      {name}
    </NavLink>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-dark-blue shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 text-white text-xl font-serif font-bold tracking-wide">
            <img src="/logo.svg" alt="" className="h-9 w-9" />
            Grace Covenant
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavItem key={link.name} {...link} />
            ))}
          </nav>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-20 left-0 w-full bg-brand-dark-blue transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        {isOpen && (
            <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
                <NavItem key={link.name} {...link} onClick={() => setIsOpen(false)} />
            ))}
            </nav>
        )}
      </div>
    </header>
  );
};

export default Header;