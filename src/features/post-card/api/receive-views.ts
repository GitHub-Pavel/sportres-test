import { supabase } from '@/shared/constants';

const countComments = (postId: number) =>
  supabase
    .from('comments')
    .select('id', { head: true, count: 'exact' })
    .eq('post', postId)
    .then(res => res.count);

export const postViews = (postId: number) =>
  supabase
    .from('posts')
    .select('views')
    .eq('id', postId)
    .single()
    .then(res => res.data?.views);

export const receiveViews = (postId: number) =>
  (Promise.allSettled([
    postViews(postId),
    countComments(postId),
  ]) as unknown) as Promise<{ value: number }[]>;
