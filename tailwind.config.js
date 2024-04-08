/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'xs': '480px', // Extra Small Devices (phones)
    'sm': '640px', // Small Devices (tablets)
    'md': '768px', // Medium Devices (small laptops)
    'lg': '1024px', // Large Devices (laptops/desktops)
    'xl': '1280px', // Extra large Devices (large laptops)
  },
  
  plugins: [],
}

