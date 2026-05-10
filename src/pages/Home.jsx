import { motion } from 'framer-motion';
import { Crown, Star, Users, Globe, Trophy, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';

const Home = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Models Trained' },
    { icon: Trophy, value: '25+', label: 'Pageants Hosted' },
    { icon: Globe, value: '3', label: 'Countries Reached' },
    { icon: Star, value: '150+', label: 'Sponsors' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Miss Glamour Runway" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.5em] uppercase text-sm font-bold mb-4 block">Miss Glamour Empire International</span>
            <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
              Beyond the Crown<br />
              <span className="text-gold italic">Lies Legacy</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
              <Link to="/registration" className="btn-primary flex items-center justify-center gap-2">
                Join the Movement <ArrowRight size={18} />
              </Link>
              <Link to="/voting" className="btn-outline">
                Vote Now
              </Link>
              <Link to="/sponsors" className="px-8 py-3 text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                Become a Sponsor
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-glamour-black border-y border-gold/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-500">
                  <stat.icon className="text-gold group-hover:text-black transition-colors" size={28} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/60 uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold tracking-widest uppercase text-xs mb-4 block">Elite Excellence</span>
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white">Featured Winners</h2>
            </div>
            <Link to="/gallery" className="text-gold flex items-center gap-2 hover:gap-4 transition-all">
              View Full Gallery <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1539109136881-3be0616acf4b' : i === 2 ? '1492633423870-43d1cd2775eb' : '1509631179647-0177331693ae'}?auto=format&fit=crop&q=80&w=800`} 
                  alt="Model" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-2xl font-playfair font-bold text-white mb-2">Iconic Style {i}</h4>
                  <p className="text-gold text-sm tracking-widest uppercase">Miss Glamour {2024 - i}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Mini */}
      <section className="py-32 bg-royal-dark/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">Upcoming Events</h2>
            <p className="text-white/60 max-w-xl mx-auto">Join us at our next world-class pageant or training workshop.</p>
          </div>
          
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="bg-gold/20 text-gold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">25th May 2024</span>
              <h3 className="text-3xl font-playfair font-bold mb-4">Mutare Catwalk Training Weekend</h3>
              <p className="text-white/70 mb-8 leading-relaxed">Master the art of the runway with international coaches. Limited spots available for the 5-24 age category.</p>
              <Link to="/events" className="btn-primary inline-block">Register Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Carousel Placeholder */}
      <section className="py-20 bg-black overflow-hidden border-t border-white/5">
        <div className="flex gap-20 animate-scroll">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
               <span className="text-2xl font-playfair font-bold text-white/50">BRAND {i}</span>
            </div>
          ))}
        </div>
      </section>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: zoom 20s ease-in-out alternate infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default Home;
