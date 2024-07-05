import { FC } from 'react';
import { PostHeadProps } from './post-head.types.ts';
import { Box, Typography } from '@mui/material';
import { color } from '@/shared/utils';
import styled from '@emotion/styled';
import { getPostDate } from '@/features/post-card/utils/date.ts';

const Circle = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 3px;
  background: ${({ theme }) => color(400)(theme)};
`;

export const PostHead: FC<PostHeadProps> = ({ category, created_at }) => {
  return (
    <Box display='flex' alignItems='center' gap='6px' mb='12px'>
      {category && (
        <>
          <Typography variant='body2' color={color(400)}>
            {category}
          </Typography>
          <Circle />
        </>
      )}
      <Typography variant='body2' color={color(400)}>
        {getPostDate(created_at)}
      </Typography>
    </Box>
  );
};
