/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#070a0f',
        foreground: '#f3f5f9',
        surface: '#10141a',
        'surface-2': '#191d25',
        border: '#252930',
        'border-strong': '#3c434d',
        muted: '#191d25',
        'muted-foreground': '#9199a5',
        accent: '#f9a129',
        'accent-foreground': '#070a0f',
        mint: '#4cdfc4',
        violet: '#a490ff',
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}