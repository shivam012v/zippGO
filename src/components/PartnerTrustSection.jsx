
import React from 'react';
    import { motion } from 'framer-motion';
    import { Star, Users } from 'lucide-react';

    const partners = [
      { name: "TechCorp", logo: "A minimalist logo with a stylized letter 'T' inside a circle" },
      { name: "Innovate Inc.", logo: "A logo featuring an abstract gear and lightbulb combination" },
      { name: "Global Solutions", logo: "A simple globe icon with interconnected lines" },
      { name: "NextGen Ventures", logo: "A logo with an upward-pointing arrow forming the letter 'N'" },
      { name: "CityBank", logo: "A classic logo with a building pillar icon" },
    ];

    const PartnerTrustSection = () => {
      return (
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black font-urbanist">Trusted by Thousands</h2>
              <p className="mt-4 text-lg text-slate-400">We're proud to be a trusted choice for riders and partners alike.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 flex items-center gap-6"
              >
                <Users className="w-16 h-16 text-yellow-400" />
                <div>
                  <p className="text-4xl font-bold">100,000+</p>
                  <p className="text-slate-300 text-lg">Happy Riders & Drivers</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 flex items-center gap-6"
              >
                <Star className="w-16 h-16 text-yellow-400" />
                <div>
                  <p className="text-4xl font-bold">4.9 ★</p>
                  <p className="text-slate-300 text-lg">Average Rating on App Stores</p>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-300 mb-8">Our Valued Partners</h3>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <img  class="h-12" alt={`${partner.name} logo`} src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default PartnerTrustSection;
