import { FC, useState } from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { color, getFromTheCloud } from '@/shared/utils';
import { GalleryProps } from './gallery.types.ts';

const Picture = styled.div`
  width: 100%;
  padding-bottom: 100%;
  border-radius: 14px;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const LoadMore = styled.button`
  color: ${({ theme }) => color(50)(theme)};
  font-weight: 500;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.65);
  }
`;

const maxView = 9;

export const Gallery: FC<GalleryProps> = ({ gallery }) => {
  const [countView, setCountView] = useState(maxView);
  const viewMoreBtn = (key: number) =>
    countView === maxView && key + 1 === maxView;
  const viewClickHandle = () => setCountView(gallery!.length - 1);

  if (!gallery) return null;

  return (
    <Grid container spacing={2}>
      {gallery.slice(0, countView).map(({ alt, url }, key) => (
        <Grid key={key} md={4} item>
          <Picture>
            <img
              alt={alt}
              width={200}
              height={200}
              src={getFromTheCloud(url)}
            />
            {viewMoreBtn(key) && (
              <LoadMore onClick={viewClickHandle}>
                +{gallery.length - 9}
              </LoadMore>
            )}
          </Picture>
        </Grid>
      ))}
    </Grid>
  );
};
