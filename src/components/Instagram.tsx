import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const images = [
  'https://images.pexels.com/photos/30457742/pexels-photo-30457742.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  'https://images.pexels.com/photos/30457754/pexels-photo-30457754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  'https://images.pexels.com/photos/34033763/pexels-photo-34033763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  'https://images.pexels.com/photos/13838842/pexels-photo-13838842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  'https://images.pexels.com/photos/30457749/pexels-photo-30457749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  'https://images.pexels.com/photos/18816861/pexels-photo-18816861.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
];

export default function Instagram() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-gold-600 text-sm font-semibold tracking-[0.3em] uppercase">Follow Us</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-900 mt-3 mb-4">
            @nayla.<span className="italic text-gold-600">couture</span>
          </h2>
          <p className="text-charcoal-500 max-w-lg mx-auto">
            Join our community and discover daily inspiration for your wardrobe
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 px-2 md:px-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 0.95 }}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
          >
            <img
              src={img}
              alt={`Instagram post ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/40 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="text-white"
              >
                <Camera size={28} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
