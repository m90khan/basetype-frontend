import React from 'react';
import { Box } from '@chakra-ui/react';

const ProgressBar = (props: any) => {
  return (
    <Box
      background={'rgb(255, 255, 255, .15)'}
      w={'100vw'}
      pos={'absolute'}
      top={'0'}
      left={0}
      h={'1rem'}
      className={'onboard-progress-container'}
      transition={'all 1s'}
    >
      <Box
        bgGradient={'linear-gradient(96.8deg, #447c92 2.51%, #274C5B 78.96%)'}
        position={'absolute'}
        width={'100%'}
        top={'0'}
        bottom={0}
        left={'-100%'}
        fontWeight={700}
        className={'onboard-progress-content'}
        fontSize={'20px'}
        zIndex={2}
        lineHeight={'150%'}
        display={'flex'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        p={'0 2rem'}
        transition={'all 1s'}
        style={{
          transform: `translateX(${props.scrollProgress}%)`,
          color: 'white',
          textAlign: 'right',
        }}
      >
        {/* {`${Math.floor(props.scrollProgress)}`}% */}
      </Box>
    </Box>
  );
};

export default ProgressBar;
