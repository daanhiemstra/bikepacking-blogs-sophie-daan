import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        celadon: 'rgb(var(--color-celadon) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        red: 'rgb(var(--color-red) / <alpha-value>)',
        cognac: 'rgb(var(--color-cognac) / <alpha-value>)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;