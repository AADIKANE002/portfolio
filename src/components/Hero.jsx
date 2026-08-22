import React, { useState } from 'react';
import { Terminal, Database, Server, ChevronRight, FileCode, GitBranch } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero = ({ onOpenResume, onOpenTerminal }) => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-12 bg-[#0d1117] text-[#c9d1d9] font-mono border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: CLI text style */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="text-[#8b949e] text-sm">
            $ whoami <br/>
            <span className="text-[#58a6ff]">aditya_kumar</span>
          </div>
          <h1 className="text-5xl font-bold text-[#c9d1d9]">
            Software <br/> <span className="text-[#3fb950]">Engineer</span>
          </h1>
          <p className="text-[#8b949e] leading-relaxed max-w-lg font-sans">
            {PERSONAL_INFO.bio}
          </p>
          <div className="flex gap-4 pt-4">
            <button onClick={onOpenResume} className="px-6 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md font-bold transition-colors">
              ./download_resume.sh
            </button>
            <button onClick={onOpenTerminal} className="px-6 py-2 bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] text-[#c9d1d9] rounded-md transition-colors">
              Initialize CLI
            </button>
          </div>
          <div className="flex gap-6 mt-8 border-t border-[#30363d] pt-6 font-sans text-sm">
             <div className="flex items-center gap-2"><Server className="text-[#8957e5] w-5 h-5"/> <span>Backend API</span></div>
             <div className="flex items-center gap-2"><Database className="text-[#58a6ff] w-5 h-5"/> <span>Data Eng</span></div>
             <div className="flex items-center gap-2"><GitBranch className="text-[#3fb950] w-5 h-5"/> <span>AWS & CI/CD</span></div>
          </div>
        </div>

        {/* Right: IDE Mockup */}
        <div className="rounded-md border border-[#30363d] bg-[#010409] overflow-hidden shadow-2xl flex flex-col h-[400px]">
          <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2 text-xs text-[#8b949e]">
            <FileCode className="w-4 h-4"/> main.py
          </div>
          <div className="p-6 text-sm text-[#8b949e] overflow-auto flex-1 font-mono leading-loose">
            <pre><code>
<span className="text-[#ff7b72]">from</span> fastapi <span className="text-[#ff7b72]">import</span> FastAPI<br/>
<span className="text-[#ff7b72]">import</span> uvicorn<br/><br/>
app = FastAPI(title=<span className="text-[#a5d6ff]">"Aditya API"</span>)<br/><br/>
<span className="text-[#d2a8ff]">@app.get</span>(<span className="text-[#a5d6ff]">"/"</span>)<br/>
<span className="text-[#ff7b72]">async def</span> <span className="text-[#d2a8ff]">root</span>():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> {'{'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">"status"</span>: <span className="text-[#a5d6ff]">"Available for Hire"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">"stack"</span>: [<span className="text-[#a5d6ff]">"Python"</span>, <span className="text-[#a5d6ff]">"Django"</span>, <span className="text-[#a5d6ff]">"AWS"</span>],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">"latency_reduction"</span>: <span className="text-[#a5d6ff]">"45%"</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/><br/>
<span className="text-[#ff7b72]">if</span> __name__ == <span className="text-[#a5d6ff]">"__main__"</span>:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;uvicorn.run(app)
            </code></pre>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
