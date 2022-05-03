module.exports = {
  // Refresh files under defined directories
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Container Adjustments
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      },
    },
    extend: {
      // Custom Colors 
    colors: {
      alpha: '#ff1a5c',
      beta: '#8722ff',
      gamma: '#3db296',
      delta: '#ecc417',
      theta: '#e8931e',
      light:'#e1e1e1',
      dark:'#303030',
    },
    },
  },
  plugins: [],
}
