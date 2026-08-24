import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Terminal, Database, Server, GitBranch, FileCode, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Staggered Code Lines
const codeLines = [
  <><span className="text-ide-keyword">from</span> fastapi <span className="text-ide-keyword">import</span> FastAPI</>,
  <><span className="text-ide-keyword">import</span> uvicorn</>,
  <><br/></>,
  <><span className="text-ide-text">app</span> = FastAPI(title=<span className="text-ide-string">"Aditya API"</span>)</>,
  <><br/></>,
  <><span className="text-ide-function">@app.get</span>(<span className="text-ide-string">"/"</span>)</>,
  <><span className="text-ide-keyword">async def</span> <span className="text-ide-function">root</span>():</>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ide-keyword">return</span> {'{'}</>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ide-string">"status"</span>: <span className="text-ide-string">"Available for Hire"</span>,</>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ide-string">"stack"</span>: [<span className="text-ide-string">"Python"</span>, <span className="text-ide-string">"Django"</span>, <span className="text-ide-string">"AWS"</span>],</>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ide-string">"latency_reduction"</span>: <span className="text-ide-string">"45%"</span></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</>,
  <><br/></>,
  <><span className="text-ide-keyword">if</span> __name__ == <span className="text-ide-string">"__main__"</span>:</>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;uvicorn.run(app)</>
];

const TerminalWindow = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{ 
        duration: 0.8, 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // Continuous floating effect
      }}
      className="rounded-xl border border-ide-border bg-ide-bg overflow-hidden shadow-2xl shadow-ide-primary/10 flex flex-col h-[420px] w-full"
    >
      {/* Window Header */}
      <div className="bg-ide-surface px-4 py-3 border-b border-ide-border flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-ide-muted font-mono">
          <FileCode className="w-4 h-4 text-ide-primary"/> src/main.py
        </div>
        <div className="flex gap-2 group cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-ide-danger/80 transition-transform group-hover:scale-110"></div>
          <div className="w-3 h-3 rounded-full bg-ide-warning/80 transition-transform group-hover:scale-110"></div>
          <div className="w-3 h-3 rounded-full bg-ide-success/80 transition-transform group-hover:scale-110"></div>
        </div>
      </div>
      
      {/* Code Editor Content */}
      <div className="p-6 text-sm text-ide-text overflow-auto flex-1 font-mono leading-loose relative">
        {/* Line numbers */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-ide-surface/30 border-r border-ide-border flex flex-col items-end py-6 pr-3 text-ide-muted/50 select-none">
          {codeLines.map((_, i) => <span key={i}>{i+1}</span>)}
        </div>
        
        {/* Code with Staggered Fade In */}
        <div className="pl-10">
          <pre><code>
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }} // Stagger lines
              >
                {line}
              </motion.div>
            ))}
          </code></pre>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = ({ onOpenResume, onOpenTerminal }) => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-ide-bg bg-grid-pattern">
      {/* Subtle Dynamic Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-ide-primary/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ide-function/10 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          {/* Live Typing Effect */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ide-border bg-ide-surface/50 w-fit text-sm font-mono text-ide-muted shadow-sm">
            <span className="text-ide-success">~</span> 
            <TypeAnimation
              sequence={[
                'whoami', 1000,
                './init_portfolio.sh', 2000,
                'echo "Available for hire"', 3000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-ide-text"
            />
          </div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-ide-text tracking-tight"
            >
              Software <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ide-primary via-ide-function to-ide-primary bg-300% animate-gradient">
                Engineer
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-ide-muted text-lg leading-relaxed max-w-lg"
            >
              {PERSONAL_INFO.bio}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(88,166,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenResume} 
              className="flex items-center gap-2 px-6 py-3 bg-ide-primary text-ide-bg rounded-lg font-bold transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
              <Download className="w-5 h-5"/> Download Resume
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#161b22" }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenTerminal} 
              className="flex items-center gap-2 px-6 py-3 bg-ide-bg border border-ide-border text-ide-text rounded-lg transition-all hover:border-ide-primary"
            >
              <Terminal className="w-5 h-5 text-ide-primary"/> Open Terminal
            </motion.button>
          </motion.div>

          {/* Tech Stack Mini-Grid with Stagger */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.8 }
              }
            }}
            className="pt-8 border-t border-ide-border flex flex-wrap gap-8 text-sm text-ide-muted font-medium"
          >
             <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-2 group hover:text-ide-text transition-colors cursor-default">
               <Server className="text-ide-function w-5 h-5 group-hover:scale-110 transition-transform"/> <span>Backend Architecture</span>
             </motion.div>
             <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-2 group hover:text-ide-text transition-colors cursor-default">
               <Database className="text-ide-primary w-5 h-5 group-hover:scale-110 transition-transform"/> <span>Database Design</span>
             </motion.div>
             <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-2 group hover:text-ide-text transition-colors cursor-default">
               <GitBranch className="text-ide-success w-5 h-5 group-hover:scale-110 transition-transform"/> <span>CI/CD Pipelines</span>
             </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <div className="relative w-full z-20 perspective-1000">
          <TerminalWindow />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
