import React from 'react';
import {
  Trophy,
  Award,
  Users,
  Zap,
  GraduationCap,
  Sparkles,
  ExternalLink,
  BookOpen,
  MapPin,
  Calendar
} from 'lucide-react';
import { ACHIEVEMENTS, EDUCATION } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const Achievements = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Achievements & <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Competitive programming rankings, leadership initiatives, and academic credentials.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <span className="px-3 py-1 text-xs font-semibold font-mono rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {item.badge}
                </span>
              </div>

              <div className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-1">
                {item.title}
              </div>
              <div className="text-sm font-semibold text-amber-400 mb-3">
                {item.subtitle}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Verified Milestone</span>
                <span className="text-sm font-bold text-white bg-white/5 px-2.5 py-1 rounded-md border border-white/10 font-mono">
                  {item.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Education Card */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 bg-gradient-to-r from-space-900/90 to-space-950/90">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {EDUCATION.institution}
                  </h3>
                  <p className="text-base text-cyan-300 font-medium">
                    {EDUCATION.degree} in {EDUCATION.field}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {EDUCATION.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {EDUCATION.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-space-950 border border-cyan-500/30 text-center self-start md:self-center">
                <div className="text-xs text-slate-400 font-mono">Cumulative GPA</div>
                <div className="text-2xl font-extrabold text-cyan-400 font-mono">{EDUCATION.gpa}</div>
              </div>
            </div>

            {/* Education Highlights */}
            <div className="mt-6 space-y-2.5">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5 mb-3">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                Key Academic Activities & Coursework
              </h4>
              {EDUCATION.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
