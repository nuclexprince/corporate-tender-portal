import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: 'white',
};

export default function ContactPage() {
  const contactCards = [
    { icon: <Mail size={28} />, title: 'Email Us', lines: ['info@phoenixtender.tech', 'support@phoenixtender.tech'], color: '#FFB347' },
    { icon: <Phone size={28} />, title: 'Call Us', lines: ['+91 9876543210', '+91 9876543211'], color: '#60C5F1' },
    { icon: <MapPin size={28} />, title: 'Visit Us', lines: ['BKC Business Hub', 'Mumbai, Maharashtra 400051'], color: '#B28DFF' },
  ];

  return (
    <div className="py-20 min-h-screen" style={{ background: 'linear-gradient(160deg, #060F1E 0%, #0A2540 100%)' }}>
      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,179,71,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,179,71,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="font-bold uppercase tracking-widest text-sm mb-4 block" style={{ color: '#FFB347' }}>
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-200/60">Get in touch with our team for any queries or assistance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactCards.map((card, i) => (
            <div key={i} className="p-6 rounded-xl text-center transition-all hover:scale-105 duration-300"
              style={{
                background: `linear-gradient(145deg, ${card.color}10 0%, rgba(10,37,64,0.8) 100%)`,
                border: `2px solid ${card.color}25`,
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: `${card.color}18`, border: `2px solid ${card.color}40`, color: card.color }}
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">{card.title}</h3>
              {card.lines.map((line, j) => (
                <p key={j} className="text-blue-200/60">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-8 rounded-xl"
            style={{ background: 'rgba(10,37,64,0.6)', border: '1px solid rgba(255,179,71,0.15)', backdropFilter: 'blur(12px)' }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-blue-200/70">First Name *</label>
                  <input type="text" className="w-full p-3 rounded-lg focus:outline-none placeholder:text-blue-300/30" style={inputStyle} placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-blue-200/70">Last Name *</label>
                  <input type="text" className="w-full p-3 rounded-lg focus:outline-none placeholder:text-blue-300/30" style={inputStyle} placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-blue-200/70">Email Address *</label>
                <input type="email" className="w-full p-3 rounded-lg focus:outline-none placeholder:text-blue-300/30" style={inputStyle} placeholder="john.doe@example.com" required />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-blue-200/70">Phone Number *</label>
                <input type="tel" className="w-full p-3 rounded-lg focus:outline-none placeholder:text-blue-300/30" style={inputStyle} placeholder="+91 98765 43210" required />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-blue-200/70">Service Interest</label>
                <select className="w-full p-3 rounded-lg focus:outline-none" style={{ ...inputStyle, color: '#93c5fd' }}>
                  <option style={{ background: '#0A2540' }}>Select a service</option>
                  <option style={{ background: '#0A2540' }}>GeM Registration</option>
                  <option style={{ background: '#0A2540' }}>Tender Bidding Support</option>
                  <option style={{ background: '#0A2540' }}>OEM Panel Setup</option>
                  <option style={{ background: '#0A2540' }}>Certificate Services</option>
                  <option style={{ background: '#0A2540' }}>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-blue-200/70">Message *</label>
                <textarea rows={5} className="w-full p-3 rounded-lg focus:outline-none placeholder:text-blue-300/30 resize-none" style={inputStyle} placeholder="Tell us about your requirements..." required></textarea>
              </div>

              <button type="submit" className="w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 text-[#0A2540]"
                style={{ background: '#FFB347', boxShadow: '0 8px 24px rgba(255,179,71,0.3)' }}>
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div className="p-8 rounded-xl"
              style={{ background: 'linear-gradient(145deg, rgba(96,197,241,0.08) 0%, rgba(10,37,64,0.8) 100%)', border: '2px solid rgba(96,197,241,0.2)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock size={28} style={{ color: '#60C5F1' }} />
                <h2 className="text-2xl font-bold text-white">Business Hours</h2>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-semibold text-blue-100">Monday - Friday</span>
                  <span className="text-blue-200/60">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-semibold text-blue-100">Saturday</span>
                  <span className="text-blue-200/60">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-blue-100">Sunday</span>
                  <span className="text-rose-400">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <div className="text-white p-8 rounded-xl"
              style={{ background: 'linear-gradient(135deg, rgba(255,179,71,0.15) 0%, rgba(11,61,145,0.4) 100%)', border: '2px solid rgba(255,179,71,0.3)' }}
            >
              <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
              <p className="mb-6 text-blue-100/80">
                For urgent tender-related queries or technical support, our team is available on WhatsApp.
              </p>
              <button className="w-full py-3 rounded-lg font-bold transition-all hover:scale-[1.02] text-[#0A2540]"
                style={{ background: '#FFB347', boxShadow: '0 8px 24px rgba(255,179,71,0.3)' }}>
                Chat on WhatsApp
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="p-4 rounded-xl"
              style={{ background: 'rgba(10,37,64,0.5)', border: '1px solid rgba(255,179,71,0.15)' }}
            >
              <div className="aspect-video rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(11,61,145,0.3) 0%, rgba(6,15,30,0.8) 100%)' }}
              >
                <div className="text-center">
                  <MapPin size={48} style={{ color: '#FFB347' }} className="mx-auto mb-2" />
                  <p className="text-blue-200/60">Map Location — Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
