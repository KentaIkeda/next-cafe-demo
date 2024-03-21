import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cafe-beige': '#F5F5DC',
        'cafe-deep-green': '#006400',
        'cafe-cream': '#FFFDD0',
        'cafe-text': '#9E7E58',
        'cafe-warm-terracotta': '#E97451',
      },
      boxShadow: {
        'cafe-news': '3px 3px 0px 3px',
      },
    },
  },
  plugins: [],
};
export default config;
