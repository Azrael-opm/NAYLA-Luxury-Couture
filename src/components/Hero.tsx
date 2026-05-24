import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/30457742/pexels-photo-30457742.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800';
const heroImage2 = 'https://images.pexels.com/photos/34033763/pexels-photo-34033763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-charcoal-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-charcoal-900/40 z-10" />
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src="https://images.pexels.com/photos/1475034/pexels-photo-1475034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800"
          alt="Luxury fabric"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl z-0" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full pt-24 pb-16">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-300 text-sm font-medium tracking-wider uppercase">New Collection 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Elegance{' '}
              <span className="italic text-gold-400">Woven</span>
              <br />
              Into Tradition
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-charcoal-300 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-light"
            >
              Discover our exquisite collection of handcrafted Jalabiya & Kaftan pieces, 
              where timeless heritage meets contemporary luxury.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#collections"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold text-sm tracking-wider uppercase shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-shadow"
              >
                Explore Collection
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full font-medium text-sm tracking-wider hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <Play size={14} fill="white" />
                </div>
                Watch Story
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="flex gap-10 mt-14 pt-10 border-t border-white/10"
            >
              {[
                { value: '500+', label: 'Unique Designs' },
                { value: '12K+', label: 'Happy Clients' },
                { value: '15+', label: 'Years Legacy' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-gold-400 font-bold">{stat.value}</div>
                  <div className="text-charcoal-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Images */}
          <div className="hidden lg:flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -right-4 top-8 w-64 h-[380px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10"
            >
              <img
                src={heroImage2}
                alt="Traditional Kaftan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative z-10 w-80 h-[480px] rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/30"
            >
              <img
                src={heroImage}
                alt="Elegant Jalabiya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-4">
                  <p className="text-white font-medium text-sm">Royal Heritage Collection</p>
                  <p className="text-gold-300 text-xs mt-1">Starting from $249</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring' }}
              className="absolute -left-4 top-1/4 animate-float"
            >
              <div className="glass rounded-2xl px-5 py-4 text-center">
                <div className="text-2xl mb-1">✨</div>
                <p className="text-white text-xs font-medium">Handcrafted</p>
                <p className="text-gold-300 text-[10px]">With Love</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent z-20" />
    </section>
  );
}
