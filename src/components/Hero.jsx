import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  Code2,
  Cpu,
  Sparkles,
  Award,
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const Hero = ({ onOpenResume, onOpenTerminal, onShowToast }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = PERSONAL_INFO.subtitles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(40);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(90);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  const copyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
  };

  return (
    <section id="about" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 live-badge-dot" />
              <span>Available for Backend & Full-Stack Roles</span>
              <span className="text-cyan-500/60">|</span>
              <span className="text-slate-300">Bengaluru, India</span>
            </div>

            {/* Name Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent text-glow-cyan">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Typing Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <p className="font-mono text-lg sm:text-2xl text-slate-300 font-semibold flex items-center">
                <span className="text-cyan-400 mr-2">&gt;</span>
                <span>{displayedText}</span>
                <span className="inline-block w-2.5 h-5 sm:h-6 bg-cyan-400 ml-1.5 animate-pulse" />
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Backend Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-space-900/90 hover:bg-space-800 border border-white/15 text-slate-200 hover:text-white text-sm sm:text-base font-semibold backdrop-blur-md transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </button>

              <button
                onClick={() => {
                  soundFx.playBlip();
                  onOpenTerminal();
                }}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-space-900/60 hover:bg-space-800/80 border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 text-sm font-mono transition-all"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-4 h-4" />
                <span>CLI Mode</span>
              </button>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-2.5 rounded-lg bg-space-900/80 border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110 shadow-sm"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-2.5 rounded-lg bg-space-900/80 border border-white/10 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-all hover:scale-110 shadow-sm"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                onClick={copyEmail}
                className="p-2.5 rounded-lg bg-space-900/80 border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110 shadow-sm"
                title="Copy Email Address"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Code Window / Terminal Card (Right 5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl glass-panel p-5 sm:p-6 shadow-2xl border border-white/15 overflow-hidden group">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>backend_service.py</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Django & AWS Lambda
                </span>
              </div>

              {/* Code Snippet */}
              <pre className="text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed space-y-1">
                <code>
                  <span className="text-purple-400">class</span> <span className="text-cyan-300">BackendService</span>:<br/>
                  &nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-amber-300">self</span>):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">self</span>.framework = <span className="text-emerald-300">"Django / REST APIs"</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">self</span>.db = <span className="text-emerald-300">"PostgreSQL + Oracle DB"</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">self</span>.infra = [<span className="text-emerald-300">"AWS Lambda"</span>, <span className="text-emerald-300">"Docker"</span>, <span className="text-emerald-300">"CI/CD"</span>]<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">self</span>.leetcode = <span className="text-amber-400">1835</span> <span className="text-slate-400"># Top 6.3%</span><br/><br/>
                  &nbsp;&nbsp;<span className="text-purple-400">async def</span> <span className="text-blue-400">optimize_throughput</span>(<span className="text-amber-300">self</span>):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">"qc_time_saved"</span>: <span className="text-emerald-300">"40 hrs/wk"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">"db_latency_cut"</span>: <span className="text-emerald-300">"45%"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">"delivery"</span>: <span className="text-emerald-300">"Full-Stack MVC"</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                </code>
              </pre>

              {/* Interactive Test Run Action inside snippet */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Status: 200 OK • Production Ready</span>
                </div>
                <button
                  onClick={() => {
                    soundFx.playBlip();
                    onOpenTerminal();
                  }}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 underline underline-offset-4"
                >
                  Run in CLI &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Impact Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-xl p-5 border border-white/10 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                {idx === 0 && <Cpu className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />}
                {idx === 1 && <Award className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />}
                {idx === 2 && <Zap className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />}
                {idx === 3 && <Sparkles className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <p className="text-xs text-slate-400 mt-1">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
