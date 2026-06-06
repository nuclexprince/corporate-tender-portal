import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  Package,
  FileText,
  Award,
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Package,
    title: 'GeM Registration',
    slug: 'gem-registration',
    desc: 'Seamless onboarding & catalog setup on Government e-Marketplace.',
    accent: '#FFB88C',
  },
  {
    icon: FileText,
    title: 'Tender Bidding',
    slug: 'tender-bidding',
    desc: 'Expert document prep & compliance review for winning bids.',
    accent: '#FFA366',
  },
  {
    icon: Award,
    title: 'OEM Panel Setup',
    slug: 'oem-panel',
    desc: 'OEM authorization & panel management on GeM portal.',
    accent: '#FFD4B8',
  },
  {
    icon: BarChart3,
    title: 'Catalogue Management',
    slug: 'catalogue-management',
    desc: 'Professional product listing & profile optimization for visibility.',
    accent: '#FF9A5C',
  },
  {
    icon: BookOpen,
    title: 'Training Services',
    slug: 'training',
    desc: 'Comprehensive GeM & tender bidding training programmes.',
    accent: '#E67A3B',
  },
];

function getOffset(index: number, active: number, total: number): number {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

interface CardStyleProps {
  offset: number;
}

function getCardStyle({ offset }: CardStyleProps): React.CSSProperties {
  const absOffset = Math.abs(offset);

  if (absOffset > 2) {
    return { opacity: 0, pointerEvents: 'none', zIndex: 0 };
  }

  const configs: Record<number, { x: number; z: number; rotateY: number; scale: number; opacity: number; zIndex: number }> = {
    0:  { x: 0,    z: 120,  rotateY: 0,   scale: 1,    opacity: 1,    zIndex: 10 },
    1:  { x: 300,  z: -60,  rotateY: -42, scale: 0.82, opacity: 0.75, zIndex: 7  },
    2:  { x: 530,  z: -200, rotateY: -58, scale: 0.62, opacity: 0.40, zIndex: 4  },
  };

  const cfg = configs[absOffset] || configs[2];
  const signedX = offset < 0 ? -cfg.x : cfg.x;
  const signedRotate = offset < 0 ? -cfg.rotateY : cfg.rotateY;

  return {
    transform: `translateX(${signedX}px) translateZ(${cfg.z}px) rotateY(${signedRotate}deg) scale(${cfg.scale})`,
    opacity: cfg.opacity,
    zIndex: cfg.zIndex,
    pointerEvents: absOffset === 0 ? 'auto' : 'none',
  };
}

export const ServiceCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const total = SERVICES.length;

  const prev = useCallback(() => {
    setDirection('left');
    setActive((a) => (a - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setDirection('right');
    setActive((a) => (a + 1) % total);
  }, [total]);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  const activeService = SERVICES[active];

  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        background: 'linear-gradient(160deg, #3D241C 0%, #4A2E23 45%, #5F3A2D 100%)',
      }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,179,71,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,179,71,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          style={{
            background: 'rgba(255,184,140,0.15)',
            border: '1.5px solid rgba(255,184,140,0.5)',
            color: '#FFB88C',
          }}
        >
          Our Premium Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          Expert Support for Your{' '}
          <span style={{ color: '#FFB88C' }}>Bid Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed"
        >
          Comprehensive government procurement services designed to give your business a competitive edge.
        </motion.p>
      </div>

      {/* 3D Stage */}
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '380px',
          perspective: '1200px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        {/* Cards */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {SERVICES.map((service, index) => {
            const offset = getOffset(index, active, total);
            const style = getCardStyle({ offset });
            const isActive = offset === 0;
            const Icon = service.icon;

            return (
              <div
                key={service.slug + index}
                className="absolute cursor-pointer select-none"
                style={{
                  width: isActive ? '300px' : '260px',
                  transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s ease, z-index 0.6s step-start',
                  transformStyle: 'preserve-3d',
                  ...style,
                }}
                onClick={() => {
                  if (!isActive) {
                    setDirection(offset > 0 ? 'right' : 'left');
                    setActive(index);
                  }
                }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{
                    height: isActive ? '310px' : '270px',
                    background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.95)',
                    border: isActive
                      ? `2px solid ${service.accent}`
                      : '1px solid rgba(0,0,0,0.08)',
                    boxShadow: isActive
                      ? '0 4px 12px rgba(0,0,0,0.12)'
                      : '0 2px 8px rgba(0,0,0,0.06)',
                    transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{
                      background: isActive ? service.accent : 'transparent',
                    }}
                  />

                  <div className="relative z-10 p-7 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className="mb-5 flex items-center justify-center rounded-xl"
                      style={{
                        width: isActive ? '60px' : '50px',
                        height: isActive ? '60px' : '50px',
                        background: `${service.accent}15`,
                        border: `1.5px solid ${service.accent}`,
                        transition: 'all 0.6s ease',
                        flexShrink: 0,
                      }}
                    >
                      <Icon
                        size={isActive ? 28 : 22}
                        style={{ color: service.accent, transition: 'all 0.6s ease' }}
                      />
                    </div>

                    {/* Badge */}
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="self-start mb-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                        style={{
                          background: `${service.accent}15`,
                          color: service.accent,
                          border: `1px solid ${service.accent}`,
                        }}
                      >
                        Featured
                      </motion.span>
                    )}

                    {/* Title */}
                    <h3
                      className="font-bold mb-2 leading-tight"
                      style={{ fontSize: isActive ? '1.15rem' : '1rem', transition: 'font-size 0.4s ease', color: '#1a1a1a' }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="leading-relaxed mb-auto"
                      style={{ fontSize: isActive ? '0.82rem' : '0.75rem', lineClamp: 2, color: '#666666' }}
                    >
                      {service.desc}
                    </p>

                    {/* Learn More */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="mt-5"
                      >
                        <Link
                          to={`/services/${service.slug}`}
                          className="group inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold transition-all duration-300"
                          style={{
                            backgroundColor: '#FDBA74',
                            color: '#FFFFFF',
                            border: '1px solid #EA580C',
                            boxShadow: 'none',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#EA580C';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.02)';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#FDBA74';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                          }}
                        >
                          Learn More
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 flex flex-col items-center gap-6 mt-8 px-4">
        {/* Arrows + Dots row */}
        <div className="flex items-center gap-6">
          {/* Prev */}
          <button
            onClick={prev}
            className="group flex items-center justify-center w-12 h-12 rounded-full transition-all focus:outline-none hover:bg-opacity-80"
            style={{
              background: 'rgba(255,179,71,0.15)',
              border: '1.5px solid rgba(255,179,71,0.5)',
            }}
            aria-label="Previous service"
          >
            <ChevronLeft size={20} style={{ color: '#FFB88C' }} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {SERVICES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? 'right' : 'left');
                  setActive(i);
                }}
                className="rounded-full transition-all focus:outline-none"
                style={{
                  width: i === active ? '28px' : '8px',
                  height: '8px',
                  background:
                    i === active
                      ? activeService.accent
                      : 'rgba(255,255,255,0.3)',
                  transition: 'all 0.4s ease',
                }}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="group flex items-center justify-center w-12 h-12 rounded-full transition-all focus:outline-none hover:bg-opacity-80"
            style={{
              background: 'rgba(255,179,71,0.15)',
              border: '1.5px solid rgba(255,179,71,0.5)',
            }}
            aria-label="Next service"
          >
            <ChevronRight size={20} style={{ color: '#FFB88C' }} />
          </button>
        </div>

        {/* Service name indicator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <span
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: activeService.accent }}
            >
              {active + 1} / {total} — {activeService.title}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* View all link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-bold transition-all"
          style={{ color: 'rgba(255,255,255,0.5)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = '#FFB88C';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
          }}
        >
          View All Services
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};
