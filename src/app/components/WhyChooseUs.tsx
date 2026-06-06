import React from 'react';
import { Award, HeadsetIcon, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const FEATURES = [
  {
    icon: Award,
    title: 'Expert GeM Consultants',
    description: 'Certified professionals with deep platform knowledge',
    color: '#FFB88C',
  },
  {
    icon: HeadsetIcon,
    title: 'End-to-End Support',
    description: 'From registration to winning bids, we handle everything',
    color: '#FFA366',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: 'Trusted by businesses across Ahmedabad',
    color: '#FF8C42',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1A0F0A 0%, #2D1810 45%, #3D1F12 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #FF8C42 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Animated Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative rounded-3xl overflow-hidden z-10"
              style={{
                boxShadow: '0 24px 40px rgba(255, 140, 66, 0.15)',
                border: '2px solid rgba(255, 184, 140, 0.2)',
              }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvcnBvcmF0ZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3NTE1MDI2OXww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Corporate Business Partnership"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26, 15, 10, 0.9) 0%, rgba(26, 15, 10, 0.1) 60%)' }} />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md mb-3" style={{ background: 'rgba(255, 140, 66, 0.2)', border: '1px solid rgba(255, 184, 140, 0.3)' }}>
                  <ShieldCheck size={18} style={{ color: '#FFB88C' }} />
                  <span className="text-white font-bold text-sm">Government Verified</span>
                </div>
                <h4 className="text-white text-xl font-bold">Trusted by 500+ Enterprises</h4>
              </div>
            </motion.div>

            {/* Decorative background elements for image */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: '#FF8C42' }}
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: '#FFB88C' }}
            />
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-7/12">
            <div className="text-left mb-10">
              <span
                className="font-bold uppercase tracking-widest text-sm mb-4 block"
                style={{ color: '#FF8C42' }}
              >
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Your Success Partner
              </h2>
              <p className="text-lg" style={{ color: 'rgba(255, 212, 184, 0.7)' }}>
                Comprehensive tender management solutions backed by expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl p-6 transition-all hover:scale-105 duration-300 flex flex-col items-start"
                    style={{
                      background: `linear-gradient(145deg, ${feature.color}12 0%, rgba(45,24,16,0.8) 100%)`,
                      border: `2px solid ${feature.color}50`,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div
                      className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl"
                      style={{
                        background: `${feature.color}15`,
                        border: `2px solid ${feature.color}`,
                      }}
                    >
                      <Icon size={28} style={{ color: feature.color }} />
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-white">
                      {feature.title}
                    </h3>

                    <p className="leading-relaxed text-sm" style={{ color: 'rgba(255, 212, 184, 0.6)' }}>
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Simple trust bar */}
            <div
              className="mt-10 flex flex-wrap gap-4 md:gap-8 p-5 rounded-2xl backdrop-blur-sm"
              style={{
                background: 'rgba(45, 24, 16, 0.3)',
                border: '1px solid rgba(255, 140, 66, 0.15)',
              }}
            >
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'rgba(255, 212, 184, 0.8)' }}>
                <span style={{ color: '#FFB88C' }}>✓</span> ISO 9001:2015 Certified
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'rgba(255, 212, 184, 0.8)' }}>
                <span style={{ color: '#FFB88C' }}>✓</span> GeM Authorized
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'rgba(255, 212, 184, 0.8)' }}>
                <span style={{ color: '#FFB88C' }}>✓</span> 10+ Years Exp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};