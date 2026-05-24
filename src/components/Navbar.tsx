import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, Heart, User } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Jalabiya', href: '#jalabiya' },
  { label: 'Kaftan', href: '#kaftan' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <span className={`font-display text-3xl font-bold tracking-wider ${
                  scrolled ? 'text-charcoal-900' : 'text-white'
                }`}>
                  NAYLA
                </span>
                <span className={`block text-[9px] tracking-[0.4em] uppercase ${
                  scrolled ? 'text-gold-600' : 'text-gold-300'
                }`}>
                  Luxury Couture
                </span>
              </motion.div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    scrolled
                      ? 'text-charcoal-700 hover:text-gold-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-gold-600' : 'bg-gold-300'
                  }`} />
                </motion.a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden sm:flex p-2 transition-colors ${
                  scrolled ? 'text-charcoal-700 hover:text-gold-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <Search size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden sm:flex p-2 transition-colors ${
                  scrolled ? 'text-charcoal-700 hover:text-gold-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <Heart size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden sm:flex p-2 transition-colors ${
                  scrolled ? 'text-charcoal-700 hover:text-gold-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <User size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-2 transition-colors ${
                  scrolled ? 'text-charcoal-700 hover:text-gold-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                  3
                </span>
              </motion.button>
              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden p-2 ${
                  scrolled ? 'text-charcoal-700' : 'text-white'
                }`}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <span className="font-display text-2xl font-bold text-charcoal-900">NAYLA</span>
                  <button onClick={() => setMobileOpen(false)}>
                    <X size={24} className="text-charcoal-700" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="py-3 px-4 text-charcoal-800 hover:text-gold-600 hover:bg-gold-50 rounded-xl text-lg font-medium transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
                <div className="mt-10 pt-8 border-t border-charcoal-100">
                  <button className="w-full py-3.5 bg-charcoal-900 text-white rounded-xl font-medium hover:bg-gold-700 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
