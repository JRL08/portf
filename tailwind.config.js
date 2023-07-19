/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      // Configure your color palette here
      primary: '#bb263a',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

