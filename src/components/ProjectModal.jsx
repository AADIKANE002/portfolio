import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, Layers, Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { soundFx } from '../utils/sound';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-space-950/80 backdrop-blur-xl animate-in fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel bg-space-900/95 border border-cyan-500/30 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-slate-400 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 text-xs font-semibold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Innovation
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base text-cyan-300/90 font-medium mb-6">
          {project.tagline}
        </p>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden mb-6 border border-white/10 h-52 sm:h-64">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent" />
        </div>

        {/* Deep Dive Description */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-cyan-400" />
            Project Overview & Architecture
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
            {project.description}
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-purple-400" />
            Key Technical Implementations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-space-950 border border-cyan-500/30 text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="ml-auto px-5 py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
