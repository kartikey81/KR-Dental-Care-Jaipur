/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-natural-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-natural-sage/50 text-natural-forest rounded-full text-[10px] font-bold tracking-widest uppercase mb-4"
          >
            Comprehensive Care
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-natural-ink mb-6"
          >
            Our <span className="italic text-natural-forest font-normal">Dental</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-natural-muted max-w-2xl mx-auto text-lg font-sans"
          >
            We provide a wide range of dental services to help you achieve the healthy, beautiful smile you deserve.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-10 rounded-[40px] border transition-all group ${
                  isEven 
                    ? 'bg-natural-sage border-white/50' 
                    : 'bg-white border-natural-border shadow-sm'
                }`}
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-natural-forest group-hover:bg-natural-forest group-hover:text-white transition-all">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="text-2xl font-serif font-bold text-natural-ink mb-4">{service.title}</h3>
                <p className="text-natural-muted text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a href="#contact" className="text-natural-forest font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                    Discover More <Icons.ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature grid */}
        <div className="mt-20 p-12 bg-natural-ink rounded-[48px] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-natural-forest/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-natural-gold font-serif italic text-xl mb-4 block">Crafting healthy smiles</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">Why trust KR Clinic?</h3>
              <ul className="space-y-5">
                {[
                  "Advanced German Dental Chairs & Equipment",
                  "Strict ISO-level Sterilization Protocols",
                  "In-house Dental Implant Expert",
                  "Digital X-Rays for Rapid Diagnosis",
                  "Transparent & Affordable Pricing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icons.Check className="text-natural-gold" size={14} />
                    </div>
                    <span className="text-white/70 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Icons.Clock, title: "Minimal Wait", desc: "Efficient scheduling" },
                { icon: Icons.ShieldCheck, title: "Hygienic", desc: "100% Sterile" },
                { icon: Icons.ThumbsUp, title: "Painless", desc: "Modern techniques" },
                { icon: Icons.UserCheck, title: "Senior MDS", desc: "Expert consultation" }
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-[32px] border border-white/10">
                  <feature.icon className="text-natural-gold mb-3" size={28} />
                  <div className="font-serif text-lg font-bold">{feature.title}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
