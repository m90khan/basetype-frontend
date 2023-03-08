import { extendTheme, theme } from '@chakra-ui/react';
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1450px',
  '3xl': '1920px',
  '4xl': '2160px',
};
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const customTheme = extendTheme({
  ...theme,
  config,
  colors: {
    pink: {
      900: '#F1AAAC',
      100: '#F4EDED',
    },
    green: {
      900: '#2B4248',
      800: '#274C5B',
      100: '#E4EBEB',
    },
    white: {
      900: '#ffffff',
    },
    gray: {
      900: '#000',
      800: '#101010',
      700: '#767676',
      100: '#F5F5F5',
    },
    system: {
      error: '#FD1314',
      success: '#219C49',
      warning: '#F9B300',
      info: '#0062CA',
    },
    gradient: {
      orange: 'linear-gradient(96.8deg, #F07D00 2.51%, #CA6316 78.96%)',
    },
  },

  fonts: {
    body: `'Josefin Sans', sans-serif`,
    heading: `'Junge', serif`,
  },

  breakpoints: breakpoints,
  defaultProps: {
    variant: 'sm', // default is solid
    colorScheme: 'white', // default is gray
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    22: '22px',
    30: '30px',
    35: '35px',
    40: '40px',
    50: '50px',
    60: '60px',
    80: '8rem',
  },
  components: {
    Heading: {
      sizes: {
        h1: {
          fontSize: '8rem',
          fontWeight: 400,
          color: 'primary.800',
        },
        h2: { fontSize: '6rem', fontWeight: 400, color: 'primary.800' },
        h3: { fontSize: '5rem', fontWeight: 400, color: 'primary.800' },
        h4: { fontSize: '4rem', fontWeight: 400, color: 'primary.800' },
        h5: { fontSize: '3.5rem', fontWeight: 400, color: 'primary.800' },
        h6: { fontSize: '3rem', fontWeight: 400, color: 'primary.800' },

        // h4: {
        //   fontsize: '18px',
        //   fontWeight: 900,
        //   _hover: { color: 'primary.orange' },
        // },
      },
    },
    Text: {
      sizes: {
        xl: {
          fontSize: '2.2rem',
        },
        lg: {
          fontSize: '2rem',
        },
        md: { fontSize: '18px' },
        sm: { fontSize: '16px' },
        xs: { fontSize: '14px' },
      },
    },

    Button: {
      variants: {
        primary: {
          background: 'green.900',
          color: 'gray.100',
          padding: '25px 30px 25px',
          _hover: {
            background: 'green.800',
            color: 'gray.100',
            padding: '25px 30px 25px',
          },
        },
        primaryOutline: {
          background: 'transparent',
          color: 'green.900',
          border: '2px solid #2B4248',
          padding: '23px 28px 24px',
          _hover: {
            background: 'green.900',
            color: 'gray.100',
            border: 'none',
            padding: '25px 30px 25px',
          },
        },
        secondary: {
          background: 'white.900',
          color: 'green.900',
          padding: '25px 30px 25px',
          _hover: {
            background: 'green.100',
            color: 'green.900',
            padding: '25px 30px 25px',
          },
        },
        secondaryOutline: {
          background: 'transparent',
          color: 'white.900',
          border: '2px solid #fff',
          padding: '23px 28px 24px',
          _hover: {
            background: 'green.100',
            color: 'green.900',
            border: 'none',
            padding: '25px 30px 25px',
          },
        },
        disabled: {
          background: 'gradient.lightGrey',
          color: 'gray.200',
        },
      },
    },
  },
});

export default customTheme;
