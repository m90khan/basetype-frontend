import { CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import Head from 'next/head';
const styles = css`
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    margin-right: 0 !important;
  }
  body {
    width: 100vw;
    height: 100vh;
  }

  #next {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;
export default function GlobalStyles({ children }: any) {
  return (
    <>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
            font-size: 62.5%;
            margin-right: 0 !important;
          }
          * {
            box-sizing: border-box;
          }
          #next {
            height: 100%;
            width: 100%;
          }
        `}
      />
      {children}
    </>
  );
}
