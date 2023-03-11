import { Box, Circle, Image, Text, Button, Stack, Flex } from '@chakra-ui/react';

export const TypeHero = () => (
  <Flex
    height={{ base: '30vh', md: '40vh' }}
    maxWidth='100%'
    pos={'relative'}
    justifyContent={'center'}
    alignItems={'center'}
  >
    <Text
      fontFamily='Junge'
      lineHeight='1.3'
      fontWeight='regular'
      fontSize={{
        base: '12rem',
        md: '25rem',
        xl: '410px',
        '2xl': '410px',
        '4xl': 'clamp(410px, 30rem + 1.7857vw, 60rem)',
      }}
      letterSpacing='0.15em'
      textTransform='uppercase'
      color='#2B4248'
      zIndex={-1}
    >
      type
    </Text>
    <Box
      pos={'absolute'}
      left={'50%'}
      zIndex={'100'}
      top={'50%'}
      transform={'translate(-50%, -50%)'}
    >
      <Text
        fontFamily='Junge'
        lineHeight='1.3'
        fontWeight='regular'
        fontSize={{ base: '2rem', md: '48px' }}
        letterSpacing='0.15em'
        textTransform='uppercase'
        color='#2B4248'
        bg={'#fff'}
        p={{ base: '1rem', md: '1.2rem 5rem', xl: '1.8rem 15rem' }}
        borderTop={'2px solid #2B4248'}
        borderBottom={'2px solid #2B4248'}
      >
        Project
      </Text>
    </Box>
  </Flex>
);
