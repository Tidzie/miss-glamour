import { Link } from 'react-router-dom';
import { Crown, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-glamour-black border-t border-gold/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <Crown className="text-gold w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-xl font-playfair font-bold tracking-widest text-gold leading-none">MISS GLAMOUR</span>
                <span className="text-[10px] tracking-[0.3em] text-white/70 uppercase">Empire International</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Empowering the next generation of leaders and icons across Zimbabwe, Kenya, and Uganda. Beyond the Crown Lies Legacy.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-playfair text-lg font-bold mb-6 tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Gallery', 'Voting', 'Events', 'Registration'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-white/70 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-playfair text-lg font-bold mb-6 tracking-wider">Get In Touch</h4>
            <ul className="flex flex-col gap-4 text-white/70">
              <li>123 Runway Drive, Harare, Zimbabwe</li>
              <li>+263 776 630 319</li>
              <li>info@missglamour.com</li>
              <li>WhatsApp: +263 776 630 319</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-playfair text-lg font-bold mb-6 tracking-wider">Newsletter</h4>
            <p className="text-white/60 mb-6">Stay updated with our latest events and news.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black">
                <Send size={14} />
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
