module.exports = {
  purge: [
    '**/*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      md: '768px',
      lg: '1148px',
      xl: '1486px',
      'hmax-md': {'raw': '(max-height: 768px)'},
      'hmax-sm': {'raw': '(max-height: 620px)'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1D1D1D',
      dark: '#393939',
      white: '#FFFFFF',
      light: '#EFE6E1',
      primary: '#482a86',
    },
    fontFamily: {
      sans: [
        'Gilroy',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Juana', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['1rem', { lineHeight: '1.5rem' }],
      base: ['1.25rem', { lineHeight: '1.75rem' }],
      lg: ['2.5rem', { lineHeight: '1' }],
      xl: ['3.75rem', { lineHeight: '1' }],
      smaller: '87.5%',
      smallest: '68%',
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
    extend: {
      animation: {
        leap: 'leap 1s ease-in-out infinite',
      },
      keyframes: {
        leap: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(5%)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
