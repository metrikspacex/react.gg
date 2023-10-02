const { join } = require("node:path");

module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {
      config: join(__dirname, "tailwind.config.js"),
    },
  },
};
