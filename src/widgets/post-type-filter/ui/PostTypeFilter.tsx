import { FC } from 'react';
import styled from '@emotion/styled';
import { Box, Skeleton, Typography } from '@mui/material';
import { color } from '@/shared/utils';
import { useQuery } from 'react-query';
import { receiveTypes } from '@/widgets/post-type-filter/api/receive-types.ts';
import { PostType } from '@/widgets/post-type-filter/ui/post-type/PostType.tsx';
import { PrimitiveAtom } from 'jotai';

const Wrap = styled.div`
  padding: 24px 20px;
  border-radius: 20px;
  background: ${({ theme }) => color(50)(theme)};
`;

type PostTypeFilterProps = {
  atom: PrimitiveAtom<number>;
};

export const PostTypeFilter: FC<PostTypeFilterProps> = ({ atom }) => {
  const { data, isLoading } = useQuery(['post types'], () => receiveTypes());
  return (
    <Wrap>
      <Typography variant='h2' mb={5} color={color(700)}>
        Фильтр ленты
      </Typography>
      <Box display='grid' gap={2}>
        {isLoading ? (
          <Skeleton variant='rounded' width='100%' height={40} />
        ) : (
          <>
            <PostType postType={null} atom={atom} />
            {data?.data?.map(postType => (
              <PostType postType={postType} key={postType.id} atom={atom} />
            ))}
          </>
        )}
      </Box>
    </Wrap>
  );
};
