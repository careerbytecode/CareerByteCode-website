/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            "colors": {
                "primary": "#3B82F6",
                "secondary": "#8B5CF6",
                "accent": "#06B6D4"
              },
              "fontFamily": {
                "sans": [
                  "Inter",
                  "sans-serif"
                ]
              }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
  