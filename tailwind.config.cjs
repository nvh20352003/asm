/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/*.{html,js,ts,jsx,tsx}",
    "./src/pages/*.{html,js,ts,jsx,tsx}",
    "./src/pages/admin/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '200': '336px',
        '810': '810px',
        '506': "506px"
      },
      height: {
        '540': '540px'
      },
      colors: {
        "primary": "#2B2B2B"
      }
    },
  },
  plugins: [],
}