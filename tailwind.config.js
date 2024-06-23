/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './index.html',
    './src/**/*.jsx'],
  theme: {
    extend: 
    {
      fontFamily:{ 'body': ["Playwrite IT Moderna", 'cursive'] }
    },
  },
  plugins: [],
}

