import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const ResumeSection = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('preview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-space-950/80 backdrop-blur-xl animate-in fade-in">
      <div
        className="relative w-full max-w-4xl h-[90vh] rounded-2xl glass-panel bg-space-900/95 border border-cyan-500/30 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-space-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Aditya Kumar — Resume
              </h3>
              <p className="text-xs text-cyan-300">
                Software Development Engineer • Genpact
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct Download Button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Aditya_Kumar_Resume.pdf"
              onClick={() => soundFx.playSuccess()}
              className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Viewer Frame */}
        <div className="flex-1 bg-space-950 p-2 sm:p-4 overflow-hidden flex flex-col">
          <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 bg-slate-900 relative flex flex-col">
            <iframe
              src={`${PERSONAL_INFO.resumeUrl}#toolbar=0&navpanes=0`}
              title="Aditya Kumar Resume"
              className="w-full flex-1 border-none"
            />
            {/* Fallback download banner if iframe blocked */}
            <div className="p-3 bg-space-900 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Viewing: <strong className="text-slate-200">Aditya_Kumar.pdf</strong></span>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>Open in Full Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
