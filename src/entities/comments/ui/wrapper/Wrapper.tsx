import { FC } from 'react';
import { WrapperProps } from './wrapper.types.tsx';
import { Box } from '@mui/material';
import { Comment } from '../comment/Comment.tsx';
import styled from '@emotion/styled';
import { color } from '@/shared/utils';

const Wrap = styled(Box)`
  border-top: 1px solid ${({ theme }) => color(200)(theme)};

  &:last-child {
    padding-bottom: 0;
  }
`;

export const Wrapper: FC<WrapperProps> = ({ comment, comments }) => {
  const innerComments = comments.filter(c => c.parent === comment.id);
  return (
    <Wrap display='grid' gap={3} py={3}>
      <Comment comment={comment} />
      {!!innerComments.length && (
        <Box display='grid' gap={3} pl={6}>
          {innerComments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Box>
      )}
    </Wrap>
  );
};
