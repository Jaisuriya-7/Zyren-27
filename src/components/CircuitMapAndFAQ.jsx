import React, { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp, HelpCircle, Shield, Award, Users, Coffee } from 'lucide-react';
import { playTelemetryBeep } from '../utils/f1Audio';

export default function CircuitMapAndFAQ() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeZone, setActiveZone] = useState('sector1');

  const faqs = [
    {
      q: 'CAN PARTICIPANTS COMPETE IN MULTIPLE EVENTS ACROSS BOTH RACE DAYS?',
      a: 'Yes! Racers can participate in multiple events provided their schedule timings do not directly clash. For instance, you can race in Hackathon (Day 01) and also pilot the RC Drive or compete in E-Sports / Group Dance on Day 02.'
    },
    {
      q: 'ARE CROSS-COLLEGE TEAMS ALLOWED ON THE START GRID?',
      a: 'Absolutely. Hybrid crews comprising drivers and engineers from different accredited universities or colleges are permitted for all team events, including Hackathon, Ramp Walk, E-Sports, and Group Dance.'
    },
    {
      q: 'HOW AND WHEN ARE THE CASH PRIZES AND TROPHIES AWARDED?',
      a: 'Official podium ceremonies take place at the Grand Finale on Day 02 at 05:30 PM in the Main Amphitheatre. Cash prizes are disbursed via direct bank transfer (NEFT/UPI) to the designated team leader within 48 hours of scrutineering validation, and physical championship trophies & certificates are handed over on stage.'
    },
    {
      q: 'WHAT ABOUT PIT CREW LOGISTICS (FOOD & ACCOMMODATION)?',
      a: 'Complimentary high-octane lunch and refreshment tokens are provided to all registered participants on their respective event days. For outstation teams requiring overnight accommodation for the 24-hour Hackathon, dedicated paddock dormitories are available on campus upon prior notification.'
    },
    {
      q: 'WILL ON-SPOT REGISTRATION BE PERMITTED ON RACE MORNING?',
      a: 'Limited on-spot slots will be available at the Central Pit Lane Desk from 08:00 AM to 09:00 AM strictly subject to grid capacity. Pre-registering online is strongly advised to guarantee your team slot and pole position.'
    }
  ];

  const zones = {
    sector1: {
      title: 'SECTOR 1: TURING INNOVATION PADDOCK',
      desc: 'Houses the 24-Hour Hackathon, Computing Grid 03 (ByteBlitz), Seminar Hall Alpha (Think2Text), and Cyber SOC Lab (Crime Decoding).',
      tag: 'DAY 01 TECHNICAL DOMAIN',
      accent: 'border-[#E10600] text-[#E10600]'
    },
    sector2: {
      title: 'SECTOR 2: AMPHITHEATRE & RUNWAY STRAIGHT',
      desc: 'Main Open-Air Amphitheatre for Group Dance & Battle Dance Cypher, Grand Stage for Ramp Walk Couture, and Audi-Vision Theater for Short Film.',
      tag: 'DAY 02 CULTURAL EPICENTER',
      accent: 'border-[#D4AF37] text-[#D4AF37]'
    },
    pitlane: {
      title: 'CENTRAL PIT LANE: REGISTRATION & SCRUTINEERING',
      desc: 'Driver badge collection, participant kit distribution, helpdesk, dining hub, and race marshals command center.',
      tag: 'ALL ACCESS HEADQUARTERS',
      accent: 'border-white text-white'
    },
    hairpin: {
      title: 'HAIRPIN SPEEDWAY: CIRCUIT DE ZYREN (RC TRACK)',
      desc: 'Custom asphalt miniature Formula 1 track with telemetry timing loops, high-speed banking, and chicanes for the RC Drive GP.',
      tag: 'MOTORSPORT ARENA',
      accent: 'border-[#E10600] text-[#E10600]'
    }
  };

  const toggleFaq = (index) => {
    playTelemetryBeep();
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="circuit-guide" className="relative py-24 bg-[#080808] border-t border-[#1C1C1C] overflow-hidden select-none">
      <div className="absolute inset-0 f1-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#222]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-[#E10600] rotate-45"></span>
            <span className="font-tech text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
              CIRCUIT LAYOUT & SCRUTINEERING
            </span>
          </div>
          <h2 className="font-racing text-6xl sm:text-7xl lg:text-8xl tracking-wide uppercase text-white leading-none">
            CAMPUS CIRCUIT <span className="text-[#E10600]">& FAQ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Interactive Track Map Guide */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-tech text-xs text-[#D4AF37] uppercase tracking-[0.25em] font-bold">
                CIRCUIT DE ZYREN • PADDOCK LOCATIONS
              </h3>
              <span className="text-[11px] font-tech text-gray-500">CLICK SECTORS BELOW</span>
            </div>

            {/* F1 Circuit Map Visual Artwork */}
            <div className="relative bg-[#0E0E0E] border-2 border-[#262626] chamfer-corner p-6 overflow-hidden">
              <svg viewBox="0 0 600 360" className="w-full h-auto drop-shadow-2xl">
                {/* Track tarmac glow */}
                <path
                  d="M 80 180 C 80 80, 200 60, 320 70 C 440 80, 520 140, 520 220 C 520 300, 420 310, 300 290 C 180 270, 80 280, 80 180 Z"
                  fill="none"
                  stroke="#1E1E1E"
                  strokeWidth="28"
                  strokeLinejoin="round"
                />
                {/* Track kerb lines */}
                <path
                  d="M 80 180 C 80 80, 200 60, 320 70 C 440 80, 520 140, 520 220 C 520 300, 420 310, 300 290 C 180 270, 80 280, 80 180 Z"
                  fill="none"
                  stroke="#2C2C2C"
                  strokeWidth="20"
                  strokeLinejoin="round"
                />
                {/* Racing Line Sector 1: Red */}
                <path
                  d="M 80 180 C 80 80, 200 60, 320 70"
                  fill="none"
                  stroke="#E10600"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {/* Racing Line Sector 2: Gold */}
                <path
                  d="M 320 70 C 440 80, 520 140, 520 220 C 520 300, 420 310, 300 290"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {/* Finish Straight: White */}
                <path
                  d="M 300 290 C 180 270, 80 280, 80 180"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="5"
                  strokeDasharray="10 8"
                  strokeLinecap="round"
                />

                {/* Sector 1 Pin */}
                <g
                  className="cursor-pointer transition-transform hover:scale-125"
                  onClick={() => { playTelemetryBeep(); setActiveZone('sector1'); }}
                >
                  <circle cx="180" cy="75" r="14" fill="#E10600" />
                  <circle cx="180" cy="75" r="7" fill="#FFFFFF" />
                  <text x="180" y="50" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Teko">
                    SECTOR 1 (TECH)
                  </text>
                </g>

                {/* Sector 2 Pin */}
                <g
                  className="cursor-pointer transition-transform hover:scale-125"
                  onClick={() => { playTelemetryBeep(); setActiveZone('sector2'); }}
                >
                  <circle cx="480" cy="200" r="14" fill="#D4AF37" />
                  <circle cx="480" cy="200" r="7" fill="#000000" />
                  <text x="480" y="175" fill="#D4AF37" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Teko">
                    SECTOR 2 (CULT)
                  </text>
                </g>

                {/* Pit Lane Pin */}
                <g
                  className="cursor-pointer transition-transform hover:scale-125"
                  onClick={() => { playTelemetryBeep(); setActiveZone('pitlane'); }}
                >
                  <rect x="250" y="275" width="22" height="22" fill="#FFFFFF" />
                  <text x="261" y="318" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Teko">
                    PIT LANE (REGISTRATION)
                  </text>
                </g>

                {/* Hairpin RC Pin */}
                <g
                  className="cursor-pointer transition-transform hover:scale-125"
                  onClick={() => { playTelemetryBeep(); setActiveZone('hairpin'); }}
                >
                  <circle cx="80" cy="180" r="12" fill="#E10600" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="80" y="215" fill="#E10600" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Teko">
                    RC SPEEDWAY
                  </text>
                </g>
              </svg>

              {/* Dynamic Zone Details Card */}
              <div className={`mt-4 p-4 bg-[#141414] border-l-4 ${zones[activeZone].accent} chamfer-corner-sm transition-all duration-200`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-tech text-[10px] tracking-widest uppercase font-bold text-gray-400">
                    {zones[activeZone].tag}
                  </span>
                  <span className="font-tech text-xs text-[#D4AF37] font-semibold">ACTIVE TELEMETRY</span>
                </div>
                <h4 className="font-racing text-2xl text-white uppercase tracking-wider">
                  {zones[activeZone].title}
                </h4>
                <p className="font-body text-xs text-gray-300 mt-1 leading-relaxed">
                  {zones[activeZone].desc}
                </p>
              </div>

            </div>

            {/* Quick selector tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-tech">
              {Object.keys(zones).map((key) => (
                <button
                  key={key}
                  onClick={() => { playTelemetryBeep(); setActiveZone(key); }}
                  className={`p-2 border text-center transition-all uppercase tracking-wider font-bold ${
                    activeZone === key
                      ? 'bg-[#E10600] border-[#E10600] text-white shadow-md'
                      : 'bg-[#121212] border-[#2B2B2B] text-gray-400 hover:text-white hover:border-[#444]'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Scrutineering FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-tech text-xs text-[#D4AF37] uppercase tracking-[0.25em] font-bold mb-4">
              SCRUTINEERING & PARTICIPANT REGULATIONS (FAQ)
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#0E0E0E] border border-[#222] hover:border-[#333] transition-colors chamfer-corner-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 font-display text-sm font-bold tracking-wider text-white hover:text-[#D4AF37] transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="font-tech text-xs text-[#E10600]">0{idx + 1}.</span>
                        <span>{faq.q}</span>
                      </span>
                      {isOpen ? (
                        <ChevronUp size={16} className="text-[#E10600] flex-shrink-0" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-500 flex-shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 border-t border-[#1C1C1C] text-xs font-body text-gray-300 leading-relaxed bg-[#121212]/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Helpdesk Callout Box */}
            <div className="p-4 bg-[#141414] border border-[#2B2B2B] chamfer-corner-sm flex items-center justify-between gap-4 mt-6">
              <div>
                <div className="font-tech text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">
                  HAVE SPECIFIC RACE QUERIES?
                </div>
                <div className="font-racing text-2xl text-white uppercase tracking-wider">
                  CONTACT EVENT MARSHALS
                </div>
              </div>

              <a
                href="mailto:contact@zyren27.com"
                className="px-4 py-2 bg-[#E10600] hover:bg-[#FF1801] text-white text-xs font-display font-bold uppercase tracking-widest chamfer-corner-sm transition-colors"
              >
                EMAIL PIT WALL
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

