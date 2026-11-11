import React from 'react';
import { Gauge, Flag, Zap, Trophy, ShieldCheck, Activity } from 'lucide-react';

export default function TelemetryBar() {
  const telemetryItems = [
    { label: 'CIRCUIT STATUS', val: 'GREEN FLAG', highlight: 'text-[#4ADE80]', icon: <Flag size={13} /> },
    { label: 'GRID PURSE', val: '₹1,50,000+ INR', highlight: 'text-[#D4AF37]', icon: <Trophy size={13} /> },
    { label: 'SECTOR 01', val: '4 TECH GPS', highlight: 'text-[#E10600]', icon: <Zap size={13} /> },
    { label: 'SECTOR 02', val: '10 CULT GPS', highlight: 'text-[#D4AF37]', icon: <Activity size={13} /> },
    { label: 'TRACK CONDITIONS', val: 'DRY • 32°C', highlight: 'text-gray-200', icon: <Gauge size={13} /> },
    { label: 'REGISTRATIONS', val: 'OFFICIALLY OPEN', highlight: 'text-[#E10600]', icon: <ShieldCheck size={13} /> },
  ];

  return (
    <div className="w-full bg-[#050505] border-y border-[#1E1E1E] overflow-hidden select-none py-2.5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        
        {/* Left Live Badge */}
        <div className="flex items-center gap-2 flex-shrink-0 pr-4 border-r border-[#222]">
          <span className="w-2 h-2 bg-[#E10600] rounded-full animate-ping"></span>
          <span className="font-tech text-[10px] tracking-widest text-[#E10600] font-black uppercase">
            LIVE TELEMETRY
          </span>
        </div>

        {/* Telemetry Ticker Items */}
        <div className="flex items-center gap-6 sm:gap-10 flex-shrink-0">
          {telemetryItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs">
              <span className="text-gray-500">{item.icon}</span>
              <span className="font-tech text-[10px] text-gray-400 uppercase tracking-wider">
                {item.label}:
              </span>
              <span className={`font-tech text-xs font-bold tracking-widest uppercase ${item.highlight}`}>
                {item.val}
              </span>
            </div>
          ))}
        </div>

        {/* Right Grand Prix Watermark */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0 pl-4 border-l border-[#222]">
          <span className="font-tech text-[10px] tracking-[0.2em] text-[#D4AF37] font-bold">
            ZYREN GRAND PRIX 2027
          </span>
        </div>

      </div>
    </div>
  );
}

