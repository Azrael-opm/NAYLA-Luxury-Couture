import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    title: 'Jalabiya',
    subtitle: 'Traditional Elegance',
    description: 'Flowing silhouettes adorned with intricate embroidery',
    image: 'https://images.pexels.com/photos/30410021/pexels-photo-30410021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
    count: '120+ Designs',
    color: 'from-amber-900/80 to-amber-800/40',
  },
  {
    title: 'Kaftan',
    subtitle: 'Modern Luxury',
    description: 'Opulent fabrics crafted into timeless masterpieces',
    image: 'https://images.pexels.com/photos/30457749/pexels-photo-30457749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
    count: '95+ Designs',
    color: 'from-emerald-900/80 to-emerald-800/40',
  },
  {
    title: 'Bridal',
    subtitle: 'Wedding Collection',
    description: 'Breathtaking pieces for your most special day',
    image: 'https://images.pexels.com/photos/18816861/pexels-photo-18816861.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
    count: '60+ Designs',
    color: 'from-rose-900/80 to-rose-800/40',
  },
];

export default function Categories() {
  return (
    <section id="collections" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 text-sm font-semibold tracking-[0.3em] uppercase">Our Categories</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-900 mt-3 mb-5">
            Curated <span className="italic text-gold-600">Collections</span>
          </h2>
          <p className="text-charcoal-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Each piece in our collection tells a story of heritage, artistry, and unmatched elegance
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold-400">◆</span>
          </div>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="group relative h-[520px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white/80 text-xs tracking-wider uppercase mb-3">
                  {cat.count}
                </span>
                <h3 className="font-display text-3xl text-white mb-1">{cat.title}</h3>
                <p className="text-white/60 text-sm mb-1 font-medium">{cat.subtitle}</p>
                <p className="text-white/50 text-sm mb-5">{cat.description}</p>
                <div className="flex items-center gap-2 text-gold-300 group-hover:text-gold-200 transition-colors">
                  <span className="text-sm font-semibold tracking-wider uppercase">Explore</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
