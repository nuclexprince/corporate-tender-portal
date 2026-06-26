import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { Search, MapPin, ChevronLeft, ChevronRight, ArrowRight, Laptop, FileText, Send, Zap, GraduationCap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import bgImage from 'figma:asset/e682ebef5a4c1756f20ade0c8585754d78d4390e.png';
import laptopWorkspace from 'figma:asset/b560bdd03c4e4e46d04ac11d7333a517b07e30db.png';
import exampleImage from 'figma:asset/77d8cb67550763f25a95591becdc90b68aeeb976.png';

/* ───────────── SERVICES ───────────── */
const SERVICES = [
  { icon: Laptop, title: 'GeM Registration', slug: 'gem-registration', desc: 'Seamless onboarding & catalog setup.', accent: '#16a34a' },
  { icon: FileText, title: 'Tender Bidding', slug: 'tender-bidding', desc: 'Expert bid preparation & compliance.', accent: '#22c55e' },
  { icon: Send, title: 'OEM Panel Setup', slug: 'oem-panel', desc: 'OEM authorization & management.', accent: '#10b981' },
  { icon: Zap, title: 'Catalogue Management', slug: 'catalogue-management', desc: 'Optimized product listings.', accent: '#059669' },
  { icon: GraduationCap, title: 'Training Services', slug: 'training', desc: 'GeM & tender training programs.', accent: '#0ea5e9' },
];

/* ───────────── CAROUSEL HELPERS ───────────── */
function getOffset(idx: number, active: number, total: number) {
  let o = idx - active;
  if (o > total / 2) o -= total;
  if (o < -total / 2) o += total;
  return o;
}

function cardTransform(offset: number) {
  const abs = Math.abs(offset);

  if (abs > 2) return { opacity: 0, pointerEvents: 'none', zIndex: 0 };

  const map: any = {
    0: { x: 0, z: 120, ry: 0, scale: 1, opacity: 1, zIndex: 10 },
    1: { x: 180, z: -80, ry: -35, scale: 0.82, opacity: 0.7, zIndex: 5 },
    2: { x: 300, z: -160, ry: -50, scale: 0.6, opacity: 0, zIndex: 1 },
  };

  const c = map[abs];

  return {
    transform: `translateX(${offset < 0 ? -c.x : c.x}px) translateZ(${c.z}px) rotateY(${offset < 0 ? c.ry : -c.ry}deg) scale(${c.scale})`,
    opacity: c.opacity,
    zIndex: c.zIndex,
    transition: 'all 0.6s ease',
  };
}

/* ───────────── CAROUSEL ───────────── */
const HeroCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const total = SERVICES.length;

  const next = useCallback(() => setActive(a => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total]);

  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="w-full flex flex-col items-center">

      <div className="relative w-full h-[300px] perspective-[1000px]">
        <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>

          {SERVICES.map((svc, i) => {
            const offset = getOffset(i, active, total);
            const Icon = svc.icon;
            const isActive = offset === 0;

            return (
              <div
                key={svc.slug}
                className="absolute"
                style={{
                  width: '240px',
                  transformStyle: 'preserve-3d',
                  ...cardTransform(offset),
                }}
                onClick={() => setActive(i)}
              >
                <div
                  className="rounded-2xl p-5 h-[250px] flex flex-col"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    border: `1px solid ${isActive ? svc.accent : 'rgba(0,0,0,0.08)'}`,
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
                    style={{ background: `${svc.accent}20`, color: svc.accent }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="font-bold text-sm mb-2">{svc.title}</h3>
                  <p className="text-xs text-gray-500">{svc.desc}</p>

                  {isActive && (
                    <Link
                      to={`/services/${svc.slug}`}
                      className="mt-auto text-xs font-bold text-white px-4 py-2 rounded-lg"
                      style={{ background: svc.accent }}
                    >
                      Learn More <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <button onClick={prev}><ChevronLeft /></button>
        <button onClick={next}><ChevronRight /></button>
      </div>

    </div>
  );
};

/* ───────────── HERO ───────────── */
export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img src={bgImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-green-900/80 to-emerald-950/90" />
      </div>

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-400/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">

        {/* LEFT */}
        <div className="flex-1 text-white">

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Trusted Procurement Platform
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Discover & Win <br />
            <span className="text-green-400">Government Tenders</span>
          </h1>

          <p className="mt-5 text-white/70 max-w-xl">
            Real-time access to tenders, bidding tools, and procurement insights.
          </p>

          {/* SEARCH */}
          <div className="mt-8 flex gap-2 bg-white/10 p-2 rounded-xl border border-white/20">
            <input className="flex-1 px-3 bg-transparent outline-none text-white" placeholder="Search tenders..." />
            <button className="px-4 py-2 bg-green-500 rounded-lg">Search</button>
          </div>

          {/* STATS */}
          <div className="mt-6 text-sm text-white/60 flex gap-6">
            <span>20K+ Tenders</span>
            <span>89 Departments</span>
            <span>Hourly Updates</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <HeroCarousel />
        </div>

      </div>
    </section>
  );
};

export default Hero;