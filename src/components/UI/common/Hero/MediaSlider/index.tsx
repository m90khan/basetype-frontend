import { Box, Circle, Image, Text, Button, Stack, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ButtonBox from '../../ButtonBox';
import OnboardingSlider from './OnboardingSlider';
import { parallaxItem } from './utils';

const dslide = {
  title: "We're Modern & Creative Experts.",
  label: 'View more',
  pageLink: 'https://youtube.com',
  image: '',
};

export const MediaSlider = (props: any) => {
  const [slides, setSlides] = useState(props.mediaSlider);
  const OPTIONS = { align: 'start', speed: 20, slidesToScroll: 1 };

  useEffect(() => {
    document.addEventListener('mousemove', parallaxItem);

    return () => document.removeEventListener('mousemove', parallaxItem);
  }, []);

  return (
    <Flex
      background={
        ' linear-gradient(105.86deg, #E9D2C1 2.15%, #F2BABC 97.41%, #F1AAAC 100.41%)'
      }
      overflow={'hidden'}
      pos={'relative'}
      h={'90vh'}
      justifyContent={'center'}
      alignItems={{ base: 'space-around', xl: 'center' }}
    >
      <Box
        pos={'absolute'}
        top={{ base: '-18%', xl: '-20%' }}
        left={{ base: '-10%', md: '-5%', xl: '10%' }}
        filter={'blur(2px)'}
        data-value={10}
        className={'parallax-item'}
      >
        <Circle size={{ base: '300px', md: '400px', xl: '495px' }} background='#D4E2E2' />
      </Box>
      <Box
        pos={'absolute'}
        bottom={{ base: '5%', xl: '-45%' }}
        left={{ base: '5%', xl: '-15%' }}
        data-value={-10}
        className={'parallax-item'}
      >
        <Circle size={{ base: '75px', xl: '827px' }} background='#E2D6D6' />
      </Box>
      <Box
        pos={'absolute'}
        bottom={'5%'}
        right={'5%'}
        className={'parallax-item'}
        data-value={6}
      >
        <Circle size='75px' background='rgba(255, 255, 255, 0.29)' />
      </Box>

      <OnboardingSlider slides={slides} options={OPTIONS} />

      <Stack
        direction='row'
        justify='flex-start'
        align='center'
        spacing='26px'
        width='167px'
        pos={'absolute'}
        bottom={'5%'}
        left={'5%'}
      >
        <Link href={'/projects'}>
          <Text
            fontFamily='Josefin Sans'
            lineHeight='1.14'
            fontWeight='regular'
            fontSize='20px'
            textTransform='capitalize'
            color='#2B4248'
          >
            Fb
          </Text>
        </Link>
        <Text
          fontFamily='Josefin Sans'
          lineHeight='1.14'
          fontWeight='medium'
          fontSize='20px'
          textTransform='capitalize'
          color='#2B4248'
        >
          In
        </Text>
        <Text
          fontFamily='Josefin Sans'
          lineHeight='1.14'
          fontWeight='regular'
          fontSize='20px'
          textTransform='capitalize'
          color='#2B4248'
        >
          Pn
        </Text>
        <Text
          fontFamily='Josefin Sans'
          lineHeight='1.14'
          fontWeight='regular'
          fontSize='20px'
          textTransform='capitalize'
          color='#2B4248'
        >
          Tw
        </Text>
      </Stack>
    </Flex>
  );
};
