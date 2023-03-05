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

  @font-face {
    font-family: 'Roboto-Black';
    font-style: normal;
    font-weight: 900;
    font-display: fallback;
    font-display: swap;
    src: url('../../fonts/Roboto-Black.ttf') format('trueType');
  }
  @font-face {
    font-family: 'Roboto-Bold';
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
    font-display: swap;
    src: url('../../fonts/Roboto-Bold.ttf') format('trueType');
  }
  @font-face {
    font-family: 'Roboto-Medium';
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
    font-display: swap;
    src: url('../../fonts/Roboto-Medium.ttf') format('trueType');
  }
`;
export default function GlobalStyles({ children }: any) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
            font-size: 62.5%;
            margin-right: 0 !important;
          }
          *,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Roboto', sans-serif !important;
          }
          body {
            background: none;
            width: 100vw;
            height: 100vh;
          }
          .container {
            width: 100vw;
            height: 100vh;
          }

          #next {
            height: 100%;
            width: 100%;
          }
          //Buttons: Arrow Icon related
          .chakra-button .arrow-icon-primary path {
            stroke: #ffffff;
          }
          .chakra-button .arrow-icon-disabled path {
            stroke: #575757;
          }
          span.chakra-button__icon{
            margin: 0 !important;
          }

          // Pagination: Arrow Icon related
          .pagination-button:hover .arrow-icon-pagination path {
            stroke: #000000;
          }
          /* .white-progress-bar {
            top: 0 !important;
            background: white !important;
          }
          .primary-progress-bar {
            top: 0 !important;
            background: #f07d00 !important;
          } */
          // Pagination: Numbers related
          .pagination-number {
            opacity: 0.6;
          }
          .pagination-number:hover {
            opacity: 1;
          }

          // EdgeCase PopUp
          .error-container-active {
            background-color: #363636;
          }

          .animate-in {
            animation-duration: 1s;
            animation-name: fade-in;
            animation-fill-mode: forwards;
          }
          .animate-out {
            animation-duration: 1s;
            animation-name: fade-out;
            animation-fill-mode: forwards;
          }

          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .loading-bg-360 {
            animation: rotation 10s infinite linear alternate;
          }
          .loading-bg-0 {
            animation: rotation-minus 8s infinite linear alternate;
          }
          @keyframes rotation {
            /*from {
    transform: rotate(0deg); no needed to define this
  }*/
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes rotation-minus {
            /*from {
    transform: rotate(0deg); no needed to define this
  }*/
            to {
              transform: rotate(-360deg);
            }
          }
          @keyframes fade-out {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          // Menu related
          .desktop-menu {
            & > * {
              color: #ffffff;
            }

            & > *:hover {
              background: #ffffff;

              & > * {
                color: #363636;
              }

              & > div img:nth-of-type(2) {
                visibility: visible;
              }
            }
            & > *:active,
            :visited {
              & > * {
                color: #ffffff;
              }
              background: linear-gradient(
                177.67deg,
                rgba(87, 87, 87, 0.8) 0.22%,
                #575757 100.19%
              );
              & > div img:nth-of-type(2) {
                visibility: hidden;
              }
            }
          }
          .menu-item-1:hover {
            & > div img:nth-of-type(2) {
              visibility: visible;
            }
          }
          .menu-item-1:visited,
          :active {
            & > div img:nth-of-type(3) {
              visibility: visible;
            }
          }

          // Location Button related
          .map-location-button,
          .main-location-button {
            background: linear-gradient(
              177.67deg,
              rgba(54, 54, 54, 0.84) 0.22%,
              rgba(0, 0, 0, 0.8) 100.67%
            );
            p {
              margin-left: 3rem !important;
            }
          }
          .map-location-button:hover,
          .main-location-button:hover {
            cursor: pointer;
            background: linear-gradient(
              284.41deg,
              #e7e7e7 3.86%,
              #f2f2f2 89.28%
            );

            p {
              color: #363636;
            }
            .location-icon img:nth-of-type(1) {
              visibility: hidden !important;
            }
            .location-icon img:nth-of-type(2) {
              visibility: visible;
            }
          }

          a,
          .chakra-link {
            border-bottom: none !important;
            &:focus-visible {
              box-shadow: none !important;
            }
          }

          // Loading Screen Related

          .loading {
            background: linear-gradient(
              96.8deg,
              #f07d00 2.51%,
              #ca6316 78.96%
            ) !important;

            & > div:nth-of-type(1) {
              /* background:             linear-gradient(90deg, rgb(2, 2, 43) 15%, rgb(11, 163, 152) 43%, rgb(153, 204, 51) 50%, rgb(215, 219, 10) 85%) fixed */
              background: (255, 255, 255, 0.3);
            }
            & > div:nth-of-type(1) div {
              background: #ffffff !important;
            }
            & > div:nth-of-type(2) {
              font-size: 6rem;
              font-weight: 900 !important;
              font-family: 'Roboto', sans-serif !important;
              margin-top: 0 !important;
              position: relative;
              bottom: 10rem;
            }
          }
          .loading div:nth-of-type(3) {
            display: none !important;
          }

          // Snapshot related
          .snapshot-layout {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            padding: 2.6rem;
            background-clip: content-box;
            box-shadow: inset 0 0 0 2.6rem #363636;
            opacity: 0.8;
          }

          .rh5v-Overlay_inner {
            background: transparent;
          }
          .product-video {
            width: 100%;
            height: 100%;
          }
          .product-video div {
            width: 100%;
            height: 100%;
          }
          .rh5v-DefaultPlayer_video {
            height: 100% !important;
          }
          .rh5v-DefaultPlayer_controls {
            display: none !important;
          }
          .rh5v-Overlay_component {
            display: none !important;
          }

          // Language selector related
          .lang-option {
            & > h4:hover {
              opacity: 1;
            }
          }

          // Toastify related
          .Toastify__toast-container--bottom-left {
            bottom: 1.5rem;
            left: 2.5rem;
          }

          // hide xr button on tablet

          .webxr-buttons {
            visibility: hidden;
          }
          // background animation
          @keyframes rotating-clock {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes rotating-anticlock {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
          .rotating-purple {
            animation: rotating-clock 10s linear infinite;
          }
          .rotating-orange {
            animation: rotating-anticlock 8s linear infinite;
          }
          .rotating-blue {
            animation: rotating-anticlock 8s linear infinite;
          }

          // Close Icon related
          .close-icon:hover{
            background: linear-gradient(284.41deg, #E7E7E7 3.86%, #F2F2F2 89.28%);

            &>svg{
              &>path{
                fill: #363636
              }
            }
          }
        `}
      />
      {children}
    </>
  );
}
