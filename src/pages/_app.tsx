import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Head from "next/head";
import 'focus-visible/dist/focus-visible';
import { Global, css } from '@emotion/react';

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        'button': {
          bg: '#5b1ab2',
          color: 'white',
          fontWeight: 'normal',
          borderRadius: '50px',
          fontSize: '14px',
          width: 'min-content'
        },
        'button-orange': {
          bg: '#FF6600',
          color: 'white',
          fontWeight: 'normal',
          borderRadius: '50px',
          fontSize: '14px',
          width: 'min-content'
        },
        'button-outline': {
          bg: 'white',
          color: '#5b1ab2',
          border: '#5b1ab2',
          fontWeight: 'normal',
          borderRadius: '50px',
          fontSize: '14px',
          width: 'min-content'
        }
      }
    },
    Heading: {
      variants: {
        'h1': {
          fontSize: '4xl',
          fontWeight: 'bold',
        },
        'h2': {
          fontSize: '3xl',
          fontWeight: 'bold',
          textAlign: 'center'
        },
        'h3': {
          fontSize: '2xl',
          fontWeight: 'normal',
        },
        'h4': {
          fontSize: '2xl',
          fontWeight: 'normal',
        },
      }
    },
    Input: {
      variants: {
        'input': {
          borderRadius: '3xl',
          bg: 'white',
          color: 'black',
          _placeholder: { color: 'gray.400' }
        }
      }
    },
    Box: {
      variants: {
        'shadow': {
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.07)'
        }
      }
    },
    GridItem: {
      variants: {
        'shadow': {
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.07)'
        }
      }
    }
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  colors: {
    primary: '#5B1AB2',
    secondary: '#B69DF8',
    tertiary: '#FF6600',
    bgClear: '#FBF7FF',
    bgDark: '#2a2f3b',
    bgClearMedium: '#e9e8eb',
    bgDarkMedium: '#1f222b'
  }
});

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Head>
        <meta name="description" content="Melhor Ferramenta de SEO para Aumentar o Tráfego Orgânico do seu site" />
        <meta name='viewport' content='minimum-scale=1, maximum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
        <title>Webpeak</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;