import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { useGlobalState } from 'globalState';
import ButtonBox from '@components/UI/common/ButtonBox';
import { Hero } from '@components/UI/common/Hero';

export default function Home() {
  const { scene } = useGlobalState();

  return <Hero />;
}
