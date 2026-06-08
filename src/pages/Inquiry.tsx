import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  "TFS Participation",
  "IFP Participation",
  "Partnership Inquiry",
  "Research Collaboration",
  "Institutional Collaboration",
  "Investment Discussion",
  "General Inquiry"
];

export default function Inquiry() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  return (
    <div className="flex flex-col w-full pb-24 bg-river">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-12 max-w-3xl mx-auto w-full text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block"
        >
          Connect
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl text-forest mb-6 italic leading-tight"
        >
          Let's Build Something Valuable Together
        </motion.h1>
      </section>

      <section className="px-12 pb-32 max-w-4xl mx-auto w-full">
        <div className="bg-white p-8 md:p-16 border border-stone/10 shadow-sm">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            
            {/* Category Selection */}
            <div className="space-y-6">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-forest">Area of Interest</label>
              <div className="flex flex-wrap gap-4">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-3 text-[11px] uppercase tracking-widest font-semibold transition-colors border ${
                      selectedCategory === cat 
                        ? 'bg-forest text-river border-forest' 
                        : 'bg-transparent text-stone/80 border-stone/40 hover:border-forest hover:text-forest'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-serif text-xl focus:outline-none focus:border-gold transition-colors rounded-none placeholder:text-stone/40"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-serif text-xl focus:outline-none focus:border-gold transition-colors rounded-none placeholder:text-stone/40"
                  placeholder="jane@organization.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-serif text-xl focus:outline-none focus:border-gold transition-colors rounded-none placeholder:text-stone/40"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone">Organization</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-serif text-xl focus:outline-none focus:border-gold transition-colors rounded-none placeholder:text-stone/40"
                  placeholder="Institution or Company Name"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-stone">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-light focus:outline-none focus:border-gold transition-colors resize-none rounded-none placeholder:text-stone/40"
                placeholder="Provide a brief context for your inquiry..."
              ></textarea>
            </div>

            <button type="submit" className="mt-8 flex items-center justify-center gap-4 w-full md:w-auto bg-gold text-forest px-12 py-5 text-[11px] uppercase tracking-widest font-bold hover:bg-forest hover:text-river transition-colors">
              Submit Inquiry <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-stone/80 font-light mt-4">
              All inquiries are directed to our ecosystem response team. Expect a response focused on clarity and actionable value.
            </p>
          </form>
        </div>
      </section>

    </div>
  );
}
