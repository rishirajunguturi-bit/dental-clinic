/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          primary: '#6750A4',
          'primary-hover': '#57418F',
          lavender: '#F3EEFF',
          bg: '#FFFFFF',
          text: '#252238',
          'text-secondary': '#686579',
          border: '#E7E3EF',
          'surface-subtle': '#FBF9FE',
          accent: '#7E66B8',
          badge: '#EDE7F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(103, 80, 164, 0.06), 0 1px 4px -1px rgba(37, 34, 56, 0.04)',
        'soft-md': '0 6px 20px -4px rgba(103, 80, 164, 0.08), 0 3px 8px -2px rgba(37, 34, 56, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(103, 80, 164, 0.12), 0 4px 12px -2px rgba(37, 34, 56, 0.05)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
