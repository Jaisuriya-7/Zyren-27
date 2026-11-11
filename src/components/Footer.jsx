import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Twitter, ArrowUp, Flag } from 'lucide-react';
import { playTelemetryBeep } from '../utils/f1Audio';

export default function Footer({ onOpenRegister }) {
  const scrollToTop = () => {
    playTelemetryBeep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    playTelemetryBeep();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#060606] border-t-2 border-[#1E1E1E] text-gray-400 overflow-hidden select-none">
      
      {/* Top Racing Flag Border */}
      <div className="w-full h-2 racing-stripes-red opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Top Tagline & Branding Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-[#1A1A1A]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#E10600]"></span>
              <span className="font-tech text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
                OFFICIAL GRAND PRIX EPILOGUE
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-racing text-5xl sm:text-6xl text-white tracking-wider">
                ZYREN
              </span>
              <span className="font-tech text-3xl sm:text-4xl text-[#E10600] font-black">
                '27
              </span>
            </div>
            {/* Tagline requirement */}
            <p className="font-display text-lg sm:text-xl text-gray-200 uppercase tracking-widest font-bold mt-1">
              THE RACE ENDS. <span className="text-[#E10600]">THE LEGACY</span> <span className="text-[#D4AF37]">REMAINS.</span>
            </p>
          </div>

          {/* Back to Start Grid Button */}
          <button
            onClick={scrollToTop}
            className="group px-5 py-2.5 bg-[#121212] hover:bg-[#E10600] text-gray-300 hover:text-white border border-[#2B2B2B] hover:border-[#E10600] font-display text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center gap-2 chamfer-corner-sm"
          >
            <span>BACK TO POLE POSITION</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* 4-Column Grid: Navigation, Contacts, Socials, Telemetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-[#1A1A1A]">
          
          {/* Col 1: About & Symposium */}
          <div>
            <h4 className="font-tech text-xs text-white uppercase tracking-[0.25em] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#E10600]"></span>
              <span>ORGANIZED BY</span>
            </h4>
            <div className="text-white font-tech text-sm font-bold tracking-wider uppercase mb-1">
              VEL TECH HIGH TECH
            </div>
            <div className="text-[11px] font-tech text-[#D4AF37] font-semibold uppercase tracking-wider mb-2">
              DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
            </div>
            <p className="font-body text-xs text-gray-400 leading-relaxed mb-4">
              Dr. Rangarajan Dr. Sakunthala Engineering College. An inter-college Grand Symposium engineered to combine elite technological rigor with high-voltage cultural showcases under an authentic Formula 1 championship identity.
            </p>
            <div className="text-xs font-tech text-[#D4AF37]">
              CIRCUIT STATUS: 14 EVENTS LIVE
            </div>
          </div>

          {/* Col 2: Quick Circuit Navigation */}
          <div>
            <h4 className="font-tech text-xs text-white uppercase tracking-[0.25em] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
              <span>QUICK SECTOR JUMPS</span>
            </h4>
            <ul className="space-y-2 text-xs font-display tracking-wider">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  START GRID / HERO
                </a>
              </li>
              <li>
                <a
                  href="#events-intro"
                  onClick={(e) => handleLinkClick(e, '#events-intro')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  RACE WEEKEND CALENDAR
                </a>
              </li>
              <li>
                <a
                  href="#day1"
                  onClick={(e) => handleLinkClick(e, '#day1')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  DAY 01 — TECHNICAL GRAND PRIX
                </a>
              </li>
              <li>
                <a
                  href="#day2"
                  onClick={(e) => handleLinkClick(e, '#day2')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  DAY 02 — CULTURAL GRAND PRIX
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    playTelemetryBeep();
                    onOpenRegister(null);
                  }}
                  className="text-[#E10600] font-bold hover:underline"
                >
                  OFFICIAL REGISTRATION PORTAL
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Information Placeholders */}
          <div>
            <h4 className="font-tech text-xs text-white uppercase tracking-[0.25em] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#E10600]"></span>
              <span>PIT-WALL CONTACT</span>
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#E10600] flex-shrink-0 mt-0.5" />
                <span>
                  ZYREN Motorsport Paddock, Main Campus Circuit, Chennai, India - 600028
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:telemetry@zyren27.com" className="hover:text-white">
                  telemetry@zyren27.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#E10600] flex-shrink-0" />
                <span>+91 98765 43210 / +91 91234 56789</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Media Channels */}
          <div>
            <h4 className="font-tech text-xs text-white uppercase tracking-[0.25em] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
              <span>OFFICIAL CHANNELS</span>
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Follow telemetry updates, bracket releases, and behind-the-scenes pit-lane coverage.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="#social-instagram"
                title="Instagram"
                onClick={(e) => { e.preventDefault(); playTelemetryBeep(); }}
                className="w-9 h-9 bg-[#141414] hover:bg-[#E10600] text-gray-300 hover:text-white border border-[#2B2B2B] flex items-center justify-center transition-colors chamfer-corner-sm"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#social-youtube"
                title="YouTube"
                onClick={(e) => { e.preventDefault(); playTelemetryBeep(); }}
                className="w-9 h-9 bg-[#141414] hover:bg-[#E10600] text-gray-300 hover:text-white border border-[#2B2B2B] flex items-center justify-center transition-colors chamfer-corner-sm"
              >
                <Youtube size={16} />
              </a>
              <a
                href="#social-twitter"
                title="Twitter / X"
                onClick={(e) => { e.preventDefault(); playTelemetryBeep(); }}
                className="w-9 h-9 bg-[#141414] hover:bg-[#E10600] text-gray-300 hover:text-white border border-[#2B2B2B] flex items-center justify-center transition-colors chamfer-corner-sm"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#social-linkedin"
                title="LinkedIn"
                onClick={(e) => { e.preventDefault(); playTelemetryBeep(); }}
                className="w-9 h-9 bg-[#141414] hover:bg-[#E10600] text-gray-300 hover:text-white border border-[#2B2B2B] flex items-center justify-center transition-colors chamfer-corner-sm"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Telemetry Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-gray-500">
          <div>
            Copyright © 2027 ZYREN'27. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>MOTORSPORT EDITION 2.0</span>
            <span>•</span>
            <span className="text-gray-400">DESIGNED FOR SPEED & PRESTIGE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

