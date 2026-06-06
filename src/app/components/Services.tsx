import React from 'react';
import { Link } from 'react-router';
import { ShieldCheck, FileText, Send, Users, Laptop, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const SERVICES = [
  {
    icon: Laptop,
    title: 'GeM Registration',
    slug: 'gem-registration',
    desc: 'Seamless registration and catalog management on the Government e-Marketplace (GeM) portal.'
  },
  {
    icon: FileText,
    title: 'Tender Bidding Support',
    slug: 'tender-bidding',
    desc: 'Expert review and preparation of necessary tender documentation to ensure 100% compliance.'
  },
  {
    icon: Send,
    title: 'OEM Panel Setup',
    slug: 'oem-panel',
    desc: 'Original Equipment Manufacturer authorization and panel management on GeM.'
  },
  {
    icon: Zap,
    title: 'Catalogue Management',
    slug: 'catalogue-management',
    desc: 'Professional product listing and profile optimization for maximum visibility.'
  },
  {
    icon: ShieldCheck,
    title: 'Training Services',
    slug: 'training',
    desc: 'Comprehensive training for using GeM portal and tender bidding processes effectively.'
  },
  {
    icon: Users,
    title: 'Consulting Services',
    slug: 'gem-registration',
    desc: 'Expert consultation for all your government procurement needs and strategy.'
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #3D241C 0%, #4A2E23 50%, #5F3A2D 100%)' }}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage: 'linear-gradient(rgba(184,181,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(184,181,255,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(115,113,252,0.15) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,181,255,0.1) 0%, transparent 70%)', transform: 'translate(-30%,30%)' }} />

      <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
        <h2 className="text-4xl font-bold text-white mb-6">Expert Support for Your Bid Journey</h2>
        <p className="text-orange-200/60 max-w-[700px] mx-auto mb-16 leading-relaxed">
          Beyond just listing tenders, we provide comprehensive support to help your business grow through government and corporate contracts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {SERVICES.map((service, index) => {
            const ACCENTS = ['#FF8C42', '#FFB88C', '#FFA366', '#E67A3B', '#FFD4B8', '#FF8C42'];
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl transition-all group relative overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${accent}08 0%, rgba(30,28,69,0.8) 100%)`,
                  border: `1.5px solid ${accent}20`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.border = `1.5px solid ${accent}50`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${accent}12`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.border = `1.5px solid ${accent}20`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full group-hover:scale-150 transition-transform duration-700"
                  style={{ background: `${accent}08` }} />
                
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 relative z-10 group-hover:scale-110"
                  style={{
                    background: `${accent}15`,
                    border: `1.5px solid ${accent}35`,
                    boxShadow: `0 0 20px ${accent}15`,
                  }}
                >
                  <service.icon style={{ color: accent }} size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-orange-200/60 leading-relaxed mb-8">
                  {service.desc}
                </p>
                
                <Link 
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300"
                  style={{
                    background: 'rgba(255, 140, 66, 0.25)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(255, 140, 66, 0.5)',
                    boxShadow: '0 4px 12px rgba(255, 140, 66, 0.2)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255, 140, 66, 0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255, 140, 66, 0.8)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(255, 140, 66, 0.35)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255, 140, 66, 0.25)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255, 140, 66, 0.5)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(255, 140, 66, 0.2)';
                  }}
                >
                  Learn More
                  <Zap size={14} className="transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '₹ 0',
      period: 'Forever',
      features: ['Daily Tender Summary', 'Basic Search', 'Email Alerts (1 Category)', 'Public Tender Access'],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹ 4,999',
      period: 'per year',
      features: ['Unlimited Search Filters', 'WhatsApp Notifications', 'GEM Portal Assistance', 'DSC Registration Support', 'Document Checklists', 'Bid Value Analysis'],
      cta: 'Subscribe Now',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per year',
      features: ['Dedicated Account Manager', 'ISO & MSME Consultation', 'Legal Advisory for Bids', 'Joint Venture Matching', 'Priority Document Prep', 'Competitor Analysis'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #2B1A14 0%, #4A2E23 100%)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(rgba(115,113,252,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(115,113,252,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
        <p className="text-orange-200/60 mb-16">Choose the plan that fits your business needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl text-left flex flex-col transition-all hover:scale-[1.02] duration-300"
              style={{
                background: plan.popular
                  ? 'linear-gradient(145deg, rgba(115,113,252,0.15) 0%, rgba(45,43,95,0.9) 100%)'
                  : 'linear-gradient(145deg, rgba(45,43,95,0.6) 0%, rgba(26,24,58,0.8) 100%)',
                border: plan.popular ? '2px solid rgba(115,113,252,0.5)' : '1px solid rgba(255,255,255,0.1)',
                boxShadow: plan.popular ? '0 0 40px rgba(115,113,252,0.2)' : 'none',
              }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                  style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #E67A3B 100%)', boxShadow: '0 4px 12px rgba(255,140,66,0.3)' }}>
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold" style={{ color: '#FF8C42' }}>{plan.price}</span>
                <span className="text-blue-300/60 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-blue-200/70">
                    <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg font-bold transition-all cursor-pointer"
                style={
                  plan.popular
                    ? { background: 'linear-gradient(135deg, #FF8C42 0%, #E67A3B 100%)', color: '#ffffff', boxShadow: '0 8px 24px rgba(255,140,66,0.3)' }
                    : { background: 'rgba(255,140,66,0.1)', border: '2px solid rgba(255,140,66,0.35)', color: '#FF8C42' }
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};