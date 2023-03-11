import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import GlobalStyles from '@styles/GlobalStyles';
import customTheme from '@styles/theme';
import type { AppProps } from 'next/app';
import { Josefin_Sans, Junge } from '@next/font/google';
import { Header } from '@components/UI/common/Header';
import 'public/css/menu/index.css';
import { Footer } from '@components/UI/common/Footer';
const josefinFonts = Josefin_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
const jungeFonts = Junge({
  weight: ['400'],
  subsets: ['latin'],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyles />
      <style jsx global>{`
        body {
          font-family: ${josefinFonts.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${jungeFonts.style.fontFamily};
        }
      `}</style>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
