import React from 'react';
import { Box, Circle, Image, Text, Button, Stack, Flex } from '@chakra-ui/react';
import { MediaBelowContent } from './MediaBelowContent';
import { MediaUnderContent } from './MediaUnderContent';
import { MinimalHero } from './MinimalHero';
import { TypeHero } from './TypeHero';

const components = {
  minimal: MinimalHero,
  type: TypeHero,
  'media-under-content': MediaUnderContent,
  'media-below-content': MediaBelowContent,
};

export const Hero = ({ variant, content }: any) => {
  const Block: React.FC<any> = components[variant];
  return <Block {...content} />;
};
