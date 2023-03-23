import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useGlobalState } from 'globalState';
import ButtonBox from '@components/UI/common/ButtonBox';
import { Hero } from '@components/UI/common/Hero';
import PageHero from '@modules/PageHero';

const homePage = {
  id: '641bff2b520b30ac691c165e',
  title: 'Home',
  heroType: 'mediaSlider',
  link: {
    type: 'page',
  },
  mediaSlider: [
    {
      heroContent: [
        {
          children: [
            {
              text: 'We Are Modern Architect Studio.',
            },
          ],
          type: 'h1',
        },
      ],
      heroMedia: {
        id: '641bfa11ae6d501b519c0df6',
        alt: 'Modern Architect Studio',
        filename: 'hero-building-image-1.png',
        mimeType: 'image/png',
        filesize: 141588,
        width: 314,
        height: 514,
        sizes: {
          card: {
            width: 640,
            height: 480,
            mimeType: 'image/png',
            filesize: 640041,
            filename: 'hero-building-image-1-640x480.png',
            url: 'http://localhost:3000/media/hero-building-image-1-640x480.png',
          },
          portrait: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },
          square: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },
          feature: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },
        },
        createdAt: '2023-03-23T07:04:49.926Z',
        updatedAt: '2023-03-23T07:04:49.926Z',
        url: 'http://localhost:3000/media/hero-building-image-1.png',
      },
      link: {
        type: 'custom',
        label: 'View More',
        url: '/projects',
      },
      id: '641bfefa21f271f2202184e9',
    },
    {
      heroContent: [
        {
          children: [
            {
              text: 'The Best Design To Build Dreams.',
            },
          ],
          type: 'h1',
        },
      ],
      heroMedia: {
        id: '641bfbec721eeca44c80740a',
        alt: 'Hero building 2',
        filename: 'hero-building-image-2.png',
        mimeType: 'image/png',
        filesize: 104706,
        width: 319,
        height: 538,
        sizes: {
          card: {
            width: 640,
            height: 480,
            mimeType: 'image/png',
            filesize: 538989,
            filename: 'hero-building-image-2-640x480.png',
            url: 'http://localhost:3000/media/hero-building-image-2-640x480.png',
          },
          portrait: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },
          square: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },
          feature: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },
        },
        createdAt: '2023-03-23T07:12:44.259Z',
        updatedAt: '2023-03-23T07:12:44.259Z',
        url: 'http://localhost:3000/media/hero-building-image-2.png',
      },
      link: {
        type: 'custom',
        label: 'Explore More',
        url: '/projects',
      },
      id: '641c07dd971bd47c36943546',
    },
    {
      heroContent: [
        {
          children: [
            {
              text: "We're Modern & Creative Experts.",
            },
          ],
          type: 'h1',
        },
      ],
      heroMedia: {
        id: '641bfc23721eeca44c807411',
        alt: 'hero building 3',
        filename: 'hero-building-image-3.png',
        mimeType: 'image/png',
        filesize: 191032,
        width: 521,
        height: 526,
        sizes: {
          card: {
            width: 640,
            height: 480,
            mimeType: 'image/png',
            filesize: 482341,
            filename: 'hero-building-image-3-640x480.png',
            url: 'http://localhost:3000/media/hero-building-image-3-640x480.png',
          },
          portrait: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },
          square: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },
          feature: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null,
          },
        },
        createdAt: '2023-03-23T07:13:39.143Z',
        updatedAt: '2023-03-23T07:13:39.143Z',
        url: 'http://localhost:3000/media/hero-building-image-3.png',
      },
      link: {
        type: 'custom',
        label: 'View More',
        url: '/projects',
      },
      id: '641c0807971bd47c36943547',
    },
  ],
  layout: [
    {
      media: {
        id: '641bfc85721eeca44c807418',
        alt: 'media',
        filename: 'Image.jpg',
        mimeType: 'image/jpeg',
        filesize: 96483,
        width: 1749,
        height: 658,
        sizes: {
          card: {
            width: 640,
            height: 480,
            mimeType: 'image/jpeg',
            filesize: 34535,
            filename: 'Image-640x480.jpg',
            url: 'http://localhost:3000/media/Image-640x480.jpg',
          },
          portrait: {
            width: 768,
            height: 1024,
            mimeType: 'image/jpeg',
            filesize: 53068,
            filename: 'Image-768x1024.jpg',
            url: 'http://localhost:3000/media/Image-768x1024.jpg',
          },
          square: {
            width: 1200,
            height: 1200,
            mimeType: 'image/jpeg',
            filesize: 84326,
            filename: 'Image-1200x1200.jpg',
            url: 'http://localhost:3000/media/Image-1200x1200.jpg',
          },
          feature: {
            width: 1024,
            height: 576,
            mimeType: 'image/jpeg',
            filesize: 60668,
            filename: 'Image-1024x576.jpg',
            url: 'http://localhost:3000/media/Image-1024x576.jpg',
          },
        },
        createdAt: '2023-03-23T07:15:17.402Z',
        updatedAt: '2023-03-23T07:15:17.402Z',
        url: 'http://localhost:3000/media/Image.jpg',
      },
      type: 'fullscreen',
      id: '641bff0d21f271f2202184ea',
      blockType: 'single-media',
    },
  ],
  createdAt: '2023-03-23T07:26:35.897Z',
  updatedAt: '2023-03-23T08:04:59.124Z',
};

function Page({ page }: any) {
  const { scene } = useGlobalState();

  return (
    <Box w={'95%'} m={'0 auto'} overflow={'hidden'}>
      <PageHero variant={page.heroType} page={page} />
    </Box>
  );
}
export default Page;

export async function getServerSideProps(ctx: any) {
  const slug = ctx.params?.slug ? ctx.params?.slug[0] : 'home';
  let page = {};
  if (slug === 'home') {
    page = homePage;
  }
  return {
    props: { page: page }, // will be passed to the page component as props
  };
}
