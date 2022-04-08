const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#925add',
        primary: '#0087c6',
        secondary: '#C200FB',
        success: '#10b981',
        danger: '#FF331F',
        warning: '#F5B841',
        info: '#66C7F4',
        dark: '#222',
        dark_bg: '#0f172a',
        dark_primary: '#4a5568',
        dark_secondary: '#925add',
        dark_text: '#ffffff',
      },
    },
    fontFamily: {
      serif: ['Sora', 'sans-serif'],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
};
