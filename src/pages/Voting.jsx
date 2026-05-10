import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Heart, Clock, Award, TrendingUp } from 'lucide-react';

const Voting = () => {
  const [votedId, setVotedId] = useState(null);
  const [contestants, setContestants] = useState([
    { id: 1, name: 'Tatenda M.', age: 19, votes: 1245, img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
    { id: 2, name: 'Zainab K.', age: 22, votes: 980, img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce' },
    { id: 3, name: 'Sarah O.', age: 20, votes: 1120, img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604' },
    { id: 4, name: 'Malaika U.', age: 18, votes: 850, img: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1' },
    { id: 5, name: 'Grace N.', age: 21, votes: 1560, img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04' },
    { id: 6, name: 'Kendi J.', age: 23, votes: 740, img: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453' },
  ]);

  const handleVote = (id) => {
    if (votedId) return;
    setVotedId(id);
    setContestants(prev => prev.map(c => c.id === id ? { ...c, votes: c.votes + 1 } : c));
    localStorage.setItem('hasVoted', 'true');
  };

  useEffect(() => {
    const hasVoted = localStorage.getItem('hasVoted');
    if (hasVoted) setVotedId(true);
  }, []);

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 5, mins: 45, secs: 12 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => ({
        ...prev,
        secs: prev.secs > 0 ? prev.secs - 1 : 59,
        mins: prev.secs === 0 ? (prev.mins > 0 ? prev.mins - 1 : 59) : prev.mins,
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const shareOnWhatsApp = (name) => {
    const text = `Vote for ${name} in the Miss Glamour Empire International Pageant! 👑✨ ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-6">
        {/* Countdown Header */}
        <div className="glass-card p-10 mb-16 text-center border-gold/30">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-6 block">Voting Ends In</span>
          <div className="flex justify-center gap-8 md:gap-16">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-playfair font-bold text-white">{value.toString().padStart(2, '0')}</span>
                <span className="text-[10px] uppercase tracking-widest text-gold mt-2">{unit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Contestants List */}
          <div className="flex-1">
            <h2 className="text-3xl font-playfair font-bold mb-10 border-b border-white/10 pb-4">Contestants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contestants.map((c) => (
                <div key={c.id} className="glass-card overflow-hidden group">
                  <div className="relative aspect-[4/5]">
                    <img src={`${c.img}?auto=format&fit=crop&q=80&w=600`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                       <span className="text-[10px] text-white/80 uppercase tracking-widest">{c.age} Years</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-playfair font-bold">{c.name}</h3>
                        <p className="text-gold text-sm font-medium">{c.votes.toLocaleString()} Votes</p>
                      </div>
                      <button 
                        onClick={() => shareOnWhatsApp(c.name)}
                        className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-gold transition-colors"
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                    <button
                      onClick={() => handleVote(c.id)}
                      disabled={votedId !== null}
                      className={`w-full py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                        votedId === c.id 
                          ? 'bg-green-500 text-white cursor-default' 
                          : votedId 
                            ? 'bg-white/5 text-white/20 cursor-not-allowed'
                            : 'bg-gold text-black hover:bg-gold-light'
                      }`}
                    >
                      {votedId === c.id ? 'Voted' : 'Vote Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard Sidebar */}
          <div className="w-full lg:w-80">
            <div className="glass-card p-8 sticky top-32">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="text-gold" size={20} />
                <h2 className="text-xl font-playfair font-bold uppercase tracking-wider">Top Contestants</h2>
              </div>
              <div className="space-y-6">
                {[...contestants].sort((a, b) => b.votes - a.votes).slice(0, 5).map((c, i) => (
                  <div key={c.id} className="flex items-center gap-4">
                    <span className={`text-2xl font-playfair font-bold ${i === 0 ? 'text-gold' : 'text-white/20'}`}>0{i + 1}</span>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                       <img src={`${c.img}?auto=format&fit=crop&q=80&w=100`} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white/90">{c.name}</h4>
                      <div className="w-full h-1 bg-white/5 mt-2 rounded-full overflow-hidden">
                         <div className="h-full bg-gold" style={{ width: `${(c.votes / 1600) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Voting;
