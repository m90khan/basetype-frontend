import { Box, Circle, Image, Text, Button, Stack, Flex } from '@chakra-ui/react';

export const MediaBelowContent = () => (
  <Stack align='center' spacing='3rem' width='100%'>
    <Flex
      pos={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
      maxWidth={{ base: '90%', md: '80%', xl: '60%' }}
      paddingTop={'15rem'}
      paddingBottom={'15rem'}
    >
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
        textAlign='center'
      >
        We are an Award Winning Basetype Design Studio
      </Text>
      <Box>
        <Circle
          size={{ base: '75px', md: '147px' }}
          background='#F1EAE4'
          pos={'absolute'}
          top={{ base: '25%', md: '30%', xl: '25%' }}
          left={{ base: '10%', md: '5%', xl: '10%' }}
          zIndex={'-1'}
        />
        <Circle
          size={{ base: '150px', md: '250px', xl: '333px' }}
          background='#EEFAFA'
          pos={'absolute'}
          top={{ base: '40%', md: '30%', xl: '20%' }}
          left={{ base: '50%', md: '60%', xl: '90%' }}
          zIndex={'-1'}
        />
      </Box>
    </Flex>
    <Box h={'45vh'} w={'100%'}>
      <Image
        src={'/images/home/hero/media-under.jpg'}
        w={'100%'}
        h={'100%'}
        objectFit={'cover'}
      />
    </Box>
  </Stack>
);
