
import React from 'react';
    import { motion } from 'framer-motion';
    import { Car, CarTaxiFront, PersonStanding, Bike, ArrowRight } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { useToast } from "@/components/ui/use-toast";

    const categories = [
      { name: 'Bike', icon: Bike, fare: '₹8/km', description: 'Quick and nimble bike taxis for solo trips.' },
      { name: 'Mini', icon: Car, fare: '₹12/km', description: 'Affordable rides for everyday travel.' },
      { name: 'Sedan', icon: CarTaxiFront, fare: '₹15/km', description: 'Comfortable sedans with extra legroom.' },
      { name: 'SUV', icon: PersonStanding, fare: '₹20/km', description: 'Spacious SUVs for groups and luggage.' },
    ];

    const RideCard = ({ category }) => {
      const { toast } = useToast();

      const handleNotImplemented = (e) => {
        e.stopPropagation();
        toast({
          title: "🚧 Feature Not Implemented",
          description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
      };

      return (
        <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-6 text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <category.icon className="w-24 h-24 text-yellow-400 mx-auto" />
          </motion.div>
          <h3 className="mt-6 text-3xl font-bold font-grotesk">{category.name}</h3>
          <p className="text-slate-400 my-2">{category.description}</p>
          <p className="text-4xl font-black my-4 text-cyan-400">{category.fare}</p>
          <Button onClick={handleNotImplemented} className="bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 w-full">
            Select Ride <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      );
    };

    const RideCategoriesSection = () => {
      return (
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black font-urbanist">Choose Your Zipp</h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">From solo trips to group travel, we have a ride for every need and budget.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <RideCard category={category} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default RideCategoriesSection;
