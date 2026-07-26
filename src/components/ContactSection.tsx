import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/shopData';
import { MapPin, Phone, Mail, Clock, Instagram, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="relative py-24 bg-[#090909] text-[#FAFAFA] overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#C9A227]/30 text-xs text-[#C9A227] font-semibold tracking-[0.2em] uppercase"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Woodhouse, Leeds</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold uppercase tracking-[0.05em] text-white"
          >
            Location & <span className="text-gold-gradient">Opening Hours</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#CFCFCF] font-light max-w-xl mx-auto"
          >
            Located at 11 Hyde Park Corner, 11 Woodhouse Ln, Woodhouse, Leeds LS6 1AF. Walk-ins subject to availability; appointments recommended.
          </motion.p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Column 1: Contact Details & Hours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#171717]/80 border border-white/10 space-y-4 shadow-xl">
              <h3 className="font-cinzel text-xl font-bold text-white flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#C9A227]" />
                <span>Our Address</span>
              </h3>

              <div className="text-sm text-[#CFCFCF] space-y-1 font-light">
                <p className="font-semibold text-white">{BUSINESS_INFO.name}</p>
                <p>{BUSINESS_INFO.address}</p>
                <p>{BUSINESS_INFO.city}, {BUSINESS_INFO.postcode}</p>
                <p>United Kingdom</p>
              </div>
            </div>

            {/* Contact Phone & Instagram */}
            <div className="p-6 rounded-2xl bg-[#171717]/80 border border-white/10 space-y-4 shadow-xl">
              <h3 className="font-cinzel text-xl font-bold text-white">Direct Contacts</h3>

              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center space-x-3 text-[#CFCFCF] hover:text-[#C9A227] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" />
                  <span className="font-mono">{BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-[#CFCFCF] hover:text-[#C9A227] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C9A227]" />
                  <span>@hydeparkbarbers</span>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-6 rounded-2xl bg-[#171717]/80 border border-white/10 space-y-4 shadow-xl">
              <h3 className="font-cinzel text-xl font-bold text-white flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#C9A227]" />
                <span>Opening Hours</span>
              </h3>

              <div className="space-y-2 text-xs font-mono">
                {BUSINESS_INFO.hours.map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#CFCFCF]">{h.day}</span>
                    <span className={h.time === 'Closed' ? 'text-red-400 font-bold' : 'text-white'}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Google Maps Embed & Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Interactive Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-80 relative bg-[#171717]">
              <iframe
                title="HYDE PARK BARBERS Location Map"
                src="https://maps.google.com/maps?q=11+Hyde+Park+Corner,+11+Woodhouse+Ln,+Woodhouse,+Leeds+LS6+1AF&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.9) invert(0.9) contrast(1.2)' }}
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#090909]/90 backdrop-blur-md border border-[#C9A227]/40 text-xs">
                <p className="font-bold text-white">HYDE PARK BARBERS</p>
                <p className="text-[10px] text-[#C9A227]">11 Hyde Park Corner, Woodhouse, Leeds LS6 1AF</p>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="p-8 rounded-2xl bg-[#171717]/80 border border-white/10 space-y-6 shadow-xl">
              <h3 className="font-cinzel text-xl font-bold text-white">
                Send An Inquiry / Request
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-[#C9A227]/20 border border-[#C9A227] text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#C9A227] mx-auto" />
                  <p className="font-bold text-white text-sm">Message Sent Successfully</p>
                  <p className="text-xs text-[#CFCFCF]">Thank you! We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase text-[#C9A227] font-bold mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/10 text-white text-sm focus:border-[#C9A227] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-[#C9A227] font-bold mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/10 text-white text-sm focus:border-[#C9A227] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-[#C9A227] font-bold mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Booking inquiry or group haircut request"
                      className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/10 text-white text-sm focus:border-[#C9A227] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-[#C9A227] font-bold mb-1">Message</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you?"
                      className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/10 text-white text-sm focus:border-[#C9A227] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
