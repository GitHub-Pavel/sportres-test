import { COMMENTS, supabase } from '@/shared/constants';
import { CommentResponse, SupabaseResponse } from '@/shared/types';

export const receiveComments = (postId: number) =>
  (supabase
    .from('comments')
    .select(COMMENTS)
    .eq('post', postId) as unknown) as SupabaseResponse<CommentResponse[]>;
