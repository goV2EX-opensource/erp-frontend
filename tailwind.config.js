require("dotenv").config();

const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
  purge: {
    enabled: enablePurge,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  theme: {
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  corePlugins: {
    width: true,
    height: true,
    padding: true,
    margin: true,
    container: true,
    justifyContent: true,
    flex: true,
  },
  variants: {
    extend: {},
  },
};
