import { motion } from 'framer-motion';
import { Shield, Users, Heart, Star, Award, TrendingUp } from 'lucide-react';
import aboutImg from '../assets/about.png';

const About = () => {
  const values = [
    { icon: Shield, title: 'Confidence', desc: 'Building self-assurance that radiates on and off the stage.' },
    { icon: Award, title: 'Discipline', desc: 'Fostering the dedication required for international excellence.' },
    { icon: Users, title: 'Sisterhood', desc: 'Creating a supportive network of empowered young women.' },
    { icon: Star, title: 'Excellence', desc: 'Striving for perfection in every performance and endeavor.' },
    { icon: TrendingUp, title: 'Legacy', desc: 'Building impact that lasts far beyond the crowning moment.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold z-10"></div>
              <img src={aboutImg} alt="About Miss Glamour" className="rounded-3xl shadow-2xl relative z-0" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-royal-purple/20 blur-[80px] rounded-full"></div>
            </motion.div>

            <div>
              <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">Empowering The <span className="text-gold">Next Generation</span></h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Miss Glamour Empire International is more than just a pageantry brand; it is a movement dedicated to the holistic development of girls and young women aged 5–24 across Zimbabwe, Kenya, and Uganda.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Founded on the principle that "Beyond the Crown Lies Legacy," we provide a platform for young voices to be heard, dreams to be realized, and leadership skills to be honed through professional catwalk training, mental health workshops, and international exposure.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-gold font-playfair text-xl font-bold mb-2">Mission</h4>
                  <p className="text-white/60 text-sm">To discover and nurture raw talent into global icons of excellence.</p>
                </div>
                <div>
                  <h4 className="text-gold font-playfair text-xl font-bold mb-2">Vision</h4>
                  <p className="text-white/60 text-sm">To be the premier modeling platform in Africa, recognized for integrity and impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-glamour-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center hover:border-gold/50 transition-colors group"
              >
                <v.icon className="mx-auto text-gold mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-playfair font-bold mb-4">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
               <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8 italic">"Every girl is a queen by birth, we just help them find their throne."</h2>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-[1px] bg-gold"></div>
                 <span className="text-gold tracking-widest uppercase font-bold">The Founder & CEO</span>
               </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 rounded-3xl -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" alt="CEO" className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
