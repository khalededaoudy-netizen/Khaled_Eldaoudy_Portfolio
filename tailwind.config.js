/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060709',
          900: '#0a0c10',
          850: '#0f1117',
          800: '#141720',
          750: '#1a1e2a',
          700: '#222736',
        },
        lime: {
          DEFAULT: '#c8f202',
          bright: '#d8ff1a',
          muted: '#a4c900',
          dark: '#738f00',
          glow: 'rgba(200, 242, 2, 0.15)',
        },
        cyan: {
          telemetry: '#00e5ff',
          dim: 'rgba(0, 229, 255, 0.15)',
        },
        steel: {
          100: '#f4f6fa',
          200: '#e1e5ee',
          300: '#b8c0d1',
          400: '#8c96ac',
          500: '#647087',
          600: '#434d61',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        'tech-lines': "linear-gradient(to right, rgba(200,242,2,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,242,2,0.05) 1px, transparent 1px)",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

