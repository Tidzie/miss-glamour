import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Crown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Voting', path: '/voting' },
    { name: 'Events', path: '/events' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg py-4 border-b border-gold/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Crown className="text-gold w-8 h-8 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-xl font-playfair font-bold tracking-widest text-gold leading-none">MISS GLAMOUR</span>
            <span className="text-[10px] tracking-[0.3em] text-white/70 uppercase">Empire International</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:text-gold relative group ${
                location.pathname === link.path ? 'text-gold' : 'text-white/80'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link to="/registration" className="btn-primary py-2 px-6 text-xs uppercase tracking-widest">
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex xl:hidden items-center gap-4">
          <Link to="/registration" className="btn-primary py-1.5 px-4 text-[10px] uppercase tracking-widest">
            Join
          </Link>
          <button 
            className="text-white p-2 hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden bg-black/98 backdrop-blur-2xl z-[60]"
          >
            <div className="flex justify-end p-8">
               <button onClick={() => setIsOpen(false)} className="text-white hover:text-gold">
                  <X size={32} />
               </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full -mt-20 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className={`text-2xl font-playfair font-bold tracking-widest uppercase ${
                      location.pathname === link.path ? 'text-gold' : 'text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link 
                  to="/registration" 
                  className="btn-primary px-12 py-4 text-sm mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Join the Movement
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
