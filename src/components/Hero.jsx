import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Server, GitBranch, FileCode, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const TerminalWindow = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="rounded-xl border border-ide-border bg-ide-bg overflow-hidden shadow-2xl flex flex-col h-[420px] w-full"
    >
      {/* Window Header */}
      <div className="bg-ide-surface px-4 py-3 border-b border-ide-border flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-ide-muted font-mono">
          <FileCode className="w-4 h-4 text-ide-primary"/> src/main.py
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-ide-danger/80"></div>
          <div className="w-3 h-3 rounded-full bg-ide-warning/80"></div>
          <div className="w-3 h-3 rounded-full bg-ide-success/80"></div>
        </div>
      </div>
      
      {/* Code Editor Content */}
      <div className="p-6 text-sm text-ide-text overflow-auto flex-1 font-mono leading-loose relative">
        {/* Line numbers */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-ide-surface/30 border-r border-ide-border flex flex-col items-end py-6 pr-3 text-ide-muted/50 select-none">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(n => <span key={n}>{n}</span>)}
        </div>
        
        {/* Code */}
        <div className="pl-10">
          <pre><code>
<span className="text-ide-keyword">from</span> fastapi <span className="text-ide-keyword">import</span> FastAPI<br/>
<span className="text-ide-keyword">import</span> uvicorn<br/><br/>
<span className="text-ide-text">app</span> = FastAPI(title=<span className="text-ide-string">"Aditya API"</span>)<br/><br/>
<span className="text-ide-function">@app.get</span>(<span className="text-ide-string">"/"</span>)<br/>
<span className="text-ide-keyword">async def</span> <span className="text-ide-function">root</span>():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ide-keyword">return</span> {'{'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ide-string">"status"</span>: <span className="text-ide-string">"Available for Hire"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ide-string">"stack"</span>: [<span className="text-ide-string">"Python"</span>, <span className="text-ide-string">"Django"</span>, <span className="text-ide-string">"AWS"</span>],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ide-string">"latency_reduction"</span>: <span className="text-ide-string">"45%"</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/><br/>
<span className="text-ide-keyword">if</span> __name__ == <span className="text-ide-string">"__main__"</span>:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;uvicorn.run(app)
          </code></pre>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = ({ onOpenResume, onOpenTerminal }) => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-ide-bg bg-grid-pattern">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ide-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ide-border bg-ide-surface/50 w-fit text-sm font-mono text-ide-muted">
            <span className="text-ide-success">~</span> /home/aditya/portfolio $ ./init
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-ide-text tracking-tight">
              Software <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ide-primary to-ide-function">
                Engineer
              </span>
            </h1>
            <p className="text-ide-muted text-lg leading-relaxed max-w-lg">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={onOpenResume} 
              className="flex items-center gap-2 px-6 py-3 bg-ide-primary hover:bg-ide-primary/90 text-ide-bg rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(88,166,255,0.4)]"
            >
              <Download className="w-5 h-5"/> Download Resume
            </button>
            <button 
              onClick={onOpenTerminal} 
              className="flex items-center gap-2 px-6 py-3 bg-ide-surface border border-ide-border hover:border-ide-muted text-ide-text rounded-lg transition-all"
            >
              <Terminal className="w-5 h-5"/> Open Terminal
            </button>
          </div>

          {/* Tech Stack Mini-Grid */}
          <div className="pt-8 border-t border-ide-border flex flex-wrap gap-8 text-sm text-ide-muted font-medium">
             <div className="flex items-center gap-2"><Server className="text-ide-function w-5 h-5"/> <span>Backend Architecture</span></div>
             <div className="flex items-center gap-2"><Database className="text-ide-primary w-5 h-5"/> <span>Database Design</span></div>
             <div className="flex items-center gap-2"><GitBranch className="text-ide-success w-5 h-5"/> <span>CI/CD Pipelines</span></div>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="relative w-full">
          <TerminalWindow />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
