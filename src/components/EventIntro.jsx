import React from 'react';
import { Calendar, Cpu, Sparkles, Flag, ArrowUpRight, Award, Users, ShieldAlert } from 'lucide-react';
import { playTelemetryBeep } from '../utils/f1Audio';

export default function EventIntro() {
  const scrollTo = (id) => {
    playTelemetryBeep();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events-intro" className="relative py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] overflow-hidden">
      {/* Background Subtle Pit Wall Lines */}
      <div className="absolute inset-0 f1-grid opacity-20 pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E10600]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#E10600]"></span>
              <span className="font-tech text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
                OFFICIAL RACE SCHEDULE & TIMETABLE
              </span>
            </div>
            <h2 className="font-racing text-5xl sm:text-7xl lg:text-8xl tracking-wide uppercase text-white leading-none">
              THE 2-DAY <span className="text-[#E10600]">SYMPOSIUM</span> CALENDAR
            </h2>
          </div>

          <p className="max-w-md font-body text-sm sm:text-base text-gray-400 leading-relaxed">
            ZYREN'27 brings university engineering minds and cultural visionaries into an authentic motorsport-intensity arena. Two days of uncompromising competition, high downforce performance, and podium glory.
          </p>
        </div>

        {/* Editorial 2-Day Race Weekend Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          
          {/* Day 01: TECHNICAL SHOWDOWN */}
          <div className="relative group bg-[#111111] border border-[#222222] hover:border-[#E10600] transition-all duration-300 p-8 chamfer-corner flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Top red racing line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600]"></div>
            
            {/* Subtle background number watermark */}
            <span className="absolute -right-4 -bottom-8 font-racing text-9xl text-[#1A1A1A] select-none pointer-events-none group-hover:text-[#222] transition-colors">
              01
            </span>

            <div>
              {/* Day badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-tech text-[#E10600] tracking-widest uppercase font-bold">
                  <Cpu size={14} />
                  <span>PHASE 1 / DAY 01</span>
                </div>
                <div className="text-[11px] font-tech text-gray-400 tracking-wider">
                  START: 09:00 AM IST
                </div>
              </div>

              {/* Title */}
              <h3 className="font-racing text-4xl sm:text-5xl text-white tracking-wide uppercase mb-3">
                DAY 01 — <span className="text-[#E10600]">TECHNICAL SHOWDOWN</span>
              </h3>

              <p className="font-body text-sm text-gray-300 leading-relaxed mb-6">
                Pole position is earned through code efficiency, algorithm supremacy, and forensic agility. Day 01 tests computational endurance under strict telemetry scrutiny.
              </p>

              {/* Day 1 Featured Event roster */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center justify-between p-2.5 bg-[#161616] border-l-2 border-[#E10600]">
                  <span className="font-display font-bold text-sm text-white tracking-wider">01. HACKATHON</span>
                  <span className="text-xs font-tech text-[#D4AF37]">24-Hour Code Sprint</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#161616] border-l-2 border-[#333]">
                  <span className="font-display font-semibold text-sm text-gray-300 tracking-wider">02. BYTEBLITZ</span>
                  <span className="text-xs font-tech text-gray-400">Speed Coding</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#161616] border-l-2 border-[#333]">
                  <span className="font-display font-semibold text-sm text-gray-300 tracking-wider">03. THINK2TEXT</span>
                  <span className="text-xs font-tech text-gray-400">Paper Pitch</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#161616] border-l-2 border-[#333]">
                  <span className="font-display font-semibold text-sm text-gray-300 tracking-wider">04. CRIME DECODING</span>
                  <span className="text-xs font-tech text-gray-400">Cyber Forensics</span>
                </div>
              </div>
            </div>

            {/* CTA to jump to Day 01 events */}
            <button
              onClick={() => scrollTo('day1')}
              className="w-full py-3 bg-[#1A1A1A] hover:bg-[#E10600] text-white border border-[#333] hover:border-[#E10600] font-display text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group-hover:text-white"
            >
              <span>ENTER TECHNICAL PADDOCK</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Day 02: CULTURAL TAKEOVER */}
          <div className="relative group bg-[#111111] border border-[#222222] hover:border-[#D4AF37] transition-all duration-300 p-8 chamfer-corner flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Top gold racing line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]"></div>
            
            {/* Subtle background number watermark */}
            <span className="absolute -right-4 -bottom-8 font-racing text-9xl text-[#1A1A1A] select-none pointer-events-none group-hover:text-[#222] transition-colors">
              02
            </span>

            <div>
              {/* Day badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-tech text-[#D4AF37] tracking-widest uppercase font-bold">
                  <Sparkles size={14} />
                  <span>PHASE 2 / DAY 02</span>
                </div>
                <div className="text-[11px] font-tech text-gray-400 tracking-wider">
                  START: 09:30 AM IST
                </div>
              </div>

              {/* Title */}
              <h3 className="font-racing text-4xl sm:text-5xl text-white tracking-wide uppercase mb-3">
                DAY 02 — <span className="text-[#D4AF37]">CULTURAL TAKEOVER</span>
              </h3>

              <p className="font-body text-sm text-gray-300 leading-relaxed mb-6">
                When the checkered flag signals the midpoint, pure stage velocity takes over. Synchronized dance crews, high-fashion ramp precision, street cyphers, and RC racing tracks.
              </p>

              {/* Day 2 Featured Event Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-8 text-xs">
                <div className="p-2.5 bg-[#161616] border-l-2 border-[#D4AF37]">
                  <div className="font-display font-bold text-white">GROUP DANCE</div>
                  <div className="text-[10px] font-tech text-gray-400">Main Amphitheatre</div>
                </div>
                <div className="p-2.5 bg-[#161616] border-l-2 border-[#D4AF37]">
                  <div className="font-display font-bold text-white">RAMP WALK</div>
                  <div className="text-[10px] font-tech text-gray-400">Grand Stage Runway</div>
                </div>
                <div className="p-2.5 bg-[#161616] border-l-2 border-[#333]">
                  <div className="font-display font-bold text-gray-300">BATTLE DANCE</div>
                  <div className="text-[10px] font-tech text-gray-400">Street Cypher Arena</div>
                </div>
                <div className="p-2.5 bg-[#161616] border-l-2 border-[#333]">
                  <div className="font-display font-bold text-gray-300">E-SPORTS ARENA</div>
                  <div className="text-[10px] font-tech text-gray-400">BGMI & Valorant</div>
                </div>
                <div className="p-2.5 bg-[#161616] border-l-2 border-[#E10600]">
                  <div className="font-display font-bold text-white">RC GRAND PRIX</div>
                  <div className="text-[10px] font-tech text-gray-400">Miniature Circuit</div>
                </div>
                <div className="p-2.5 bg-[#161616] border-l-2 border-[#333]">
                  <div className="font-display font-bold text-gray-300">+ 5 MORE SHOWS</div>
                  <div className="text-[10px] font-tech text-gray-400">Quiz, Film & Auction</div>
                </div>
              </div>
            </div>

            {/* CTA to jump to Day 02 events */}
            <button
              onClick={() => scrollTo('day2')}
              className="w-full py-3 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-black border border-[#333] hover:border-[#D4AF37] font-display text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group-hover:font-bold"
            >
              <span>ENTER CULTURAL GRID</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

