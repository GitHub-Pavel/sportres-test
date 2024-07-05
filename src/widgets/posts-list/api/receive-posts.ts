import { COMMENTS, supabase } from '@/shared/constants';
import { PostResponse, SupabaseResponse } from '@/shared/types';

const postsQuery = `
  *,
  comments (${COMMENTS})
`;

export const receivePosts = (postType?: number, page = 1, postsCount = 4) => {
  const initIndex = (page - 1) * postsCount;
  const data = supabase
    .from('posts')
    .select(postsQuery)
    .range(initIndex, initIndex + postsCount)
    .limit(4, { referencedTable: 'comments' });

  if (postType) {
    data.eq('post_type', postType);
  }

  return (data as unknown) as SupabaseResponse<PostResponse[]>;
};
