import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Terminal, Code2, Activity } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const Footer = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-space-950/90 py-12 overflow-hidden backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Status */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-blue-600 flex items-center justify-center text-black font-extrabold text-sm shadow-md shadow-cyan-500/20">
            AK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-white text-sm sm:text-base">
                Aditya Kumar
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Software / Backend Full-Stack Engineer • Genpact
            </p>
          </div>
        </div>

        {/* Social Icons & Quick Links */}
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors border border-white/5 hover:border-cyan-500/30"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-400 transition-colors border border-white/5 hover:border-blue-500/30"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors border border-white/5 hover:border-cyan-500/30"
            title="Email Direct"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={() => {
              soundFx.playBlip();
              onOpenTerminal?.();
            }}
            className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/15 text-slate-400 hover:text-cyan-300 transition-colors border border-white/5 hover:border-cyan-500/30"
            title="Open CLI (~)"
          >
            <Terminal className="w-4 h-4" />
          </button>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-xl bg-space-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105 shadow-sm"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="mt-8 text-center text-xs text-slate-500 font-mono flex items-center justify-center gap-1">
        <span>Designed & Architected by Aditya Kumar • {new Date().getFullYear()} • React, Framer Motion & Tailwind</span>
      </div>
    </footer>
  );
};

export default Footer;
