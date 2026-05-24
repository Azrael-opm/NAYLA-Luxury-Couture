import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

const footerLinks = {
  'Quick Links': ['New Arrivals', 'Best Sellers', 'Kaftan Collection', 'Jalabiya Collection', 'Bridal Wear', 'Sale'],
  'Customer Care': ['Contact Us', 'Size Guide', 'Shipping Info', 'Returns & Exchange', 'FAQs', 'Track Order'],
  'About NAYLA': ['Our Story', 'Craftsmanship', 'Sustainability', 'Press', 'Careers', 'Blog'],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-charcoal-900 text-white relative">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold tracking-wider text-white">NAYLA</span>
              <span className="block text-[9px] tracking-[0.4em] uppercase text-gold-400">Luxury Couture</span>
            </a>
            <p className="text-charcoal-400 leading-relaxed mb-6 max-w-sm">
              Where timeless tradition meets contemporary luxury. Every piece is a celebration 
              of heritage, crafted with passion and perfected with precision.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-charcoal-400 text-sm">
                <MapPin size={16} className="text-gold-500 shrink-0" />
                <span>Al Wasl Road, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal-400 text-sm">
                <Phone size={16} className="text-gold-500 shrink-0" />
                <span>+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal-400 text-sm">
                <Mail size={16} className="text-gold-500 shrink-0" />
                <span>hello@nayla.com</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal-400 text-sm">
                <Clock size={16} className="text-gold-500 shrink-0" />
                <span>Sat - Thu: 10AM - 10PM</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-lg font-semibold text-white mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-charcoal-400 hover:text-gold-400 text-sm transition-colors duration-200 hover:pl-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment & Social */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            {['𝕏', 'f', 'in', '📷'].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-400/50 transition-colors text-sm font-bold"
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-charcoal-500 text-sm">
            <span className="px-3 py-1 border border-white/10 rounded text-xs">VISA</span>
            <span className="px-3 py-1 border border-white/10 rounded text-xs">MASTERCARD</span>
            <span className="px-3 py-1 border border-white/10 rounded text-xs">AMEX</span>
            <span className="px-3 py-1 border border-white/10 rounded text-xs">APPLE PAY</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-sm">
            © 2026 NAYLA Luxury Couture. All rights reserved.
          </p>
          <div className="flex gap-6 text-charcoal-500 text-sm">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -3 }}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gold-500 text-white rounded-full shadow-xl shadow-gold-500/30 flex items-center justify-center hover:bg-gold-600 transition-colors"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
