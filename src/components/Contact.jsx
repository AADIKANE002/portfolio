import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';
import SpotlightCard from './SpotlightCard';

const Contact = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (type, text) => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(text);

    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onShowToast(`Copied email: ${text}`);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      onShowToast(`Copied phone: ${text}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playSuccess();
    setIsSubmitting(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      onShowToast('Opening your email client to send message!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Whether you have a backend engineering role, a distributed systems challenge, an AI agent project, or just want to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Contacts & Social Cards (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <SpotlightCard className="p-5 border border-white/10 flex items-center justify-between group hover:border-cyan-500/40">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider font-mono">
                    Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy('email', PERSONAL_INFO.email)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-all flex-shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </SpotlightCard>

            {/* Phone Card */}
            <SpotlightCard className="p-5 border border-white/10 flex items-center justify-between group hover:border-cyan-500/40">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider font-mono">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy('phone', PERSONAL_INFO.phone)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-all flex-shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </SpotlightCard>

            {/* Location Card */}
            <SpotlightCard className="p-5 border border-white/10 flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider font-mono">
                  Location
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </SpotlightCard>

            {/* Social Hub */}
            <SpotlightCard className="p-5 border border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3 font-mono">
                Professional Networks
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold transition-all hover:scale-105"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Interactive Message Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-6 sm:p-8 border border-white/10 bg-space-900/85">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 focus:border-cyan-500 text-white placeholder:text-slate-600 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 focus:border-cyan-500 text-white placeholder:text-slate-600 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Collaboration / Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 focus:border-cyan-500 text-white placeholder:text-slate-600 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Aditya, I came across your portfolio and would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 focus:border-cyan-500 text-white placeholder:text-slate-600 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-black font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Dispatching Message...' : 'Send Direct Message'}</span>
                </button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
