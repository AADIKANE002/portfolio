import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { soundFx } from '../utils/sound';
import SpotlightCard from './SpotlightCard';
import BenchmarkVisualizer from './BenchmarkVisualizer';

const Experience = () => {
  const [activeExp, setActiveExp] = useState(EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Proven engineering track record in architecting cloud-native data platforms, automating critical workflows, and tuning high-throughput enterprise databases.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => {
            const isActive = activeExp === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <SpotlightCard
                  onMouseEnter={() => {
                    if (activeExp !== exp.id) {
                      soundFx.playClick();
                      setActiveExp(exp.id);
                    }
                  }}
                  className={`p-6 sm:p-8 border transition-all duration-300 relative ${
                    isActive
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10 bg-space-900/90'
                      : 'border-white/10 hover:border-white/20 bg-space-900/60'
                  }`}
                >
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-slate-300">
                        <span className="font-bold text-cyan-400 text-base">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Highlight Metrics */}
                    <div className="flex items-center gap-3 self-start sm:self-center">
                      {exp.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="px-3 py-2 rounded-xl bg-space-950/80 border border-cyan-500/20 text-center"
                        >
                          <div className="text-[11px] text-slate-400 font-mono">{metric.label}</div>
                          <div className="text-sm font-bold text-cyan-400 font-mono">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="mt-6 space-y-3.5">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 font-mono">
                      Tech Stack:
                    </span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Embedded Interactive Benchmark Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <BenchmarkVisualizer />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
