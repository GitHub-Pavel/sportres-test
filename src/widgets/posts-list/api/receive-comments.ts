import { supabase, COMMENTS } from '@/shared/constants';
import { CommentResponse, SupabaseResponse } from '@/shared/types';

export const receiveComments = (postId: number) => {
  const data = supabase
    .from('comments')
    .select(COMMENTS)
    .eq('post', postId);
  return (data as unknown) as SupabaseResponse<CommentResponse[]>;
};
