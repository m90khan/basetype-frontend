import React from 'react';
import { Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
interface Props {
  icon?: string;
  text: string;
  variant: string;
}
const ButtonBox = ({ icon, text, variant = 'primary' }: Props) => {
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
  const isSelectiveHover = variant === 'secondaryOutline' || variant === 'primaryOutline';
  return (
    <Button
      variant={variant}
      rightIcon={icon && icons[icon]}
      fontSize={{ base: '22', '4xl': 'clamp(3rem, 1vw, 6rem)' }}
      padding={
        isSelectiveHover
          ? { base: '23px 28px 24px', '4xl': '3.8rem 4.3rem 3.9rem' }
          : { base: '25px 30px 25px', '4xl': '4rem 4.5rem 4rem' }
      }
      _hover={{
        padding: isSelectiveHover
          ? { base: '25px 30px 25px', '4xl': '4rem 4.5rem 4rem' }
          : { base: '25px 30px 25px', '4xl': '4rem 4.5rem 4rem' },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonBox;
