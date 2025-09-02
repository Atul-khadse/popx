/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef6ff",
          100: "#d9eaff",
          200: "#b6d3ff",
          300: "#8bb6ff",
          400: "#5e95ff",
          500: "#386fff",
          600: "#2251e6",
          700: "#1a3eb4",
          800: "#162f86",
          900: "#122668",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
