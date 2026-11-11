import React, { useState, useEffect } from 'react';
import { Menu, X, Flag, Volume2, VolumeX, ChevronRight } from 'lucide-react';
import { playTelemetryBeep, toggleSound, isSoundEnabled } from '../utils/f1Audio';

export default function Navbar({ onOpenRegister }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ['home', 'events-intro', 'day1', 'day2'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
    if (nextState) playTelemetryBeep();
  };

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'RACE WEEKEND', href: '#events-intro', id: 'events-intro' },
    { name: 'DAY 01 (TECH)', href: '#day1', id: 'day1' },
    { name: 'DAY 02 (CULT)', href: '#day2', id: 'day2' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    playTelemetryBeep();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#222222] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-3 cursor-pointer select-none"
          >
            {/* F1 styled chevron badge */}
            <div className="relative flex items-center justify-center w-10 h-10 bg-[#141414] border border-[#2B2B2B] group-hover:border-[#E10600] transition-colors chamfer-corner-sm">
              <span className="w-2.5 h-2.5 bg-[#E10600] group-hover:scale-125 transition-transform"></span>
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#D4AF37]"></span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-racing text-3xl sm:text-4xl tracking-wider text-white group-hover:text-[#E10600] transition-colors leading-none">
                  ZYREN
                </span>
                <span className="font-tech text-xl sm:text-2xl font-bold text-[#E10600] tracking-tighter leading-none">
                  '27
                </span>
              </div>
              <span className="font-tech text-[9px] tracking-[0.2em] text-[#D4AF37] uppercase font-semibold leading-tight">
                VEL TECH HIGH TECH • AI & DS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3 py-1.5 font-display text-sm uppercase tracking-wider font-semibold transition-all duration-200 group ${
                    isActive
                      ? 'text-white'
                      : 'text-[#9A9A9A] hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-[#E10600] rotate-45 inline-block animate-pulse"></span>
                    )}
                    {link.name}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E10600] to-transparent"></span>
                  )}
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"></span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Mute Telemetry Audio' : 'Unmute Telemetry Audio'}
              className="p-2 text-[#888888] hover:text-[#D4AF37] border border-[#222] hover:border-[#D4AF37]/40 bg-[#121212] transition-colors rounded-sm"
              aria-label="Toggle Sound"
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Register CTA Button */}
            <button
              onClick={() => {
                playTelemetryBeep();
                onOpenRegister(null);
              }}
              className="relative group px-5 py-2 font-display text-xs lg:text-sm font-bold uppercase tracking-widest text-white bg-[#E10600] hover:bg-[#FF1801] transition-all duration-200 shadow-[0_4px_15px_rgba(225,6,0,0.35)] hover:shadow-[0_4px_25px_rgba(225,6,0,0.6)] chamfer-corner-sm flex items-center gap-2"
            >
              <span className="relative z-10">REGISTER NOW</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              {/* Subtle gold corner spark */}
              <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#D4AF37]"></span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className="p-2 text-[#888888] hover:text-[#D4AF37] border border-[#222] bg-[#121212]"
              aria-label="Toggle Audio"
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              onClick={() => {
                playTelemetryBeep();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-white bg-[#141414] border border-[#2B2B2B] hover:border-[#E10600] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} className="text-[#E10600]" /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0A0A] border-b border-[#2A2A2A] shadow-2xl px-5 pt-4 pb-6 mt-2">
          <div className="flex flex-col space-y-2">
            <div className="text-[10px] font-tech text-[#D4AF37] tracking-widest mb-1 font-bold">
              CIRCUIT NAVIGATION
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between py-2.5 px-3 text-sm font-display font-semibold tracking-wider text-gray-200 hover:text-white hover:bg-[#161616] border-l-2 border-transparent hover:border-[#E10600] transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight size={14} className="text-[#888888]" />
              </a>
            ))}

            <div className="pt-3 border-t border-[#1C1C1C]">
              <button
                onClick={() => {
                  playTelemetryBeep();
                  setMobileMenuOpen(false);
                  onOpenRegister(null);
                }}
                className="w-full py-3 bg-[#E10600] text-white font-display text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 chamfer-corner-sm shadow-[0_4px_15px_rgba(225,6,0,0.4)]"
              >
                <Flag size={16} />
                <span>REGISTER NOW</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

