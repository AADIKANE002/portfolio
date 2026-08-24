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
  Command,
  Zap
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    { id: 'space', label: 'Linear Ultraviolet', color: 'bg-linear-violet' },
    { id: 'cyberpunk', label: 'Raycast Crimson', color: 'bg-linear-crimson' },
    { id: 'emerald', label: 'Emerald Matrix', color: 'bg-linear-mint' },
    { id: 'slate', label: 'Stripe Prism', color: 'bg-linear-cyan' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-obsidian-950/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50'
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
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-linear-violet via-linear-indigo to-linear-cyan flex items-center justify-center text-white font-extrabold shadow-lg shadow-linear-violet/30 group-hover:scale-105 transition-transform">
            AK
          </div>
          <span className="font-mono text-sm sm:text-base">
            <span className="text-linear-cyan">&lt;</span>
            Aditya
            <span className="text-linear-violet">.dev /&gt;</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-obsidian-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.id)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors ${
                  isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-linear-violet/20 border border-linear-violet/40 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Raycast-style Command Palette Trigger */}
          <button
            onClick={() => {
              soundFx.playBlip();
              onOpenCommandPalette();
            }}
            title="Search & Quick Actions (Ctrl+K)"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-xl bg-obsidian-900/90 border border-white/10 text-slate-300 hover:text-linear-cyan hover:border-linear-violet/40 transition-all shadow-sm group"
          >
            <Search className="w-3.5 h-3.5 text-linear-violet group-hover:scale-110 transition-transform" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-obsidian-950 rounded border border-white/10 text-slate-400">
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
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-xl bg-obsidian-900/90 border border-linear-cyan/30 text-linear-cyan hover:bg-linear-cyan/10 hover:border-linear-cyan transition-all shadow-sm"
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>CLI</span>
            <kbd className="hidden xl:inline px-1 py-0.5 text-[10px] bg-obsidian-950 rounded border border-linear-cyan/20 text-slate-400">
              ~
            </kbd>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            title={soundEnabled ? 'Disable Audio FX' : 'Enable Audio FX'}
            className={`p-2 rounded-xl border transition-all ${
              soundEnabled
                ? 'bg-linear-violet/20 border-linear-violet/40 text-linear-violet shadow-sm'
                : 'bg-obsidian-900/90 border-white/10 text-slate-400 hover:text-slate-200'
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
              className="p-2 rounded-xl bg-obsidian-900/90 border border-white/10 text-slate-400 hover:text-slate-200 transition-all"
            >
              <Palette className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {themeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 5 }}
                  className="absolute right-0 mt-2 w-44 py-2 bg-obsidian-900/95 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-2xl z-50"
                >
                  <div className="px-3 py-1 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Select Design Theme
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
                        currentTheme === t.id ? 'text-linear-cyan font-bold bg-linear-violet/10' : 'text-slate-300'
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
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-linear-violet via-linear-indigo to-linear-cyan hover:from-linear-violet/90 hover:to-linear-cyan/90 text-white shadow-lg shadow-linear-violet/25 transition-all hover:scale-105 active:scale-95"
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
            className="p-2 rounded-xl bg-obsidian-900 border border-white/10 text-linear-cyan"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-xl bg-obsidian-900 border border-white/10 text-slate-300"
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
            className="md:hidden px-4 pt-3 pb-6 bg-obsidian-950/95 border-b border-white/10 backdrop-blur-2xl transition-all"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className={`px-4 py-2.5 text-base font-medium rounded-xl transition-all ${
                    activeSection === link.id
                      ? 'bg-linear-violet/15 text-linear-cyan font-bold border border-linear-violet/30'
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
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-xl bg-gradient-to-r from-linear-violet to-linear-cyan text-white shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume PDF</span>
                </button>

                <button
                  onClick={handleSoundToggle}
                  className="p-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-slate-300"
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
