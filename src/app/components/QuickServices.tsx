import React from 'react';
import { Gavel, FileText, Award, Filter, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface QuickServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
  isLast?: boolean;
}

const QuickServiceItem: React.FC<QuickServiceItemProps> = ({ icon, title, description, iconBg, isLast }) => (
  <div className={`flex flex-col items-center text-center p-8 md:p-12 ${!isLast ? 'md:border-r border-white/10' : ''} flex-1 group hover:bg-white/5 transition-colors duration-300 cursor-pointer`}>
    <div className={`w-20 h-20 rounded-full ${iconBg} flex items-center justify-center text-white mb-8 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h3 className="text-sm font-extrabold text-[#FFB88C] uppercase tracking-widest mb-4">
      {title}
    </h3>
    <p className="text-orange-200/70 text-sm leading-relaxed max-w-[240px]">
      {description}
    </p>
  </div>
);

export const QuickServices: React.FC = () => {
  const services = [
    {
      icon: <Gavel size={36} />,
      title: 'Tender Services',
      description: 'Streamlined solutions for efficient tender management.',
      iconBg: 'bg-[#FFA366]',
    },
    {
      icon: <FileText size={36} />,
      title: 'Registration Services',
      description: 'Simplify your registration process with our streamlined services.',
      iconBg: 'bg-[#FF8C42]',
    },
    {
      icon: <Award size={36} />,
      title: 'Digital Certificates',
      description: 'Secure your tender transactions with digital certificates.',
      iconBg: 'bg-[#E67A3B]',
    },
    {
      icon: <Filter size={36} />,
      title: 'Other Services',
      description: '',
      iconBg: 'bg-[#FF9A5C]',
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative"
        style={{
          background: 'linear-gradient(135deg, #4A2E23 0%, #5F3A2D 50%, #6B4432 100%)',
          border: '1px solid rgba(255,184,140,0.2)',
        }}
      >
        {services.map((service, index) => (
          <QuickServiceItem 
            key={index}
            {...service}
            isLast={index === services.length - 1}
          />
        ))}
        
        {/* Floating Call Action */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden lg:block translate-x-full pl-6">
          <button className="w-12 h-12 bg-[#FF8C42] text-white rounded-l-lg flex items-center justify-center shadow-lg hover:bg-[#E67A3B] transition-colors cursor-pointer group">
            <Phone size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};