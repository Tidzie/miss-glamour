import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="flex flex-col items-center"
      >
        <Crown className="text-gold w-20 h-20 mb-6" />
        <h2 className="text-gold font-playfair text-2xl tracking-[0.3em] font-bold">MISS GLAMOUR</h2>
        <div className="w-40 h-0.5 bg-white/10 mt-4 overflow-hidden relative">
           <motion.div 
             initial={{ x: '-100%' }}
             animate={{ x: '100%' }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 bg-gold"
           />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
