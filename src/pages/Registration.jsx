import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShieldCheck, Handshake, Upload, CheckCircle2, ArrowRight } from 'lucide-react';

const Registration = () => {
  const [activeForm, setActiveForm] = useState('model'); // model, parent, sponsor
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const forms = {
    model: {
      title: 'Model Registration',
      icon: User,
      fields: [
        { label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
        { label: 'Age', type: 'number', placeholder: 'Your age (5-24)' },
        { label: 'Country', type: 'select', options: ['Zimbabwe', 'Kenya', 'Uganda'] },
        { label: 'Experience Level', type: 'select', options: ['Beginner', 'Intermediate', 'Professional'] },
        { label: 'Social Media Handle', type: 'text', placeholder: '@yourhandle' },
      ]
    },
    parent: {
      title: 'Parent/Guardian Registration',
      icon: ShieldCheck,
      fields: [
        { label: 'Parent Name', type: 'text', placeholder: 'Enter your full name' },
        { label: 'Model Name', type: 'text', placeholder: "Enter daughter's name" },
        { label: 'Phone Number', type: 'tel', placeholder: '+263...' },
        { label: 'Email', type: 'email', placeholder: 'your@email.com' },
      ]
    },
    sponsor: {
      title: 'Sponsor/Partner Inquiry',
      icon: Handshake,
      fields: [
        { label: 'Company Name', type: 'text', placeholder: 'Your company name' },
        { label: 'Contact Person', type: 'text', placeholder: 'Name' },
        { label: 'Email', type: 'email', placeholder: 'corporate@email.com' },
        { label: 'Interested Tier', type: 'select', options: ['Gold', 'Silver', 'Bronze', 'Custom'] },
      ]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Registration</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8">Join the Empire</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(forms).map(([key, form]) => (
              <button
                key={key}
                onClick={() => setActiveForm(key)}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl border transition-all ${
                  activeForm === key ? 'bg-gold border-gold text-black' : 'border-white/10 text-white/60 hover:border-gold/30'
                }`}
              >
                <form.icon size={20} />
                <span className="font-bold tracking-wider uppercase text-xs">{form.title}</span>
              </button>
            ))}
          </div>

          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold mb-4">Registration Successful!</h2>
                  <p className="text-white/60 mb-8">Thank you for joining Miss Glamour Empire. Our team will contact you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn-outline">Back to Registration</button>
                </motion.div>
              ) : (
                <motion.form
                  key={activeForm}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {forms[activeForm].fields.map((field, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-white/50 font-bold">{field.label}</label>
                        {field.type === 'select' ? (
                          <select className="bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                            {field.options.map(opt => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
                          </select>
                        ) : (
                          <input 
                            type={field.type} 
                            placeholder={field.placeholder}
                            required
                            className="bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors"
                          />
                        )}
                      </div>
                    ))}
                    
                    {activeForm === 'model' && (
                      <div className="md:col-span-2">
                        <label className="text-xs uppercase tracking-widest text-white/50 font-bold mb-2 block">Upload Portfolio Photo</label>
                        <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:border-gold/50 transition-colors cursor-pointer group">
                           <Upload className="mx-auto text-white/20 mb-4 group-hover:text-gold transition-colors" size={40} />
                           <p className="text-white/40 text-sm">Drag and drop or click to upload (Max 5MB)</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="btn-primary w-full md:w-auto px-12 py-4 flex items-center justify-center gap-2">
                       Submit Registration <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Registration;
