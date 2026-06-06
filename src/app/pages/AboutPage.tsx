import React from 'react';
import { Link } from 'react-router';
import { Target, Users, Award, TrendingUp, Shield, Heart, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  const values = [
    {
      icon: <Shield size={32} />,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in our services and pricing, building lasting relationships with our clients.',
      color: '#FFB347',
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'We strive for excellence in every tender we handle, ensuring the highest quality of service delivery.',
      color: '#60C5F1',
    },
    {
      icon: <Users size={32} />,
      title: 'Client-Centric',
      description: 'Your success is our success. We tailor our services to meet your specific business needs and goals.',
      color: '#B28DFF',
    },
    {
      icon: <Heart size={32} />,
      title: 'Commitment',
      description: 'We are committed to helping businesses grow through government procurement opportunities.',
      color: '#3DDBA4',
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Phoenix Tender Tech was established in Ahmedabad with a vision to simplify government procurement.',
    },
    {
      year: '2016',
      title: 'GeM Expertise',
      description: 'Became one of the first consultancies to specialize in Government e-Marketplace services.',
    },
    {
      year: '2018',
      title: '10,000+ Clients',
      description: 'Crossed milestone of serving 10,000 businesses across India, expanding to pan-India operations.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online portal for real-time tender tracking and digital consultation services.',
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Awarded "Best Tender Consultancy" by Indian SME Association. ISO 9001:2015 certified.',
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Expanding our services nationwide, helping businesses succeed in government procurement.',
    },
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      experience: '15+ years in Government Procurement',
      initials: 'RS',
      color: '#FFB347',
    },
    {
      name: 'Priya Patel',
      role: 'Head of GeM Services',
      experience: '10+ years in GeM Consultancy',
      initials: 'PP',
      color: '#60C5F1',
    },
    {
      name: 'Amit Kumar',
      role: 'Tender Specialist',
      experience: '8+ years in Tender Management',
      initials: 'AK',
      color: '#B28DFF',
    },
    {
      name: 'Sneha Reddy',
      role: 'Legal Compliance Head',
      experience: '12+ years in Legal & Compliance',
      initials: 'SR',
      color: '#3DDBA4',
    },
    {
      name: 'Vikram Singh',
      role: 'Training & Support Manager',
      experience: '7+ years in Client Training',
      initials: 'VS',
      color: '#FF7E7E',
    },
    {
      name: 'Anita Desai',
      role: 'Operations Director',
      experience: '9+ years in Operations',
      initials: 'AD',
      color: '#FFB347',
    },
  ];

  return (
    <div style={{ background: 'linear-gradient(180deg, #060F1E 0%, #0A1628 100%)' }}>
      {/* Hero Section */}
      <section 
        className="text-white py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A2540 0%, #0F3460 50%, #1A4870 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,179,71,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,179,71,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{
                background: 'rgba(255,179,71,0.15)',
                border: '1px solid rgba(255,179,71,0.3)',
                color: '#FFB347',
              }}
            >
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Phoenix Tender Tech
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Your trusted partner in navigating the complex world of government tenders and procurement. 
              We empower businesses to unlock growth opportunities through expert guidance and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #080E1C 0%, #0B1F35 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span 
                className="font-bold uppercase tracking-widest text-sm mb-4 block"
                style={{ color: '#FFB347' }}
              >
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-blue-100/70 leading-relaxed">
                <p>
                  Founded in 2014, Phoenix Tender Tech emerged from a simple vision: to democratize access to 
                  government procurement opportunities for businesses of all sizes. Our founders, with over 15 years 
                  of combined experience in government contracting, recognized the challenges small and medium 
                  businesses faced in navigating the complex tender ecosystem.
                </p>
                <p>
                  What started as a small consultancy helping local businesses with tender documentation has grown 
                  into a comprehensive tender management platform serving thousands of clients across India. Today, 
                  we pride ourselves on being the bridge between ambitious businesses and lucrative government contracts.
                </p>
                <p>
                  Our mission remains unchanged: to simplify the tender process, provide expert guidance, and empower 
                  businesses to compete effectively in government procurement. With Phoenix Tender Tech, you're not 
                  just getting a service provider – you're gaining a strategic partner committed to your success.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwb2ZmaWNlJTIwd29ya2luZ3xlbnwxfHx8fDE3NzQ3NjY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
                style={{ border: '1px solid rgba(255,179,71,0.15)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #060C19 0%, #091628 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="font-bold uppercase tracking-widest text-sm mb-4 block"
              style={{ color: '#FFB347' }}
            >
              Our Milestones
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              A Decade of Growth
            </h2>
            <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">
              From a small startup to India's leading tender consultancy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 backdrop-blur-sm transition-all hover:scale-105 duration-300"
                style={{
                  background: `linear-gradient(145deg, ${['#FFB347', '#60C5F1', '#B28DFF', '#3DDBA4', '#FF7E7E', '#FFB347'][index % 6]}10 0%, rgba(10,37,64,0.7) 100%)`,
                  border: `2px solid ${['#FFB347', '#60C5F1', '#B28DFF', '#3DDBA4', '#FF7E7E', '#FFB347'][index % 6]}30`,
                }}
              >
                <div 
                  className="text-4xl font-extrabold mb-3"
                  style={{ color: ['#FFB347', '#60C5F1', '#B28DFF', '#3DDBA4', '#FF7E7E', '#FFB347'][index % 6] }}
                >
                  {item.year}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #07101E 0%, #0B1E38 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-xl"
              style={{
                background: 'linear-gradient(145deg, rgba(255,179,71,0.12) 0%, rgba(10,37,64,0.8) 100%)',
                border: '2px solid rgba(255,179,71,0.3)',
              }}
            >
              <Target size={48} style={{ color: '#FFB347' }} className="mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-white">
                Our Mission
              </h2>
              <p className="text-blue-100/70 leading-relaxed">
                To empower businesses across India by providing comprehensive tender management solutions, 
                expert consultation, and unwavering support. We aim to simplify government procurement processes 
                and help our clients win more contracts, grow sustainably, and contribute to national development.
              </p>
            </div>
            <div 
              className="rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-xl"
              style={{
                background: 'linear-gradient(145deg, rgba(96,197,241,0.12) 0%, rgba(10,37,64,0.8) 100%)',
                border: '2px solid rgba(96,197,241,0.3)',
              }}
            >
              <TrendingUp size={48} style={{ color: '#60C5F1' }} className="mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-white">
                Our Vision
              </h2>
              <p className="text-blue-100/70 leading-relaxed">
                To become India's most trusted and comprehensive tender management platform, recognized for 
                our integrity, expertise, and client success. We envision a future where every business, 
                regardless of size, can confidently participate in government procurement and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #060C19 0%, #091628 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="font-bold uppercase tracking-widest text-sm mb-4 block"
              style={{ color: '#FFB347' }}
            >
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-blue-200/60">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 backdrop-blur-sm text-center transition-all hover:scale-105 duration-300 shadow-lg"
                style={{
                  background: `linear-gradient(145deg, ${value.color}10 0%, rgba(10,37,64,0.8) 100%)`,
                  border: `2px solid ${value.color}30`,
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `${value.color}18`,
                    border: `2px solid ${value.color}45`,
                    color: value.color,
                  }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #07101E 0%, #0B1E38 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="font-bold uppercase tracking-widest text-sm mb-4 block"
              style={{ color: '#FFB347' }}
            >
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our Leadership Team
            </h2>
            <p className="text-xl text-blue-200/60">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden backdrop-blur-sm transition-all hover:scale-105 duration-300 shadow-lg"
                style={{
                  background: `linear-gradient(145deg, ${member.color}10 0%, rgba(10,37,64,0.85) 100%)`,
                  border: `2px solid ${member.color}25`,
                }}
              >
                <div 
                  className="h-32 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}20 0%, ${member.color}08 100%)`,
                  }}
                >
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold"
                    style={{ background: member.color, boxShadow: `0 0 30px ${member.color}50` }}
                  >
                    {member.initials}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="font-semibold mb-2" style={{ color: member.color }}>
                    {member.role}
                  </p>
                  <p className="text-blue-200/60 text-sm mb-4">{member.experience}</p>
                  <button 
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto transition-all hover:scale-110"
                    style={{
                      background: `${member.color}18`,
                      border: `1px solid ${member.color}40`,
                    }}
                  >
                    <Linkedin size={18} style={{ color: member.color }} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #060C19 0%, #091628 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="font-bold uppercase tracking-widest text-sm mb-4 block"
              style={{ color: '#FFB347' }}
            >
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our Office
            </h2>
            <p className="text-xl text-blue-200/60">Located in the heart of Ahmedabad</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                background: 'linear-gradient(145deg, rgba(255,179,71,0.08) 0%, rgba(10,37,64,0.8) 100%)',
                border: '2px solid rgba(255,179,71,0.2)',
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255,179,71,0.15)',
                      border: '1px solid rgba(255,179,71,0.3)',
                    }}
                  >
                    <MapPin size={20} style={{ color: '#FFB347' }} />
                  </div>
                  <div>
                    <div className="font-bold mb-1" style={{ color: '#0A2540' }}>Address</div>
                    <p className="text-gray-600">
                      Phoenix Tender Tech Pvt. Ltd.<br />
                      123 Business Center, SG Highway<br />
                      Ahmedabad, Gujarat 380015
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(96,197,241,0.15)',
                      border: '1px solid rgba(96,197,241,0.3)',
                    }}
                  >
                    <Phone size={20} style={{ color: '#60C5F1' }} />
                  </div>
                  <div>
                    <div className="font-bold mb-1" style={{ color: '#0A2540' }}>Phone</div>
                    <p className="text-gray-600">
                      +91 79 1234 5678<br />
                      +91 90 9876 5432
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(178,141,255,0.15)',
                      border: '1px solid rgba(178,141,255,0.3)',
                    }}
                  >
                    <Mail size={20} style={{ color: '#B28DFF' }} />
                  </div>
                  <div>
                    <div className="font-bold mb-1" style={{ color: '#0A2540' }}>Email</div>
                    <p className="text-gray-600">
                      info@phoenixtender.tech<br />
                      support@phoenixtender.tech
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden h-[400px] shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70729429782!2d72.41493152451846!3d23.02047450525931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1647234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0F3460 0%, #0A2540 100%)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Join Thousands of Successful Businesses
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Start your journey to winning government tenders with Phoenix Tender Tech
          </p>
          <Link 
            to="/contact"
            className="inline-block px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
            style={{
              background: '#FFB347',
              color: '#0A2540',
            }}
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}