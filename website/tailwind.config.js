/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      keyframes: {
        bggr: {
          'from': {
            opacity: '0%'
          },
          'to': {
            opacity: '100%'
          }
        }
      },
      animation: {
        'bgg': 'bggr 3s linear 1'
      }
    },
  },
  plugins: [],
};
