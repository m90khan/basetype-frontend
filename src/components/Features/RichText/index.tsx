import { Box } from '@chakra-ui/react';
import React from 'react';
import serialize from './serialize';

const RichText: React.FC<{ className?: string; content: any; styles: any }> = ({
  className,
  content,
  styles,
}) => {
  if (!content) {
    return null;
  }

  return (
    <Box {...styles} className={`${className} richText`}>
      {serialize(content)}
    </Box>
  );
};

export default RichText;
