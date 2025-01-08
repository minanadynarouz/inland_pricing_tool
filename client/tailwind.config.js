/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '370px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      borderWidth: {
        '5': '5px',
      },
      padding: {
        '30': '30px',
      },
      colors: {
        'custom-blue': '#1e3a8a',
        'custom-green': "#1e3F11",
        'custom-green-hover': '#1aa111',
      },
    },
  },
  plugins: [],
}
