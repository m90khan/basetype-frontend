import React from 'react';
import { Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
interface Props {
  icon: string;
}
const ButtonBox = ({ icon }: Props) => {
  const icons: any = {
    white: (
      <svg
        width='22'
        height='7'
        viewBox='0 0 22 7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M15.2433 0.165527L21.2454 6.83449H0V4.83449H16.7546L12.5 0.165527H15.2433Z'
          fill='white'
        />
      </svg>
    ),
    green: (
      <svg
        width='22'
        height='7'
        viewBox='0 0 22 7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M15.2433 0.165039L21.2454 6.834H0V4.834H16.7546L12.5 0.165039H15.2433Z'
          fill='#2B4248'
        />
      </svg>
    ),
  };

  return (
    <Button variant={'primary'} rightIcon={icons[icon]}>
      Hello
    </Button>
  );
};

export default ButtonBox;
