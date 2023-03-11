import { Box, Circle, Image, Text, Button, Stack, Flex } from '@chakra-ui/react';
import ButtonBox from '../../ButtonBox';

export const MediaUnderContent = () => (
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
    >
      <Circle size={{ base: '300px', md: '400px', xl: '495px' }} background='#D4E2E2' />
    </Box>
    <Box
      pos={'absolute'}
      bottom={{ base: '5%', xl: '-45%' }}
      left={{ base: '5%', xl: '-15%' }}
    >
      <Circle size={{ base: '75px', xl: '827px' }} background='#E2D6D6' />
    </Box>
    <Box pos={'absolute'} bottom={'5%'} right={'5%'}>
      <Circle size='75px' background='rgba(255, 255, 255, 0.29)' />
    </Box>
    <Flex
      w={'90%'}
      m={'0 auto'}
      justifyContent={'space-around'}
      alignItems={'center'}
      flexWrap={{ base: 'wrap', xl: 'nowrap' }}
      zIndex={'100'}
    >
      <Stack w={{ base: '90%', xl: '45%' }} spacing={'2rem'}>
        <Text
          fontFamily='Junge'
          lineHeight='1.14'
          fontWeight='regular'
          fontSize={{
            base: '40',
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
      >
        <Image src={'/images/home/hero/hero.png'} />
      </Flex>
    </Flex>
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
