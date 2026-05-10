import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Connect</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8">Get In Touch</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-card p-8 text-center group hover:border-gold/30 transition-all">
             <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors">
                <Phone className="text-gold group-hover:text-black" />
             </div>
             <h3 className="text-xl font-playfair font-bold mb-2">Phone</h3>
             <p className="text-white/60">+263 776 630 319</p>
          </div>
          <div className="glass-card p-8 text-center group hover:border-gold/30 transition-all">
             <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors">
                <Mail className="text-gold group-hover:text-black" />
             </div>
             <h3 className="text-xl font-playfair font-bold mb-2">Email</h3>
             <p className="text-white/60">info@missglamour.com</p>
          </div>
          <div className="glass-card p-8 text-center group hover:border-gold/30 transition-all">
             <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors">
                <MapPin className="text-gold group-hover:text-black" />
             </div>
             <h3 className="text-xl font-playfair font-bold mb-2">Office</h3>
             <p className="text-white/60">123 Runway Drive, Harare, ZW</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="glass-card p-10 md:p-16">
            <h2 className="text-3xl font-playfair font-bold mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Your Message</label>
                <textarea rows="6" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                 Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Social & Map */}
          <div className="space-y-8">
            <div className="glass-card p-10 overflow-hidden">
               <h3 className="text-2xl font-playfair font-bold mb-6 flex items-center gap-2">
                  <Globe className="text-gold" size={24} /> TikTok Feed
               </h3>
               <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <p className="text-white/20 italic">TikTok: @MissGlamourEmpireZimbabwe</p>
               </div>
            </div>

            <div className="glass-card p-10 overflow-hidden">
               <h3 className="text-2xl font-playfair font-bold mb-6">WhatsApp Support</h3>
               <p className="text-white/60 mb-8">Chat with our team directly for quick inquiries regarding registrations and voting.</p>
               <a 
                 href="https://wa.me/263776630319" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
               >
                 <MessageCircle size={24} /> Chat on WhatsApp
               </a>
            </div>

            <div className="rounded-3xl overflow-hidden h-64 border border-white/10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121516.312981358!2d30.935398!3d-17.824858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e78444c799%3A0xa626f6345631b14!2sHarare!5e0!3m2!1sen!2szw!4v1652134567890!5m2!1sen!2szw" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy"
               ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
