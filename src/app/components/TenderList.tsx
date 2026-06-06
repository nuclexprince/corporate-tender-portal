import React from 'react';
import { Link } from 'react-router';
import { MapPin, Building2, ExternalLink, Clock, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface Tender {
  id: string;
  title: string;
  department: string;
  location: string;
  deadline: string;
  value: string;
  category: string;
}

const MOCK_TENDERS: Tender[] = [
  {
    id: 'TND-2024-001',
    title: 'Construction of Multi-Story Residential Complex in Navi Mumbai',
    department: 'CIDCO - City and Industrial Development Corporation',
    location: 'Maharashtra, India',
    deadline: '28 Feb 2026',
    value: '₹ 150.50 Cr',
    category: 'Construction'
  },
  {
    id: 'TND-2024-002',
    title: 'Supply and Installation of Solar Power Plants in 50 District Hospitals',
    department: 'National Health Mission',
    location: 'Uttar Pradesh, India',
    deadline: '05 Mar 2026',
    value: '₹ 25.00 Cr',
    category: 'Energy'
  },
  {
    id: 'TND-2024-003',
    title: 'Implementation of Enterprise Resource Planning (ERP) System',
    department: 'Bharat Electronics Limited (BEL)',
    location: 'Karnataka, India',
    deadline: '12 Mar 2026',
    value: '₹ 12.80 Cr',
    category: 'IT Services'
  },
  {
    id: 'TND-2024-004',
    title: 'Maintenance and Cleaning Services for Metro Stations Phase II',
    department: 'Delhi Metro Rail Corporation (DMRC)',
    location: 'Delhi, India',
    deadline: '20 Feb 2026',
    value: '₹ 8.50 Cr',
    category: 'Services'
  }
];

export const TenderList: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFF8F3 0%, #FFE8DC 100%)' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,140,66,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,66,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="font-bold uppercase tracking-widest text-sm mb-3 block" style={{ color: '#E67A3B' }}>Market Opportunities</span>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#3B1F0B' }}>Latest Active Tenders</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#8B4513' }}>
              Real-time feed of the most recent government and private sector procurement opportunities across India.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg px-4 py-2 flex items-center gap-2"
              style={{ background: '#FFE8DC', border: '1px solid #FFB88C' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-bold" style={{ color: '#E67A3B' }}>1,240 New Today</span>
            </div>
            <Link 
              to="/tenders"
              className="px-6 py-2.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 text-white hover:brightness-95"
              style={{ background: '#FF8C42', boxShadow: '0 2px 8px rgba(255,140,66,0.25)' }}
            >
              Browse All <ExternalLink size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button className="px-5 py-2 text-white rounded-full text-sm font-bold cursor-pointer hover:brightness-95"
            style={{ background: '#FF8C42', boxShadow: '0 2px 8px rgba(255,140,66,0.2)' }}>All Sectors</button>
          <button className="px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer hover:brightness-95"
            style={{ background: 'white', border: '1px solid #FFB88C', color: '#8B4513' }}>Construction</button>
          <button className="px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer hover:brightness-95"
            style={{ background: 'white', border: '1px solid #FFB88C', color: '#8B4513' }}>IT & Telecom</button>
          <button className="px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer hover:brightness-95"
            style={{ background: 'white', border: '1px solid #FFB88C', color: '#8B4513' }}>Healthcare</button>
          <button className="px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer hover:brightness-95"
            style={{ background: 'white', border: '1px solid #FFB88C', color: '#8B4513' }}>Defence</button>
        </div>

        {/* Table Layout for Desktop */}
        <div className="hidden lg:block overflow-hidden rounded-2xl shadow-lg"
          style={{ background: 'white', border: '2px solid #FFB88C' }}
        >
          <table className="w-full text-left border-collapse">
            <thead style={{ background: '#FFE8DC', borderBottom: '2px solid #FFB88C' }}>
              <tr>
                <th className="px-8 py-5 text-xs font-extrabold uppercase tracking-[0.1em]" style={{ color: '#E67A3B' }}>Opportunity Details</th>
                <th className="px-8 py-5 text-xs font-extrabold uppercase tracking-[0.1em]" style={{ color: '#E67A3B' }}>Department / Authority</th>
                <th className="px-8 py-5 text-xs font-extrabold uppercase tracking-[0.1em]" style={{ color: '#E67A3B' }}>Value & Location</th>
                <th className="px-8 py-5 text-xs font-extrabold uppercase tracking-[0.1em]" style={{ color: '#E67A3B' }}>Due Date</th>
                <th className="px-8 py-5 text-xs font-extrabold uppercase tracking-[0.1em] text-right" style={{ color: '#E67A3B' }}>Action</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: '1px solid #FFD4B8' }}>
              {MOCK_TENDERS.map((tender, index) => (
                <motion.tr 
                  key={tender.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="transition-all group"
                  style={{ borderBottom: '1px solid #FFD4B8' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#FFF8F3')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td className="px-8 py-7 max-w-[450px]">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                          style={{ background: '#FFE8DC', border: '1px solid #FFB88C', color: '#E67A3B' }}>{tender.id}</span>
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase" style={{ color: '#8B4513' }}>
                          <Tag size={12} /> {tender.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold transition-colors leading-snug"
                        style={{ color: '#3B1F0B' }}>
                        {tender.title}
                      </h3>
                    </div>
                  </td>
                  <td className="px-8 py-7">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold" style={{ color: '#3B1F0B' }}>
                        <Building2 size={16} style={{ color: '#FFA366' }} className="shrink-0" />
                        <span className="line-clamp-1">{tender.department}</span>
                      </div>
                      <span className="text-xs pl-6" style={{ color: '#8B4513' }}>Verified Authority</span>
                    </div>
                  </td>
                  <td className="px-8 py-7">
                    <div className="flex flex-col gap-1.5">
                      <div className="text-sm font-extrabold w-fit px-2 py-0.5 rounded"
                        style={{ background: '#D4F4E8', border: '1px solid #86EFAC', color: '#047857' }}>
                        {tender.value}
                      </div>
                      <div className="flex items-center gap-2 text-xs" style={{ color: '#8B4513' }}>
                        <MapPin size={14} style={{ color: '#FFA366' }} className="shrink-0" />
                        {tender.location}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-7">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-sm font-extrabold" style={{ color: '#DC2626' }}>
                        <Clock size={16} />
                        {tender.deadline}
                      </div>
                      <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: '#FFD4B8' }}>
                        <div className="h-full w-[30%]" style={{ background: '#DC2626' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-7 text-right">
                    <Link 
                      to={`/tenders/${tender.id}`}
                      className="inline-block px-6 py-2.5 text-white text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer active:scale-95 hover:brightness-95"
                      style={{ background: '#FF8C42', boxShadow: '0 2px 8px rgba(255,140,66,0.25)' }}
                    >
                      View Details
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Cards) */}
        <div className="lg:hidden flex flex-col gap-6">
          {MOCK_TENDERS.map((tender) => (
            <Link 
              key={tender.id}
              to={`/tenders/${tender.id}`}
              className="p-6 rounded-2xl flex flex-col gap-4 transition-all"
              style={{
                background: 'white',
                border: '2px solid #FFB88C',
                boxShadow: '0 2px 8px rgba(255,140,66,0.1)',
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider"
                  style={{ background: '#FFE8DC', border: '1px solid #FFB88C', color: '#E67A3B' }}>{tender.id}</span>
                <span className="text-xs font-extrabold flex items-center gap-1" style={{ color: '#DC2626' }}>
                  <Clock size={14} /> {tender.deadline}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: '#8B4513' }}>{tender.category}</span>
                <h3 className="text-xl font-bold leading-tight" style={{ color: '#3B1F0B' }}>{tender.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 py-4" style={{ borderTop: '1px solid #FFD4B8', borderBottom: '1px solid #FFD4B8' }}>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#8B4513' }}>Authority</span>
                  <div className="flex items-center gap-2 text-xs font-bold" style={{ color: '#3B1F0B' }}>
                    <Building2 size={14} style={{ color: '#FFA366' }} />
                    <span className="line-clamp-1">{tender.department.split('-')[0]}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#8B4513' }}>Estimated Value</span>
                  <div className="text-xs font-extrabold" style={{ color: '#047857' }}>
                    {tender.value}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: '#8B4513' }}>
                <MapPin size={14} style={{ color: '#FFA366' }} />
                {tender.location}
              </div>
              <button className="w-full py-4 font-bold rounded-xl text-sm cursor-pointer transition-all text-white hover:brightness-95"
                style={{ background: '#FF8C42', boxShadow: '0 2px 8px rgba(255,140,66,0.25)' }}>
                View Tender Details
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};