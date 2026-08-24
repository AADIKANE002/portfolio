import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal as TerminalIcon,
  Volume2,
  VolumeX,
  Palette,
  Menu,
  X,
  FileText,
  Search,
  Sparkles,
  Command
} from 'lucide-react';
import { soundFx } from '../utils/sound';
import { PERSONAL_INFO } from '../data/portfolioData';

const Navbar = ({
  currentTheme,
  setTheme,
  soundEnabled,
  setSoundEnabled,
  onOpenTerminal,
  onOpenResume,
  onOpenCommandPalette
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Scroll listener for blur & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = soundFx.toggleSound(!soundEnabled);
    setSoundEnabled(newState);
  };

  const handleNavClick = (href, id) => {
    soundFx.playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const themes = [
    { id: 'space', label: 'Dark Space', color: 'bg-cyan-500' },
    { id: 'cyberpunk', label: 'Cyberpunk', color: 'bg-pink-500' },
    { id: 'emerald', label: 'Emerald Matrix', color: 'bg-emerald-500' },
    { id: 'slate', label: 'Deep Slate', color: 'bg-sky-400' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-space-950/85 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#about"
          onClick={() => soundFx.playClick()}
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-blue-600 flex items-center justify-center text-black font-extrabold shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            AK
          </div>
          <span className="font-mono text-sm sm:text-base">
            <span className="text-cyan-400">&lt;</span>
            Aditya
            <span className="text-cyan-400">.dev /&gt;</span>
          </span>
        </a>

        {/* Desktop Navigation Links with animated active pill */}
        <nav className="hidden md:flex items-center gap-1 bg-space-900/70 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.id)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-500/40"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Command Palette, Terminal, Sound, Theme, Resume) */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Quick Search / Command Palette (Ctrl+K) */}
          <button
            onClick={() => {
              soundFx.playBlip();
              onOpenCommandPalette();
            }}
            title="Search & Quick Actions (Ctrl+K)"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-lg bg-space-900/80 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all shadow-sm group"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-space-950 rounded border border-white/10 text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              soundFx.playBlip();
              onOpenTerminal();
            }}
            title="Open Interactive CLI Terminal (~)"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-space-900/80 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-sm"
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>CLI</span>
            <kbd className="hidden xl:inline px-1 py-0.5 text-[10px] bg-space-950 rounded border border-cyan-500/20 text-slate-400">
              ~
            </kbd>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            title={soundEnabled ? 'Disable Audio FX' : 'Enable Audio FX'}
            className={`p-2 rounded-lg border transition-all ${
              soundEnabled
                ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400 shadow-sm'
                : 'bg-space-900/80 border-white/10 text-slate-400 hover:text-slate-200'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Switcher */}
          <div className="relative">
            <button
              onClick={() => {
                soundFx.playClick();
                setThemeDropdownOpen(!themeDropdownOpen);
              }}
              title="Change Visual Theme"
              className="p-2 rounded-lg bg-space-900/80 border border-white/10 text-slate-400 hover:text-slate-200 transition-all"
            >
              <Palette className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {themeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 5 }}
                  className="absolute right-0 mt-2 w-40 py-2 bg-space-900/95 border border-white/15 rounded-xl shadow-2xl backdrop-blur-xl z-50"
                >
                  <div className="px-3 py-1 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Select Theme
                  </div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        soundFx.playClick();
                        setTheme(t.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-1.5 flex items-center gap-2.5 text-xs text-left hover:bg-white/5 transition-colors ${
                        currentTheme === t.id ? 'text-cyan-400 font-semibold bg-cyan-500/10' : 'text-slate-300'
                      }`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${t.color}`} />
                      <span>{t.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resume CTA Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              soundFx.playBlip();
              onOpenCommandPalette();
            }}
            className="p-2 rounded-lg bg-space-900 border border-white/10 text-cyan-400"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playBlip();
              onOpenTerminal();
            }}
            className="p-2 rounded-lg bg-space-900 border border-cyan-500/30 text-cyan-400"
            title="Open CLI"
          >
            <TerminalIcon className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg bg-space-900 border border-white/10 text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pt-3 pb-6 bg-space-950/95 border-b border-white/10 backdrop-blur-2xl transition-all"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className={`px-4 py-2.5 text-base font-medium rounded-lg transition-all ${
                    activeSection === link.id
                      ? 'bg-cyan-500/15 text-cyan-400 font-bold border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onOpenResume();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume PDF</span>
                </button>

                <button
                  onClick={handleSoundToggle}
                  className="p-2.5 rounded-lg bg-space-900 border border-white/10 text-slate-300"
                >
                  {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
