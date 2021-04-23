module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "brand-green": "#4b966f",
        "brand-black": "#292929",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
