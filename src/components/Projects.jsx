import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Search,
  Layers,
  Code2,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import { soundFx } from '../utils/sound';
import SpotlightCard from './SpotlightCard';

const Projects = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full Stack', 'Backend & AI', 'Full Stack & Mobile', 'IoT & Systems'];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            High-performance web backends, autonomous AI agent workflows, and IoT edge hardware systems.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="w-full max-w-2xl mt-8 space-y-4">
            {/* Live Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by tech (e.g. Django, Python, AWS, Firebase, Edge)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-space-900/80 border border-white/10 text-white placeholder:text-slate-500 text-xs sm:text-sm outline-none focus:border-cyan-500 transition-colors backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-space-900/70 border border-white/10 backdrop-blur-md">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveCategory(cat);
                    }}
                    className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      isSelected ? 'text-black font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="projectFilterPill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <SpotlightCard className="h-full flex flex-col group border-white/10 hover:border-cyan-500/40">
                  {/* Image & Header Overlay */}
                  <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/60 to-transparent" />

                    {/* Badges on image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-space-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Quick GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        soundFx.playClick();
                      }}
                      className="absolute top-4 right-4 p-2.5 rounded-xl bg-space-900/90 hover:bg-space-800 text-slate-300 hover:text-cyan-400 border border-white/15 backdrop-blur-md transition-all hover:scale-110"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-200/90 line-clamp-1 mt-0.5 font-medium">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div>
                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 text-xs font-mono rounded bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <button
                          onClick={() => {
                            soundFx.playClick();
                            onSelectProject(project);
                          }}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                        >
                          <span>Architecture & Deep Dive</span>
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => soundFx.playClick()}
                          className="text-xs text-slate-400 hover:text-cyan-300 font-mono flex items-center gap-1.5"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
