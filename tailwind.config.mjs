/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0A0A0A',
        'brand-red': '#E8001D',
        'brand-red-dark': '#B0001A',
        'brand-white': '#F5F5F5',
        'brand-gray': '#6B6B6B',
        'brand-gray-light': '#1A1A1A',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
