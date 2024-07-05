import { Video } from '@/shared/types/content.types.ts';

export type PostContent = {
  gallery?: Array<{
    url: string;
    alt: string;
  }>;
  video?: Video;
};

export type CommentResponse = {
  id: number;
  create_at: string;
  comment: string;
  parent?: number;
  users: {
    avatar: string;
    first_name: string;
    last_name: string;
    is_vip: boolean;
  };
};

export type PostResponse = {
  id: number;
  title: string;
  subtitle?: string;
  created_at: string;
  category?: string;
  content: PostContent;
  comments: CommentResponse[];
};
