import { motion } from 'framer-motion';
import { Gem, Truck, RotateCcw, Shield, Scissors, Award } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Premium Fabrics',
    description: 'Only the finest silk, chiffon, and brocade sourced from renowned textile houses',
  },
  {
    icon: Scissors,
    title: 'Handcrafted Details',
    description: 'Every stitch, embroidery, and embellishment is done by master artisans',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'Complimentary worldwide delivery with elegant packaging and tracking',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '30-day hassle-free return policy for a worry-free shopping experience',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Shop with confidence using our encrypted and secure payment gateway',
  },
  {
    icon: Award,
    title: 'Authenticity Guarantee',
    description: 'Each piece comes with a certificate of authenticity and care instructions',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 text-sm font-semibold tracking-[0.3em] uppercase">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-900 mt-3 mb-5">
            The <span className="italic text-gold-600">NAYLA</span> Promise
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mt-4">
            <span className="text-gold-400">◆</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-3xl border border-charcoal-100 hover:border-gold-200 bg-white hover:bg-gradient-to-br hover:from-gold-50 hover:to-cream-50 transition-all duration-500 hover:shadow-xl hover:shadow-gold-100/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-50 group-hover:bg-gold-100 flex items-center justify-center mb-5 transition-colors duration-300">
                <feature.icon size={26} className="text-gold-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2">{feature.title}</h3>
              <p className="text-charcoal-500 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
