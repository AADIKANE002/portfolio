import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Terminal,
  Database,
  Server,
  GitBranch,
  FileCode,
  Download,
  Play,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Zap,
  Activity,
  Cpu,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';
import AnimatedCounter from './AnimatedCounter';

const CODE_SNIPPETS = {
  api: {
    filename: 'main_service.py',
    language: 'Python / FastAPI',
    code: `from fastapi import FastAPI, Depends, Query
from services.analytics import DatasetOptimizer

app = FastAPI(title="Aditya Backend API", version="2.4.0")

@app.get("/api/v1/analytics/query-metrics")
async def get_performance_metrics(tenant_id: str = Query(...)):
    """Optimized data pipeline with 45% reduced latency."""
    engine = DatasetOptimizer(tenant_id=tenant_id)
    report = await engine.execute_optimized_pipeline()
    return {
        "status": "success",
        "latency_ms": 24,
        "latency_cut": "45%",
        "time_saved": "40 hrs/week",
        "candidate": "Aditya Kumar",
        "roles": ["Backend", "Full-Stack", "Distributed Systems"]
    }`
  },
  sql: {
    filename: 'query_tuning.sql',
    language: 'Oracle SQL',
    code: `-- Oracle DB Performance Optimization (-45% latency)
WITH filtered_events AS (
    SELECT tenant_id, geo_code, event_timestamp, recoded_metric
    FROM enterprise_analytics_store /*+ INDEX(idx_tenant_geo_date) */
    WHERE tenant_id = :p_tenant
      AND event_timestamp >= TRUNC(SYSDATE) - 30
)
SELECT geo_code, COUNT(*), SUM(recoded_metric)
FROM filtered_events
GROUP BY geo_code;`
  },
  agent: {
    filename: 'analytics_agent.py',
    language: 'Agentic AI',
    code: `class AnalyticsAgent:
    """Multi-step reasoning backend agent with tool execution."""
    def __init__(self, memory_store, tools_registry):
        self.memory = memory_store
        self.tools = tools_registry
        
    async def reason_and_execute(self, query: str):
        context = await self.memory.retrieve(query)
        tool_call = await self.orchestrator.plan(query, context)
        return await self.tools.invoke(tool_call)`
  }
};

const HeroTerminal = ({ onOpenTerminal }) => {
  const [activeTab, setActiveTab] = useState('api');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecute = () => {
    soundFx.playBlip();
    setIsExecuting(true);
    setExecutionResult(null);

    setTimeout(() => {
      soundFx.playSuccess();
      setIsExecuting(false);
      setExecutionResult({
        status: 200,
        statusText: 'OK',
        time: '24ms',
        payload: {
          status: 'success',
          candidate: 'Aditya Kumar',
          specialization: 'Python & Django Architecture',
          enterprise_impact: 'Saved 40 hrs/wk & -45% DB latency',
          availability: 'Immediate / Open for full-time'
        }
      });
    }, 700);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative rounded-2xl border border-cyan-500/30 bg-space-950/90 overflow-hidden shadow-2xl shadow-cyan-500/10 flex flex-col h-[480px] w-full backdrop-blur-xl"
    >
      {/* Terminal Title Bar & Code Tabs */}
      <div className="bg-space-900/90 px-4 py-2.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 select-none">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1 ml-3">
            {Object.keys(CODE_SNIPPETS).map((tabKey) => {
              const isActive = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab(tabKey);
                    setExecutionResult(null);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-space-950 text-cyan-400 border border-cyan-500/30 shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <FileCode className="w-3 h-3" />
                  <span>{CODE_SNIPPETS[tabKey].filename}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            title="Copy snippet"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="flex-1 p-4 font-mono text-xs overflow-y-auto relative bg-space-950/60 leading-relaxed">
        <pre className="text-slate-300">
          <code>
            {CODE_SNIPPETS[activeTab].code.split('\n').map((line, idx) => (
              <div key={idx} className="flex gap-4 hover:bg-white/5 px-2 py-0.5 rounded transition-colors">
                <span className="text-slate-600 select-none w-5 text-right flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="flex-1 whitespace-pre-wrap">{line}</span>
              </div>
            ))}
          </code>
        </pre>

        {/* Live Execution Output Modal */}
        <AnimatePresence>
          {executionResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 p-3.5 rounded-xl bg-space-900/95 border border-emerald-500/40 shadow-xl"
            >
              <div className="flex items-center justify-between text-xs pb-2 mb-2 border-b border-white/10 font-mono">
                <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>HTTP 200 OK • Response Received</span>
                </span>
                <span className="text-slate-400">RTT: {executionResult.time}</span>
              </div>
              <pre className="text-[11px] text-cyan-200 overflow-x-auto">
                {JSON.stringify(executionResult.payload, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Interactive Sandbox Runner */}
      <div className="p-3 bg-space-900/90 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={handleExecute}
          disabled={isExecuting}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <Play className={`w-3.5 h-3.5 ${isExecuting ? 'animate-spin' : ''}`} />
          <span>{isExecuting ? 'Dispatching Request...' : 'Test Live API Endpoint'}</span>
        </button>

        <button
          onClick={() => {
            soundFx.playBlip();
            onOpenTerminal();
          }}
          className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Launch CLI (~)</span>
        </button>
      </div>
    </motion.div>
  );
};

const Hero = ({ onOpenResume, onOpenTerminal, onShowToast }) => {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Live Availability Radar Beacon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 w-fit text-xs font-mono text-emerald-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Backend & Full-Stack Roles • Bengaluru / Relocate</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Dynamic Animated Subtitle */}
              <div className="text-lg sm:text-2xl font-semibold text-cyan-300 font-mono flex items-center gap-2 min-h-[36px]">
                <span className="text-slate-400">&gt;</span>
                <TypeAnimation
                  sequence={[
                    'Software Engineer @ Genpact',
                    2000,
                    'Python & Django Specialist',
                    2000,
                    'PostgreSQL & Oracle DB Optimizer',
                    2000,
                    'LeetCode Top 6.3% (Rating 1835)',
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  className="text-cyan-400 text-glow"
                />
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl pt-2">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Key Stat Cards with CountUp */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-3.5 rounded-xl border border-white/10 bg-space-900/60 flex flex-col"
                >
                  <div className="text-xs text-slate-400">{stat.label}</div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono mt-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} duration={1.6} />
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 font-mono line-clamp-1">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0px 0px 25px rgba(6,182,212,0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  soundFx.playClick();
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
                <Download className="w-4 h-4" />
                <span>View & Download Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  soundFx.playBlip();
                  onOpenTerminal();
                }}
                className="flex items-center gap-2 px-5 py-3.5 bg-space-900/80 border border-cyan-500/40 text-cyan-300 font-semibold rounded-xl transition-all hover:border-cyan-400 hover:text-white"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Interactive CLI</span>
                <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] bg-space-950 rounded border border-cyan-500/30 text-slate-400">
                  Ctrl+K
                </kbd>
              </motion.button>

              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors px-2 py-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Core Domain Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>Scalable Python Backend & REST</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span>PostgreSQL / Oracle DB Query Tuning</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-emerald-400" />
                <span>AWS Lambda & Docker CI/CD</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Window Sandbox (5 cols) */}
          <div className="lg:col-span-5 relative perspective-1000">
            <HeroTerminal onOpenTerminal={onOpenTerminal} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
