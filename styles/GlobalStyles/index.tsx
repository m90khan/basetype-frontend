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
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: 'translate3d(0, 80px, 0)';
            }
            to {
              opacity: 1;
              transform: 'none';
            }
          }
          .richText {
            & > *: {
              animation-name: fade-in-up;
              animation-duration: '800ms';
              animation-timing-function: 'ease';
              animation-fill-mode: 'both';
              &:nth-child(1): {
                animation-delay: '10ms';
              }
              &:nth-child(2): {
                animation-delay: '200ms';
              }
            }
          }
          .text-center {
            text-align: center;
          }
        `}
      />
      {children}
    </>
  );
}
