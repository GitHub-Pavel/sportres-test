import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { PostViews } from '@/entities/post-views';
import { Content } from '../content/Content.tsx';
import { PostCardProps } from './post-card.types.ts';
import { Box, Button, Skeleton, Typography } from '@mui/material';
import { color } from '@/shared/utils';
import { PostHead } from '../post-head/PostHead.tsx';
import { Comments } from '@/entities/comments';
import { useMutation, useQuery } from 'react-query';
import { receiveViews } from '../../api/receive-views.ts';
import { receiveComments } from '../../api/receive-comments.ts';
import { useTranslation } from 'react-i18next';

const Card = styled.div`
  padding: 28px 20px;
  border-radius: 20px;
  background: ${({ theme }) => color(50)(theme)};
`;

export const PostCard: FC<PostCardProps> = ({ post }) => {
  const { t } = useTranslation();
  const { id, content, title, subtitle, category, created_at, comments } = post;
  const [allComments, setAllComments] = useState(comments);
  const { data, isLoading } = useQuery([`post-${id} views`], () =>
    receiveViews(id),
  );
  const {
    mutate,
    isLoading: isCommentsLoading,
    isSuccess: isCommentsSuccess,
  } = useMutation(
    [`get all comments to ${id} post`],
    (id: number) => receiveComments(id),
    {
      onSuccess: ({ data }) => setAllComments(data || []),
    },
  );
  const hasMoreComments =
    comments.length < (data ? data[1].value : 0) && !isCommentsSuccess;

  return (
    <Card>
      <PostHead created_at={created_at} category={category} />
      <Typography variant='h2' color={color(700)} mb={4}>
        {title}
      </Typography>
      {subtitle && <Typography pb='8px'>{subtitle}</Typography>}
      <Content content={content} />
      <PostViews
        isLoading={isLoading}
        views={data && data[0].value}
        comments={data && data[1].value}
      />
      <Box mt={3}>
        <Comments comments={allComments} />
      </Box>
      {hasMoreComments && (
        <Box mt={5}>
          {isCommentsLoading ? (
            <Skeleton variant='rounded' width='100%' height={40} />
          ) : (
            <Button variant='contained' onClick={() => mutate(id)}>
              {t('more_comments')}
            </Button>
          )}
        </Box>
      )}
    </Card>
  );
};
