/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        puabo: {
          primary: '#00ffcc',
          secondary: '#0d0d0d',
          accent: '#001f1f',
          dark: '#002222',
          light: '#00ffcc44'
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
      }
    },
  },
  plugins: [],
}

