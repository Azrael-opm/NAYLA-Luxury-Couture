import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Banner() {
  return (
    <section id="kaftan" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Banner */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
          >
            <img
              src="https://images.pexels.com/photos/35790409/pexels-photo-35790409.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
              alt="Kaftan Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 to-transparent" />
            <div className="absolute inset-0 flex items-center p-12">
              <div>
                <span className="text-gold-300 text-sm font-semibold tracking-[0.3em] uppercase">Limited Edition</span>
                <h3 className="font-display text-4xl md:text-5xl text-white mt-3 mb-4 leading-tight">
                  Exclusive<br />Kaftan <span className="italic text-gold-300">Series</span>
                </h3>
                <p className="text-white/60 max-w-xs mb-6">
                  Handwoven fabrics with gold thread embroidery, limited to 50 pieces worldwide
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-gold-300 font-semibold text-sm tracking-wider uppercase"
                >
                  Discover Now <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Banners */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative flex-1 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src="https://images.pexels.com/photos/30457743/pexels-photo-30457743.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700"
                alt="Bridal Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-rose-300 text-xs font-semibold tracking-[0.3em] uppercase">Bridal Season</span>
                <h3 className="font-display text-2xl md:text-3xl text-white mt-1">
                  Wedding <span className="italic">Couture</span>
                </h3>
                <p className="text-white/50 text-sm mt-1 max-w-xs">
                  Make your special day unforgettable with our bridal collection
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative flex-1 rounded-3xl overflow-hidden cursor-pointer bg-charcoal-900"
            >
              <div className="shimmer absolute inset-0" />
              <div className="relative h-full flex items-center justify-between p-8 md:p-10">
                <div>
                  <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Special Offer</span>
                  <h3 className="font-display text-3xl md:text-4xl text-white mt-2">
                    Up to <span className="text-gold-400">40%</span> Off
                  </h3>
                  <p className="text-charcoal-400 text-sm mt-2">
                    On selected Jalabiya & Kaftan pieces
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-5 px-6 py-2.5 bg-gold-500 text-white rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-gold-600 transition-colors"
                  >
                    Shop Sale
                  </motion.button>
                </div>
                <div className="hidden md:block text-8xl font-display text-gold-500/10 font-bold">
                  40%
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
