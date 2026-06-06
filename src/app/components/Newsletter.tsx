import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3D241C 0%, #4A2E23 100%)',
      }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,140,66,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,66,0.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{ background: '#FF8C42', transform: 'translate(-50%, -50%)' }}
      />
      <div
        className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-20"
        style={{ background: '#FFB88C', transform: 'translate(50%, -50%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div 
            className="mb-6 flex items-center justify-center w-20 h-20 rounded-2xl mx-auto"
            style={{
              background: 'rgba(255,140,66,0.15)',
              border: '2px solid rgba(255,140,66,0.3)',
            }}
          >
            <Mail size={40} style={{ color: '#FF8C42' }} />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Never Miss a Tender Opportunity
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Get instant alerts for relevant tenders, expert insights, and exclusive industry updates delivered to your inbox daily
          </p>

          {/* Form */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              >
                <div className="flex-1 relative">
                  <Mail 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
                    size={20} 
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      border: '2px solid transparent',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #FF8C42 0%, #E67A3B 100%)',
                    color: '#ffffff',
                    boxShadow: '0 8px 30px rgba(255, 140, 66, 0.4)',
                  }}
                  disabled={submitted}
                >
                  {submitted ? 'Subscribed!' : (<><Send size={18} /> Subscribe</>)}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-8"
              >
                <div 
                  className="mb-4 flex items-center justify-center w-16 h-16 rounded-full"
                  style={{ background: 'rgba(255,140,66,0.2)' }}
                >
                  <CheckCircle size={36} style={{ color: '#FF8C42' }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Successfully Subscribed!
                </h3>
                <p className="text-gray-300">
                  Check your inbox for a confirmation email
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: '#FF8C42' }} />
              <span>Daily tender alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: '#FF8C42' }} />
              <span>Expert tips & guides</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: '#FF8C42' }} />
              <span>Unsubscribe anytime</span>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};