import { FC } from 'react';
import { ContentProps } from './content.types.ts';
import { Box } from '@mui/material';
import { Gallery } from '@/entities/gallery';
import { Player } from '@/entities/player';

export const Content: FC<ContentProps> = ({ content }) => {
  return (
    <Box mb='16px' mt='4px'>
      <Gallery gallery={content.gallery} />
      <Player media={content.video} />
    </Box>
  );
};
