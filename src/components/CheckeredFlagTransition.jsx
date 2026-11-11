import React, { useEffect, useRef, useState, useCallback } from 'react';
import { playWhooshTransition, playTelemetryBeep } from '../utils/f1Audio';
import { Flag, Play, X, Zap, Trophy, ChevronRight } from 'lucide-react';

export default function CheckeredFlagTransition({ onTransitionComplete }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(0);
  const hasTriggeredDownRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const sensorRef = useRef(null);

  // Preload user's actual checkered flag PNG from public folder
  // and prepare offscreen canvas for instantaneous 60FPS cloth rendering
  useEffect(() => {
    const img = new Image();
    img.src = '/checkered-flag.png.png';
    img.onload = () => {
      try {
        const offscreen = document.createElement('canvas');
        const targetSize = 1600;
        offscreen.width = targetSize;
        offscreen.height = targetSize;
        const oCtx = offscreen.getContext('2d');
        oCtx.drawImage(img, 0, 0, targetSize, targetSize);
        imgRef.current = offscreen;
      } catch (e) {
        imgRef.current = img;
      }
    };
  }, []);

  // Launch transition function
  const triggerTransition = useCallback(() => {
    if (isPlaying) return;
    setIsPlaying(true);
    setProgress(0);
    playWhooshTransition();
    startTimeRef.current = performance.now();
  }, [isPlaying]);

  // Robust, Automatic Boundary Detection:
  // Triggers automatically whenever the user scrolls down through the transition sensor!
  useEffect(() => {
    const triggerEl = sensorRef.current || document.getElementById('flag-transition-sensor');
    if (!triggerEl) return;

    // 1. Intersection Observer for instant visibility detection
    let observer;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY >= lastScrollYRef.current;
            lastScrollYRef.current = currentScrollY;

            // When sensor is visible or crossed while scrolling downward
            if (entry.isIntersecting && isScrollingDown && !hasTriggeredDownRef.current && !isPlaying) {
              hasTriggeredDownRef.current = true;
              triggerTransition();
            }
          });
        },
        { rootMargin: '100px 0px 100px 0px', threshold: [0, 0.2, 0.5] }
      );
      observer.observe(triggerEl);
    }

    // 2. High-precision scroll listener (catches fast scrolls / mousewheel jumps)
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      const rect = triggerEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger condition:
      // The top of the sensor enters the upper 75% of viewport
      // AND we haven't scrolled miles past it (within 800px past sensor)
      const enteredOrPassed = rect.top <= windowHeight * 0.75 && rect.bottom >= -800;

      if (enteredOrPassed && isScrollingDown && !hasTriggeredDownRef.current && !isPlaying) {
        hasTriggeredDownRef.current = true;
        triggerTransition();
      }

      // Reset trigger when user scrolls back UP into Day 01
      // (sensor is pushed back down towards bottom or below screen)
      if (rect.top > windowHeight * 0.85) {
        hasTriggeredDownRef.current = false;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [triggerTransition, isPlaying]);

  // Canvas Cloth Wave & Sweep Animation Loop
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const duration = 2400; // 2.4 seconds total cinematic transition

    const render = (now) => {
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / duration, 1);
      setProgress(t);

      const w = (canvas.width = window.innerWidth);
      const h = (canvas.height = window.innerHeight);

      ctx.clearRect(0, 0, w, h);

      // Animation Phase calculation:
      // 0.0 - 0.25: Flag enters rapidly from left with intense wave surge
      // 0.25 - 0.70: Billows across full screen, dynamic wind oscillation
      // 0.70 - 1.00: Sweeps off smoothly to the right, dissolving into Day 02
      let screenAlpha = 1;
      let sweepX = 0;
      let scale = 1;

      if (t < 0.25) {
        const easeIn = t / 0.25;
        sweepX = (easeIn - 1) * (w * 0.6);
        screenAlpha = Math.min(easeIn * 1.4, 1);
        scale = 0.95 + easeIn * 0.25;
      } else if (t < 0.70) {
        sweepX = Math.sin((t - 0.25) * 4) * (w * 0.04);
        screenAlpha = 1;
        scale = 1.2;
      } else {
        const easeOut = (t - 0.70) / 0.30;
        sweepX = easeOut * (w * 0.85);
        screenAlpha = 1 - easeOut;
        scale = 1.2 + easeOut * 0.25;
      }

      // Backdrop dark motorsport flash & speed fade
      ctx.fillStyle = `rgba(8, 8, 8, ${screenAlpha * 0.92})`;
      ctx.fillRect(0, 0, w, h);

      // Draw waving checkered flag on canvas using strips
      const flagImg = imgRef.current;
      if (flagImg && (flagImg.width || flagImg.complete)) {
        ctx.save();
        ctx.globalAlpha = screenAlpha;

        // Wave physics parameters
        const strips = 95;
        const stripWidth = (w * 1.4 * scale) / strips;
        const waveTime = elapsed * 0.007;
        const baseX = sweepX + (w - w * 1.4 * scale) / 2;
        const baseY = (h - h * 1.25 * scale) / 2;

        const imgW = flagImg.width || flagImg.naturalWidth || 1600;
        const imgH = flagImg.height || flagImg.naturalHeight || 1600;
        const sStripWidth = imgW / strips;

        for (let i = 0; i < strips; i++) {
          const xPos = baseX + i * stripWidth;
          const pct = i / strips;

          // Realistic cloth ripple equation
          const wave1 = Math.sin(pct * 9 + waveTime) * 38;
          const wave2 = Math.cos(pct * 17 - waveTime * 1.3) * 18;
          const dy = (wave1 + wave2) * (0.65 + pct * 0.75);

          // Horizontal billow drift
          const dx = Math.sin(pct * 5 + waveTime) * 14;

          // Slope-based cloth shading (highlights and shadow troughs)
          const slope = Math.cos(pct * 9 + waveTime);
          const shadow = Math.max(-0.4, Math.min(0.4, slope * 0.4));

          const drawY = baseY + dy;
          const drawH = h * 1.25 * scale;

          ctx.drawImage(
            flagImg,
            i * sStripWidth,
            0,
            sStripWidth,
            imgH,
            xPos + dx,
            drawY,
            stripWidth + 1.2,
            drawH
          );

          // Realistic cloth lighting overlay
          if (shadow > 0) {
            ctx.fillStyle = `rgba(255, 255, 255, ${shadow * 0.35})`;
          } else {
            ctx.fillStyle = `rgba(0, 0, 0, ${Math.abs(shadow) * 0.55})`;
          }
          ctx.fillRect(xPos + dx, drawY, stripWidth + 1.2, drawH);
        }

        ctx.restore();
      }

      // Red & Gold racing speed lines across viewport
      ctx.save();
      ctx.globalAlpha = screenAlpha * 0.85;
      ctx.strokeStyle = '#E10600';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.3);
      ctx.lineTo(w, h * 0.3);
      ctx.stroke();

      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.7);
      ctx.lineTo(w, h * 0.7);
      ctx.stroke();
      ctx.restore();

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(render);
      } else {
        // Animation finished: reveal Day 02
        setIsPlaying(false);
        if (onTransitionComplete) onTransitionComplete();
      }
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, onTransitionComplete]);

  return (
    <>
      {/* 
        Scroll Sensor Element: placed right between Day 01 and Day 02.
        When user scrolls down through this zone, the full-screen checkered flag triggers automatically!
      */}
      <div
        ref={sensorRef}
        id="flag-transition-sensor"
        className="relative w-full py-10 bg-[#090909] border-y border-[#202020] overflow-hidden"
      >
        {/* Pit Lane Finish Line Striping */}
        <div className="absolute inset-x-0 top-0 h-2.5 racing-stripes-red opacity-85"></div>
        <div className="absolute inset-x-0 bottom-0 h-2.5 racing-stripes-gold opacity-85"></div>

        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 py-2">
          
          <div className="flex items-center gap-4">
            {/* Visual preview of actual user checkered flag */}
            <div className="w-14 h-12 bg-[#141414] border-2 border-[#E10600] overflow-hidden flex items-center justify-center p-1 chamfer-corner-sm shadow-md">
              <img
                src="/checkered-flag.png.png"
                alt="Checkered Flag"
                className="w-full h-full object-contain filter drop-shadow hover:scale-110 transition-transform"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-tech text-xs tracking-widest text-[#E10600] font-bold uppercase flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#E10600] animate-ping"></span>
                  SECTOR 1 CHECKPOINT
                </span>
                <span className="text-[10px] font-tech text-gray-500 uppercase">•</span>
                <span className="font-tech text-xs text-[#D4AF37] font-semibold uppercase">
                  AUTOMATIC FLAG TRIGGER
                </span>
              </div>
              <div className="font-racing text-3xl sm:text-4xl text-white uppercase tracking-wider leading-none">
                FINISH LINE <span className="text-[#888]">➔</span> DAY 02 CULTURAL GRID
              </div>
              <p className="font-tech text-[11px] text-gray-400 uppercase tracking-wider mt-1">
                Scroll downwards through this line or click play to witness the checkered flag in full motion.
              </p>
            </div>
          </div>

          {/* Manual Replay / Instant Trigger Button */}
          <button
            onClick={() => {
              playTelemetryBeep();
              triggerTransition();
            }}
            className="px-6 py-3 bg-[#161616] hover:bg-[#E10600] text-white border border-[#333] hover:border-[#E10600] font-display text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2.5 chamfer-corner-sm shadow-lg group flex-shrink-0"
          >
            <Play size={14} className="text-[#D4AF37] group-hover:text-white transition-colors" />
            <span>PLAY CHECKERED FLAG WAVE</span>
          </button>

        </div>
      </div>

      {/* 
        FULL-SCREEN CHECKERED FLAG TRANSITION OVERLAY
        Active automatically when scrolling through the finish line!
        Covers the entire screen with waving flag, then smoothly reveals Day 02!
      */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-auto select-none transition-opacity duration-300"
          style={{ backdropFilter: 'blur(5px)' }}
        >
          {/* Canvas running the wave mesh simulation using /checkered-flag.png.png */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block"
          />

          {/* Layered 3D Wind Billowing Checkered Flag (ensures instantaneous visibility) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30">
            <img
              src="/checkered-flag.png.png"
              alt="Waving Checkered Flag"
              className="w-full max-w-5xl h-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-flag-wave"
            />
          </div>

          {/* Center Grand Prix Finish Line Telemetry Overlay */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#080808]/95 border border-[#E10600] text-xs font-tech text-[#E10600] tracking-[0.3em] uppercase font-bold mb-3 chamfer-corner-sm shadow-2xl animate-pulse">
              <Flag size={14} />
              <span>CHECKERED FLAG IN FULL MOTION</span>
            </div>

            <h2 className="font-racing text-6xl sm:text-8xl text-white uppercase tracking-wider drop-shadow-[0_15px_30px_rgba(0,0,0,1)] leading-none mb-2">
              SECTOR 01 <span className="text-[#D4AF37]">COMPLETED</span>
            </h2>

            <p className="font-tech text-xs sm:text-base text-gray-200 tracking-[0.25em] uppercase font-bold text-glow-gold">
              ENTERING PHASE 02 • CULTURAL GRAND PRIX
            </p>

            {/* Racing progress bar */}
            <div className="w-72 h-2 bg-[#1A1A1A] border border-[#333] mt-6 overflow-hidden rounded-none shadow-lg">
              <div
                className="h-full bg-gradient-to-r from-[#E10600] via-[#FF1801] to-[#D4AF37] transition-all duration-75"
                style={{ width: `${progress * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Skip Button in top right */}
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 z-20 px-4 py-2 bg-[#111]/90 hover:bg-[#E10600] text-gray-300 hover:text-white border border-[#333] text-xs font-tech tracking-wider uppercase flex items-center gap-2 transition-colors chamfer-corner-sm shadow-xl"
          >
            <span>SKIP TRANSITION</span>
            <X size={14} />
          </button>
        </div>
      )}
    </>
  );
}
