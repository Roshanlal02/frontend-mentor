/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-blue': 'hsl(220, 98%, 61%)',
        'bg-gradient': 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        'gr-one': 'hsl(192, 100%, 67%)',
        'gr-two': 'hsl(280, 87%, 65%)',
        // light theme
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        'light-mode-text': 'hsl(200, 15%, 8%)',
        'light-mode-elements': 'hsl(0, 0%, 100%)',
        // dark theme
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-2': 'hsl(207, 26%, 17%)',
        'dark-mode-text': 'hsl(0, 0%, 100%)',
        'dark-mode-elements': 'hsl(209, 23%, 22%)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
