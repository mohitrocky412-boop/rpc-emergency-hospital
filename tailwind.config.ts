import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f4f7f6',
          100: '#e4ebe9',
          200: '#c3d2ce',
          300: '#98b1ab',
          400: '#6a8983',
          500: '#4c6b66',
          600: '#3a5450',
          700: '#2f4441',
          800: '#1f2e2b',
          900: '#0d1a17',
          950: '#081210',
        },
        teal: {
          50: '#eefbf8',
          100: '#d3f4ec',
          200: '#a7e8da',
          300: '#72d5c3',
          400: '#3fb8a7',
          500: '#1f9c8d',
          600: '#0f7d72',
          700: '#0c6259',
          800: '#0d4e48',
          900: '#0d403c',
          950: '#052422',
        },
        harbor: {
          50: '#eef4fb',
          100: '#d7e5f5',
          200: '#b3cdea',
          300: '#84acdb',
          400: '#5786c7',
          500: '#3966ac',
          600: '#2a4f8d',
          700: '#254172',
          800: '#22375d',
          900: '#20304e',
          950: '#131d31',
        },
        signal: {
          50: '#fdf3f1',
          100: '#fbe1db',
          200: '#f7c2b6',
          300: '#f09b87',
          400: '#e56d51',
          500: '#d24d30',
          600: '#b53a22',
          700: '#962e1d',
          800: '#7c291d',
          900: '#68271d',
        },
        cream: '#fbfbf6',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(13, 26, 23, 0.04), 0 8px 24px -8px rgba(13, 26, 23, 0.12)',
        card: '0 1px 3px rgba(13, 26, 23, 0.06), 0 12px 32px -12px rgba(13, 64, 60, 0.18)',
        lift: '0 20px 45px -18px rgba(13, 64, 60, 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
        dash: 'dash 2.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
