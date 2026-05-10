import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = ['All', 'Auditions', 'Winners', 'Runway', 'Catwalk Classes', 'Behind the Scenes'];

  const items = [
    { id: 1, type: 'image', category: 'Winners', url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b' },
    { id: 2, type: 'image', category: 'Runway', url: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb' },
    { id: 3, type: 'image', category: 'Auditions', url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae' },
    { id: 4, type: 'image', category: 'Catwalk Classes', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
    { id: 5, type: 'image', category: 'Winners', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f' },
    { id: 6, type: 'image', category: 'Behind the Scenes', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
    { id: 7, type: 'image', category: 'Runway', url: 'https://images.unsplash.com/photo-1562572230-c290d0974442' },
    { id: 8, type: 'image', category: 'Auditions', url: 'https://images.unsplash.com/photo-1576558656222-ba66febe3dec' },
  ];

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Visual Legacy</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8">The Gallery</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-sm tracking-widest uppercase transition-all ${
                  filter === cat ? 'bg-gold border-gold text-black' : 'border-white/20 text-white/70 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
                onClick={() => setSelectedImg(item.url)}
              >
                <img 
                  src={`${item.url}?auto=format&fit=crop&q=80&w=800`} 
                  alt="Gallery Item" 
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black">
                      <ImageIcon size={20} />
                   </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/50 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-full uppercase tracking-tighter border border-white/10">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-gold">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={`${selectedImg}?auto=format&fit=crop&q=90&w=1200`}
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
