import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Gauge, Trophy, Zap, ShieldCheck, Flame } from 'lucide-react';
import { playTelemetryBeep } from '../utils/f1Audio';

export default function Hero({ onOpenRegister }) {
  const [lightsCount, setLightsCount] = useState(0);

  // Animated F1 Start Lights Sequence (1-2-3-4-5 -> GO)
  useEffect(() => {
    const timer = setInterval(() => {
      setLightsCount((prev) => (prev >= 6 ? 1 : prev + 1));
    }, 850);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToEvents = () => {
    playTelemetryBeep();
    const el = document.getElementById('events-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-center overflow-hidden pt-24 sm:pt-28 pb-12 select-none"
    >
      {/* 
        Formula 1 Racing Background Image:
        Vivid, clear, and visible behind the typography with subtle contrast enhancement.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/background-track.jpg.jpeg"
          alt="Formula 1 Racing Track"
          className="w-full h-full object-cover object-center filter brightness-100 contrast-110 saturate-[1.1] scale-100 transition-transform duration-[12000ms] ease-out hover:scale-105"
        />

        {/* Refined subtle vignette: Keeps image clearly visible while preserving text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/45 to-[#080808]/75 pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>

        {/* Subtle Telemetry Grid Accent */}
        <div className="absolute inset-0 f1-grid opacity-15 pointer-events-none"></div>

        {/* Horizontal Speed Streaks */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E10600]/30 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent"></div>

        {/* 
          REALISTIC MOTORSPORT TIRE BURNOUT SMOKE EFFECT AT THE BOTTOM
          Layered drifting smoke clouds with authentic aerodynamic wind billow
        */}
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 pointer-events-none overflow-hidden z-[5]">
          {/* Base ground mist */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-transparent"></div>

          {/* Smoke Layer 1: Dense fast drifting burnout cloud */}
          <div
            className="absolute -bottom-10 left-[-15%] w-[130%] h-44 opacity-70 filter blur-2xl animate-smoke-1"
            style={{
              background: 'radial-gradient(ellipse at 50% 80%, rgba(220, 220, 225, 0.45) 0%, rgba(180, 180, 190, 0.25) 45%, transparent 75%)'
            }}
          ></div>

          {/* Smoke Layer 2: Billowing puffs with warm red exhaust reflection */}
          <div
            className="absolute -bottom-6 left-[-10%] w-[120%] h-40 opacity-60 filter blur-xl animate-smoke-2"
            style={{
              background: 'radial-gradient(ellipse at 35% 85%, rgba(255, 255, 255, 0.5) 0%, rgba(225, 6, 0, 0.15) 35%, transparent 70%)'
            }}
          ></div>

          {/* Smoke Layer 3: High-altitude drifting smoke trail */}
          <div
            className="absolute bottom-0 left-[-20%] w-[140%] h-36 opacity-50 filter blur-3xl animate-smoke-3"
            style={{
              background: 'radial-gradient(ellipse at 65% 90%, rgba(240, 240, 245, 0.4) 0%, rgba(212, 175, 55, 0.1) 40%, transparent 75%)'
            }}
          ></div>
        </div>

      </div>

      {/* Top Status Telemetry & Institutional Bar */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 mb-4">
        
        {/* Label: THE GRAND SYMPOSIUM EXPERIENCE */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101010]/90 border border-[#2B2B2B] chamfer-corner-sm shadow-md">
          <span className="w-2 h-2 bg-[#E10600] animate-pulse"></span>
          <span className="font-tech text-[10px] sm:text-xs text-[#E5E5E5] tracking-[0.2em] uppercase font-bold">
            THE GRAND SYMPOSIUM EXPERIENCE
          </span>
          <span className="text-[#D4AF37] font-tech text-[10px] font-bold pl-1 border-l border-[#333]">
            2027 EDITION
          </span>
        </div>

        {/* F1 5-Light Starting Gantry */}
        <div className="flex items-center gap-2 bg-[#101010]/90 px-3.5 py-1.5 border border-[#2B2B2B] chamfer-corner-sm">
          <span className="font-tech text-[9px] text-gray-400 tracking-wider uppercase mr-1 hidden sm:inline">
            START GRID
          </span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((lightIndex) => {
              const isOn = lightsCount >= lightIndex && lightsCount <= 5;
              return (
                <div
                  key={lightIndex}
                  className={`w-3 h-3 rounded-full transition-all duration-150 ${
                    isOn
                      ? 'bg-[#E10600] shadow-[0_0_10px_#E10600]'
                      : 'bg-[#2A2A2A]'
                  }`}
                />
              );
            })}
          </div>
          {lightsCount === 6 && (
            <span className="font-tech text-[9px] text-[#4ADE80] font-bold tracking-widest uppercase pl-1 animate-pulse">
              LIGHTS OUT
            </span>
          )}
        </div>
      </div>

      {/* Center Main Stage Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 my-auto flex flex-col items-center">
        
        {/* 
          INSTITUTIONAL HEADER:
          COLLEGE NAME: VEL TECH HIGH TECH
          DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
        */}
        <div className="flex flex-col items-center gap-1.5 mb-5">
          {/* College Name: VEL TECH HIGH TECH */}
          <div className="inline-flex items-center gap-2.5 px-5 py-1.5 bg-[#0B0B0B]/90 border border-[#D4AF37] chamfer-corner-sm shadow-[0_0_25px_rgba(212,175,55,0.25)]">
            <span className="w-2 h-2 bg-[#D4AF37] rotate-45"></span>
            <span className="font-tech text-sm sm:text-base md:text-lg text-white tracking-[0.25em] uppercase font-black">
              VEL TECH HIGH TECH
            </span>
            <span className="w-2 h-2 bg-[#D4AF37] rotate-45"></span>
          </div>

          <div className="text-[10px] sm:text-xs font-tech text-gray-300 tracking-[0.2em] uppercase font-semibold">
            Dr. RANGARAJAN Dr. SAKUNTHALA ENGINEERING COLLEGE
          </div>

          {/* Department: DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE */}
          <div className="flex items-center gap-2.5 mt-1.5">
            <div className="w-6 sm:w-12 h-[2px] bg-[#E10600]"></div>
            <span className="font-tech text-xs sm:text-sm uppercase tracking-[0.22em] text-[#FF2A2A] font-extrabold text-glow-red">
              DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
            </span>
            <div className="w-6 sm:w-12 h-[2px] bg-[#E10600]"></div>
          </div>
        </div>

        {/* Massive ZYREN'27 Motorsport Typography */}
        <div className="relative">
          <h1 className="font-racing text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] tracking-tight sm:tracking-wider leading-none text-white uppercase drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]">
            ZYREN
            <span className="font-tech text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E10600] tracking-tighter inline-block ml-1 font-black align-top text-glow-red">
              '27
            </span>
          </h1>

          {/* Underline racing bar */}
          <div className="w-full flex items-center justify-center gap-1 mt-1 mb-2">
            <span className="h-1 flex-1 bg-gradient-to-r from-transparent to-[#E10600]"></span>
            <span className="w-3 h-3 bg-[#D4AF37] rotate-45 transform"></span>
            <span className="h-1 flex-1 bg-gradient-to-l from-transparent to-[#E10600]"></span>
          </div>
        </div>

        {/* Tagline: IGNITE THE SPEED. UNLEASH THE TALENT. */}
        <p className="font-display text-lg sm:text-2xl md:text-3xl text-gray-100 tracking-[0.2em] sm:tracking-[0.28em] uppercase font-bold max-w-3xl mb-8 leading-snug drop-shadow-md">
          IGNITE THE SPEED.<span className="text-[#E10600]"> UNLEASH</span> THE <span className="text-[#D4AF37]">TALENT.</span>
        </p>

        {/* Telemetry Quick Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full max-w-2xl mb-8 text-left">
          <div className="bg-[#101010]/90 border-l-2 border-[#E10600] px-3.5 py-2 border-y border-r border-[#242424] shadow-md backdrop-blur-sm">
            <div className="text-[10px] font-tech text-gray-400 tracking-wider">CIRCUIT DURATION</div>
            <div className="font-display text-base font-bold text-white tracking-wide">2 RACE DAYS</div>
          </div>
          <div className="bg-[#101010]/90 border-l-2 border-[#D4AF37] px-3.5 py-2 border-y border-r border-[#242424] shadow-md backdrop-blur-sm">
            <div className="text-[10px] font-tech text-gray-400 tracking-wider">CHAMPIONSHIP GRID</div>
            <div className="font-display text-base font-bold text-white tracking-wide">14 EVENTS</div>
          </div>
          <div className="bg-[#101010]/90 border-l-2 border-[#E10600] px-3.5 py-2 border-y border-r border-[#242424] shadow-md backdrop-blur-sm">
            <div className="text-[10px] font-tech text-gray-400 tracking-wider">PRIZE PURSE</div>
            <div className="font-display text-base font-bold text-white tracking-wide">₹1,50,000+</div>
          </div>
          <div className="bg-[#101010]/90 border-l-2 border-[#D4AF37] px-3.5 py-2 border-y border-r border-[#242424] shadow-md backdrop-blur-sm">
            <div className="text-[10px] font-tech text-gray-400 tracking-wider">HOST INSTITUTION</div>
            <div className="font-display text-base font-bold text-white tracking-wide truncate">
              VEL TECH HIGH TECH
            </div>
          </div>
        </div>

        {/* Dual Primary Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-10">
          {/* Button 1: EXPLORE EVENTS */}
          <button
            onClick={handleScrollToEvents}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#141414]/90 hover:bg-[#1E1E1E] text-white border-2 border-[#333] hover:border-[#D4AF37] font-display text-sm font-bold uppercase tracking-[0.2em] chamfer-corner transition-all duration-200 flex items-center justify-center gap-3 group shadow-xl backdrop-blur-sm"
          >
            <span>EXPLORE EVENTS</span>
            <ArrowRight size={16} className="text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Button 2: REGISTER NOW */}
          <button
            onClick={() => {
              playTelemetryBeep();
              onOpenRegister(null);
            }}
            className="w-full sm:w-auto px-9 py-3.5 bg-[#E10600] hover:bg-[#FF1801] text-white font-display text-sm font-bold uppercase tracking-[0.2em] chamfer-corner transition-all duration-200 shadow-[0_5px_25px_rgba(225,6,0,0.6)] hover:shadow-[0_5px_35px_rgba(225,6,0,0.9)] flex items-center justify-center gap-3 group"
          >
            <span>REGISTER NOW</span>
            <Zap size={16} className="text-white group-hover:scale-125 transition-transform" />
          </button>
        </div>

      </div>

      {/* Animated Racing Scroll-Down Indicator */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <button
          onClick={handleScrollToEvents}
          className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
          aria-label="Scroll to introduction"
        >
          <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-gray-300 group-hover:text-[#D4AF37] transition-colors font-medium drop-shadow">
            GRID SCROLL DOWN
          </span>
          <div className="w-6 h-10 border-2 border-[#444] group-hover:border-[#E10600] rounded-full flex justify-center p-1 transition-colors bg-[#080808]/60">
            <div className="w-1.5 h-2 bg-[#E10600] rounded-full animate-bounce"></div>
          </div>
          <ChevronDown size={14} className="text-[#E10600] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
