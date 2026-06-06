import React from 'react';
import { TenderList } from '../components/TenderList';
import { Search } from 'lucide-react';

export default function TendersPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(160deg, #FFF8F3 0%, #FFE8DC 50%, #FFD4B8 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#3B1F0B' }}>Live Tenders</h1>
        <p className="mb-8" style={{ color: '#8B4513' }}>Browse and search from thousands of active tender opportunities</p>
        
        {/* Search and Filter Section */}
        <div className="p-6 rounded-xl mb-8"
          style={{ background: 'white', border: '2px solid #FFB88C', boxShadow: '0 2px 8px rgba(255,140,66,0.1)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input 
              type="text" 
              placeholder="Search by keywords..." 
              className="p-3 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2"
              style={{ background: '#FFF8F3', border: '1px solid #FFB88C', color: '#3B1F0B', '--tw-ring-color': '#FF8C42' } as React.CSSProperties}
            />
            <select className="p-3 rounded-lg focus:outline-none focus:ring-2"
              style={{ background: '#FFF8F3', border: '1px solid #FFB88C', color: '#3B1F0B', '--tw-ring-color': '#FF8C42' } as React.CSSProperties}>
              <option>All States</option>
              <option>Maharashtra</option>
              <option>Gujarat</option>
              <option>Delhi</option>
              <option>Karnataka</option>
            </select>
            <select className="p-3 rounded-lg focus:outline-none focus:ring-2"
              style={{ background: '#FFF8F3', border: '1px solid #FFB88C', color: '#3B1F0B', '--tw-ring-color': '#FF8C42' } as React.CSSProperties}>
              <option>All Categories</option>
              <option>Construction</option>
              <option>IT Services</option>
              <option>Medical Equipment</option>
              <option>Office Supplies</option>
            </select>
            <button className="p-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-white hover:brightness-95"
              style={{ background: '#FF8C42', boxShadow: '0 2px 8px rgba(255,140,66,0.25)' }}>
              <Search size={20} />
              Search
            </button>
          </div>
        </div>

        <TenderList />
      </div>
    </div>
  );
}