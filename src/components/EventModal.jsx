import React, { useEffect } from 'react';
import { X, Trophy, Clock, MapPin, Users, AlertCircle, Zap, Shield, CheckCircle2, Award } from 'lucide-react';
import { playTelemetryBeep } from '../utils/f1Audio';

export default function EventModal({ event, onClose, onRegister }) {
  // ESC key closes modal
  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playTelemetryBeep();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll behind modal
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0D0D0D] border-2 border-[#262626] shadow-[0_20px_60px_rgba(0,0,0,0.95)] chamfer-corner my-auto overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Racing Accent Line */}
        <div className={`h-1.5 w-full ${event.accent === 'gold' ? 'bg-[#D4AF37]' : 'bg-[#E10600]'}`}></div>

        {/* Modal Top Header Bar */}
        <div className="bg-[#141414] px-6 py-3 border-b border-[#222] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E10600]"></span>
            <span className="font-tech text-xs tracking-[0.25em] text-[#D4AF37] font-bold uppercase">
              {event.code} • {event.category} TELEMETRY
            </span>
          </div>

          <button
            onClick={() => {
              playTelemetryBeep();
              onClose();
            }}
            className="p-1.5 text-gray-400 hover:text-white bg-[#1E1E1E] hover:bg-[#E10600] border border-[#333] transition-colors chamfer-corner-sm"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Hero Banner */}
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-block px-3 py-1 bg-[#E10600] text-white text-[11px] font-tech font-bold uppercase tracking-wider mb-2">
              {event.day} OFFICIAL GRAND PRIX
            </div>
            <h2 className="font-racing text-5xl sm:text-7xl text-white tracking-wide uppercase leading-none drop-shadow-md">
              {event.name}
            </h2>
            <p className="font-tech text-sm sm:text-base text-[#D4AF37] tracking-widest uppercase font-semibold">
              {event.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          
          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#141414] border border-[#222] chamfer-corner-sm">
            <div className="border-l-2 border-[#E10600] pl-3">
              <div className="text-[10px] font-tech text-gray-400 uppercase tracking-wider">EVENT DATE</div>
              <div className="font-display text-sm font-bold text-white mt-0.5">{event.day}</div>
              <div className="text-[10px] text-gray-500">{event.time}</div>
            </div>

            <div className="border-l-2 border-[#D4AF37] pl-3">
              <div className="text-[10px] font-tech text-gray-400 uppercase tracking-wider">REPORTING TIME</div>
              <div className="font-display text-sm font-bold text-white mt-0.5">09:00 AM IST</div>
              <div className="text-[10px] text-gray-500">Pit Gate Closes 09:30 AM</div>
            </div>

            <div className="border-l-2 border-[#E10600] pl-3">
              <div className="text-[10px] font-tech text-gray-400 uppercase tracking-wider">CIRCUIT VENUE</div>
              <div className="font-display text-sm font-bold text-white mt-0.5 truncate">{event.venue}</div>
              <div className="text-[10px] text-gray-500">Main Campus</div>
            </div>

            <div className="border-l-2 border-[#D4AF37] pl-3">
              <div className="text-[10px] font-tech text-gray-400 uppercase tracking-wider">ENTRY FEE</div>
              <div className="font-tech text-base font-bold text-[#D4AF37] mt-0.5">{event.feeDisplay}</div>
              <div className="text-[10px] text-gray-500">Team: {event.teamSize}</div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="font-tech text-xs text-[#D4AF37] uppercase tracking-[0.25em] font-bold mb-2">
              CIRCUIT BRIEFING
            </h4>
            <p className="font-body text-sm sm:text-base text-gray-300 leading-relaxed">
              {event.fullDesc || event.shortDesc}
            </p>
          </div>

          {/* Championship Podium & Prizes */}
          <div>
            <h4 className="font-tech text-xs text-[#D4AF37] uppercase tracking-[0.25em] font-bold mb-3 flex items-center gap-1.5">
              <Trophy size={14} className="text-[#D4AF37]" />
              <span>PODIUM PRIZES & AWARDS</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {event.prizes.map((prize, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 border ${
                    idx === 0
                      ? 'bg-[#181508] border-[#D4AF37]/60'
                      : 'bg-[#121212] border-[#252525]'
                  } chamfer-corner-sm`}
                >
                  <div className="text-[10px] font-tech text-gray-400 uppercase tracking-wider">
                    {prize.rank}
                  </div>
                  <div className={`font-tech text-xl font-black mt-1 ${idx === 0 ? 'text-[#D4AF37]' : 'text-white'}`}>
                    {prize.amount}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1 leading-tight">
                    {prize.perk}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulations & Scrutineering Rules */}
          <div>
            <h4 className="font-tech text-xs text-[#E10600] uppercase tracking-[0.25em] font-bold mb-3 flex items-center gap-1.5">
              <Shield size={14} className="text-[#E10600]" />
              <span>RULES & REGULATIONS</span>
            </h4>

            <ul className="space-y-2.5">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-[#121212] p-3 border-l-2 border-[#E10600]">
                  <CheckCircle2 size={15} className="text-[#E10600] flex-shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer with F1 CTA */}
        <div className="bg-[#121212] px-6 py-4 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-tech text-xs text-gray-400 uppercase">ENTRY PASS:</span>
            <span className="font-tech text-xl font-bold text-white">{event.feeDisplay}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                playTelemetryBeep();
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#252525] text-gray-300 border border-[#333] font-display text-xs font-bold uppercase tracking-wider transition-colors chamfer-corner-sm"
            >
              CLOSE
            </button>

            <button
              onClick={() => {
                playTelemetryBeep();
                onRegister(event);
              }}
              className="w-1/2 sm:w-auto px-7 py-2.5 bg-[#E10600] hover:bg-[#FF1801] text-white font-display text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 shadow-[0_4px_20px_rgba(225,6,0,0.5)] flex items-center justify-center gap-2 chamfer-corner-sm"
            >
              <Zap size={14} />
              <span>REGISTER NOW</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

