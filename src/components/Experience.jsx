import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, MapPin, Calendar, Terminal, Star, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import BenchmarkVisualizer from './BenchmarkVisualizer';

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 15 : -15, z: -100 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0, z: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      className={`relative flex items-center justify-between md:justify-normal w-full group ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
    >
      {/* Center Line Node */}
      <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-4 border-obsidian-950 bg-linear-violet shadow-[0_0_20px_rgba(138,99,246,0.6)] z-20 -translate-x-1/2 flex items-center justify-center transition-transform group-hover:scale-125">
        <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
      </div>

      {/* Empty space for alternating layout on desktop */}
      <div className="hidden md:block w-5/12" />

      {/* Content Card */}
      <div className="w-full md:w-5/12 pl-24 md:pl-0 z-10" style={{ transform: 'translateZ(30px)' }}>
        <motion.div whileHover={{ scale: 1.03, rotateX: 5, rotateY: index % 2 === 0 ? -5 : 5, z: 50 }} style={{ transformStyle: 'preserve-3d' }}>
          <SpotlightCard className="p-6 sm:p-8 bg-obsidian-900/90 border-white/10 hover:border-linear-violet/40 rounded-3xl shadow-2xl backdrop-blur-xl group-hover:shadow-linear-violet/20 transition-all">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div style={{ transform: 'translateZ(20px)' }}>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-linear-cyan transition-colors">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 text-linear-violet">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidian-950 border border-white/10 text-xs font-mono text-slate-300 shadow-inner" style={{ transform: 'translateZ(20px)' }}>
                <Calendar className="w-3.5 h-3.5 text-linear-mint" />
                {exp.period}
              </div>
            </div>

            {/* Accomplishments */}
            <ul className="space-y-3 mb-6" style={{ transform: 'translateZ(25px)' }}>
              {exp.highlights && exp.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <ArrowRight className="w-4 h-4 mt-1 text-linear-cyan flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10" style={{ transform: 'translateZ(30px)' }}>
              {exp.skills && exp.skills.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-obsidian-950 border border-white/5 text-slate-400 group-hover:border-linear-cyan/30 group-hover:text-linear-cyan transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linear-cyan/10 border border-linear-cyan/30 text-linear-cyan text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-linear-cyan via-linear-violet to-linear-crimson bg-clip-text text-transparent">Experience</span>
          </h2>
        </motion.div>

        {/* Live Interactive Benchmark Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{ perspective: 1200 }}
        >
          <BenchmarkVisualizer />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative mt-20" style={{ perspective: 1500 }}>
          {/* Glowing Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-linear-cyan via-linear-violet to-transparent -translate-x-1/2 opacity-30 shadow-[0_0_15px_rgba(94,106,210,0.5)]" />
          
          <div className="space-y-12 md:space-y-24">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
