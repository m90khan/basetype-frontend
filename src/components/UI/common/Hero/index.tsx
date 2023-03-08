import { Box, Circle, Image, Text, Button, Stack, Flex } from '@chakra-ui/react';
import ButtonBox from '../ButtonBox';

export const Hero = () => (
  <Flex
    background={
      ' linear-gradient(105.86deg, #E9D2C1 2.15%, #F2BABC 97.41%, #F1AAAC 100.41%)'
    }
    overflow={'hidden'}
    pos={'relative'}
    h={'90vh'}
    justifyContent={'center'}
    alignItems={'center'}
  >
    <Box pos={'absolute'} top={'-20%'} left={'10%'} filter={'blur(2px)'}>
      <Circle size='495px' background='#D4E2E2' />
    </Box>
    <Box pos={'absolute'} bottom={'-45%'} left={'-15%'}>
      <Circle size='827px' background='#E2D6D6' />
    </Box>
    <Box pos={'absolute'} bottom={'5%'} right={'5%'}>
      <Circle size='75px' background='rgba(255, 255, 255, 0.29)' />
    </Box>
    <Flex
      w={'90%'}
      m={'0 auto'}
      justifyContent={'space-around'}
      alignItems={'center'}
      flexWrap={'wrap'}
      zIndex={'100'}
    >
      <Stack w={{ base: '90%', xl: '45%' }} spacing={'2rem'}>
        <Text
          fontFamily='Junge'
          lineHeight='1.14'
          fontWeight='regular'
          fontSize='90px'
          textTransform='capitalize'
          color='#2B4248'
        >
          We are here to build your dreams.
        </Text>
        <Box>
          <ButtonBox icon={'green'} text={'View More'} variant={'secondary'} />
        </Box>
      </Stack>
      <Box
        background={'linear-gradient(180deg, #F5D4D6 0%, #D5F5F2 100%)'}
        clipPath={'circle(50% at 50% 50%)      '}
      >
        <Image src={'/images/home/hero/hero.png'} />
      </Box>
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
