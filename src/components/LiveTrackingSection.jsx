
import React from 'react';
    import { motion } from 'framer-motion';
    import { MapPin, Car } from 'lucide-react';

    const LiveTrackingSection = () => {
      return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-black font-urbanist">Track Your Ride Live</h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">No more waiting in the dark. Watch your ride approach on the map, down to the meter.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-16 max-w-4xl mx-auto h-96 rounded-3xl bg-slate-800/50 border border-slate-700 p-4 shadow-2xl shadow-cyan-500/10"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img  class="w-full h-full object-cover opacity-40" alt="A stylized map of an Indian city" src="https://images.unsplash.com/photo-1614795801066-5d544d8d464c" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="text-yellow-400 w-12 h-12 drop-shadow-lg" />
                  <motion.div
                    className="absolute"
                    animate={{
                      x: [-150, 150, 150, -150, -150],
                      y: [50, 50, -50, -50, 50],
                      rotate: [0, 0, 180, 180, 360],
                    }}
                    transition={{
                      duration: 10,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <Car className="text-cyan-400 w-10 h-10" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default LiveTrackingSection;
