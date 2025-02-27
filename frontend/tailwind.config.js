module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
};
