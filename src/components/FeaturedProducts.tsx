import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Royal Emerald Kaftan',
    category: 'kaftan',
    price: 389,
    originalPrice: 499,
    image: 'https://images.pexels.com/photos/30457754/pexels-photo-30457754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 4.9,
    reviews: 128,
    badge: 'Bestseller',
    colors: ['#2D5A27', '#8B6914', '#1a1a1a'],
  },
  {
    id: 2,
    name: 'Midnight Silk Jalabiya',
    category: 'jalabiya',
    price: 299,
    originalPrice: null,
    image: 'https://images.pexels.com/photos/13838842/pexels-photo-13838842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 4.8,
    reviews: 96,
    badge: 'New',
    colors: ['#1a1a1a', '#4a3728', '#6B4C8A'],
  },
  {
    id: 3,
    name: 'Golden Heritage Dress',
    category: 'kaftan',
    price: 459,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/30457755/pexels-photo-30457755.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 5.0,
    reviews: 203,
    badge: 'Limited',
    colors: ['#C4A35A', '#8B4513', '#2F4F4F'],
  },
  {
    id: 4,
    name: 'Pearl Embroidered Abaya',
    category: 'jalabiya',
    price: 329,
    originalPrice: null,
    image: 'https://images.pexels.com/photos/28222774/pexels-photo-28222774.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 4.7,
    reviews: 74,
    badge: null,
    colors: ['#1a1a1a', '#3d3d3d', '#8B6914'],
  },
  {
    id: 5,
    name: 'Elegant Silver Kaftan',
    category: 'kaftan',
    price: 419,
    originalPrice: 520,
    image: 'https://images.pexels.com/photos/13776525/pexels-photo-13776525.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 4.9,
    reviews: 155,
    badge: 'Popular',
    colors: ['#C0C0C0', '#1a1a1a', '#708090'],
  },
  {
    id: 6,
    name: 'Dove Grey Jalabiya',
    category: 'jalabiya',
    price: 279,
    originalPrice: null,
    image: 'https://images.pexels.com/photos/13776835/pexels-photo-13776835.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 4.6,
    reviews: 62,
    badge: 'New',
    colors: ['#A9A9A9', '#D2B48C', '#F5F5DC'],
  },
];

const tabs = ['All', 'Kaftan', 'Jalabiya'];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeTab === 'All'
    ? products
    : products.filter((p) => p.category === activeTab.toLowerCase());

  return (
    <section id="jalabiya" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-gold-600 text-sm font-semibold tracking-[0.3em] uppercase">Handpicked For You</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-900 mt-3 mb-5">
            Featured <span className="italic text-gold-600">Pieces</span>
          </h2>
          <p className="text-charcoal-500 max-w-2xl mx-auto text-lg">
            Discover our most sought-after designs, crafted with the finest fabrics and meticulous attention to detail
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-7 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-50'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-charcoal-900 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="product-card group"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl bg-charcoal-50 aspect-[3/4] mb-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-img w-full h-full object-cover"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${
                        product.badge === 'Bestseller'
                          ? 'bg-gold-500 text-white'
                          : product.badge === 'New'
                          ? 'bg-emerald-500 text-white'
                          : product.badge === 'Limited'
                          ? 'bg-rose-500 text-white'
                          : 'bg-charcoal-900 text-white'
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}

                  {/* Hover Actions */}
                  <AnimatePresence>
                    {hoveredId === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3"
                      >
                        <motion.button
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal-800 hover:text-gold-600 transition-colors"
                        >
                          <Heart size={20} />
                        </motion.button>
                        <motion.button
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-full bg-charcoal-900 shadow-lg flex items-center justify-center text-white hover:bg-gold-600 transition-colors"
                        >
                          <ShoppingBag size={20} />
                        </motion.button>
                        <motion.button
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal-800 hover:text-gold-600 transition-colors"
                        >
                          <Eye size={20} />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Product Info */}
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={14} className="text-gold-500 fill-gold-500" />
                    <span className="text-sm font-medium text-charcoal-800">{product.rating}</span>
                    <span className="text-sm text-charcoal-400">({product.reviews})</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal-900 group-hover:text-gold-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    {product.colors.map((c) => (
                      <span
                        key={c}
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xl font-bold text-charcoal-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-charcoal-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border-2 border-charcoal-900 text-charcoal-900 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-charcoal-900 hover:text-white transition-colors duration-300"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
