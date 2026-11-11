/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        f1: {
          black: '#080808',
          dark: '#101010',
          carbon: '#161616',
          panel: '#1E1E1E',
          border: '#2A2A2A',
          red: '#E10600',
          'red-bright': '#FF1801',
          'red-glow': 'rgba(225, 6, 0, 0.4)',
          gold: '#D4AF37',
          'gold-light': '#F5D061',
          'gold-muted': '#9E8020',
          gray: '#8C8C8C',
          lightgray: '#D1D5DB'
        }
      },
      fontFamily: {
        racing: ['"Teko"', 'sans-serif'],
        display: ['"Rajdhani"', 'sans-serif'],
        tech: ['"Orbitron"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      clipPath: {
        'slant-left': 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)',
        'slant-right': 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)',
        'badge': 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
      },
      backgroundImage: {
        'carbon-pattern': 'radial-gradient(circle at 1px 1px, #202020 1px, transparent 0)',
        'f1-gradient-red': 'linear-gradient(135deg, #E10600 0%, #8A0000 100%)',
        'f1-gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #8C6D14 100%)'
      }
    },
  },
  plugins: [],
}

