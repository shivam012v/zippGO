
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Drive", path: "/start-earning" },
    { name: "Contact", path: "/contact" },
  ];

  const handleAuthAction = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "User authentication is coming soon! You can request it in your next prompt. 🚀",
    });
  };

  const activeLinkStyle = {
    color: '#FACC15',
    fontWeight: 'bold',
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold font-grotesk tracking-tighter text-white">ZippGo</span>
            </motion.div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path} 
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 font-medium text-lg"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={handleAuthAction} className="text-white hover:bg-slate-800">Log In</Button>
            <Button onClick={handleAuthAction} className="bg-white text-slate-900 hover:bg-yellow-400 font-bold rounded-full px-6 py-3 transition-all duration-300 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40">Sign Up</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-slate-900"
        >
          {navItems.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              className="block py-2 text-slate-300 hover:text-yellow-400 transition-colors duration-300"
            >
              {item.name}
            </NavLink>
          ))}
          <div className="border-t border-slate-700 pt-4 space-y-2">
            <Button variant="ghost" onClick={handleAuthAction} className="w-full text-white hover:bg-slate-800">Log In</Button>
            <Button onClick={handleAuthAction} className="w-full bg-white text-slate-900 hover:bg-yellow-400 font-bold">Sign Up</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
