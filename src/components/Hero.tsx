/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CLINIC_INFO } from '../constants';
import { ArrowRight, Star, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-natural-cream">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-natural-sage/30 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-natural-sage rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-natural-gold font-serif italic text-xl tracking-tight">
                Welcome to Jaipur's finest dental care
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-natural-ink leading-[1.1] mb-8">
              A Smile That <br />
              <span className="italic text-natural-forest">Speaks</span> Confidence.
            </h1>
            
            <p className="text-lg text-natural-muted mb-10 max-w-xl leading-relaxed font-sans">
              Experience world-class dental care at {CLINIC_INFO.name}. From routine checkups to advanced procedures, 
              {CLINIC_INFO.doctor} and his team are dedicated to your comfort and health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                className="bg-natural-forest text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-natural-forest/90 transition-all transform hover:scale-105 shadow-lg shadow-natural-forest/20 flex items-center justify-center gap-2"
              >
                Call to Connect
                <Phone size={16} />
              </a>
              <a 
                href="#services"
                className="bg-white text-natural-forest border border-natural-border px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-natural-cream transition-all flex items-center justify-center"
              >
                View Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-natural-border pt-10">
              {CLINIC_INFO.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-serif font-bold text-natural-ink">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-natural-gold font-bold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl z-10 aspect-[4/5] border-[12px] border-white">
              <img 
  src="KRY.png" 
  style={{ width: '100%', height: 'auto', aspectRatio: '2070/1380', objectFit: 'cover' }} 
  alt="Dr. Kalu Ram Yadav" 
  className="w-full h-full object-cover" 
  referrerPolicy="no-referrer" 
/>
            </div>
            
            {/* Principal Dentist Card from reference */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-10 sm:-bottom-6 -left-10 sm:-left-6 bg-white p-6 rounded-[32px] border border-natural-border shadow-xl z-20 max-w-[280px]"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-natural-sage rounded-2xl overflow-hidden flex-shrink-0 border-4 border-natural-cream shadow-inner flex items-center justify-center">
                   <img src="kry.png" style="width:100%; height:auto; aspect-ratio:2070/1380; object-fit:cover;" alt="Clinic Image" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-natural-ink">{CLINIC_INFO.doctor}</h3>
                  <p className="text-[9px] uppercase tracking-widest text-natural-gold font-bold mb-1">Principal Dentist</p>
                  <p className="text-[10px] text-natural-muted leading-tight">15+ Years Excellence in Aesthetic & General Dentistry</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
