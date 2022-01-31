module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,svg}',
  ],
  theme: {
    colors: {
      // main
      'primary-darker': 'hsl(24, 100%, 3%)',
      'primary-dark': 'hsl(22, 55%, 47%)',
      'primary': 'hsl(22, 91%, 62%)',
      'primary-light': 'hsl(21, 99%, 72%)',
      'primary-lighter': 'hsl(22, 100%, 83%)',
      'primary-a30': 'hsla(22, 90%, 56%, 0.3)',

      'accent-darker': 'hsl(182, 31%, 21%)',
      'accent-dark': 'hsl(184, 39%, 34%)',
      'accent': 'hsl(183, 42%, 44%)',
      'accent-light': 'hsl(183, 31%, 58%)',
      'accent-lighter': 'hsl(182, 29%, 75%)',

      // black + white
      'black': 'hsl(234, 32%, 18%)',
      'black-a80': 'hsla(234, 31%, 18%, 0.8)',
      'black-a10': 'hsla(234, 31%, 18%, 0.1)',

      'white': 'hsl(0, 0%, 100%)',

      // feedback
      'success-darker': 'hsl(134, 61%, 21%)',
      'success-dark': 'hsl(94, 35%, 34%)', // TODO: change
      'success': 'hsl(94, 48%, 56%)', // TODO: change
      'success-light': 'hsl(134, 41%, 83%)',
      'success-lighter': 'hsl(134, 41%, 88%)',
      'success-a20': 'hsla(94, 48%, 56%, 0.2)',

      'error-darker': 'hsl(354, 61%, 28%)',
      'error-dark': 'hsl(9, 88%, 31%)', // TODO: change
      'error': 'hsl(7, 96%, 39%)', // TODO: change
      'error-light': 'hsl(354, 70%, 87%)',
      'error-lighter': 'hsl(355, 70%, 91%)',
      'error-a20': 'hsla(7, 90%, 61%, 0.2)',

      'warning-darker': 'hsl(45, 94%, 27%)',
      'warning-dark': 'hsl(49, 80%, 42%)', // TODO: change
      'warning': 'hsl(50, 100%, 50%)', // TODO: change
      'warning-light': 'hsl(45, 100%, 86%)',
      'warning-lighter': 'hsl(46, 100%, 90%)',
      'warning-a20': 'hsla(50, 100%, 61%, 0.2)',

      // bg
      'bg': 'hsl(0, 0%, 100%)',
      'bg-a20': 'hsla(0, 0%, 100%, 0.2)',

      'contrast-lower': 'hsl(24, 12%, 92%)',
      'contrast-low': 'hsl(16, 13%, 83%)',
      'contrast-medium': 'hsl(18, 11%, 65%)',
      'contrast-high': 'hsl(20, 5%, 36%)',
      'contrast-higher': 'hsl(20, 4%, 15%)',
      'contrast-a45': 'hsla(18, 11%, 65%, 0.45)',

      // semantic
      'border': 'var(--color-contrast-low)'
    },
    fontFamily: {
      'primary': ['Roboto', 'sans-serif'],
      'secondary': ['Overpass\\ Mono', 'sans-serif']
    },
    extend: {
      dropShadow: {
        'nav': '0 1px 1px hsl(234deg 31% 18% / 10%)'
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
  },
  plugins: [],
}
