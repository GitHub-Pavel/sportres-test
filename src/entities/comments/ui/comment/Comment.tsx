import { FC } from 'react';
import { CommentProps } from './comment.types.ts';
import { Avatar, Box, Typography } from '@mui/material';
import { color, getFromTheCloud } from '@/shared/utils';
import { CheckBadge } from '@/shared/icons';

export const Comment: FC<CommentProps> = ({ comment }) => {
  const {
    comment: text,
    users: { last_name, first_name, avatar, is_vip },
  } = comment;

  return (
    <Box display='grid' gridTemplateColumns='40px 1fr' gap='12px'>
      <div>
        <Avatar
          src={getFromTheCloud(avatar)}
          alt={`${first_name} ${last_name}`}
        />
      </div>
      <Box display='grid' gap={1}>
        <Box display='flex' alignItems='center' gap={1}>
          <Typography color={color(500)}>
            {`${first_name} ${last_name}`}
          </Typography>
          {is_vip && <CheckBadge />}
        </Box>
        <Typography color={color(700)}>{text}</Typography>
      </Box>
    </Box>
  );
};
