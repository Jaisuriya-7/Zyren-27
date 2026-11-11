import React from 'react';
import { technicalEvents } from '../data/eventsData';
import { Trophy, Clock, MapPin, Users, ArrowUpRight, Zap, Terminal, Shield, Code, Flame } from 'lucide-react';
import { playTelemetryBeep } from '../utils/f1Audio';

export default function Day01Technical({ onSelectEvent, onOpenRegister }) {
  const hackathon = technicalEvents.find((e) => e.id === 'hackathon');
  const otherTechEvents = technicalEvents.filter((e) => e.id !== 'hackathon');

  const getEventIcon = (id) => {
    switch (id) {
      case 'byteblitz':
        return <Terminal className="text-[#D4AF37]" size={20} />;
      case 'think2text':
        return <Code className="text-[#E10600]" size={20} />;
      case 'crime-decoding':
        return <Shield className="text-[#D4AF37]" size={20} />;
      default:
        return <Zap className="text-[#E10600]" size={20} />;
    }
  };

  return (
    <section id="day1" className="relative py-24 bg-[#080808] border-t border-[#1C1C1C] overflow-hidden">
      {/* Background Subtle Pit-Lane Grid */}
      <div className="absolute inset-0 f1-grid opacity-15 pointer-events-none"></div>
      
      {/* Red ambient streak */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#E10600]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading: '01 / TECHNICAL GRAND PRIX' */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-[#E10600] rotate-45"></span>
              <span className="font-tech text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
                PHASE 01 • DAY 01 SCHEDULE
              </span>
            </div>
            <h2 className="font-racing text-6xl sm:text-7xl lg:text-8xl tracking-wide uppercase text-white leading-none">
              01 / <span className="text-[#E10600]">TECHNICAL</span> GRAND PRIX
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-tech text-gray-400">
            <span className="px-3 py-1.5 bg-[#141414] border border-[#262626] text-white">
              POLE POSITION GRID
            </span>
            <span className="px-3 py-1.5 bg-[#141414] border border-[#262626] text-[#E10600]">
              4 TELEMETRY SECTORS
            </span>
          </div>
        </div>

        {/* 
          MAIN FEATURED EVENT: HACKATHON (Pole Position Showcase)
        */}
        {hackathon && (
          <div className="mb-12">
            <div className="relative group bg-[#0F0F0F] border-2 border-[#242424] hover:border-[#E10600] transition-all duration-300 rounded-none chamfer-corner overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
              
              {/* Pole Position Header Badge */}
              <div className="bg-[#171717] px-6 py-2.5 border-b border-[#242424] flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E10600] animate-ping"></span>
                  <span className="font-tech text-xs tracking-widest text-[#E10600] font-bold uppercase">
                    POLE POSITION FEATURED EVENT • 24-HOUR RACE
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-tech text-gray-300">
                  <span className="text-[#D4AF37] font-bold">CHAMPIONSHIP PURSE: ₹47,500</span>
                  <span className="text-gray-500">|</span>
                  <span>SECTOR: GP-TECH-01</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Event Image with racing overlay */}
                <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                  <img
                    src={hackathon.image}
                    alt={hackathon.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0F0F0F]/50 to-[#0F0F0F]"></div>
                  
                  {/* Floating Gold Badge */}
                  <div className="absolute top-4 left-4 bg-[#080808]/90 border border-[#D4AF37] px-3.5 py-1.5 text-xs font-tech text-[#D4AF37] tracking-wider uppercase flex items-center gap-1.5 chamfer-corner-sm">
                    <Trophy size={14} />
                    <span>₹25,000 FIRST PRIZE</span>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-[#E10600] px-3 py-1 text-xs font-tech text-white tracking-widest uppercase font-bold flex items-center gap-1">
                    <Flame size={14} />
                    <span>24 HOURS SPRINT</span>
                  </div>
                </div>

                {/* Event Content & Telemetry */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-tech text-xs text-[#E10600] font-bold tracking-widest">
                        {hackathon.code}
                      </span>
                      <span className="w-1.5 h-1.5 bg-[#444] rounded-full"></span>
                      <span className="font-tech text-xs text-gray-400 tracking-wider">
                        {hackathon.venue}
                      </span>
                    </div>

                    <h3 className="font-racing text-5xl sm:text-6xl text-white tracking-wide uppercase mb-2">
                      {hackathon.name}
                    </h3>
                    <p className="font-tech text-xs sm:text-sm text-[#D4AF37] tracking-widest uppercase font-semibold mb-4">
                      {hackathon.subtitle}
                    </p>

                    <p className="font-body text-sm text-gray-300 leading-relaxed mb-6">
                      {hackathon.shortDesc}
                    </p>

                    {/* Telemetry specs grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-[#202020] mb-6">
                      <div>
                        <div className="text-[10px] font-tech text-gray-500 uppercase">TEAM GRID</div>
                        <div className="font-display text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                          <Users size={14} className="text-[#E10600]" />
                          <span>{hackathon.teamSize}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-tech text-gray-500 uppercase">DURATION</div>
                        <div className="font-display text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                          <Clock size={14} className="text-[#D4AF37]" />
                          <span>24 Hours</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-tech text-gray-500 uppercase">REGISTRATION</div>
                        <div className="font-display text-sm font-bold text-white mt-0.5">
                          {hackathon.feeDisplay}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-tech text-gray-500 uppercase">LOCATION</div>
                        <div className="font-display text-sm font-bold text-white mt-0.5 truncate">
                          Turing Paddock
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => {
                        playTelemetryBeep();
                        onSelectEvent(hackathon);
                      }}
                      className="w-full sm:w-1/2 py-3 bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333] hover:border-[#D4AF37] font-display text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 chamfer-corner-sm"
                    >
                      <span>VIEW TELEMETRY & RULES</span>
                      <ArrowUpRight size={15} />
                    </button>

                    <button
                      onClick={() => {
                        playTelemetryBeep();
                        onOpenRegister(hackathon);
                      }}
                      className="w-full sm:w-1/2 py-3 bg-[#E10600] hover:bg-[#FF1801] text-white font-display text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 chamfer-corner-sm shadow-[0_4px_15px_rgba(225,6,0,0.4)]"
                    >
                      <Zap size={15} />
                      <span>ENTER RACE / REGISTER</span>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* 
          ASYMMETRIC RACING PADDOCK GRID for remaining Day 01 events:
          BYTEBLITZ, THINK2TEXT, CRIME DECODING
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherTechEvents.map((event, idx) => (
            <div
              key={event.id}
              onClick={() => {
                playTelemetryBeep();
                onSelectEvent(event);
              }}
              className="group relative bg-[#0E0E0E] border border-[#222] hover:border-[#E10600] transition-all duration-300 chamfer-corner flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(225,6,0,0.2)]"
            >
              {/* Top border colored tag */}
              <div
                className={`h-1 w-full ${
                  event.accent === 'gold' ? 'bg-[#D4AF37]' : 'bg-[#E10600]'
                }`}
              ></div>

              {/* Event card image banner */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-75 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-black/30"></div>
                
                {/* Event number chip */}
                <div className="absolute top-3 left-3 bg-[#080808]/90 px-2.5 py-1 text-[10px] font-tech text-white border border-[#333] flex items-center gap-1.5">
                  {getEventIcon(event.id)}
                  <span>{event.code}</span>
                </div>

                {/* Entry fee tag */}
                <div className="absolute bottom-3 right-3 bg-[#E10600] px-2.5 py-0.5 text-[11px] font-tech text-white font-bold">
                  {event.feeDisplay}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-tech text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-[#D4AF37]" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {event.teamSize}
                    </span>
                  </div>

                  <h3 className="font-racing text-3xl sm:text-4xl text-white tracking-wide uppercase group-hover:text-[#E10600] transition-colors mb-1">
                    {event.name}
                  </h3>
                  
                  <p className="font-tech text-xs text-[#D4AF37] uppercase tracking-wider mb-3">
                    {event.subtitle}
                  </p>

                  <p className="font-body text-xs text-gray-400 line-clamp-2 leading-relaxed mb-6">
                    {event.shortDesc}
                  </p>
                </div>

                {/* Card footer CTA */}
                <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                  <span className="text-[11px] font-tech text-gray-400 group-hover:text-white transition-colors flex items-center gap-1 font-semibold">
                    <span>VIEW EVENT SPECS</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>

                  <span className="text-xs font-tech text-[#D4AF37] font-bold">
                    P1: {event.prizes[0].amount}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

