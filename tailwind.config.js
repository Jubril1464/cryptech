module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  theme: {
    fontFamily :{
     'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        'hero': 'url(./assets/hero-v2.png)'
      }
    },
  },
  plugins: [],
}