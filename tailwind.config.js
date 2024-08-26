/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,css}',  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {

    },
    container: {
      center: true,
      padding: '1.5rem'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

