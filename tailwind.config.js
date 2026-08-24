/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#06070a',
          900: '#0b0d13',
          850: '#10131c',
          800: '#161925',
          700: '#232838',
        },
        linear: {
          violet: '#8a63f6',
          indigo: '#5e6ad2',
          cyan: '#00f0ff',
          mint: '#10b981',
          crimson: '#ff4154',
          amber: '#f59e0b',
        },
        space: {
          800: '#111827',
          900: '#0b0d13',
          950: '#06070a',
        },
        ide: {
          bg: '#08090d',
          surface: '#10131c',
          border: '#232838',
          text: '#e2e8f0',
          muted: '#94a3b8',
          primary: '#00f0ff',
          success: '#10b981',
          warning: '#f59e0b',
          danger: '#ff4154',
          keyword: '#f43f5e',
          string: '#38bdf8',
          function: '#a855f7',
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%236366f1' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'linear-gradient-border': 'linear-gradient(90deg, #6366f1, #8a63f6, #00f0ff, #ff4154, #6366f1)',
      },
      backgroundSize: {
        '200%': '200%',
        '300%': '300%',
      },
      animation: {
        'gradient': 'animatedgradient 6s ease infinite alternate',
        'pulse-glow': 'pulseGlow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'border-beam': 'borderBeam 4s linear infinite',
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'glow-linear': '0 0 35px -5px rgba(94, 106, 210, 0.45)',
        'glow-cyan': '0 0 35px -5px rgba(0, 240, 255, 0.45)',
        'glow-raycast': '0 0 35px -5px rgba(255, 65, 84, 0.45)',
        'glow-purple': '0 0 35px -5px rgba(138, 99, 246, 0.45)',
      }
    },
  },
  plugins: [],
}
