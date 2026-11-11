import React, { useState } from 'react';
import { culturalEvents } from '../data/eventsData';
import { Trophy, Clock, MapPin, Users, ArrowUpRight, Sparkles, Music, Film, Gamepad2, Brain, Car, HelpCircle, DollarSign } from 'lucide-react';
import { playTelemetryBeep } from '../utils/f1Audio';

export default function Day02Cultural({ onSelectEvent, onOpenRegister }) {
  const [filterCategory, setFilterCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'ALL EVENTS (10)' },
    { id: 'STAGE', label: 'STAGE & RUNWAY (3)' },
    { id: 'GAMING_RACING', label: 'ESPORTS & RC (2)' },
    { id: 'MEDIA_MUSIC', label: 'MEDIA & MUSIC (2)' },
    { id: 'TRIVIA_STRATEGY', label: 'TRIVIA & STRATEGY (3)' }
  ];

  const matchesCategory = (eventId, cat) => {
    if (cat === 'ALL') return true;
    if (cat === 'STAGE') return ['group-dance', 'ramp-walk', 'battle-dance'].includes(eventId);
    if (cat === 'GAMING_RACING') return ['e-sports', 'rc-drive'].includes(eventId);
    if (cat === 'MEDIA_MUSIC') return ['short-film', 'lyrics-hub'].includes(eventId);
    if (cat === 'TRIVIA_STRATEGY') return ['anime-quiz', 'ipl-auction', 'memory-riddle'].includes(eventId);
    return true;
  };

  const getEventIcon = (id) => {
    switch (id) {
      case 'group-dance':
      case 'battle-dance':
        return <Music className="text-[#E10600]" size={18} />;
      case 'ramp-walk':
        return <Sparkles className="text-[#D4AF37]" size={18} />;
      case 'e-sports':
        return <Gamepad2 className="text-[#E10600]" size={18} />;
      case 'rc-drive':
        return <Car className="text-[#E10600]" size={18} />;
      case 'short-film':
        return <Film className="text-[#D4AF37]" size={18} />;
      case 'memory-riddle':
        return <Brain className="text-[#D4AF37]" size={18} />;
      case 'ipl-auction':
        return <DollarSign className="text-[#D4AF37]" size={18} />;
      case 'anime-quiz':
        return <HelpCircle className="text-[#E10600]" size={18} />;
      case 'lyrics-hub':
        return <Music className="text-[#D4AF37]" size={18} />;
      default:
        return <Sparkles className="text-[#E10600]" size={18} />;
    }
  };

  const groupDance = culturalEvents.find((e) => e.id === 'group-dance');
  const rampWalk = culturalEvents.find((e) => e.id === 'ramp-walk');
  const rcDrive = culturalEvents.find((e) => e.id === 'rc-drive');

  const filteredEvents = culturalEvents.filter((e) => matchesCategory(e.id, filterCategory));

  return (
    <section id="day2" className="relative py-24 bg-[#090909] border-t border-[#1F1F1F] overflow-hidden select-none">
      {/* Background Subtle Pit-Lane Grid */}
      <div className="absolute inset-0 f1-grid opacity-15 pointer-events-none"></div>

      {/* Gold ambient streak */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading: '02 / CULTURAL GRAND PRIX' */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-[#D4AF37] rotate-45"></span>
              <span className="font-tech text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
                PHASE 02 • DAY 02 SCHEDULE
              </span>
            </div>
            <h2 className="font-racing text-6xl sm:text-7xl lg:text-8xl tracking-wide uppercase text-white leading-none">
              02 / <span className="text-[#D4AF37]">CULTURAL</span> GRAND PRIX
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-tech text-gray-400">
            <span className="px-3 py-1.5 bg-[#141414] border border-[#262626] text-white">
              10 CHAMPIONSHIP SHOWS
            </span>
            <span className="px-3 py-1.5 bg-[#141414] border border-[#262626] text-[#D4AF37]">
              MAX ENTERTAINMENT RPM
            </span>
          </div>
        </div>

        {/* Interactive Sector Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-10 pb-2">
          {categories.map((cat) => {
            const isActive = filterCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playTelemetryBeep();
                  setFilterCategory(cat.id);
                }}
                className={`px-4 py-2 text-xs font-tech font-bold uppercase tracking-wider chamfer-corner-sm transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#E10600] text-white shadow-[0_2px_12px_rgba(225,6,0,0.5)] border border-[#E10600]'
                    : 'bg-[#121212] text-gray-400 hover:text-white border border-[#262626] hover:border-[#444]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Default View (ALL): Show Headliners + RC Drive + Grid */}
        {filterCategory === 'ALL' ? (
          <>
            {/* Top Headliners Dual Showcase: GROUP DANCE & RAMP WALK */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Headline 1: GROUP DANCE */}
              {groupDance && (
                <div
                  onClick={() => {
                    playTelemetryBeep();
                    onSelectEvent(groupDance);
                  }}
                  className="group relative bg-[#111111] border border-[#262626] hover:border-[#E10600] transition-all duration-300 chamfer-corner overflow-hidden cursor-pointer shadow-xl flex flex-col justify-between"
                >
                  <div className="h-1.5 w-full bg-[#E10600]"></div>
                  
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={groupDance.image}
                      alt={groupDance.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent"></div>

                    <div className="absolute top-4 left-4 bg-[#080808]/90 border border-[#E10600] px-3 py-1 text-xs font-tech text-white uppercase flex items-center gap-1.5 chamfer-corner-sm">
                      <span className="w-2 h-2 bg-[#E10600]"></span>
                      <span>{groupDance.code} • SHOWCASE HEADLINER</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="bg-[#D4AF37] px-3 py-1 text-xs font-tech text-black font-extrabold uppercase">
                        1ST PRIZE: {groupDance.prizes[0].amount}
                      </span>
                      <span className="bg-[#141414]/90 px-2.5 py-1 text-xs font-tech text-gray-300 border border-[#333]">
                        {groupDance.feeDisplay}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs font-tech text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-[#D4AF37]" />
                        {groupDance.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-[#E10600]" />
                        {groupDance.venue}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={12} />
                        {groupDance.teamSize}
                      </span>
                    </div>

                    <h3 className="font-racing text-4xl sm:text-5xl text-white tracking-wide uppercase group-hover:text-[#E10600] transition-colors mb-2">
                      {groupDance.name}
                    </h3>

                    <p className="font-body text-sm text-gray-300 line-clamp-2 leading-relaxed mb-6">
                      {groupDance.shortDesc}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#202020]">
                      <span className="font-tech text-xs text-[#E10600] uppercase tracking-wider flex items-center gap-1 font-bold">
                        <span>EXPLORE STAGE RULES</span>
                        <ArrowUpRight size={14} />
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playTelemetryBeep();
                          onOpenRegister(groupDance);
                        }}
                        className="px-4 py-1.5 bg-[#E10600] hover:bg-[#FF1801] text-white text-xs font-display font-bold uppercase tracking-wider chamfer-corner-sm"
                      >
                        REGISTER CREW
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Headline 2: RAMP WALK */}
              {rampWalk && (
                <div
                  onClick={() => {
                    playTelemetryBeep();
                    onSelectEvent(rampWalk);
                  }}
                  className="group relative bg-[#111111] border border-[#262626] hover:border-[#D4AF37] transition-all duration-300 chamfer-corner overflow-hidden cursor-pointer shadow-xl flex flex-col justify-between"
                >
                  <div className="h-1.5 w-full bg-[#D4AF37]"></div>
                  
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={rampWalk.image}
                      alt={rampWalk.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent"></div>

                    <div className="absolute top-4 left-4 bg-[#080808]/90 border border-[#D4AF37] px-3 py-1 text-xs font-tech text-white uppercase flex items-center gap-1.5 chamfer-corner-sm">
                      <span className="w-2 h-2 bg-[#D4AF37]"></span>
                      <span>{rampWalk.code} • COUTURE RUNWAY</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="bg-[#D4AF37] px-3 py-1 text-xs font-tech text-black font-extrabold uppercase">
                        1ST PRIZE: {rampWalk.prizes[0].amount}
                      </span>
                      <span className="bg-[#141414]/90 px-2.5 py-1 text-xs font-tech text-gray-300 border border-[#333]">
                        {rampWalk.feeDisplay}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs font-tech text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-[#D4AF37]" />
                        {rampWalk.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-[#D4AF37]" />
                        {rampWalk.venue}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={12} />
                        {rampWalk.teamSize}
                      </span>
                    </div>

                    <h3 className="font-racing text-4xl sm:text-5xl text-white tracking-wide uppercase group-hover:text-[#D4AF37] transition-colors mb-2">
                      {rampWalk.name}
                    </h3>

                    <p className="font-body text-sm text-gray-300 line-clamp-2 leading-relaxed mb-6">
                      {rampWalk.shortDesc}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#202020]">
                      <span className="font-tech text-xs text-[#D4AF37] uppercase tracking-wider flex items-center gap-1 font-bold">
                        <span>EXPLORE RUNWAY SPECS</span>
                        <ArrowUpRight size={14} />
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playTelemetryBeep();
                          onOpenRegister(rampWalk);
                        }}
                        className="px-4 py-1.5 bg-[#D4AF37] hover:bg-[#F5D061] text-black text-xs font-display font-bold uppercase tracking-wider chamfer-corner-sm"
                      >
                        REGISTER TEAM
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Special Feature: RC DRIVE */}
            {rcDrive && (
              <div className="mb-12">
                <div
                  onClick={() => {
                    playTelemetryBeep();
                    onSelectEvent(rcDrive);
                  }}
                  className="relative group bg-[#0D0D0D] border-2 border-[#242424] hover:border-[#E10600] transition-all duration-300 chamfer-corner p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer shadow-2xl"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#161616] border border-[#E10600] flex items-center justify-center chamfer-corner-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Car size={36} className="text-[#E10600]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-tech text-xs text-[#E10600] font-bold">
                          {rcDrive.code} • SPECIAL MOTORSPORT CIRCUIT
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="font-tech text-xs text-gray-400">{rcDrive.venue}</span>
                      </div>
                      <h3 className="font-racing text-3xl sm:text-4xl text-white uppercase tracking-wider">
                        {rcDrive.name} — <span className="text-[#D4AF37]">{rcDrive.subtitle}</span>
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-gray-300 max-w-2xl mt-1">
                        {rcDrive.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0 w-full md:w-auto justify-between md:justify-end">
                    <div className="text-right">
                      <div className="text-[10px] font-tech text-gray-500 uppercase">1ST PRIZE</div>
                      <div className="font-tech text-base font-bold text-[#D4AF37]">
                        {rcDrive.prizes[0].amount}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playTelemetryBeep();
                        onOpenRegister(rcDrive);
                      }}
                      className="px-5 py-2.5 bg-[#E10600] hover:bg-[#FF1801] text-white text-xs font-display font-bold uppercase tracking-widest chamfer-corner-sm"
                    >
                      RACE NOW
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Asymmetric Grid for remaining 7 Cultural Events */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {culturalEvents
                .filter((e) => e.id !== 'group-dance' && e.id !== 'ramp-walk' && e.id !== 'rc-drive')
                .map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    getEventIcon={getEventIcon}
                    onSelectEvent={onSelectEvent}
                  />
                ))}
            </div>
          </>
        ) : (
          /* Filtered View: Show all matching events in responsive grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                getEventIcon={getEventIcon}
                onSelectEvent={onSelectEvent}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

function EventCard({ event, getEventIcon, onSelectEvent }) {
  return (
    <div
      onClick={() => {
        playTelemetryBeep();
        onSelectEvent(event);
      }}
      className="group relative bg-[#0D0D0D] border border-[#202020] hover:border-[#D4AF37] transition-all duration-300 chamfer-corner flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)]"
    >
      <div
        className={`h-1 w-full ${
          event.accent === 'gold' ? 'bg-[#D4AF37]' : 'bg-[#E10600]'
        }`}
      ></div>

      <div className="relative h-40 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-75 contrast-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30"></div>

        <div className="absolute top-2.5 left-2.5 bg-[#080808]/90 px-2 py-0.5 text-[10px] font-tech text-white border border-[#333] flex items-center gap-1">
          {getEventIcon(event.id)}
          <span>{event.code}</span>
        </div>

        <div className="absolute bottom-2.5 right-2.5 bg-[#141414]/90 px-2 py-0.5 text-[10px] font-tech text-[#D4AF37] border border-[#2B2B2B] font-bold">
          {event.feeDisplay}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[10px] font-tech text-gray-400 mb-1.5">
            <span className="flex items-center gap-1">
              <Clock size={11} className="text-[#D4AF37]" />
              {event.time}
            </span>
            <span className="flex items-center gap-1">
              <Users size={11} />
              {event.teamSize}
            </span>
          </div>

          <h3 className="font-racing text-2xl sm:text-3xl text-white uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors mb-1">
            {event.name}
          </h3>

          <p className="font-tech text-[11px] text-[#D4AF37] uppercase tracking-wider mb-2">
            {event.subtitle}
          </p>

          <p className="font-body text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
            {event.shortDesc}
          </p>
        </div>

        <div className="pt-3 border-t border-[#1A1A1A] flex items-center justify-between">
          <span className="text-[10px] font-tech text-gray-400 group-hover:text-white transition-colors flex items-center gap-1 font-semibold">
            <span>DETAILS</span>
            <ArrowUpRight size={12} />
          </span>

          <span className="text-xs font-tech text-[#D4AF37] font-bold">
            P1: {event.prizes[0].amount}
          </span>
        </div>
      </div>
    </div>
  );
}
