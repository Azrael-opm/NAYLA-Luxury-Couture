import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Fatima Al-Rashid',
    role: 'Fashion Influencer, Dubai',
    avatar: '👩🏽',
    rating: 5,
    text: 'NAYLA\'s kaftan collection is simply exquisite. The attention to detail in the gold embroidery work is unlike anything I\'ve seen. Every piece feels like a work of art that tells a story of tradition and modern elegance.',
  },
  {
    name: 'Amira Hassan',
    role: 'Bride-to-be, Riyadh',
    avatar: '👩🏻',
    rating: 5,
    text: 'I found my dream wedding jalabiya at NAYLA. The fabric quality is exceptional, and the custom fitting service made sure it was perfect. My wedding outfit was the talk of the celebration — pure luxury!',
  },
  {
    name: 'Layla Khalil',
    role: 'Loyal Customer, London',
    avatar: '👩🏾',
    rating: 5,
    text: 'As someone who values both tradition and contemporary style, NAYLA bridges that gap beautifully. Their seasonal collections never disappoint, and the customer service is phenomenal. I\'ve been a loyal customer for 5 years.',
  },
  {
    name: 'Sara Mohammed',
    role: 'Interior Designer, Doha',
    avatar: '👩🏽',
    rating: 5,
    text: 'The bridal collection exceeded all my expectations. From the initial consultation to the final fitting, everything was handled with such care and professionalism. NAYLA truly understands luxury fashion.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-charcoal-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-3 mb-4">
            What Our <span className="italic text-gold-400">Clients</span> Say
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mt-4">
            <span className="text-gold-500/50">◆</span>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote size={48} className="text-gold-500/20 mx-auto mb-6" />

              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex flex-col items-center">
                <span className="text-4xl mb-3">{testimonials[current].avatar}</span>
                <h4 className="text-white font-semibold text-lg">{testimonials[current].name}</h4>
                <p className="text-gold-400/70 text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-gold-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
