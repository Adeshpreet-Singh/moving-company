import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0c1220',
          soft: '#121a2b',
          card: '#161f30',
        },
        ivory: {
          DEFAULT: '#f8f6f1',
          dim: '#e8e4dc',
        },
        amber: {
          DEFAULT: '#c9913a',
          light: '#dbb06b',
          dark: '#a67528',
        },
        slate: {
          DEFAULT: '#2a3441',
          light: '#3d4f63',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
