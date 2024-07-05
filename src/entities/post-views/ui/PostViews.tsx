import { FC } from 'react';
import { PostViewsProps } from './post-views.types.ts';
import { Grid, Skeleton, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Eye, Message } from '@/shared/icons';
import { color } from '@/shared/utils';

const Wrap = styled(Grid)`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PostViews: FC<PostViewsProps> = ({
  views,
  comments,
  isLoading,
}) => {
  if (isLoading) return <Skeleton variant='rounded' width={100} height={20} />;

  return (
    <Grid container columnSpacing={4}>
      <Wrap item>
        <Eye />
        <Typography color={color(500)}>{views}</Typography>
      </Wrap>
      <Wrap item>
        <Message />
        <Typography color={color(500)}>{comments}</Typography>
      </Wrap>
    </Grid>
  );
};
