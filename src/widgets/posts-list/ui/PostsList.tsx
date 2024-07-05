import { useQuery } from 'react-query';
import { receivePosts } from '../api/receive-posts.ts';
import { PostCard } from '@/features/post-card';
import { Loader } from '@/shared/ui';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { withTranslation } from 'react-i18next';
import { PostListProps } from './post-list.types.ts';

const List = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const PostsList = withTranslation()(({ t, postType }: PostListProps) => {
  const { data, isLoading, isError } = useQuery(['posts', postType], () =>
    receivePosts(postType),
  );

  return (
    <List>
      {isLoading && <Loader />}
      {isError && <Typography>{t('posts.404')}</Typography>}
      {data?.data?.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </List>
  );
});
