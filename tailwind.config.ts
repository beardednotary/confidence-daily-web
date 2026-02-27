import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FAF8F5',
        'charcoal': '#2C2C2C',
        'gold': '#C9A96E',
        'taupe': '#B5A99A',
        'taupe-light': '#EDE8E3',
        'text-secondary': '#6B6460',
        'text-tertiary': '#9C9490',
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'Georgia', 'serif'],
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'caps': '0.08em',
      },
    },
  },
  plugins: [],
};

export default config;
