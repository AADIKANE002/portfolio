import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Terminal,
  FileText,
  Copy,
  Check,
  Palette,
  Volume2,
  VolumeX,
  ExternalLink,
  Code2,
  Briefcase,
  FolderGit2,
  Brain,
  Trophy,
  Mail,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const CommandPalette = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenResume,
  currentTheme,
  setTheme,
  soundEnabled,
  setSoundEnabled,
  onShowToast
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'sec-about',
      title: 'Go to About / Bio',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-experience',
      title: 'Go to Experience & Milestones',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-projects',
      title: 'Go to Featured Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-skills',
      title: 'Go to Skills & Tech Stack',
      category: 'Navigation',
      icon: Brain,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-achievements',
      title: 'Go to Achievements & Certifications',
      category: 'Navigation',
      icon: Trophy,
      action: () => {
        document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-contact',
      title: 'Go to Contact Form',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'act-resume',
      title: 'View & Download Resume PDF',
      category: 'Actions',
      icon: FileText,
      badge: 'PDF',
      action: () => {
        onOpenResume();
        onClose();
      }
    },
    {
      id: 'act-terminal',
      title: 'Open Interactive CLI Terminal',
      category: 'Actions',
      icon: Terminal,
      badge: '~ CLI',
      action: () => {
        onOpenTerminal();
        onClose();
      }
    },
    {
      id: 'act-email',
      title: `Copy Email: ${PERSONAL_INFO.email}`,
      category: 'Actions',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        soundFx.playSuccess();
        onShowToast?.(`Copied email: ${PERSONAL_INFO.email}`);
        onClose();
      }
    },
    {
      id: 'act-phone',
      title: `Copy Phone: ${PERSONAL_INFO.phone}`,
      category: 'Actions',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.phone);
        soundFx.playSuccess();
        onShowToast?.(`Copied phone: ${PERSONAL_INFO.phone}`);
        onClose();
      }
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile',
      category: 'Socials',
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank');
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Socials',
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank');
        onClose();
      }
    },
    {
      id: 'theme-space',
      title: 'Theme: Dark Space',
      category: 'Themes',
      icon: Palette,
      badge: 'Default',
      action: () => {
        setTheme('space');
        onClose();
      }
    },
    {
      id: 'theme-cyberpunk',
      title: 'Theme: Cyberpunk Neon',
      category: 'Themes',
      icon: Palette,
      badge: 'Neon',
      action: () => {
        setTheme('cyberpunk');
        onClose();
      }
    },
    {
      id: 'theme-emerald',
      title: 'Theme: Emerald Matrix',
      category: 'Themes',
      icon: Palette,
      badge: 'Matrix',
      action: () => {
        setTheme('emerald');
        onClose();
      }
    },
    {
      id: 'theme-slate',
      title: 'Theme: Deep Slate',
      category: 'Themes',
      icon: Palette,
      badge: 'Slate',
      action: () => {
        setTheme('slate');
        onClose();
      }
    },
    {
      id: 'act-sound',
      title: soundEnabled ? 'Disable Audio FX' : 'Enable Audio FX',
      category: 'Preferences',
      icon: soundEnabled ? VolumeX : Volume2,
      action: () => {
        const next = soundFx.toggleSound(!soundEnabled);
        setSoundEnabled(next);
        onClose();
      }
    }
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        soundFx.playClick();
        filtered[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-space-950/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl glass-panel bg-space-900/95 border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-space-950/80">
          <Search className="w-5 h-5 text-cyan-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or jump to section (e.g. projects, resume, theme)..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none border-none font-sans"
          />
          <kbd className="hidden sm:inline px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Action Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => {
                    soundFx.playClick();
                    item.action();
                  }}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-cyan-500/15 border border-cyan-500/40 text-white'
                      : 'border border-transparent text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${
                        isSelected
                          ? 'bg-cyan-500 text-black'
                          : 'bg-white/5 text-cyan-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium">{item.title}</div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-cyan-300">
                        {item.badge}
                      </span>
                    )}
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 bg-space-950/90 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
          <div className="flex items-center gap-1 text-cyan-400">
            <Sparkles className="w-3 h-3" />
            <span>Aditya Kumar Command Palette</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
