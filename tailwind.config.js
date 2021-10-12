module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
	  extend: {
		  screens: {
			  '3xl': '1792px'
		  }
	  },
	  fontFamily: {
		  header: ['Sarala'],
		  body: ['Roboto'],
	  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
