import { Link } from 'react-router-dom';
import { Crown, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-glamour-black border-t border-gold/10 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6 items-start">
            <Link to="/" className="flex items-center gap-2 group">
              <Crown className="text-gold w-8 h-8 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xl font-playfair font-bold tracking-widest text-gold leading-none uppercase">Miss Glamour</span>
                <span className="text-[10px] tracking-[0.3em] text-white/70 uppercase">Empire International</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of leaders and icons across Zimbabwe, Kenya, and Uganda. Beyond the Crown Lies Legacy.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-gold font-playfair text-lg font-bold mb-8 tracking-wider uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Gallery', 'Voting', 'Events', 'Registration'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-white/60 hover:text-gold transition-colors text-sm uppercase tracking-widest">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-playfair text-lg font-bold mb-8 tracking-wider uppercase">Get In Touch</h4>
            <ul className="flex flex-col gap-6 text-white/60 text-sm">
              <li className="flex gap-3">
                <div className="text-gold mt-1 flex-shrink-0">123 Runway Drive, Harare, Zimbabwe</div>
              </li>
              <li className="flex gap-3">
                <div className="text-gold flex-shrink-0">Call:</div>
                <span>+263 776 630 319</span>
              </li>
              <li className="flex gap-3">
                <div className="text-gold flex-shrink-0">Email:</div>
                <span>info@missglamour.com</span>
              </li>
              <li className="flex gap-3">
                <div className="text-gold flex-shrink-0">WA:</div>
                <span>+263 776 630 319</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-playfair text-lg font-bold mb-8 tracking-wider uppercase">Newsletter</h4>
            <p className="text-white/60 mb-6 text-sm">Stay updated with our latest events and news.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-gold transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-black hover:bg-gold-light transition-all shadow-lg shadow-gold/20">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-white/40 text-xs tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Miss Glamour Empire International. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
