import React, { useState, useRef, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  X,
  Minus,
  Maximize2,
  Send,
  HelpCircle,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { TERMINAL_COMMANDS, PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const Terminal = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Aditya Kumar CLI [Version 2.4.0-prod]
Type "help" to see available commands or click quick action buttons below.`
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [matrixMode, setMatrixMode] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    soundFx.playBlip();

    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'user', text: `$ ${cmdStr}` }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'matrix') {
      setMatrixMode(!matrixMode);
      newHistory.push({
        type: 'response',
        text: matrixMode ? '🟢 Matrix Mode Disabled.' : '🟢 Matrix Mode Activated. Welcome to the construct.'
      });
      setHistory(newHistory);
      setInput('');
      return;
    }

    if (trimmed === 'resume') {
      onOpenResume();
      newHistory.push({
        type: 'response',
        text: 'Opening resume preview...'
      });
      setHistory(newHistory);
      setInput('');
      return;
    }

    if (trimmed === 'whoami') {
      newHistory.push({
        type: 'response',
        text: 'guest@visitor-session (Recruiter / Engineering Leader)'
      });
    } else if (trimmed === 'sudo') {
      newHistory.push({
        type: 'response',
        text: 'Permission denied: Aditya has exclusive root privileges.'
      });
    } else if (trimmed === 'date') {
      newHistory.push({
        type: 'response',
        text: new Date().toUTCString()
      });
    } else if (TERMINAL_COMMANDS[trimmed]) {
      newHistory.push({
        type: 'response',
        text: TERMINAL_COMMANDS[trimmed]
      });
    } else if (trimmed === 'experience') {
      newHistory.push({
        type: 'response',
        text: TERMINAL_COMMANDS.exp
      });
    } else if (trimmed === 'cat resume.txt') {
      newHistory.push({
        type: 'response',
        text: `${PERSONAL_INFO.name}\n${PERSONAL_INFO.bio}\nEmail: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}`
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const quickCommands = ['help', 'about', 'skills', 'projects', 'exp', 'achievements', 'contact', 'resume', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-space-950/80 backdrop-blur-xl animate-in fade-in">
      <div
        className={`relative w-full max-w-3xl h-[80vh] sm:h-[620px] rounded-2xl flex flex-col overflow-hidden border shadow-2xl transition-all ${
          matrixMode
            ? 'bg-black border-emerald-500/50 shadow-emerald-500/20 text-emerald-400'
            : 'bg-space-950/95 border-cyan-500/40 shadow-cyan-500/10 text-slate-200'
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-space-900 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"
              title="Close"
            />
            <button
              onClick={() => {
                soundFx.playClick();
                setHistory([]);
              }}
              className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity"
              title="Clear"
            />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-400">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>aditya@cloud-box:~ (Interactive CLI)</span>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-3 leading-relaxed">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              {item.type === 'user' ? (
                <div className="text-cyan-400 font-semibold">{item.text}</div>
              ) : item.type === 'error' ? (
                <div className="text-rose-400 whitespace-pre-wrap">{item.text}</div>
              ) : item.type === 'system' ? (
                <div className="text-slate-400 border-b border-white/10 pb-2 whitespace-pre-wrap">
                  {item.text}
                </div>
              ) : (
                <div className="text-slate-300 whitespace-pre-wrap pl-2 border-l-2 border-cyan-500/40">
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-1 text-cyan-400">
            <span className="font-bold select-none">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm focus:ring-0"
              placeholder="Type command here (e.g. help, skills, exp, projects)..."
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Toolbar */}
        <div className="p-3 bg-space-900/80 border-t border-white/10 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono text-slate-400 mr-1 select-none flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Quick:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
