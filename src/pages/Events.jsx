import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, Camera, Star } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Miss Glamour Empire Zimbabwe 2024',
      date: 'Aug 15, 2024',
      venue: 'Harare International Conference Center',
      type: 'Pageant',
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
      description: 'The grand finale where the next queen of Zimbabwe will be crowned.'
    },
    {
      id: 2,
      title: 'Mutare Catwalk Training Weekend',
      date: 'May 25-26, 2024',
      venue: 'Golden Peacock Resort, Mutare',
      type: 'Workshop',
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
      description: 'Intensive two-day masterclass on poise, walk, and stage presence.'
    },
    {
      id: 3,
      title: 'Nairobi Talent Auditions',
      date: 'June 10, 2024',
      venue: 'Kenyatta International Convention Centre',
      type: 'Audition',
      img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
      description: 'Seeking the best raw talent in Kenya for our international platform.'
    },
    {
      id: 4,
      title: 'Uganda Premiere Gala',
      date: 'July 05, 2024',
      venue: 'Sheraton Kampala Hotel',
      type: 'Gala',
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      description: 'A night of fashion, networking, and glamour in the heart of Kampala.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Calendar</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8">Upcoming Events</h1>
          <p className="text-white/60 max-w-2xl mx-auto">Mark your calendars for the most prestigious events in the African pageantry calendar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="glass-card group overflow-hidden flex flex-col md:flex-row min-h-[300px]">
              <div className="w-full md:w-2/5 relative">
                <img src={`${event.img}?auto=format&fit=crop&q=80&w=600`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-black text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest shadow-lg">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-gold/80 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-4 leading-tight">{event.title}</h3>
                  <div className="flex items-start gap-2 text-white/50 text-sm mb-6">
                    <MapPin size={14} className="mt-1 flex-shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">{event.description}</p>
                </div>
                <button className="btn-outline w-full py-2 text-sm flex items-center justify-center gap-2">
                  <Ticket size={16} /> RSVP / Register
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Grid Mockup */}
        <div className="mt-32">
           <h2 className="text-3xl font-playfair font-bold mb-10 text-center uppercase tracking-widest">May 2024</h2>
           <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`aspect-square glass-card flex flex-col items-center justify-center p-2 border-white/5 hover:border-gold/30 transition-all ${[25, 26].includes(i+1) ? 'border-gold/50 bg-gold/5' : ''}`}>
                   <span className={`text-sm ${[25, 26].includes(i+1) ? 'text-gold font-bold' : 'text-white/40'}`}>{i + 1}</span>
                   {[25].includes(i+1) && <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1"></div>}
                </div>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
