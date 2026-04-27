/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-natural-forest rounded-full flex items-center justify-center">
                <span className="text-white font-serif italic text-xl">KR</span>
              </div>
              <span className={`font-serif font-bold text-2xl tracking-tight ${isScrolled ? 'text-natural-forest' : 'text-natural-ink'}`}>
                {CLINIC_INFO.name}
              </span>
            </motion.div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-natural-forest/80 hover:text-natural-forest font-medium uppercase tracking-widest text-[11px] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
              className="bg-natural-forest text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-natural-forest/90 transition-all shadow-lg shadow-natural-forest/20 uppercase tracking-widest flex items-center gap-2"
            >
              <Phone size={14} />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-teal-900 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-teal-900 hover:bg-teal-50 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-teal-700 px-3">
                  <Phone size={20} />
                  <span>{CLINIC_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-teal-700 px-3">
                  <MapPin size={20} />
                  <span className="text-sm">{CLINIC_INFO.address.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
