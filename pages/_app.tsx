import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyles from '@styles/GlobalStyles';
import customTheme from '@styles/theme';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
