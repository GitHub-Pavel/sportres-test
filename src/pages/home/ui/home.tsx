import { FC } from 'react';
import { PostsList } from '@/widgets/posts-list';
import { Box, Container, Grid } from '@mui/material';
import { useAtomValue } from 'jotai';
import { homeFilterPostsTypeAtom } from '@/shared/store';
import { PostTypeFilter } from '@/widgets/post-type-filter';

export const Home: FC = () => {
  const postType = useAtomValue(homeFilterPostsTypeAtom);
  return (
    <Box component='section'>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={8}>
            <PostsList postType={postType} />
          </Grid>
          <Grid item md={4}>
            <PostTypeFilter atom={homeFilterPostsTypeAtom} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
