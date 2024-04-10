const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        
        '6xs': '6px',
        '7xs':'8px',
        '8xs':'10px'
        // Define custom spacing utility
      }
    }
  },
  plugins: []
});