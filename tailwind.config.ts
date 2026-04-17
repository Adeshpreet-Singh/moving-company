import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#ff6b35',
          dim: '#e55a25',
          dark: '#cc5222',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          bg: '#0a0a0a',
          surface: '#111111',
          card: '#141414',
          border: '#1e1e1e',
        },
        slate: {
          text: '#b8b8b8',
        },
        'white-soft': '#e0e0e0',
        amber: '#f59e0b',
      },
    },
  },
  plugins: [],
} satisfies Config;
