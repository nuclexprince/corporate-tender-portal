import React, { useState } from 'react';
import { Link } from 'react-router';
import { CheckCircle, Award, Users, TrendingUp, ShieldCheck, Clock, ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Component
const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is GeM and why should my business register on it?',
      answer: 'Government e-Marketplace (GeM) is India\'s national public procurement portal for government ministries and organizations. Registration opens access to thousands of tenders worth billions, with simplified processes and no tender fees.',
    },
    {
      question: 'How long does the GeM registration process take?',
      answer: 'Typically 3-5 working days once all documents are submitted. Our experts handle everything from document preparation to profile verification, ensuring quick approval.',
    },
    {
      question: 'What documents are required for GeM registration?',
      answer: 'PAN Card, GST Certificate, Bank Details, Digital Signature Certificate (Class 3), Business Registration Certificate, and Udyam/MSME Certificate (if applicable).',
    },
    {
      question: 'Do you provide ongoing support after registration?',
      answer: 'Yes! We offer comprehensive support including catalog management, bid assistance, order processing guidance, and quarterly account reviews.',
    },
    {
      question: 'Can you help with OEM authorization?',
      answer: 'Absolutely. We assist in obtaining OEM authorization letters, panel registration, and maintaining compliance with manufacturer requirements.',
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden transition-all"
          style={{
            background: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(10,37,64,0.1)',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
          >
            <span className="font-bold text-[#3D241C] pr-4">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp size={20} className="text-[#FF8C42] flex-shrink-0" />
            ) : (
              <ChevronDown size={20} className="text-[#FF8C42] flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function GemConsultantPage() {
  const services = [
    {
      title: 'GeM Registration',
      description: 'Complete assistance in seller/buyer registration on Government e-Marketplace',
      icon: <CheckCircle size={32} />,
      color: '#FF8C42',
    },
    {
      title: 'Vendor Assessment',
      description: 'Quality assessment and rating management for GeM vendors',
      icon: <Award size={32} />,
      color: '#FF8C42',
    },
    {
      title: 'OEM Panel Setup',
      description: 'Original Equipment Manufacturer authorization and panel management',
      icon: <ShieldCheck size={32} />,
      color: '#FF8C42',
    },
    {
      title: 'Catalog Management',
      description: 'Professional product listing and catalog optimization on GeM',
      icon: <TrendingUp size={32} />,
      color: '#FF8C42',
    },
    {
      title: 'Bid Management',
      description: 'Complete support in bidding for GeM tenders and contracts',
      icon: <Users size={32} />,
      color: '#FF8C42',
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training for using GeM portal effectively',
      icon: <Clock size={32} />,
      color: '#FF8C42',
    }
  ];

  const pricingPackages = [
    {
      name: 'Basic',
      price: '₹8,000',
      period: 'one-time',
      features: [
        'GeM Registration',
        'Profile Setup',
        'Basic Catalog Upload (up to 20 products)',
        'Email Support',
        '1 Month Post-Registration Support',
      ],
      color: '#FF8C42',
    },
    {
      name: 'Pro',
      price: '₹15,000',
      period: 'per month',
      features: [
        'Everything in Basic',
        'Unlimited Catalog Management',
        'Bid Document Preparation',
        'OEM Panel Setup',
        'Dedicated Account Manager',
        'Priority Support',
        'Quarterly Performance Review',
      ],
      color: '#FF8C42',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored',
      features: [
        'Everything in Pro',
        'Multi-category Management',
        'Advanced Bid Strategy',
        'Contract Negotiation Support',
        '24/7 Priority Support',
        'Monthly Training Sessions',
        'Dedicated Team',
      ],
      color: '#FF8C42',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="text-white py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #110D35 0%, #3D241C 50%, #2A2475 100%)',
        }}
      >
        {/* Background decoration */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(115,113,252,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(115,113,252,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span 
                className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{
                  background: 'rgba(115,113,252,0.15)',
                  border: '1px solid rgba(115,113,252,0.3)',
                  color: '#FF8C42',
                }}
              >
                Expert GeM Consultancy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                GeM Consultant Services
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Your trusted partner for Government e-Marketplace (GeM) registration, bidding, and ongoing support. 
                We help businesses unlock government procurement opportunities worth crores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all text-center shadow-lg"
                  style={{
                    background: '#FF8C42',
                    color: 'white',
                  }}
                >
                  Get Started
                </Link>
                <Link 
                  to="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc3NDY3MjI0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="GeM Consultant"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="font-bold uppercase tracking-widest text-sm mb-4 block"
              style={{ color: '#FF8C42' }}
            >
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#3D241C' }}>
              Our GeM Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your GeM needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-105 duration-300 shadow-lg"
                style={{
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  border: `2px solid ${service.color}30`,
                }}
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${service.color}15`,
                    border: `2px solid ${service.color}40`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#3D241C' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="font-bold uppercase tracking-widest text-sm mb-4 block"
              style={{ color: '#FF8C42' }}
            >
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#3D241C' }}>
              Register → List → Bid → Win
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic 4-step approach to ensure your GeM success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Register', 'List', 'Bid', 'Win'].map((step, index) => {
              const colors = ['#FF8C42', '#9F9CFC', '#C3C1FD', '#FF8C42'];
              const descriptions = [
                'Complete GeM registration with all necessary documents',
                'Professional catalog setup with optimized product listings',
                'Expert bid preparation and submission assistance',
                'Secure government contracts and grow your business',
              ];
              
              return (
                <div key={index} className="relative">
                  <div 
                    className="rounded-2xl p-6 backdrop-blur-sm h-full transition-all hover:scale-105 duration-300"
                    style={{
                      background: `${colors[index]}10`,
                      border: `2px solid ${colors[index]}40`,
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl text-white mb-4"
                      style={{ background: colors[index] }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: colors[index] }}>
                      {step}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {descriptions[index]}
                    </p>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div 
                        className="w-6 h-6 rotate-45"
                        style={{ background: colors[index + 1], opacity: 0.3 }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #110D35 0%, #3D241C 100%)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span 
              className="font-bold uppercase tracking-widest text-sm mb-4 block"
              style={{ color: '#FF8C42' }}
            >
              Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Choose Your Package
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Flexible pricing options designed for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-105 duration-300 relative"
                style={{
                  background: pkg.popular 
                    ? 'linear-gradient(145deg, rgba(115,113,252,0.15) 0%, rgba(115,113,252,0.05) 100%)'
                    : 'rgba(255,255,255,0.05)',
                  border: `2px solid ${pkg.popular ? pkg.color : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                {pkg.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: '#FF8C42',
                      color: 'white',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-extrabold mb-1" style={{ color: pkg.color }}>
                    {pkg.price}
                  </div>
                  <p className="text-gray-400 text-sm">{pkg.period}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: pkg.color }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full block text-center px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                  style={{
                    background: pkg.popular ? pkg.color : 'rgba(255,255,255,0.1)',
                    color: pkg.popular ? 'white' : 'white',
                    border: pkg.popular ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span 
                className="font-bold uppercase tracking-widest text-sm mb-4 block"
                style={{ color: '#FF8C42' }}
              >
                Got Questions?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#3D241C' }}>
                GeM FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to commonly asked questions about our GeM services
              </p>
            </div>
            
            <FAQ />
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions? We're here to help!
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                style={{
                  background: '#FF8C42',
                  color: 'white',
                }}
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3D241C 0%, #110D35 100%)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Start Your GeM Journey?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Join thousands of successful businesses selling to the government. 
            Let our experts guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
              style={{
                background: '#FF8C42',
                color: 'white',
              }}
            >
              Schedule Free Consultation
            </Link>
            <Link 
              to="/services"
              className="px-10 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}