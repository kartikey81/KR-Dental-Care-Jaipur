/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CLINIC_INFO } from '../constants';
import { Award, GraduationCap, Users, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-natural-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[64px] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2070&auto=format&fit=crop" 
                alt={CLINIC_INFO.doctor}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 right-0 translate-x-1/4 bg-white p-8 rounded-[32px] border border-natural-border shadow-2xl z-20 hidden md:block"
            >
              <div className="text-natural-forest font-serif font-bold text-5xl mb-1 italic">15+</div>
              <div className="text-natural-gold text-[10px] font-bold uppercase tracking-widest">Years Excellence</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-natural-gold font-serif italic text-xl mb-4 block">Meet our principal dentist</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-natural-ink mb-6 leading-tight">
              {CLINIC_INFO.doctor}
            </h2>
            <p className="text-natural-forest font-serif italic text-2xl mb-8">
              {CLINIC_INFO.specialization}
            </p>
            <p className="text-natural-muted text-lg mb-10 leading-relaxed font-sans">
              Dr. Kalu Ram is a dedicated dental professional in Jaipur with over 15 years of excellence in transforming smiles. 
              His patient-centric approach combined with modern facilities makes KR's Dental Care a preferred choice for thousands.
            </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { icon: Award, title: "Google Top Rated", desc: "5.0 Rating with 84 reviews" },
                 { icon: GraduationCap, title: "Dental Surgeon", desc: "Expert in Primary Care" },
                 { icon: Users, title: "Patient Choice", desc: "Trusted by Local Community" },
                 { icon: Calendar, title: "Experience", desc: "15+ Years Excellence" }
               ].map((item, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-natural-forest border border-natural-border">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-natural-ink">{item.title}</h4>
                    <p className="text-[11px] text-natural-muted uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white rounded-[32px] border border-natural-border italic font-serif text-natural-forest text-xl leading-relaxed shadow-sm">
              "My mission is to provide the highest quality dental care using state-of-the-art technology, ensuring every patient leaves with a confident smile."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
