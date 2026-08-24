import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Zap, Clock, ShieldCheck, Play, CheckCircle2, ArrowRight, Activity, Cpu } from 'lucide-react';
import { soundFx } from '../utils/sound';
import AnimatedCounter from './AnimatedCounter';
import SpotlightCard from './SpotlightCard';

const BenchmarkVisualizer = () => {
  const [selectedMode, setSelectedMode] = useState('optimized'); // 'legacy' | 'optimized'
  const [isRunning, setIsRunning] = useState(false);
  const [lastRunTime, setLastRunTime] = useState(null);

  const runSimulation = () => {
    soundFx.playBlip();
    setIsRunning(true);
    const simulatedLatency = selectedMode === 'optimized' ? 247 : 450;

    setTimeout(() => {
      soundFx.playSuccess();
      setIsRunning(false);
      setLastRunTime(simulatedLatency);
    }, 600);
  };

  return (
    <div className="my-14 rounded-3xl p-6 sm:p-8 border border-white/10 bg-obsidian-900/90 relative overflow-hidden shadow-2xl backdrop-blur-2xl">
      {/* Radiant Gradient Background Highlights */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-linear-violet/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-linear-cyan/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-linear-violet/15 border border-linear-violet/30 text-linear-violet text-xs font-mono font-semibold mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Engineering Impact Simulator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Oracle DB & Pipeline <span className="bg-gradient-to-r from-linear-cyan via-linear-violet to-linear-crimson bg-clip-text text-transparent">Optimization Benchmark</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Live interactive telemetry simulation of query tuning and pipeline automation engineered at Genpact.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center p-1 bg-obsidian-950/90 rounded-2xl border border-white/10 self-start md:self-center shadow-inner">
          <button
            onClick={() => {
              soundFx.playClick();
              setSelectedMode('legacy');
              setLastRunTime(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
              selectedMode === 'legacy'
                ? 'bg-linear-crimson/20 text-linear-crimson border border-linear-crimson/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Legacy Unoptimized
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setSelectedMode('optimized');
              setLastRunTime(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
              selectedMode === 'optimized'
                ? 'bg-gradient-to-r from-linear-violet to-linear-cyan text-white font-bold shadow-lg shadow-linear-violet/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ✨ Optimized (-45%)
          </button>
        </div>
      </div>

      {/* Grid Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 relative z-10">
        {/* Left: Interactive Stats & Execution Visualizer (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Latency Comparison Card */}
          <div className="p-5 rounded-2xl bg-obsidian-950/80 border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Query Execution Latency</span>
              <span className={selectedMode === 'optimized' ? 'text-linear-mint font-bold' : 'text-linear-crimson font-bold'}>
                {selectedMode === 'optimized' ? '247ms (Fast)' : '450ms (Slow)'}
              </span>
            </div>

            {/* Visual Comparative Latency Bar */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-3">
                <span className="w-20 text-[11px] font-mono text-slate-400">Optimized</span>
                <div className="flex-1 h-3.5 bg-obsidian-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    animate={{ width: '55%' }}
                    className="h-full bg-gradient-to-r from-linear-cyan to-linear-mint rounded-full shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                  />
                </div>
                <span className="text-xs font-mono font-bold text-linear-mint w-14 text-right">247 ms</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-20 text-[11px] font-mono text-slate-400">Legacy</span>
                <div className="flex-1 h-3.5 bg-obsidian-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    animate={{ width: '100%' }}
                    className="h-full bg-linear-crimson/70 rounded-full"
                  />
                </div>
                <span className="text-xs font-mono text-slate-400 w-14 text-right">450 ms</span>
              </div>
            </div>

            {/* Run Live Benchmark Button */}
            <div className="pt-2 flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-violet/15 hover:bg-linear-violet/25 text-linear-violet border border-linear-violet/30 text-xs font-mono font-semibold transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Benchmarking Query...' : 'Run Live Benchmark Query'}</span>
              </button>

              {lastRunTime && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-xs font-mono text-linear-mint bg-linear-mint/10 px-2.5 py-1 rounded-lg border border-linear-mint/30 font-semibold"
                >
                  ⚡ Ping: {lastRunTime}ms (HTTP 200)
                </motion.span>
              )}
            </div>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-obsidian-950/70 border border-white/10 text-center">
              <div className="text-[11px] font-mono text-slate-400">Latency Reduction</div>
              <div className="text-xl font-bold text-linear-cyan font-mono mt-1">
                <AnimatedCounter value="45%" duration={1.5} />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-obsidian-950/70 border border-white/10 text-center">
              <div className="text-[11px] font-mono text-slate-400">Weekly Saved</div>
              <div className="text-xl font-bold text-linear-violet font-mono mt-1">
                <AnimatedCounter value="40 hrs" duration={1.5} />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-obsidian-950/70 border border-white/10 text-center col-span-2 sm:col-span-1">
              <div className="text-[11px] font-mono text-slate-400">Targeting Boost</div>
              <div className="text-xl font-bold text-linear-mint font-mono mt-1">
                <AnimatedCounter value="+20%" duration={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Execution Strategy (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-obsidian-950/80 border border-white/10 flex flex-col justify-between font-mono text-xs">
          <div>
            <div className="flex items-center gap-2 text-slate-300 font-semibold mb-3">
              <Database className="w-4 h-4 text-linear-cyan" />
              <span>{selectedMode === 'optimized' ? 'Execution Plan: Composite Index & CTE' : 'Execution Plan: Full Table Scan'}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-obsidian-900 border border-white/5 space-y-2 text-slate-400">
              {selectedMode === 'optimized' ? (
                <>
                  <div className="text-linear-mint font-semibold">✓ Bitmap Index Range Scan</div>
                  <div>• Index: <span className="text-linear-cyan">idx_tenant_geo_date_recoded</span></div>
                  <div>• Filter Cost: <span className="text-linear-mint">42 (was 890)</span></div>
                  <div>• Automated Pre-QC: <span className="text-linear-cyan">Python ETL validation</span></div>
                </>
              ) : (
                <>
                  <div className="text-linear-crimson font-semibold">⚠ Full Table Scan (1.8M Rows)</div>
                  <div>• Index: <span className="text-slate-500">None (Sequential scan)</span></div>
                  <div>• Filter Cost: <span className="text-linear-crimson">890 (High I/O bottleneck)</span></div>
                  <div>• Validation: <span className="text-linear-crimson">40 hrs manual spreadsheet QC</span></div>
                </>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-linear-cyan flex-shrink-0" />
            <span>Deployed across enterprise client reporting pipelines at Genpact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkVisualizer;
