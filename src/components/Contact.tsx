import { motion } from 'motion/react';
import { CLINIC_INFO, TESTIMONIALS } from '../constants';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-natural-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-natural-sage text-natural-forest rounded-full text-[10px] font-bold tracking-widest uppercase mb-4"
          >
            Visit Us
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-natural-ink mb-6">Contact & Reviews</h2>
          <p className="text-natural-muted max-w-2xl mx-auto text-lg font-sans">
            Find us on Gandhi Path Road for the best dental care in Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-natural-ink text-white p-12 rounded-[48px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold mb-10">Clinic Information</h3>
              
              <div className="space-y-8">
                <a 
                  href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-natural-gold group-hover:bg-white group-hover:text-natural-ink transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-natural-gold font-bold mb-1">Call Us</p>
                    <p className="text-xl font-serif">{CLINIC_INFO.phone}</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-natural-gold group-hover:bg-white group-hover:text-natural-ink transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-natural-gold font-bold mb-1">Email Us</p>
                    <p className="text-xl font-serif">{CLINIC_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-natural-gold flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-natural-gold font-bold mb-1">Location</p>
                    <address className="not-italic text-sm text-white/70 leading-relaxed font-serif max-w-xs">
                      {CLINIC_INFO.address}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-natural-gold flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-natural-gold font-bold mb-1">Clinic Hours</p>
                    <div className="space-y-1">
                      {CLINIC_INFO.hours.map((h, i) => (
                        <div key={i} className="text-sm text-white/70 font-serif">
                          {h.day}: <span className="text-white font-bold">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-[32px] border border-natural-border shadow-sm">
                <div className="flex text-natural-gold mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-natural-ink font-serif italic text-lg mb-4">"{t.comment}"</p>
                <div className="text-[10px] uppercase tracking-widest text-natural-muted font-bold">— {t.name} (Verified Google Review)</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
