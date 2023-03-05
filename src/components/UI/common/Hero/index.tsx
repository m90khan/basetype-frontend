import { Box, Circle, Image, Text, Button, Stack } from '@chakra-ui/react';

export const Hero = () => (
  <Box>
    <Box>
      <Box>
        <Box
          width='1760px'
          height='851px'
          maxWidth='100%'
          background='linear-gradient(134deg, #e9d2c1 0%, #f2babc 100%, #f1aaac 100%)'
        />
        <Box
          width='1760px'
          height='851px'
          maxWidth='100%'
          background='linear-gradient(134deg, #e9d2c1 0%, #f2babc 100%, #f1aaac 100%)'
        />
        <Box>
          <Circle size='495px' background='#D4E2E2' />
        </Box>
        <Circle size='79px' background='rgba(255, 255, 255, 0.29)' />
        <Circle size='827px' background='#E2D6D6' />
      </Box>
      <Circle
        size='675px'
        background='linear-gradient(180deg, #f5d4d6 0%, #d5f5f2 100%)'
      />
      <Circle
        size='675px'
        background='#FFFFFF'
        boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      />
      <Image></Image>
    </Box>
    <Text>
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
      <Button background='#FFFFFF'>
        <Stack direction='row' justify='center' align='center' spacing='11px'>
          <Text
            fontFamily='Josefin Sans'
            lineHeight='1.3'
            fontWeight='semibold'
            fontSize='18px'
            textTransform='uppercase'
            color='#2B4248'
          >
            View More
          </Text>
        </Stack>
      </Button>
    </Text>
    <Stack
      direction='row'
      justify='flex-start'
      align='center'
      spacing='26px'
      width='167px'
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
  </Box>
);
