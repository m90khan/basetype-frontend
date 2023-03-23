import React, { useState, useCallback, useEffect, Fragment } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';

import { useGlobalState } from 'globalState';
import ButtonBox from '@components/UI/common/ButtonBox';
import ProgressBar from '@components/UI/common/ProgressBar';
import { useMediaQuery } from '@chakra-ui/react';

interface IconProps {
  type: 'light' | 'dark';
  media: any;
  title: string;
  text: string;
}
interface SlideProps {
  title: string;
  text: string;
  infoText?: string;
  media?: any;
  icons?: IconProps[];
}
interface OptionProps {
  align: 'start' | 'center';
}
interface SliderProps {
  slides: any[];
  options: OptionProps | any;
  content: any;
}

const OnboardingSlider = (props: any): JSX.Element => {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi, setScrollProgress]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());

    onScroll();
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onScroll, onSelect]);
  console.log('slides', slides);
  return (
    <Flex
      h={'100%'}
      justifyContent={'center'}
      alignItems={{ base: 'center', xl: 'center' }}
      className={'onboard-slider animate-out'}
    >
      <Box overflow={'hidden'} h={'100%'} pos={'relative'}>
        <Box overflow={'hidden'} h={'100%'} ref={emblaRef} pos={'relative'}>
          <Flex h={'100%'}>
            {[...slides].map((content: any, index: number) => (
              <Flex
                flex={`0 0 100%`}
                w={'90%'}
                key={index}
                m={'0 auto'}
                justifyContent={{ base: 'center', xl: 'space-around' }}
                alignItems={'center'}
                flexWrap={{ base: 'wrap', xl: 'nowrap' }}
                zIndex={'100'}
              >
                <Stack
                  w={{ base: '90%', xl: '45%' }}
                  spacing={'2rem'}
                  justifyContent={'flex-start'}
                  alignItems={{ base: 'center', md: 'flex-start' }}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  <Text
                    fontFamily='Junge'
                    lineHeight='1.14'
                    fontWeight='regular'
                    maxW={{ base: '60%', xl: '100%' }}
                    fontSize={{
                      base: '30',
                      md: '50',
                      xl: '60',
                      '2xl': '90px',
                      '4xl': 'clamp(9rem, 6rem + 1.7857vw, 16rem)',
                    }}
                    textTransform='capitalize'
                    color='#2B4248'
                  >
                    We are here to build your dreams.
                  </Text>
                  <Box>
                    <ButtonBox icon={'green'} text={'View More'} variant={'secondary'} />
                  </Box>
                </Stack>
                <Flex
                  background={'linear-gradient(180deg, #F5D4D6 0%, #D5F5F2 100%)'}
                  clipPath={'circle(50% at 50% 50%)      '}
                  bottom={{ base: '4rem', md: 0 }}
                  pos={'relative'}
                  h={{ base: '25rem', md: '55rem', xl: '50rem' }}
                >
                  <Image src={'/images/home/hero/hero.png'} />
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Box>
        {!isSmallerThan600 && (
          <HStack
            pos={'absolute'}
            bottom={'4%'}
            spacing={'2rem'}
            right={'2rem'}
            transition={'all 1s'}
          >
            {selectedIndex != 0 && (
              <svg
                onClick={scrollPrev}
                width='79'
                height='55'
                viewBox='0 0 79 55'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='79'
                  height='55'
                  transform='matrix(-1 0 0 1 79 0)'
                  fill='white'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M34.8798 23.665L28.8777 30.334H50.123V28.334H33.3684L37.623 23.665H34.8798Z'
                  fill='#2B4248'
                />
              </svg>
            )}
            {selectedIndex !== slides.length - 1 && (
              <svg
                width='79'
                onClick={scrollNext}
                height='55'
                viewBox='0 0 79 55'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='79' height='55' fill='white' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M44.1202 23.665L50.1223 30.334H28.877V28.334H45.6316L41.377 23.665H44.1202Z'
                  fill='#2B4248'
                />
              </svg>
            )}
          </HStack>
        )}
      </Box>
      <ProgressBar scrollProgress={scrollProgress} />
    </Flex>
  );
};

export default OnboardingSlider;
