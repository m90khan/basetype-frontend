import { Box, Stack, Text, Icon, Menu, Flex, Link } from '@chakra-ui/react';

export const Header = () => (
  <Box>
    <Stack
      direction='row'
      justify='center'
      align='center'
      spacing='400px'
      width='100vw'
      maxWidth='100%'
      p={'4.8rem 8rem'}
    >
      <Flex alignItems={'flex-end'} cursor={'pointer'}>
        <svg
          width='33'
          height='39'
          viewBox='0 0 33 39'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0.5 39V16.2L21.3095 1V39' stroke='#2B4248' />
          <path d='M11.3574 39V16.2L32.1669 1V39' stroke='#2B4248' />
          <path d='M21.3098 20L11.3574 26.8623V39H21.3098V20Z' fill='#2B4248' />
        </svg>

        <Text
          fontFamily='Josefin Sans'
          lineHeight='1.3'
          fontWeight='regular'
          fontSize='30px'
          letterSpacing='0.15em'
          textTransform='capitalize'
          color='#2B4248'
          ml={'1rem'}
        >
          <span> Base</span>
          <Box as='span' fontWeight='bold' textTransform='uppercase'>
            type
          </Box>
        </Text>
      </Flex>
      <Stack ml={'auto'} direction='row' justify='flex-end' align='center' spacing='50px'>
        <Text
          fontFamily='Josefin Sans'
          fontWeight='regular'
          fontSize='16px'
          letterSpacing='0.32em'
          textTransform='uppercase'
          color='#2B4248'
          cursor={'pointer'}
        >
          Home{' '}
        </Text>
        <Text
          fontFamily='Josefin Sans'
          fontWeight='regular'
          fontSize='16px'
          letterSpacing='0.32em'
          textTransform='uppercase'
          color='#2B4248'
          w={'max-content'}
          cursor={'pointer'}
        >
          About us{' '}
        </Text>
        <Text
          fontFamily='Josefin Sans'
          fontWeight='regular'
          fontSize='16px'
          letterSpacing='0.32em'
          textTransform='uppercase'
          color='#2B4248'
          cursor={'pointer'}
        >
          Projects
        </Text>
        <Text
          fontFamily='Josefin Sans'
          fontWeight='regular'
          fontSize='16px'
          letterSpacing='0.32em'
          textTransform='uppercase'
          color='#2B4248'
          cursor={'pointer'}
        >
          Blog{' '}
        </Text>
        <Text
          fontFamily='Josefin Sans'
          fontWeight='regular'
          fontSize='16px'
          letterSpacing='0.32em'
          textTransform='uppercase'
          color='#2B4248'
          cursor={'pointer'}
        >
          Contact
        </Text>
      </Stack>
      <Menu>
        <svg
          width='31'
          height='12'
          viewBox='0 0 31 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            y1='-1'
            x2='31'
            y2='-1'
            transform='matrix(-1 0 0 1 31 2.5)'
            stroke='#2B4248'
            stroke-width='2'
          />
          <line
            y1='-1'
            x2='31'
            y2='-1'
            transform='matrix(-1 0 0 1 31 11.5)'
            stroke='#2B4248'
            stroke-width='2'
          />
        </svg>
      </Menu>
    </Stack>
  </Box>
);
