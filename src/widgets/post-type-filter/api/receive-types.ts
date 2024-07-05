import { supabase } from '@/shared/constants';
import { SupabaseResponse } from '@/shared/types';
import { TypesResponse } from '../types/post-types.types.ts';

export const receiveTypes = () =>
  (supabase.from('post_types').select() as unknown) as SupabaseResponse<
    TypesResponse[]
  >;
