import { Box, Stack, Text, Icon, Flex, Link } from '@chakra-ui/react';
import { Fragment, useState } from 'react';
import Menu from './Menu';
export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  function handleMenu() {
    setOpenMenu((v) => !v);
  }
  return (
    <Fragment>
      <Stack
        direction='row'
        justify='space-between'
        align='center'
        width='100vw'
        maxWidth='100%'
        p={{ base: '0 2rem', md: '0rem 8rem' }}
        h={'10vh'}
        zIndex={1000}
        pos={'relative'}
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

        <Box cursor={'pointer'} onClick={handleMenu}>
          {openMenu ? (
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line
                y1='-1'
                x2='31'
                y2='-1'
                transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 3 24.9199)'
                stroke='#2B4248'
                strokeWidth='2'
              />
              <line
                y1='-1'
                x2='31'
                y2='-1'
                transform='matrix(0.707107 0.707107 0.707107 -0.707107 4.53979 3.0498)'
                stroke='#2B4248'
                strokeWidth='2'
              />
            </svg>
          ) : (
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line
                y1='-1'
                x2='25'
                y2='-1'
                transform='matrix(-1 0 0 1 28 12)'
                stroke='#2B4248'
                strokeWidth='2'
              />
              <line
                y1='-1'
                x2='25'
                y2='-1'
                transform='matrix(-1 0 0 1 28 19.2578)'
                stroke='#2B4248'
                strokeWidth='2'
              />
            </svg>
          )}
        </Box>
      </Stack>
      <Menu openMenu={openMenu} />
    </Fragment>
  );
};
