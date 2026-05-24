import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4882E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-600 text-sm font-semibold tracking-[0.3em] uppercase">Stay Connected</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-900 mt-3 mb-5">
            Join the <span className="italic text-gold-600">NAYLA</span> Family
          </h2>
          <p className="text-charcoal-500 max-w-xl mx-auto text-lg mb-10">
            Subscribe to receive exclusive offers, early access to new collections, 
            and curated style inspiration delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full border border-charcoal-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none text-charcoal-800 transition-all duration-300 bg-charcoal-50/50"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={submitted}
              className={`px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                submitted
                  ? 'bg-emerald-500 text-white'
                  : 'bg-charcoal-900 text-white hover:bg-gold-600'
              }`}
            >
              {submitted ? (
                <>
                  <Check size={18} />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <Send size={16} />
                </>
              )}
            </motion.button>
          </form>

          <p className="text-charcoal-400 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
