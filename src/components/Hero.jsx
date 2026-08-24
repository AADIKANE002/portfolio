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
  Layers,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';
import AnimatedCounter from './AnimatedCounter';
import SpotlightCard from './SpotlightCard';

const CODE_SNIPPETS = {
  api: {
    filename: 'main_service.py',
    language: 'Python / FastAPI',
    code: `from fastapi import FastAPI, Depends, Query
from services.analytics import DatasetOptimizer

app = FastAPI(title="Enterprise Analytics API", version="2.4.0")

@app.get("/api/v1/analytics/query-metrics")
async def get_performance_metrics(tenant_id: str = Query(...)):
    """High-throughput pipeline with 45% reduced latency."""
    engine = DatasetOptimizer(tenant_id=tenant_id)
    report = await engine.execute_optimized_pipeline()
    return {
        "status": "success",
        "latency_ms": 24,
        "latency_cut": "45%",
        "time_saved": "40 hrs/week",
        "engineer": "Aditya Kumar",
        "stack": ["Python", "Django", "AWS Lambda", "Oracle DB"]
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
    """Autonomous multi-step reasoning agent with memory."""
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
          engineer: 'Aditya Kumar',
          specialization: 'Python Backend & Cloud Architecture',
          enterprise_impact: 'Saved 40 hrs/wk & -45% DB Latency at Genpact',
          availability: 'Open for Backend & Full-Stack Opportunities'
        }
      });
    }, 600);
  };

  return (
    <div className="relative rounded-3xl border border-white/10 bg-obsidian-900/90 overflow-hidden shadow-2xl shadow-linear-indigo/20 flex flex-col h-[490px] w-full backdrop-blur-2xl group">
      {/* Linear Rainbow Top Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-linear-indigo via-linear-cyan via-linear-crimson to-linear-violet opacity-80" />

      {/* Terminal Title Bar & Code Tabs */}
      <div className="bg-obsidian-950/90 px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-linear-crimson/80" />
            <div className="w-3 h-3 rounded-full bg-linear-amber/80" />
            <div className="w-3 h-3 rounded-full bg-linear-mint/80" />
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1">
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
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-obsidian-850 text-white border border-linear-violet/40 shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-linear-cyan' : 'text-slate-500'}`} />
                  <span>{CODE_SNIPPETS[tabKey].filename}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Copy snippet button */}
        <button
          onClick={handleCopy}
          title="Copy code snippet"
          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-linear-cyan transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-linear-mint" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="flex-1 p-4 font-mono text-xs overflow-y-auto relative bg-obsidian-950/70 leading-relaxed">
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

        {/* Interactive Response Payload */}
        <AnimatePresence>
          {executionResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 p-4 rounded-2xl bg-obsidian-900/95 border border-linear-mint/40 shadow-2xl"
            >
              <div className="flex items-center justify-between text-xs pb-2 mb-2 border-b border-white/10 font-mono">
                <span className="text-linear-mint flex items-center gap-1.5 font-bold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>HTTP 200 OK • Microservice Response</span>
                </span>
                <span className="text-slate-400 font-mono">RTT: {executionResult.time}</span>
              </div>
              <pre className="text-[11px] text-linear-cyan overflow-x-auto">
                {JSON.stringify(executionResult.payload, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Sandbox Runner Bar */}
      <div className="p-3.5 bg-obsidian-950/90 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={handleExecute}
          disabled={isExecuting}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-linear-violet to-linear-indigo hover:from-linear-violet/90 hover:to-linear-indigo/90 text-white text-xs font-mono font-bold shadow-lg shadow-linear-violet/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <Play className={`w-3.5 h-3.5 ${isExecuting ? 'animate-spin' : ''}`} />
          <span>{isExecuting ? 'Dispatching...' : 'Test Live API Endpoint'}</span>
        </button>

        <button
          onClick={() => {
            soundFx.playBlip();
            onOpenTerminal();
          }}
          className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-linear-cyan transition-colors"
        >
          <Terminal className="w-3.5 h-3.5 text-linear-cyan" />
          <span>Launch CLI (~)</span>
        </button>
      </div>
    </div>
  );
};

const Hero = ({ onOpenResume, onOpenTerminal, onShowToast }) => {
  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
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
            {/* Linear / Raycast Rainbow Perimeter Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 bg-obsidian-900/80 w-fit text-xs font-mono text-slate-200 shadow-xl backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-linear-violet/20 via-linear-cyan/20 to-linear-crimson/20 opacity-50" />
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-linear-mint opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-linear-mint" />
              </span>
              <span className="relative z-10 font-medium">
                Software Engineer @ Genpact • Scalable Python & Distributed Systems
              </span>
            </div>

            {/* High-Impact Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Architecting <br />
                <span className="bg-gradient-to-r from-linear-cyan via-linear-violet to-linear-crimson bg-clip-text text-transparent">
                  High-Throughput
                </span>{' '}
                Backends.
              </h1>

              {/* Dynamic Typewriter */}
              <div className="text-lg sm:text-2xl font-semibold text-slate-300 font-mono flex items-center gap-2 min-h-[36px]">
                <span className="text-linear-cyan font-bold">&gt;</span>
                <TypeAnimation
                  sequence={[
                    'Python & Django Enterprise Architect',
                    2000,
                    'Oracle DB & PostgreSQL Query Optimizer',
                    2000,
                    'AWS Lambda & Docker Microservices',
                    2000,
                    'Competitive Programmer (LeetCode Rating 1835)',
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  className="text-linear-cyan text-glow-cyan"
                />
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl pt-2">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Linear-Style High Density Bento Telemetry Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <SpotlightCard className="p-4 border-white/10 bg-obsidian-900/80 flex flex-col justify-between">
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">Experience</div>
                <div className="text-2xl font-extrabold text-white font-mono mt-1 bg-gradient-to-r from-linear-cyan to-linear-violet bg-clip-text text-transparent">
                  <AnimatedCounter value="2+ Years" duration={1.6} />
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">Enterprise Production</div>
              </SpotlightCard>

              <SpotlightCard className="p-4 border-white/10 bg-obsidian-900/80 flex flex-col justify-between">
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">LeetCode</div>
                <div className="text-2xl font-extrabold text-white font-mono mt-1 bg-gradient-to-r from-linear-violet to-linear-crimson bg-clip-text text-transparent">
                  <AnimatedCounter value="1835" duration={1.6} />
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">Top 6.3% Globally</div>
              </SpotlightCard>

              <SpotlightCard className="p-4 border-white/10 bg-obsidian-900/80 flex flex-col justify-between">
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">Latency Cut</div>
                <div className="text-2xl font-extrabold text-white font-mono mt-1 bg-gradient-to-r from-linear-mint to-linear-cyan bg-clip-text text-transparent">
                  <AnimatedCounter value="45%" duration={1.6} />
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">Oracle DB Tuning</div>
              </SpotlightCard>

              <SpotlightCard className="p-4 border-white/10 bg-obsidian-900/80 flex flex-col justify-between">
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">Time Saved</div>
                <div className="text-2xl font-extrabold text-white font-mono mt-1 bg-gradient-to-r from-linear-amber to-linear-violet bg-clip-text text-transparent">
                  <AnimatedCounter value="40 hrs/wk" duration={1.6} />
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">Automated Pre-QC</div>
              </SpotlightCard>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0px 0px 30px rgba(138,99,246,0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  soundFx.playClick();
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-linear-violet via-linear-indigo to-linear-cyan text-white font-bold rounded-2xl shadow-xl shadow-linear-violet/25 transition-all relative overflow-hidden group"
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
                className="flex items-center gap-2 px-5 py-3.5 bg-obsidian-900/90 border border-white/15 text-slate-200 font-semibold rounded-2xl transition-all hover:border-linear-cyan hover:text-white shadow-lg"
              >
                <Terminal className="w-4 h-4 text-linear-cyan" />
                <span>Interactive CLI</span>
                <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] bg-obsidian-950 rounded border border-white/10 text-slate-400">
                  Ctrl+K
                </kbd>
              </motion.button>

              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-linear-cyan transition-colors px-2 py-2"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Core Domain Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-6 text-xs text-slate-400 font-medium font-mono">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-linear-violet" />
                <span>Scalable Python Backend & REST</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-linear-cyan" />
                <span>PostgreSQL / Oracle DB Query Tuning</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-linear-mint" />
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
