import { motion } from 'framer-motion';
import { Check, Download, Handshake, Star, Award, Shield } from 'lucide-react';

const Sponsors = () => {
  const tiers = [
    {
      name: 'Bronze Sponsor',
      price: '$1,000',
      icon: Shield,
      color: 'text-orange-400',
      benefits: ['Logo on website footer', '1 Social media shoutout', '2 VIP tickets', 'Program book mention']
    },
    {
      name: 'Gold Sponsor',
      price: '$5,000',
      icon: Star,
      color: 'text-gold',
      featured: true,
      benefits: ['Premium logo placement', 'Weekly social media features', '10 VIP tickets', 'On-stage recognition', 'Branded segment', 'Category naming rights']
    },
    {
      name: 'Silver Sponsor',
      price: '$2,500',
      icon: Award,
      color: 'text-slate-300',
      benefits: ['Standard logo placement', 'Monthly social media feature', '5 VIP tickets', 'Program book full page', 'Logo on event backdrop']
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
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Partnership</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8">Corporate Excellence</h1>
          <p className="text-white/60 max-w-2xl mx-auto">Partner with the most prestigious youth empowerment platform in Africa and elevate your brand to international audiences.</p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tiers.sort((a,b) => (b.featured ? 1 : -1)).map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 flex flex-col justify-between relative ${tier.featured ? 'border-gold shadow-gold/20 shadow-2xl scale-105 z-10' : ''}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-widest">Most Popular</div>
              )}
              <div>
                <tier.icon className={`${tier.color} mb-6`} size={40} />
                <h3 className="text-2xl font-playfair font-bold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold mb-8">{tier.price}<span className="text-xs text-white/40 font-normal"> / Event</span></p>
                <ul className="space-y-4 mb-10">
                  {tier.benefits.map((benefit, bi) => (
                    <li key={bi} className="flex items-center gap-3 text-sm text-white/70">
                      <Check className="text-gold flex-shrink-0" size={14} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.featured ? 'bg-gold text-black hover:bg-gold-light' : 'border border-white/20 text-white hover:border-gold hover:text-gold'}`}>
                Select Tier
              </button>
            </motion.div>
          ))}
        </div>

        {/* Benefits Table Mockup */}
        <div className="glass-card overflow-hidden mb-32">
          <div className="p-8 border-b border-white/5">
            <h2 className="text-2xl font-playfair font-bold">Visibility Matrix</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-xs uppercase tracking-widest text-gold font-bold">
                  <th className="p-6">Benefit</th>
                  <th className="p-6">Gold</th>
                  <th className="p-6">Silver</th>
                  <th className="p-6">Bronze</th>
                </tr>
              </thead>
              <tbody className="text-sm text-white/60">
                {['Website Visibility', 'Social Media Campaign', 'Event Program', 'VIP Access', 'Branding Rights'].map((item, i) => (
                  <tr key={item} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-medium text-white">{item}</td>
                    <td className="p-6"><Check className="text-gold" size={18} /></td>
                    <td className="p-6"><Check className="text-gold" size={18} /></td>
                    <td className="p-6">{i < 3 ? <Check className="text-gold" size={18} /> : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gold p-12 md:p-20 rounded-[40px] text-black text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full"></div>
           <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 relative z-10">Ready to Build Legacy?</h2>
           <p className="text-black/80 max-w-xl mx-auto mb-10 text-lg relative z-10 font-medium">Download our comprehensive sponsorship proposal to learn more about how we can grow together.</p>
           <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
              <button className="bg-black text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                <Download size={20} /> Download Proposal
              </button>
              <button className="border-2 border-black px-10 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all">
                Contact Sponsorship Team
              </button>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sponsors;
