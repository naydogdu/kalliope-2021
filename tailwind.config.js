module.exports = {
  purge: [
    '**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: '768px',
      xl: '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1D1D1D',
      dark: '#393939',
      white: '#FFFFFF',
      light: '#EFE6E1',
    },
    fontFamily: {
      serif: ['Juana', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['1rem', { lineHeight: '1.5rem' }],
      base: ['1.25rem', { lineHeight: '1.75rem' }],
      lg: ['2.5rem', { lineHeight: '1' }],
      xl: ['3.75rem', { lineHeight: '1' }],
    },
    letterSpacing: {
      tighter: '-0.025em',
      tight: '-0.0125em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
    },
    padding: (theme) => ({
      ...theme('height')
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
