/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CLINIC_INFO } from '../constants';
import { Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-natural-ink text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 border-b border-white/5 pb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-natural-forest rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-serif italic text-sm">KR</span>
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight">
                {CLINIC_INFO.name}
              </span>
            </div>
            <p className="text-white/50 mb-8 leading-relaxed font-sans text-sm">
              Leading dental clinic in Jaipur providing comprehensive oral care with advanced technology and expert doctors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-natural-forest hover:border-natural-forest transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-natural-forest hover:border-natural-forest transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-natural-forest hover:border-natural-forest transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#home" className="hover:text-natural-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-natural-gold transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-natural-gold transition-colors">Meet the Team</a></li>
              <li><a href="#contact" className="hover:text-natural-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-8">Specialities</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#services" className="hover:text-natural-gold transition-colors">Orthodontics</a></li>
              <li><a href="#services" className="hover:text-natural-gold transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-natural-gold transition-colors">Invisible Aligners</a></li>
              <li><a href="#services" className="hover:text-natural-gold transition-colors">Cosmetic Dental</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-8">Join our Circle</h4>
            <p className="text-white/50 mb-6 text-sm">Subscribe for monthly oral health insights and clinic updates.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-natural-gold transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-natural-forest rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-natural-forest/80 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name} • Private Practice</p>
          <div className="flex items-center gap-1 mt-6 md:mt-0">
            Aesthetic Care Excellence in Jaipur
          </div>
        </div>
      </div>
    </footer>
  );
}
