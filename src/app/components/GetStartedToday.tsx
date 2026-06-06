import React from 'react';
import { Link } from 'react-router';
import { Clock, Award, ShieldCheck, ArrowRight } from 'lucide-react';

export const GetStartedToday: React.FC = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3D241C 0%, #4A2E23 50%, #5F3A2D 100%)',
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(115,113,252,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(115,113,252,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      
      {/* Gold accent line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #FF8C42 50%, transparent 100%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Started Today
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Partner with India's most trusted tender consultancy and unlock government opportunities
          </p>
        </div>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Column 1: Pricing */}
          <div 
            className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-[1.02] duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(115, 113, 252, 0.2)',
            }}
          >
            <div 
              className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl"
              style={{
                background: 'rgba(115, 113, 252, 0.15)',
                border: '1px solid rgba(115, 113, 252, 0.3)',
              }}
            >
              <Clock size={28} style={{ color: '#FF8C42' }} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Flexible Pricing</h3>
            <div className="mb-4">
              <div 
                className="text-4xl font-extrabold mb-2"
                style={{ color: '#FF8C42' }}
              >
                ₹8,000 - ₹20,000
              </div>
              <p className="text-gray-400 text-sm">per month</p>
            </div>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] mt-1.5 flex-shrink-0" />
                <span>Ongoing service support</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] mt-1.5 flex-shrink-0" />
                <span>No hidden charges</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] mt-1.5 flex-shrink-0" />
                <span>Pay-per-service options available</span>
              </div>
            </div>
          </div>

          {/* Column 2: CTA */}
          <div 
            className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-[1.02] duration-300 flex flex-col justify-center items-center text-center"
            style={{
              background: 'rgba(255, 140, 66, 0.08)',
              border: '2px solid #FF8C42',
              boxShadow: '0 0 40px rgba(255, 140, 66, 0.15)',
            }}
          >
            <div 
              className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #FF8C42 0%, #E67A3B 100%)',
              }}
            >
              <Award size={28} style={{ color: '#ffffff' }} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">10+ Years Experience</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Proven track record with 500+ successful projects across central and state departments.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 active:scale-95 group"
              style={{
                background: 'linear-gradient(135deg, #FF8C42 0%, #E67A3B 100%)',
                color: '#ffffff',
                boxShadow: '0 8px 30px rgba(255, 140, 66, 0.4)',
              }}
            >
              Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Column 3: Compliance */}
          <div className="rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-[1.02] duration-300 flex flex-col">
            <div 
              className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl"
              style={{
                background: 'rgba(255, 140, 66, 0.15)',
                border: '1px solid rgba(255, 140, 66, 0.3)',
              }}
            >
              <ShieldCheck size={28} style={{ color: '#FF8C42' }} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">100% Compliance</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              ISO-certified processes ensuring complete adherence to government regulations.
            </p>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] mt-1.5 flex-shrink-0" />
                <span>ISO 9001:2015 certified processes</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] mt-1.5 flex-shrink-0" />
                <span>Expert legal & compliance team</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] mt-1.5 flex-shrink-0" />
                <span>100% document accuracy guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            *Pricing varies based on service type and project complexity. Contact us for a detailed quote.
          </p>
        </div>
      </div>
    </section>
  );
};