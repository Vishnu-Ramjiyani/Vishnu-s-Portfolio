import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
  ARCHERY PHYSICS REFERENCE:
  ─────────────────────────────
  - Bow: horizontal arc, curving UPWARD (toward target). Centered on screen.
  - String: connects left and right tips of bow, sits BELOW the bow arc.
  - Arrow: vertical, pointing UP (toward target), nocked at string center.
  - Draw: string center + arrow pull DOWNWARD (backward, away from target).
  - Release: arrow flies UPWARD (toward target, off-screen).
  - String snaps back but NEVER overshoots above the bow chord line (y=120).

  Screen coordinates (y increases downward):
    - Bow arc peaks at y≈35 (top of curve, toward target)
    - Bow chord (tips) at y=120
    - String rests at y≈123 (just below chord)
    - String drawn to y=210 (pulled further below)
    - Arrow fires toward y=-800 (upward, off-screen)
*/

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'intro' | 'draw' | 'release'>('intro');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('draw'), 1200);
    const t2 = setTimeout(() => setPhase('release'), 2600);
    const t3 = setTimeout(() => onComplete(), 3000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Floating golden dust particles
  const dustParticles = useMemo(() => Array.from({ length: 45 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
    drift: (Math.random() - 0.5) * 30,
  })), []);

  // Trail sparks when arrow releases
  const trailSparks = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: i,
    xOffset: (Math.random() - 0.5) * 40,
    delay: Math.random() * 0.3,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.5 + 0.5,
  })), []);

  // ----- Key geometry constants -----
  const bowChordY = 120;     // Y where bow tips sit (the chord line)
  const stringRestY = 123;   // String center at rest (just below chord)
  const stringDrawnY = 210;  // String center when fully drawn (pulled down)
  const drawDelta = stringDrawnY - stringRestY; // = 87

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          overflow: 'hidden',
          background: 'transparent',
        }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* --- Background panels (split and slide on exit) --- */}
        {/* Left half slides left */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            background: 'rgb(var(--color-brand-bg))',
            zIndex: 1,
          }}
          initial={{ x: 0 }}
          exit={{ x: '-105%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 2,
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, #DDA15E, #BC6C25, #DDA15E, transparent)',
              boxShadow: '0 0 15px rgba(221,161,94,0.5)',
            }}
          />
        </motion.div>

        {/* Right half slides right */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'rgb(var(--color-brand-bg))',
            zIndex: 1,
          }}
          initial={{ x: 0 }}
          exit={{ x: '105%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 2,
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, #DDA15E, #BC6C25, #DDA15E, transparent)',
              boxShadow: '0 0 15px rgba(221,161,94,0.5)',
            }}
          />
        </motion.div>

        {/* Premium gradient background */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(188,108,37,0.08) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 20% 80%, rgb(var(--color-brand-accent) / 0.08) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 20%, rgba(221,161,94,0.06) 0%, transparent 60%),
              linear-gradient(175deg, rgb(var(--color-brand-bg)) 0%, rgb(var(--color-brand-section)) 40%, rgb(var(--color-brand-bg)) 100%)
            `,
            zIndex: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        />

        {/* Subtle grid pattern overlay */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(188,108,37,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(188,108,37,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.5,
            zIndex: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        />

        {/* Floating golden dust */}
        {dustParticles.map((p) => (
          <motion.div
            key={`dust-${p.id}`}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(221,161,94,0.9), rgba(188,108,37,0.4))',
              boxShadow: `0 0 ${p.size * 2}px rgba(221,161,94,0.3)`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, p.drift, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Vignette overlay */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgb(var(--color-brand-bg) / 0.65) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        />

        {/* --- Name in Hindi (top/bottom depending on mobile) --- */}
        <motion.div
          style={{
            position: 'absolute',
            top: isMobile ? 'calc(50% + 140px)' : 'clamp(2.5rem, 8vh, 6rem)',
            left: isMobile ? '50%' : 'clamp(2rem, 8vw, 6rem)',
            textAlign: isMobile ? 'center' : 'left',
            zIndex: 5,
            maxWidth: isMobile ? '90%' : '80%',
          }}
          initial={{ opacity: 0, y: 30, x: isMobile ? '-50%' : 0 }}
          animate={{ opacity: 1, y: 0, x: isMobile ? '-50%' : 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            style={{
              width: 60, height: 1,
              background: isMobile 
                ? 'linear-gradient(to right, transparent, rgba(221,161,94,0.6), transparent)'
                : 'linear-gradient(to right, rgba(221,161,94,0.6), transparent)',
              margin: isMobile ? '0 auto 20px' : '0 0 20px 0',
              transformOrigin: isMobile ? 'center' : 'left',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.h1
            style={{
              fontFamily: "'Playfair Display', 'Noto Sans Devanagari', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'transparent',
              backgroundImage: 'linear-gradient(135deg, #DDA15E 0%, #BC6C25 40%, #DDA15E 60%, #e8c88a 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(188,108,37,0.2))',
              margin: 0, lineHeight: 1.3,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            विष्णु रामजियानी
          </motion.h1>
          <motion.p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
              color: 'rgb(var(--color-brand-accent) / 0.4)',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              marginTop: 16,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Vishnu Ramjiyani
          </motion.p>
          <motion.div
            style={{
              width: 60, height: 1,
              background: isMobile 
                ? 'linear-gradient(to right, transparent, rgba(221,161,94,0.6), transparent)'
                : 'linear-gradient(to right, rgba(221,161,94,0.6), transparent)',
              margin: isMobile ? '20px auto 0' : '20px 0 0 0',
              transformOrigin: isMobile ? 'center' : 'left',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* ============================================= */}
        {/* BOW & ARROW — Centered on screen              */}
        {/* Bow: horizontal arc curving UP                 */}
        {/* Arrow: vertical, pointing UP                   */}
        {/* Draw: string + arrow pull DOWN                 */}
        {/* Release: arrow flies UP                        */}
        {/* ============================================= */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 6,
          }}
          initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-100px' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-100px' }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <svg
            width="300"
            height="280"
            viewBox="0 0 300 280"
            fill="none"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="bowGrad" x1="30" y1="120" x2="270" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5E34" />
                <stop offset="0.2" stopColor="#DDA15E" />
                <stop offset="0.5" stopColor="#BC6C25" />
                <stop offset="0.8" stopColor="#DDA15E" />
                <stop offset="1" stopColor="#8B5E34" />
              </linearGradient>
              <linearGradient id="arrowShaftGrad" x1="150" y1="0" x2="150" y2="155" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DDA15E" />
                <stop offset="0.5" stopColor="#BC6C25" />
                <stop offset="1" stopColor="#8B5E34" />
              </linearGradient>
              <filter id="bowGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="arrowGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ── BOW (stationary, never moves) ── */}
            {/* Horizontal arc curving upward: tips at (30,120) and (270,120), peak at ~(150,35) */}

            {/* Bow outer glow */}
            <motion.path
              d={`M 30 ${bowChordY} Q 150 35, 270 ${bowChordY}`}
              stroke="rgba(221,161,94,0.2)"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />

            {/* Bow main body */}
            <motion.path
              d={`M 30 ${bowChordY} Q 150 35, 270 ${bowChordY}`}
              stroke="url(#bowGrad)"
              strokeWidth="5.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#bowGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />

            {/* Grip wrap at center of bow (decorative dashes) */}
            <motion.path
              d={`M 30 ${bowChordY} Q 150 35, 270 ${bowChordY}`}
              stroke="rgba(139,94,52,0.5)"
              strokeWidth="8"
              strokeLinecap="butt"
              fill="none"
              strokeDasharray="0 120 6 8 6 8 6 200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            />

            {/* Bow tip — left */}
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.8 }}>
              <circle cx="30" cy={bowChordY} r="4" fill="#DDA15E" />
              <circle cx="30" cy={bowChordY} r="6" fill="none" stroke="rgba(221,161,94,0.3)" strokeWidth="1" />
            </motion.g>
            {/* Bow tip — right */}
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.85 }}>
              <circle cx="270" cy={bowChordY} r="4" fill="#DDA15E" />
              <circle cx="270" cy={bowChordY} r="6" fill="none" stroke="rgba(221,161,94,0.3)" strokeWidth="1" />
            </motion.g>

            {/* ── BOWSTRING ── */}
            {/* Connects left tip to right tip, bending BELOW the bow.       */}
            {/* Idle: nearly straight at y≈123 (just below chord y=120).     */}
            {/* Drawn: center drops to y=210 (pulled DOWN / backward).       */}
            {/* Released: snaps back to rest. NEVER goes above y=120.        */}
            <motion.path
              d={
                phase === 'draw'
                  ? `M 30 ${bowChordY} L 150 ${stringDrawnY} L 270 ${bowChordY}`
                  : `M 30 ${bowChordY} L 150 ${stringRestY} L 270 ${bowChordY}`
              }
              stroke="rgb(var(--color-brand-accent) / 0.65)"
              strokeWidth="1.5"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            />

            {/* String vibration after release — oscillates BELOW chord, never above */}
            {phase === 'release' && (
              <motion.path
                d={`M 30 ${bowChordY} L 150 ${stringRestY} L 270 ${bowChordY}`}
                stroke="rgb(var(--color-brand-accent) / 0.35)"
                strokeWidth="1"
                fill="none"
                animate={{
                  d: [
                    `M 30 ${bowChordY} L 150 145 L 270 ${bowChordY}`,
                    `M 30 ${bowChordY} L 150 ${bowChordY + 1} L 270 ${bowChordY}`,
                    `M 30 ${bowChordY} L 150 135 L 270 ${bowChordY}`,
                    `M 30 ${bowChordY} L 150 ${bowChordY + 2} L 270 ${bowChordY}`,
                    `M 30 ${bowChordY} L 150 ${stringRestY} L 270 ${bowChordY}`,
                  ],
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            )}

            {/* ── ARROW ── */}
            {/* Vertical, pointing UP. Nock sits at string center.             */}
            {/* Arrow group is positioned at (150, stringRestY) at rest.        */}
            {/* Draw: translates DOWN by drawDelta (moves with string).         */}
            {/* Release: translates UP by -800 (fires toward target, off-screen). */}
            {/* Arrow NEVER moves opposite to firing direction (never down after release). */}
            <motion.g
              style={{ translateX: 0 }}
              initial={{ y: 0 }}
              animate={
                phase === 'draw'
                  ? { y: drawDelta }         // pull DOWN with string
                  : phase === 'release'
                  ? { y: -800 }              // fire UP off screen
                  : { y: 0 }                 // idle at rest
              }
              transition={
                phase === 'draw'
                  ? { duration: 0.8, ease: 'easeOut' }
                  : phase === 'release'
                  ? { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                  : { duration: 0.3 }
              }
            >
              {/* Arrow shaft glow */}
              <line
                x1="150" y1={stringRestY}
                x2="150" y2={stringRestY - 155}
                stroke="rgba(221,161,94,0.2)"
                strokeWidth="7"
                strokeLinecap="round"
                style={{ filter: 'blur(3px)' }}
              />

              {/* Arrow shaft */}
              <line
                x1="150" y1={stringRestY}
                x2="150" y2={stringRestY - 155}
                stroke="url(#arrowShaftGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Arrowhead — points UP */}
              <path
                d={`M 150 ${stringRestY - 155} L 142 ${stringRestY - 138} L 150 ${stringRestY - 143} L 158 ${stringRestY - 138} Z`}
                fill="#DDA15E"
                stroke="#BC6C25"
                strokeWidth="0.5"
                filter="url(#arrowGlow)"
              />

              {/* Fletching feathers at bottom (near nock) */}
              <path
                d={`M 150 ${stringRestY - 5} L 142 ${stringRestY + 5} L 146 ${stringRestY - 3}`}
                fill="none" stroke="#BC6C25" strokeWidth="1.5" opacity="0.8"
              />
              <path
                d={`M 150 ${stringRestY - 5} L 158 ${stringRestY + 5} L 154 ${stringRestY - 3}`}
                fill="none" stroke="#BC6C25" strokeWidth="1.5" opacity="0.8"
              />
              <path
                d={`M 150 ${stringRestY - 5} L 139 ${stringRestY + 8} L 147 ${stringRestY - 2}`}
                fill="rgba(188,108,37,0.15)"
              />
              <path
                d={`M 150 ${stringRestY - 5} L 161 ${stringRestY + 8} L 153 ${stringRestY - 2}`}
                fill="rgba(188,108,37,0.15)"
              />

              {/* Nock (bottom point of arrow, sits on string) */}
              <circle cx="150" cy={stringRestY} r="2.5" fill="#BC6C25" />
            </motion.g>
          </svg>

          {/* Tension energy particles during draw */}
          {phase === 'draw' && (
            <div
              style={{
                position: 'absolute',
                top: '78%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`tension-${i}`}
                  style={{
                    position: 'absolute',
                    width: 3,
                    height: 3,
                    borderRadius: '50%',
                    background: '#DDA15E',
                    boxShadow: '0 0 6px rgba(221,161,94,0.6)',
                  }}
                  animate={{
                    x: [Math.cos((i / 8) * Math.PI * 2) * 12, Math.cos((i / 8) * Math.PI * 2) * 24],
                    y: [Math.sin((i / 8) * Math.PI * 2) * 12, Math.sin((i / 8) * Math.PI * 2) * 24],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* ── Vertical arrow trail when released (shoots UPWARD) ── */}
        {phase === 'release' && (
          <>
            {/* Main golden vertical streak going UP */}
            <motion.div
              style={{
                position: 'absolute',
                left: '50%',
                bottom: 0,
                width: 3,
                background: 'linear-gradient(to top, transparent, #DDA15E, #BC6C25, #DDA15E, transparent)',
                transformOrigin: 'center bottom',
                zIndex: 8,
                boxShadow: '0 0 20px rgba(221,161,94,0.6), 0 0 60px rgba(188,108,37,0.3)',
              }}
              initial={{ height: 0, opacity: 0, x: '-50%' }}
              animate={{ height: '100vh', opacity: [0, 1, 1, 0.4], x: '-50%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            />

            {/* Wide glow behind streak */}
            <motion.div
              style={{
                position: 'absolute',
                left: '50%',
                bottom: 0,
                width: 50,
                background: 'linear-gradient(to top, transparent, rgba(221,161,94,0.15), rgba(188,108,37,0.1), transparent)',
                transformOrigin: 'center bottom',
                zIndex: 7,
                filter: 'blur(12px)',
              }}
              initial={{ height: 0, x: '-50%' }}
              animate={{ height: '100vh', x: '-50%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            />

            {/* Trail sparks flying upward */}
            {trailSparks.map((spark) => (
              <motion.div
                key={`trail-${spark.id}`}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${spark.xOffset}px)`,
                  width: spark.size,
                  height: spark.size,
                  borderRadius: '50%',
                  background: '#DDA15E',
                  boxShadow: `0 0 ${spark.size * 2}px rgba(221,161,94,0.5)`,
                  zIndex: 8,
                }}
                initial={{ bottom: '40%', opacity: 0 }}
                animate={{
                  bottom: `${55 + Math.random() * 35}%`,
                  opacity: [0, spark.opacity, 0],
                  x: [(Math.random() - 0.5) * 20],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: spark.delay,
                  ease: 'easeOut',
                }}
              />
            ))}
          </>
        )}

        {/* Decorative corner accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <svg width="60" height="60" style={{ position: 'absolute', top: 30, left: 30 }}>
            <path d="M 0 30 L 0 5 Q 0 0 5 0 L 30 0" stroke="#BC6C25" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
          <svg width="60" height="60" style={{ position: 'absolute', top: 30, right: 30 }}>
            <path d="M 60 30 L 60 5 Q 60 0 55 0 L 30 0" stroke="#BC6C25" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
          <svg width="60" height="60" style={{ position: 'absolute', bottom: 30, left: 30 }}>
            <path d="M 0 30 L 0 55 Q 0 60 5 60 L 30 60" stroke="#BC6C25" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
          <svg width="60" height="60" style={{ position: 'absolute', bottom: 30, right: 30 }}>
            <path d="M 60 30 L 60 55 Q 60 60 55 60 L 30 60" stroke="#BC6C25" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
        </motion.div>

        {/* Bottom loading dots */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '6%',
            left: '50%',
            zIndex: 6,
          }}
          initial={{ opacity: 0, x: '-50%' }}
          animate={{ opacity: 1, x: '-50%' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`dot-${i}`}
                style={{ width: 5, height: 5, borderRadius: '50%', background: '#BC6C25' }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
