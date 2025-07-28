import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { DollarSign, Users, Star, ArrowRight } from 'lucide-react';
    import { useToast } from "@/components/ui/use-toast";

    const testimonials = [
      {
        quote: "Driving with ZippGo changed my life. The flexibility and earnings are unmatched.",
        name: "Alex Johnson",
        role: "5-Star Driver",
        avatar: "A smiling man in his 30s wearing a casual shirt, sitting in a car"
      },
      {
        quote: "The driver app is so easy to use, and I get paid instantly. Highly recommend it!",
        name: "Maria Garcia",
        role: "Top Earner",
        avatar: "A confident woman in her 40s with glasses, standing in front of a city background"
      },
      {
        quote: "I love being my own boss. ZippGo gives me the freedom to work whenever I want.",
        name: "David Chen",
        role: "Full-time Driver",
        avatar: "A young man in his 20s with a friendly smile, wearing a headset"
      },
    ];

    const DriverEarningsSection = () => {
      const { toast } = useToast();

      const handleNotImplemented = () => {
        toast({
          title: "🚧 Feature Not Implemented",
          description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
      };

      return (
        <section className="py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img  class="w-full h-full object-cover opacity-10" alt="Abstract background of city streets at night" src="https://images.unsplash.com/photo-1559624281-2c1b9fecf6e9" />
          </div>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl md:text-5xl font-black font-urbanist">Drive & Earn On Your Terms</h2>
                <p className="mt-6 text-lg text-slate-300">Join our community of drivers and take control of your income. Enjoy flexible hours, competitive earnings, and the best support in the industry.</p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div className="bg-slate-800/50 p-6 rounded-xl">
                    <DollarSign className="w-10 h-10 mx-auto text-cyan-400" />
                    <p className="text-3xl font-bold mt-2">High Earnings</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl">
                    <Users className="w-10 h-10 mx-auto text-cyan-400" />
                    <p className="text-3xl font-bold mt-2">24/7 Support</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl">
                    <Star className="w-10 h-10 mx-auto text-cyan-400" />
                    <p className="text-3xl font-bold mt-2">You're the Boss</p>
                  </div>
                </div>
                <Button onClick={handleNotImplemented} size="lg" className="mt-10 bg-cyan-400 text-slate-900 font-bold text-xl px-10 py-8 rounded-full transition-all duration-300 hover:bg-cyan-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40">
                  Start Earning <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </motion.div>
              
              <div className="relative h-96">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: [0, 1, 1, 0], x: [50, 0, 0, -50] }}
                    transition={{ 
                      duration: 9, 
                      repeat: Infinity, 
                      repeatType: "loop",
                      delay: index * 3,
                      times: [0, 0.1, 0.9, 1]
                    }}
                  >
                    <div className="bg-slate-800/70 backdrop-blur-lg p-8 rounded-2xl border border-slate-700">
                      <p className="text-xl italic text-slate-200">"{testimonial.quote}"</p>
                      <div className="flex items-center mt-6">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                          <img  class="w-full h-full object-cover" alt={testimonial.name} src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-white">{testimonial.name}</p>
                          <p className="text-cyan-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default DriverEarningsSection;