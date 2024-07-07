import { FC } from 'react';
import { PostTypeProps } from './post-type.types.ts';
import styled from '@emotion/styled';
import { color } from '@/shared/utils';
import { useAtom } from 'jotai';
import * as icons from '@/shared/icons';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

type ButtonProps = {
  isActive: boolean;
};

const Button = styled.button<ButtonProps>`
  border-radius: 10px;
  padding: 10px;
  display: flex;
  border: none;
  align-items: center;
  gap: 12px;
  background: ${({ theme, isActive }) =>
    isActive ? color(200)(theme) : 'transparent'};
  color: ${({ theme, isActive }) =>
    isActive ? color(700)(theme) : color(400)(theme)};
  transition: 0.2s ease-in-out;

  * {
    color: currentColor;
  }

  svg * {
    stroke: currentColor;
  }

  &:hover:not([disabled]) {
    cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
    background: ${({ theme }) => color(200)(theme)};
  }
`;

export const PostType: FC<PostTypeProps> = ({ postType, atom }) => {
  const [postsType, setPostsType] = useAtom(atom);
  const { i18n, t } = useTranslation();
  const isActive = postsType === (postType?.id || 0);
  const Icon = icons[(postType?.icon || 'Grid') as keyof typeof icons];
  const text = postType ? postType.lang_title[i18n.language] : t('all_types');

  const postTypeClickHandle = () => {
    if (isActive) return;
    setPostsType(postType?.id || 0);
  };

  return (
    <Button onClick={postTypeClickHandle} isActive={isActive}>
      <Icon />
      <Typography>{text}</Typography>
    </Button>
  );
};
