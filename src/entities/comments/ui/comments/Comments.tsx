import { FC } from 'react';
import { CommentsProps } from './comments.types.ts';
import { Wrapper } from '@/entities/comments/ui/wrapper/Wrapper.tsx';

export const Comments: FC<CommentsProps> = ({ comments }) => {
  return comments
    .filter(comment => !comment.parent)
    .map(comment => (
      <Wrapper
        key={comment.id}
        comment={comment}
        comments={comments.filter(comment => comment.parent !== 0)}
      />
    ));
};
